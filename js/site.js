/* Bluegrass Capital Research - page rendering. Content lives in data.js. */
(function(){
const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const page = document.body.dataset.page;
const sectorKey = document.body.dataset.sector;
const sectorName = k => (SECTORS.find(s => s.key === k) || {}).name || k;
const fmtPT = v => v == null ? "" : "PT $" + (v < 10 ? v.toFixed(2) : Number.isInteger(v) ? v : v.toFixed(2));
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
// report PDFs live in a folder per semester, e.g. reports/fall-2025/ba-grant-clay.pdf
// (a report can set folder:"..." to live somewhere else)
const pdf = r => "reports/" + (r.folder || r.semester.toLowerCase().replace(/\s+/g, "-")) + "/" + r.file + ".pdf";
const cover = r => "assets/covers/" + r.file + ".jpg";
const byDate = (a,b) => b.date.localeCompare(a.date);

/* ---------- header ---------- */
const links = [
  ["index.html","Overview","overview"],["featured.html","Featured Reports","featured"],"sep",
  ...SECTORS.map(s => [s.page, s.name, s.key]),"sep",
  ["archive.html","Archive","archive"],["apply.html","Apply","apply","nav-apply"],
];
const active = page === "sector" ? sectorKey : page;
document.body.insertAdjacentHTML("afterbegin", `
<header class="site-header"><div class="wrap">
  <a class="brand" href="index.html" aria-label="Bluegrass Capital Research home"><img src="img/logo-white.png" alt="Bluegrass Capital Research"></a>
  <button class="menu-btn" aria-label="Menu" aria-expanded="false">MENU</button>
  <ul class="nav">${links.map(l => l === "sep" ? '<li class="sep" aria-hidden="true"></li>' :
    `<li><a href="${l[0]}" class="${l[2]===active?"active":""} ${l[3]||""}">${l[1]}</a></li>`).join("")}</ul>
</div></header>`);
const btn = $(".menu-btn"), nav = $(".nav");
btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); btn.textContent = o ? "CLOSE" : "MENU"; });

/* ---------- footer ---------- */
const year = new Date().getFullYear();
document.body.insertAdjacentHTML("beforeend", `
<footer class="site-footer"><div class="wrap">
  <div class="foot-grid">
    <div><img src="img/logo-white.png" alt="Bluegrass Capital Research">
      <p>The premier student equity research program at the University of Kentucky, part of the
      <a href="${SITE.parentOrg.url}" target="_blank" rel="noopener">${esc(SITE.parentOrg.name)}</a>.</p>
      ${SITE.contactEmail ? `<p style="margin-top:10px"><a href="mailto:${SITE.contactEmail}">${SITE.contactEmail}</a></p>` : ""}
    </div>
    <div><h5>Research</h5><ul>
      <li><a href="featured.html">Featured Reports</a></li>
      ${SECTORS.map(s => `<li><a href="${s.page}">${s.name}</a></li>`).join("")}
      <li><a href="archive.html">Archive</a></li></ul></div>
    <div><h5>Visit</h5><ul>
      <li>Gatton College of Business &amp; Economics</li>
      <li>550 South Limestone</li><li>Lexington, Kentucky 40506</li></ul></div>
  </div>
  <p class="disclaimer">&copy; ${year} Bluegrass Capital Research. All content on this website is produced by students for educational purposes only and does not constitute investment advice or a recommendation to buy or sell any security. Opinions expressed are those of the individual analysts as of the date of publication, are subject to change, and do not reflect the official views of the University of Kentucky, the Gatton College of Business &amp; Economics, or the Finance Society. No responsibility is assumed for errors, omissions, or use of the information on this site.</p>
</div></footer>`);

/* ---------- ticker tape ---------- */
function tape(el){
  const items = [...REPORTS].sort(byDate).map(r =>
    `<a href="${pdf(r)}" target="_blank" rel="noopener"><b>${r.ticker}</b><span class="r-${r.rating}">${r.rating}</span>${r.pt!=null?" &middot; "+fmtPT(r.pt):""}</a>`).join("");
  el.innerHTML = `<div class="tape-track">${items}${items}</div>`;
  // constant speed (pixels per second) however many reports there are
  const track = el.firstElementChild;
  track.style.animationDuration = (track.scrollWidth / 2 / 70) + "s";
}
document.querySelectorAll("[data-tape]").forEach(tape);

/* ---------- report card ---------- */
const card = r => `
<a class="card rv" href="${pdf(r)}" target="_blank" rel="noopener">
  <div class="cv"><img loading="lazy" src="${cover(r)}" alt="${esc(r.company)} report cover"><span class="open">Read report &rarr;</span></div>
  <div class="row"><span class="tk">${r.ticker}</span><span class="pill ${r.rating}">${r.rating}</span><span class="pt">${fmtPT(r.pt)}</span></div>
  <h3>${esc(r.title)}</h3>
  <div class="by">${esc(r.company)} &middot; ${esc(r.analyst)}</div>
  <div class="date">${fmtDate(r.date)}</div>
</a>`;

function grid(list, mount){
  mount.innerHTML = list.length ? list.map(card).join("") : `<p class="empty">No reports here yet. Check back soon.</p>`;
  reveal();
}

/* ---------- 3D report carousel (homepage and each archive semester) ---------- */
function carousel(stage, dots, prev, next, src){
  stage.innerHTML = src.map((r,i) => `
    <a class="slide" href="${pdf(r)}" target="_blank" rel="noopener" data-i="${i}">
      <div class="page"><img src="${cover(r)}" alt="${esc(r.company)} report cover"></div>
      <div class="meta"><div class="t">${esc(r.title)}</div><div class="s">$${r.ticker} &middot; ${r.rating}${r.pt!=null?" &middot; "+fmtPT(r.pt):""} &middot; ${esc(r.analyst)}</div></div>
    </a>`).join("");
  dots.innerHTML = src.map((_,i) => `<button aria-label="Report ${i+1}"></button>`).join("");
  const slides = [...stage.children], n = slides.length;
  let cur = 0, timer;
  function layout(){
    const w = window.innerWidth < 640 ? 170 : 300;
    slides.forEach((s,i) => {
      let o = i - cur; if (o > n/2) o -= n; if (o < -n/2) o += n;
      const a = Math.abs(o);
      s.style.transform = `translateX(${o*w}px) translateZ(${-a*220}px) rotateY(${o*-18}deg)`;
      s.style.opacity = a > 2 ? 0 : 1 - a*0.28;
      s.style.filter = a ? `brightness(${1-a*0.25})` : "none";
      s.style.zIndex = 10 - a;
      s.style.pointerEvents = a > 2 ? "none" : "auto";
      s.classList.toggle("is-center", a === 0);
    });
    [...dots.children].forEach((d,i) => d.classList.toggle("on", i === cur));
  }
  const go = i => { cur = (i + n) % n; layout(); restart(); };
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(cur+1), 5000); };
  slides.forEach((s,i) => s.addEventListener("click", e => { if (i !== cur){ e.preventDefault(); go(i); } }));
  [...dots.children].forEach((d,i) => d.addEventListener("click", () => go(i)));
  prev.onclick = () => go(cur-1); next.onclick = () => go(cur+1);
  let sx = null;
  stage.addEventListener("touchstart", e => sx = e.touches[0].clientX, {passive:true});
  stage.addEventListener("touchend", e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); sx = null; });
  stage.addEventListener("mouseenter", () => clearInterval(timer));
  stage.addEventListener("mouseleave", restart);
  window.addEventListener("resize", layout);
  layout(); restart();
}
/* ---------- placements wheel (homepage: two rows; apply page: one row) ---------- */
function placementsWheel(){
  const tracks = document.querySelectorAll(".wheel-track"); if (!tracks.length) return;
  const logos = PLACEMENTS.map(p => `<div class="logo-card"><img src="img/firms/${p.logo}" alt="${esc(p.firm)}"></div>`).join("");
  const fill = logos.repeat(Math.max(2, Math.ceil(12 / PLACEMENTS.length)));
  // keep a constant speed (pixels per second) no matter how many logos there are
  tracks.forEach(t => {
    t.innerHTML = fill + fill;
    const pxPerSec = t.parentElement.classList.contains("rev") ? 53 : 60;
    t.style.animationDuration = (t.scrollWidth / 2 / pxPerSec) + "s"; // cards are fixed-width, so no need to wait for images
  });
}
placementsWheel();
/* ---------- analyst class on phones: a scrolling wheel of columns, 4 names each ---------- */
function rosterWheel(list){
  const cols = [];
  for (let i = 0; i < list.length; i += 4) cols.push(`<div class="rw-col">${list.slice(i, i + 4).map(n => `<span>${esc(n)}</span>`).join("")}</div>`);
  const dur = cols.length * (150 + 28) / 30;   // constant speed: 30 pixels per second
  return `<div class="roster-wheel" aria-hidden="true"><div class="rw-track" style="animation-duration:${dur}s">${cols.join("")}${cols.join("")}</div></div>`;
}
/* ---------- homepage ---------- */
if (page === "overview"){
  // carousel
  carousel($("#stage"), $("#dots"), $("#prev"), $("#next"),
    SITE.carouselSource === "featured" ? REPORTS.filter(r => r.featured)
      : SITE.carouselTickers.map(t => REPORTS.find(r => r.ticker === t)).filter(Boolean));

  // pitch competition
  const pc = PITCH_COMPETITION;
  $("#podium").innerHTML = pc.results.map((p,i) => `
    <article class="place p${i+1} rv">
      <div class="ph"><img loading="lazy" src="${p.photo}" alt="${p.place} place team"></div>
      <div class="body">
        <span class="plabel">${esc(p.label || p.place + " Place")}</span>
        <h4>${esc(p.company || "")}</h4><span class="tk ptk">$${esc(p.ticker || "")}</span>
        ${p.team ? `<div class="team"><strong>BCR Members:</strong> ${p.team.map(esc).join(", ")}</div>` : ""}
        ${p.deck ? `<a class="deck" href="${p.deck}" target="_blank" rel="noopener"><img src="${p.cover}" alt="">View Pitch &rarr;</a>` : ""}
      </div>
    </article>`).join("");



  // team
  const initials = n => n.split(/\s+/).map(w => w[0]).join("").slice(0,2);
  // leadership (anyone who isn't a Senior Analyst) gets its own row above the senior analysts
  const card = m => `
    <div class="member rv">
      <div class="ph">${m.photo ? `<img loading="lazy" src="img/team/${m.photo}" alt="${esc(m.name)}">` : `<span class="ini">${initials(m.name)}</span>`}</div>
      <h4>${esc(m.name)}</h4><div class="role">${esc(m.role)}</div>
    </div>`;
  $("#team-lead").innerHTML = LEADERSHIP.filter(m => m.role !== "Senior Analyst").map(card).join("");
  $("#team-sa").innerHTML = LEADERSHIP.filter(m => m.role === "Senior Analyst").map(card).join("");
  $("#class-title").textContent = SITE.currentClassTitle;
  // roster is alphabetical by first name
  const cls = [...CURRENT_CLASS].sort((a, b) => a.localeCompare(b));
  $("#class").innerHTML = cls.map(n => `<li>${esc(n)}</li>`).join("");
  $("#class").classList.add("has-wheel");
  $("#class").insertAdjacentHTML("afterend", rosterWheel(cls));

}

/* ---------- apply ---------- */
if (page === "apply"){
  // sample work: the report and pitch deck listed in SITE.application.sampleReport / samplePitch
  const a = SITE.application || {};
  const rep = REPORTS.find(r => r.ticker === a.sampleReport);
  const pit = a.samplePitch;
  if (rep) $("#sample-report").innerHTML = `<a class="sample" href="${pdf(rep)}" target="_blank" rel="noopener">
      <span class="sample-cv portrait"><img src="${cover(rep)}" alt="${esc(rep.company)} report cover"></span>
      <span class="sample-t">${esc(rep.title)}</span>
      <span class="sample-s">$${rep.ticker} &middot; ${rep.rating} &middot; ${fmtPT(rep.pt)} &middot; ${esc(rep.analyst)}</span></a>`;
  if (pit) $("#sample-pitch").innerHTML = `<a class="sample" href="${pit.deck}" target="_blank" rel="noopener">
      <span class="sample-cv landscape"><img src="${pit.cover}" alt="${esc(pit.company)} pitch deck"></span>
      <span class="sample-t">Bluegrass Capital Research ${esc(pit.company)} Pitch</span></a>`;  // closed: plain text. open: a button (same style as the homepage buttons) to the application form
  $("#hero-status").innerHTML = a.formUrl
    ? `<a class="btn btn-light hero-apply" href="${a.formUrl}" target="_blank" rel="noopener">Apply now${a.deadline ? ` &middot; due ${esc(a.deadline)}` : ""} &rarr;</a>`
    : `<span class="status-pill">Applications are currently closed</span>`;
  const mail = SITE.contactEmail ? ` Questions? Email <a class="mail" href="mailto:${SITE.contactEmail}">${esc(SITE.contactEmail)}</a>.` : "";
  $("#apply-status").innerHTML = a.formUrl
    ? `<h2>Applications are open${a.classTitle ? ` for the ${esc(a.classTitle)}` : ""}</h2>
       <p>${a.deadline ? `Submit your application by ${esc(a.deadline)}.` : "Submit your application using the form below."}${mail}</p>
       <div class="btns"><a class="btn btn-light" href="${a.formUrl}" target="_blank" rel="noopener">Apply now</a></div>`
    : `<h2>Applications are not open yet</h2>
       <p>Analysts are selected once each academic year. Check back here for the next application cycle.${mail}</p>`;
}
/* ---------- featured ---------- */
if (page === "featured"){
  const list = REPORTS.filter(r => r.featured).sort((a,b) => a.ticker.localeCompare(b.ticker));
  grid(list, $("#grid"));
}

/* ---------- sector ---------- */
if (page === "sector"){
  const s = SECTORS.find(x => x.key === sectorKey);
  document.title = s.name + " | Bluegrass Capital Research";
  $("#s-name").textContent = s.name;
  $("#s-blurb").textContent = s.blurb;
  const list = REPORTS.filter(r => r.sector === sectorKey).sort(byDate);
  filterable(list, $("#grid"), $("#filters"), "semester");
}

function filterable(list, mount, bar, key){
  const hidden = key === "semester" ? (SITE.hiddenSemesterFilters || []) : [];
  const vals = [...new Set(list.map(r => r[key]))].filter(v => !hidden.includes(v));
  const label = v => key === "sector" ? sectorName(v) : v;
  if (vals.length > 1){
    bar.innerHTML = `<button class="on" data-v="">All</button>` + vals.map(v => `<button data-v="${esc(v)}">${esc(label(v))}</button>`).join("");
    bar.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      bar.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
      grid(b.dataset.v ? list.filter(r => r[key] === b.dataset.v) : list, mount);
    });
  }
  grid(list, mount);
}

/* ---------- archive ---------- */
if (page === "archive"){
  // one section per past semester: 3D carousel of featured reports, senior analysts, analyst class
  const byFirst = (a, b) => a.localeCompare(b);
  const names = list => [...list].sort(byFirst).map(n => `<li>${esc(n)}</li>`).join("");
  const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const initials = n => n.split(/\s+/).map(w => w[0]).join("").slice(0,2);
  $("#semesters").innerHTML = (typeof ARCHIVE === "undefined" ? [] : ARCHIVE).map((s, i) => {
    // leadership with a title (Chairman, Advisor) gets its own row above the other senior analysts
    // headshot cards like the Leadership section on the homepage; photo is img/team/<first-last>.jpg
    const sa = m => `<div class="member">
        <div class="ph"><img loading="lazy" src="img/team/${slug(m.name)}.jpg" alt="${esc(m.name)}" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'ini',textContent:'${initials(m.name)}'}))"></div>
        <h4>${esc(m.name)}</h4>${m.role ? `<div class="role">${esc(m.role)}</div>` : ""}</div>`;
    const leads = s.seniorAnalysts.filter(m => m.role), rest = s.seniorAnalysts.filter(m => !m.role);
    // titled leadership on top, every other senior analyst side by side in one row
    const senior = (leads.length ? `<div class="team-grid sa-grid sa-lead">${leads.map(sa).join("")}</div>` : "")
      + `<div class="team-grid sa-grid">${rest.map(sa).join("")}</div>`;
    const groups = s.classGroups.map(g => `${g.label ? `<h4 class="grp">${esc(g.label)}</h4>` : ""}<ul class="roster has-wheel">${names(g.names)}</ul>${rosterWheel([...g.names].sort(byFirst))}`).join("");
    return `<section class="sem-block">
      <div class="carousel-sec dark sem-feature"><div class="wrap">
        <h2 class="sec">${esc(s.semester)}</h2>${s.note ? `<p class="sem-note">${esc(s.note)}</p>` : ""}
        <p class="sem-kicker">Featured Reports</p>
        <div class="stage" data-sem="${i}"></div>
        <div class="ctrls"><button class="arrow prev" aria-label="Previous">&larr;</button><div class="dots"></div><button class="arrow next" aria-label="Next">&rarr;</button></div>
      </div></div>
      <div class="wrap sem-people">
        <h3 class="sem-sub">Senior Analysts</h3>${senior}
        <h3 class="sem-sub">Analyst Class</h3>${groups}
      </div></section>`;
  }).join("");
  // one 3D carousel per semester
  document.querySelectorAll(".sem-feature").forEach((band, i) => {
    const s = ARCHIVE[i];
    const feats = s.featured.map(t => REPORTS.find(r => r.ticker === t && r.semester === s.semester) || REPORTS.find(r => r.ticker === t)).filter(Boolean);
    carousel(band.querySelector(".stage"), band.querySelector(".dots"), band.querySelector(".prev"), band.querySelector(".next"), feats);
  });
  const tbody = $("#arch tbody"), q = $("#q");
  let sortKey = "date", dir = -1;
  const semOrder = s => { const [t,y] = s.split(" "); return +y*10 + (t === "Fall" ? 2 : 1); };
  function render(){
    const term = q.value.trim().toLowerCase();
    let list = REPORTS.filter(r => !term || [r.ticker,r.company,r.analyst,r.title,sectorName(r.sector),r.industry].join(" ").toLowerCase().includes(term));
    const row = r => `<tr><td><span class="tk">${r.ticker}</span></td><td><a href="${pdf(r)}" target="_blank" rel="noopener">${esc(r.title)}</a><div class="by" style="font-size:.82rem;color:var(--muted)">${esc(r.company)}</div></td>
      <td class="hide-m">${esc(r.analyst)}</td><td class="hide-m">${sectorName(r.sector)}</td><td><span class="pill ${r.rating}">${r.rating}</span></td><td class="hide-m" style="font-size:.88rem">${r.pt!=null?"$"+r.pt.toFixed(2):"—"}</td><td class="hide-m" style="white-space:nowrap">${fmtDate(r.date)}</td></tr>`;
    if (sortKey === "date" && !term){
      const sems = [...new Set(REPORTS.map(r => r.semester))].sort((a,b) => dir * (semOrder(a)-semOrder(b)));
      tbody.innerHTML = sems.map(s => `<tr class="sem"><td colspan="7">${s}</td></tr>` + list.filter(r => r.semester === s).sort((a,b) => dir * a.date.localeCompare(b.date)).map(row).join("")).join("");
    } else {
      const get = r => sortKey === "sector" ? sectorName(r.sector) : r[sortKey] ?? "";
      list.sort((a,b) => { const x = get(a), y = get(b); return dir * (typeof x === "number" ? x - y : String(x).localeCompare(String(y))); });
      tbody.innerHTML = list.length ? list.map(row).join("") : `<tr><td colspan="7" class="empty">No matching reports.</td></tr>`;
    }
  }
  document.querySelectorAll("#arch th[data-k]").forEach(th => th.addEventListener("click", () => {
    const k = th.dataset.k; dir = sortKey === k ? -dir : (k === "date" ? -1 : 1); sortKey = k; render();
  }));
  q.addEventListener("input", render);
  render();
}

/* ---------- reveal on scroll ---------- */
function reveal(){
  const els = document.querySelectorAll(".rv:not(.in)");
  if (!("IntersectionObserver" in window)) return els.forEach(e => e.classList.add("in"));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {rootMargin:"0px 0px -8% 0px"});
  els.forEach(e => io.observe(e));
}
reveal();
})();
