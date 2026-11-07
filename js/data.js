/* =====================================================================
   BLUEGRASS CAPITAL RESEARCH - SITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit for routine updates.
   See README.md for step-by-step instructions.
   ===================================================================== */

const SITE = {
  // Which reports scroll on the homepage carousel: "example" (the list below) or "featured"
  carouselSource: "example",
  // Tickers shown in the homepage carousel, in order, when carouselSource is "example"
  carouselTickers: ["VEEV", "RACE", "CCJ", "FIX", "SCHW"],

  currentClassTitle: "Fall 2026 – Spring 2027 Analyst Class",

  // Semesters that don't get their own filter button on sector pages.
  // Their reports still show under "All" and in the Archive.
  hiddenSemesterFilters: ["Spring 2025"],

  // Link back to the parent organization
  parentOrg: { name: "Finance Society at the University of Kentucky", url: "https://www.financesocietylex.com" },
  // Application page (apply.html). Leave formUrl blank while applications are closed.
  application: {
    formUrl: "",        // link to the application form, e.g. a Google Form
    deadline: "",       // e.g. "Friday, September 4, 2027"
    classTitle: "",     // e.g. "Fall 2027 – Spring 2028 Analyst Class"
    sampleReport: "BA",   // ticker of the example report shown on the apply page
    // example pitch deck shown next to "What is Bluegrass Capital Research?"
    samplePitch: { company:"Sallie Mae", ticker:"SLM", deck:"decks/slm-sallie-mae.pdf", cover:"assets/covers/deck-slm.jpg" },
  },
  contactEmail: "",                                  // e.g. "bcr@uky.edu" (leave blank to hide)
};

/* ---------------------------------------------------------------------
   SECTORS - order here is the order in the top menu.
   --------------------------------------------------------------------- */
const SECTORS = [
  { key: "consumer",    name: "Consumer",    page: "consumer.html",
    blurb: "Retailers, apparel brands, restaurants, automakers, education providers, and other consumer-facing businesses." },
  { key: "tmt",         name: "TMT",         page: "tmt.html",
    blurb: "Technology, media, and telecom: semiconductors, software, cloud infrastructure, streaming, and live entertainment." },
  { key: "financials",  name: "Financials",  page: "financials.html",
    blurb: "Banks, card networks, consumer lenders, and other financial services companies." },
  { key: "healthcare",  name: "Healthcare",  page: "healthcare.html",
    blurb: "Pharmaceuticals, medical devices, managed care, hospital operators, and healthcare technology." },
  { key: "industrials", name: "Industrials", page: "industrials.html",
    blurb: "Aerospace and defense, industrial machinery, electrical equipment, data center infrastructure, railroads, logistics, and environmental services." },
  { key: "energy",      name: "Energy",      page: "energy.html",
    blurb: "Oil and gas producers, integrated majors, coal, renewables, power generation, and the nuclear fuel cycle." },
];

/* ---------------------------------------------------------------------
   REPORTS
   To add a report: put the PDF in /reports, its cover image in
   /assets/covers (optional, see README), and copy one line below.
     sector:   consumer | tmt | financials | healthcare | industrials | energy
     rating:   BUY | HOLD | SELL
     pt:       price target as a number (or null)
     featured: true shows it on Featured Reports
     (homepage carousel reports are listed in SITE.carouselTickers)
   --------------------------------------------------------------------- */
const REPORTS = [
  // ----- Spring 2026 -----
  { ticker:"ABT",  company:"Abbott Laboratories",      title:"Continuously Monitoring Care",            analyst:"Isaiah White",       sector:"healthcare",  industry:"Medical Devices",            date:"2026-05-06", semester:"Spring 2026", rating:"BUY",  pt:119,    file:"abt-isaiah-white",        featured:true },
  { ticker:"AMD",  company:"Advanced Micro Devices",   title:"AI Tailwinds Meet a Crowded Arena",       analyst:"Danny Saville",      sector:"tmt",         industry:"Semiconductors",             date:"2026-05-13", semester:"Spring 2026", rating:"BUY",  pt:576,    file:"amd-danny-saville" },
  { ticker:"AXP",  company:"American Express",         title:"A ‘Platinum’ Opportunity",      analyst:"Mateo Kai",          sector:"financials",  industry:"Credit Services",            date:"2026-05-13", semester:"Spring 2026", rating:"BUY",  pt:361,    file:"axp-mateo-kai" },
  { ticker:"BIRD", company:"Allbirds",                 title:"Allbirds Fly? Newbirds Don’t.",      analyst:"Thomas Chevalier",   sector:"consumer",    industry:"Apparel Retail",             date:"2026-04-20", semester:"Spring 2026", rating:"SELL", pt:0.41,   file:"bird-thomas-chevalier" },
  { ticker:"CCJ",  company:"Cameco Corporation",       title:"Holding for Critical Mass",               analyst:"Grant Clay",         sector:"energy",      industry:"Uranium",                    date:"2026-05-08", semester:"Spring 2026", rating:"HOLD", pt:133,    file:"ccj-grant-clay",          featured:true },
  { ticker:"COF",  company:"Capital One Financial",    title:"Discover the Value",                      analyst:"Stellan Knopp",      sector:"financials",  industry:"Consumer Finance",           date:"2026-05-01", semester:"Spring 2026", rating:"BUY",  pt:251,    file:"cof-stellan-knopp",       featured:true },
  { ticker:"CVE",  company:"Cenovus Energy",           title:"Strike While the Oil is Hot",             analyst:"Sam Shewmaker",      sector:"energy",      industry:"Oil & Gas Integrated",       date:"2026-05-10", semester:"Spring 2026", rating:"BUY",  pt:38.60,  file:"cve-sam-shewmaker",       featured:true },
  { ticker:"ETN",  company:"Eaton Corporation",        title:"From Grid to Chip, But Not to Plant",     analyst:"Roxane Ouali",       sector:"industrials", industry:"Electrical Equipment",       date:"2026-04-06", semester:"Spring 2026", rating:"SELL", pt:273.06, file:"etn-roxane-ouali" },
  { ticker:"GE",   company:"GE Aerospace",             title:"Cleared for Takeoff",                     analyst:"Keanu Kawata",       sector:"industrials", industry:"Aerospace & Defense",        date:"2026-05-08", semester:"Spring 2026", rating:"BUY",  pt:404,    file:"ge-keanu-kawata" },
  { ticker:"HCA",  company:"HCA Healthcare",           title:"Vital Signs Remain Strong",               analyst:"Matteo Salinas",     sector:"healthcare",  industry:"Hospitals",                  date:"2026-04-29", semester:"Spring 2026", rating:"BUY",  pt:558,    file:"hca-matteo-salinas" },
  { ticker:"KEX",  company:"Kirby Corporation",        title:"Barging into the AI Boom, Backed by an Armada", analyst:"Evan Kimberlain", sector:"industrials", industry:"Marine Transportation",   date:"2026-04-25", semester:"Spring 2026", rating:"BUY",  pt:173.80, file:"kex-evan-kimberlain",     featured:true },
  { ticker:"LRCX", company:"Lam Research",             title:"The Picks and Shovels of the AI Era",     analyst:"Aiden Coulter",      sector:"tmt",         industry:"Semiconductor Equipment",    date:"2026-05-04", semester:"Spring 2026", rating:"BUY",  pt:297,    file:"lrcx-aiden-coulter" },
  { ticker:"NFLX", company:"Netflix",                  title:"Bullish on Binge",                        analyst:"Curtis Beavers",     sector:"tmt",         industry:"Entertainment",              date:"2026-05-01", semester:"Spring 2026", rating:"BUY",  pt:102,    file:"nflx-curtis-beavers",     featured:true },
  { ticker:"ORCL", company:"Oracle Corporation",       title:"Prophesied for Success?",                 analyst:"Sam Clarke",         sector:"tmt",         industry:"Cloud Infrastructure",       date:"2026-05-01", semester:"Spring 2026", rating:"BUY",  pt:183.30, file:"orcl-sam-clark" },
  { ticker:"PRDO", company:"Perdoceo Education",       title:"Summa Cum Laude Returns",                 analyst:"Noah Thornberry",    sector:"consumer",    industry:"Education",                  date:"2026-04-21", semester:"Spring 2026", rating:"BUY",  pt:46.40,  file:"prdo-noah-thornberry" },
  { ticker:"RACE", company:"Ferrari N.V.",             title:"$RACE to the Top",                        analyst:"Keegan Deters",      sector:"consumer",    industry:"Auto Manufacturing",         date:"2026-05-15", semester:"Spring 2026", rating:"BUY",  pt:478,    file:"race-keegan-deters",      featured:true },
  { ticker:"SFM",  company:"Sprouts Farmers Market",   title:"Farm to Portfolio",                       analyst:"Holly Cooper",       sector:"consumer",    industry:"Grocery",                    date:"2026-04-30", semester:"Spring 2026", rating:"BUY",  pt:102.67, file:"sfm-holly-cooper" },
  { ticker:"TKO",  company:"TKO Group Holdings",       title:"From Octagon to Empire",                  analyst:"Elan Lane",          sector:"tmt",         industry:"Sports & Media",             date:"2026-05-15", semester:"Spring 2026", rating:"BUY",  pt:215.70, file:"tko-elan-lane" },
  { ticker:"UBER", company:"Uber Technologies",        title:"Driven to Diversify",                     analyst:"AJ Onusumba",        sector:"tmt",         industry:"Software Application",       date:"2026-04-10", semester:"Spring 2026", rating:"BUY",  pt:108.48, file:"uber-aj-onusumba",        featured:true },
  { ticker:"ULTA", company:"Ulta Beauty",              title:"ULTAmate Earnings",                       analyst:"Ally Torres-Guzman", sector:"consumer",    industry:"Cosmetics",                  date:"2026-05-12", semester:"Spring 2026", rating:"BUY",  pt:721,    file:"ulta-ally-torres-guzman" },
  { ticker:"UNH",  company:"UnitedHealth Group",       title:"Under Pressure, Built to Perform",        analyst:"Coey Cheng",         sector:"healthcare",  industry:"Healthcare Services",        date:"2026-05-15", semester:"Spring 2026", rating:"BUY",  pt:453,    file:"unh-coey-cheng" },
  { ticker:"VEEV", company:"Veeva Systems",            title:"Artificial Fears, Real Fundamentals",     analyst:"Chris Thompson",     sector:"healthcare",  industry:"Healthcare Technology",      date:"2026-05-29", semester:"Spring 2026", rating:"BUY",  pt:295,    file:"veev-bcr" },
  { ticker:"VRT",  company:"Vertiv Holdings",          title:"Keeping AI Cool",                         analyst:"Dawson Miracle",     sector:"industrials", industry:"Data Infrastructure",        date:"2026-05-15", semester:"Spring 2026", rating:"BUY",  pt:437,    file:"vrt-dawson-miracle" },
  { ticker:"WM",   company:"Waste Management",         title:"It’s Not A Trashy Stock.",           analyst:"Carter Overtoom",    sector:"industrials", industry:"Environmental Services",     date:"2026-05-01", semester:"Spring 2026", rating:"BUY",  pt:267.50, file:"wm-carter-overtoom",      featured:true },

  // ----- Fall 2025 -----
  { ticker:"CEG", company:"Constellation Energy", title:"Full Power Ahead: Constellation’s Nuclear Growth", analyst:"Adam Johnson", sector:"energy", industry:"Electric Utilities", date:"2025-10-29", semester:"Fall 2025", rating:"BUY", pt:422.20, file:"ceg-adam-johnson" },
  { ticker:"BE", company:"Bloom Energy", title:"A Blooming Opportunity: Invest in the Disrupted Energy Revolution", analyst:"Alex Lorsbach", sector:"energy", industry:"Alternative Energy", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:142, file:"be-alex-lorsbach" },
  { ticker:"ASTS", company:"AST SpaceMobile", title:"Dead Zones are Dead: AST SpaceMobile", analyst:"Logan Kane", sector:"tmt", industry:"Telecommunications", date:"2025-12-18", semester:"Fall 2025", rating:"BUY", pt:94, file:"asts-logan-kane" },
  { ticker:"BEPC", company:"Brookfield Renewable", title:"Amping Up a Global Energy Shift", analyst:"Austin Hinchberger", sector:"energy", industry:"Renewable Energy", date:"2025-11-04", semester:"Fall 2025", rating:"BUY", pt:69, file:"bepc-austin-hinchberger" },
  { ticker:"MNST", company:"Monster Beverage", title:"Unleash the Profit", analyst:"Ben Murray-Cirulli", sector:"consumer", industry:"Beverages", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:82, file:"mnst-ben-murray-cirulli" },
  { ticker:"LEN", company:"Lennar Corporation", title:"When Rates Fall, Lennar Rises", analyst:"Braden Hacker", sector:"consumer", industry:"Homebuilding", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:149.63, file:"len-braden-hacker" },
  { ticker:"SG", company:"Sweetgreen", title:"Not So Sweet After All", analyst:"Brady Hausfeld", sector:"consumer", industry:"Restaurants", date:"2025-10-29", semester:"Fall 2025", rating:"SELL", pt:5, file:"sg-brady-hausfeld" },
  { ticker:"STX", company:"Seagate Technology", title:"Seagate: The Storage Market’s Quiet Main Character", analyst:"Brianna Fusz", sector:"tmt", industry:"Computer Storage", date:"2025-10-23", semester:"Fall 2025", rating:"BUY", pt:250, file:"stx-brianna-fusz" },
  { ticker:"VVV", company:"Valvoline", title:"Keep Your Portfolio Running Well", analyst:"Caleb Boles", sector:"consumer", industry:"Automotive Services", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:48, file:"vvv-caleb-boles" },
  { ticker:"CRDO", company:"Credo Technology Group", title:"Establishing Credo-bility", analyst:"Camryn Beatty", sector:"tmt", industry:"Semiconductors", date:"2025-10-31", semester:"Fall 2025", rating:"HOLD", pt:169, file:"crdo-camryn-beatty" },
  { ticker:"NKE", company:"Nike", title:"Nike: Just Buy It", analyst:"Carson Vidra", sector:"consumer", industry:"Footwear & Accessories", date:"2025-09-17", semester:"Fall 2025", rating:"BUY", pt:80, file:"nke-carson-vidra" },
  { ticker:"WHR", company:"Whirlpool", title:"Whirlpool Cleans Up House", analyst:"Carter Overtoom", sector:"consumer", industry:"Home Appliances", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:113, file:"whr-carter-overtoom" },
  { ticker:"PYPL", company:"PayPal Holdings", title:"Checkout, Not Check Out", analyst:"Chris Thompson", sector:"financials", industry:"Financial Technology", date:"2025-10-24", semester:"Fall 2025", rating:"BUY", pt:82, file:"pypl-chris-thompson" },
  { ticker:"LLY", company:"Eli Lilly and Company", title:"Prescribing Growth", analyst:"Clayton Hord", sector:"healthcare", industry:"Pharmaceuticals", date:"2025-10-27", semester:"Fall 2025", rating:"BUY", pt:1063, file:"lly-clayton-hord" },
  { ticker:"COST", company:"Costco Wholesale", title:"Stock Up On Costco", analyst:"Daniel Doctrow", sector:"consumer", industry:"Retail", date:"2025-10-22", semester:"Fall 2025", rating:"BUY", pt:1072, file:"cost-daniel-doctrow" },
  { ticker:"CHWY", company:"Chewy", title:"The Top Dog in E-Commerce", analyst:"Dawson Miracle", sector:"consumer", industry:"Pet E-Commerce", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:45.98, file:"chwy-dawson-miracle" },
  { ticker:"BA", company:"The Boeing Company", title:"Boeing’s Turnaround: Now Boarding", analyst:"Grant Clay", sector:"industrials", industry:"Aerospace & Defense", date:"2025-10-30", semester:"Fall 2025", rating:"BUY", pt:263, file:"ba-grant-clay" },
  { ticker:"DIS", company:"The Walt Disney Company", title:"The Happiest Stock on Earth", analyst:"Harrison Gamble", sector:"tmt", industry:"Entertainment", date:"2025-10-30", semester:"Fall 2025", rating:"BUY", pt:145.70, file:"dis-harrison-gamble" },
  { ticker:"BTI", company:"British American Tobacco", title:"Smokeless Struggles", analyst:"Henry Ausnehmer", sector:"consumer", industry:"Tobacco", date:"2025-11-18", semester:"Fall 2025", rating:"SELL", pt:46, file:"bti-henry-ausnehmer" },
  { ticker:"HD", company:"The Home Depot", title:"Revival Under Construction", analyst:"Holly Cooper", sector:"consumer", industry:"Home Improvement Retail", date:"2025-10-31", semester:"Fall 2025", rating:"HOLD", pt:388.95, file:"hd-holly-cooper" },
  { ticker:"HOOD", company:"Robinhood Markets", title:"Robinhood: Riding with the $HOOD", analyst:"Horacio Magdaleno", sector:"financials", industry:"Financial Technology", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:164, file:"hood-horacio-magdaleno" },
  { ticker:"LECO", company:"Lincoln Electric Holdings", title:"A Company Welded for What’s Ahead", analyst:"John Lubert", sector:"industrials", industry:"Industrial Machinery", date:"2025-10-22", semester:"Fall 2025", rating:"BUY", pt:300, file:"leco-john-lubert" },
  { ticker:"ISRG", company:"Intuitive Surgical", title:"Precision Profits Under Pressure", analyst:"John Sharma", sector:"healthcare", industry:"Medical Devices", date:"2025-10-31", semester:"Fall 2025", rating:"SELL", pt:410, file:"isrg-john-sharma" },
  { ticker:"SOFI", company:"SoFi Technologies", title:"Time to Cash Out on SoFi", analyst:"Jonathan Robbins", sector:"financials", industry:"Credit Services", date:"2025-10-29", semester:"Fall 2025", rating:"SELL", pt:24, file:"sofi-jonathan-robbins" },
  { ticker:"LOW", company:"Lowe’s Companies", title:"Low, Slow, Grow", analyst:"Kano Hean", sector:"consumer", industry:"Home Improvement Retail", date:"2025-10-28", semester:"Fall 2025", rating:"BUY", pt:305, file:"low-kano-hean" },
  { ticker:"BTU", company:"Peabody Energy", title:"Digging Deeper Pockets", analyst:"Landon Hurtte", sector:"energy", industry:"Coal", date:"2025-11-03", semester:"Fall 2025", rating:"BUY", pt:33, file:"btu-landon-hurtte" },
  { ticker:"TMDX", company:"TransMedics Group", title:"The Heart of Innovation: TransMedics", analyst:"Logan Kane", sector:"healthcare", industry:"Medical Devices", date:"2025-10-13", semester:"Fall 2025", rating:"BUY", pt:150, file:"tmdx-logan-kane" },
  { ticker:"KTOS", company:"Kratos Defense & Security", title:"We Have Liftoff", analyst:"Logan Nickelman", sector:"industrials", industry:"Aerospace & Defense", date:"2025-11-04", semester:"Fall 2025", rating:"BUY", pt:110, file:"ktos-logan-nickelman" },
  { ticker:"COHR", company:"Coherent Corp.", title:"Laser Focused on Growth", analyst:"Luca Milici", sector:"tmt", industry:"Optical Networking", date:"2025-10-01", semester:"Fall 2025", rating:"BUY", pt:133, file:"cohr-luca-milici" },
  { ticker:"BROS", company:"Dutch Bros", title:"Go $BROS or Go $BROKE", analyst:"Noah Gibson", sector:"consumer", industry:"Restaurants", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:80.06, file:"bros-noah-gibson" },
  { ticker:"DKNG", company:"DraftKings", title:"Time to Cash Out", analyst:"Noah Quinn", sector:"consumer", industry:"Sports Betting", date:"2025-10-31", semester:"Fall 2025", rating:"SELL", pt:29, file:"dkng-noah-quinn" },
  { ticker:"WING", company:"Wingstop", title:"Turning Heat into Earnings", analyst:"Noah Thornberry", sector:"consumer", industry:"Restaurants", date:"2025-11-11", semester:"Fall 2025", rating:"BUY", pt:272, file:"wing-noah-thornberry" },
  { ticker:"TSN", company:"Tyson Foods", title:"Woo Pig Sooie!", analyst:"Parker McKinley", sector:"consumer", industry:"Packaged Foods", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:68, file:"tsn-parker-mckinley" },
  { ticker:"PFE", company:"Pfizer", title:"A Steady Dose", analyst:"Pranay Patel", sector:"healthcare", industry:"Pharmaceuticals", date:"2025-10-24", semester:"Fall 2025", rating:"HOLD", pt:24, file:"pfe-pranay-patel" },
  { ticker:"INOD", company:"Innodata", title:"Building Order from Chaos", analyst:"Reece Sutton", sector:"tmt", industry:"AI & Data Services", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:82.28, file:"inod-reece-sutton" },
  { ticker:"COP", company:"ConocoPhillips", title:"Pipeline to Payouts", analyst:"Sam Anness", sector:"energy", industry:"Exploration & Production", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:109, file:"cop-sam-anness" },
  { ticker:"LMT", company:"Lockheed Martin", title:"Runway Clear for Takeoff", analyst:"Sam Shewmaker", sector:"industrials", industry:"Aerospace & Defense", date:"2025-11-03", semester:"Fall 2025", rating:"BUY", pt:530, file:"lmt-sam-shewmaker" },
  { ticker:"UNP", company:"Union Pacific", title:"Full Steam Ahead", analyst:"Sam Clarke", sector:"industrials", industry:"Railroads", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:267, file:"unp-sam-clarke" },
  { ticker:"UPS", company:"United Parcel Service", title:"A Rising Tide Lifts All Boats", analyst:"Saurya Parajuli", sector:"industrials", industry:"Transportation & Logistics", date:"2025-11-17", semester:"Fall 2025", rating:"BUY", pt:110, file:"ups-saurya-parajuli" },
  { ticker:"ELF", company:"e.l.f. Beauty", title:"The Rhode to Global Glamor", analyst:"Sophia Swann", sector:"consumer", industry:"Cosmetics", date:"2025-10-28", semester:"Fall 2025", rating:"BUY", pt:166.23, file:"elf-sophia-swann" },
  { ticker:"STRL", company:"Sterling Infrastructure", title:"From Concrete to Cloud: STRL’s Buy Opportunity", analyst:"Stellan Knopp", sector:"industrials", industry:"Infrastructure & Construction", date:"2025-10-31", semester:"Fall 2025", rating:"BUY", pt:416, file:"strl-stellan-knopp" },
  { ticker:"TJX", company:"The TJX Companies", title:"Off Price, On Point", analyst:"Thomas Chevalier", sector:"consumer", industry:"Off-Price Retail", date:"2025-11-02", semester:"Fall 2025", rating:"BUY", pt:162, file:"tjx-thomas-chevalier" },
  { ticker:"IBM", company:"IBM", title:"Hybrid Cloud and Hybrid Results", analyst:"Will Keller", sector:"tmt", industry:"IT Services", date:"2025-09-29", semester:"Fall 2025", rating:"HOLD", pt:300, file:"ibm-will-keller" },
  { ticker:"ANET", company:"Arista Networks", title:"Connectivity = Cash", analyst:"Stellan Knopp", sector:"tmt", industry:"Communications Equipment", date:"2025-12-12", semester:"Fall 2025", rating:"BUY", pt:171, file:"anet-stellan-knopp" },
  { ticker:"NOW", company:"ServiceNow", title:"Buy $NOW: ServiceNow Positioned for Growth", analyst:"Holly Cooper", sector:"tmt", industry:"Software", date:"2025-12-10", semester:"Fall 2025", rating:"BUY", pt:1169.30, file:"now-holly-cooper" },
  { ticker:"CELH", company:"Celsius Holdings", title:"The Celsius Caffeine Crash", analyst:"Daniel Doctrow", sector:"consumer", industry:"Beverages", date:"2025-12-14", semester:"Fall 2025", rating:"SELL", pt:39.30, file:"celh-daniel-doctrow" },
  { ticker:"ABNB", company:"Airbnb", title:"Holding the Reservation", analyst:"Sam Anness", sector:"consumer", industry:"Travel Services", date:"2025-12-10", semester:"Fall 2025", rating:"HOLD", pt:127.85, file:"abnb-sam-anness" },
  { ticker:"SCHW", company:"Charles Schwab", title:"Priced for Panic, Not Performance", analyst:"Chris Thompson", sector:"financials", industry:"Brokerage & Banking", date:"2025-12-12", semester:"Fall 2025", rating:"BUY", pt:109, file:"schw-chris-thompson" },

  // ----- 2025 -----
  { ticker:"LULU", company:"Lululemon Athletica",      title:"Stretching Without Breaking a Thread",    analyst:"Oliver Liang",       sector:"consumer",    industry:"Apparel Retail",             date:"2025-08-14", semester:"Fall 2025",   rating:"BUY",  pt:300,    file:"oliver-liang-nasdaq-lulu" },
  { ticker:"SBUX", company:"Starbucks Corporation",    title:"The Brew Has Gone Cold",                  analyst:"Oliver Liang",       sector:"consumer",    industry:"Restaurants",                date:"2025-05-28", semester:"Spring 2025", rating:"SELL", pt:70,     file:"oliver-liang-nasdaq-sbux" },
  { ticker:"FIX",  company:"Comfort Systems USA",      title:"$FIXing the Future with a Comfortable Compounder", analyst:"Oliver Liang", sector:"industrials", industry:"Building Services",     date:"2025-04-28", semester:"Spring 2025", rating:"BUY",  pt:500,    file:"bcr-fix-sample-report" },
];

/* ---------------------------------------------------------------------
   LEADERSHIP & SENIOR ANALYSTS
   photo: file in /img/team (leave "" to show initials instead)
   --------------------------------------------------------------------- */
const LEADERSHIP = [
  { name:"Chris Thompson",     role:"Chairman",       photo:"chris-thompson.jpg" },
  { name:"Louis Ward",         role:"Advisor",        photo:"louis-ward.jpg" },
  { name:"Oliver Liang",       role:"Advisor",        photo:"" },
  { name:"Colin Albrecht",     role:"Senior Analyst", photo:"colin-albrecht.jpg" },
  { name:"Logan Kane",         role:"Senior Analyst", photo:"logan-kane.jpg" },
  { name:"Ben Murray-Cirulli", role:"Senior Analyst", photo:"ben-murray-cirulli.jpg" },
  { name:"Carter Overtoom",    role:"Senior Analyst", photo:"carter-overtoom.jpg" },
  { name:"Stellan Knopp",      role:"Senior Analyst", photo:"stellan-knopp.jpg" },
  { name:"Curtis Beavers",     role:"Senior Analyst", photo:"curtis-beavers.jpg" },
];

/* Current analyst class (names only, alphabetical) */
const CURRENT_CLASS = [
  "Albert Hulbert","Andrew Cox","Annabella Pascoli","Annabelle Malone","Brady Hausfeld","Brian Dennis",
  "Bryce Trosper","Christian Stutzman","Cole Space","Daksh Patel","Dolan Whelan","Elias Samaan",
  "Horacio Magdaleno","Isaiah White","Jacob Coffey","Jacob Sipple","Jerry Chen","John Hulbert",
  "Keegan Deters","Logan Nickelman","Olivia Hardigree","Ryan Perez","Sam Shewmaker","Samuel Clarke",
  "Scott Jennings","Shrey Patel","Taj Chattha","Zoe Mills",
];

/* ---------------------------------------------------------------------
   WHERE OUR ANALYSTS LAND - logos scroll on the homepage.
   Add a logo PNG to /img/firms and a line here.
   --------------------------------------------------------------------- */
const PLACEMENTS = [
  { firm:"J.P. Morgan",      logo:"jpmorgan.png" },
  { firm:"William Blair",    logo:"william-blair.png" },
  { firm:"Bank of America",  logo:"bank-of-america.png" },
  { firm:"Leerink Partners", logo:"leerink.png" },
  { firm:"Baird",            logo:"baird.png" },
  { firm:"Wells Fargo",      logo:"wells-fargo.png" },
  { firm:"Vanguard",         logo:"vanguard.png" },
  { firm:"Morgan Stanley Wealth Management", logo:"morgan-stanley-wm.png" },
  { firm:"Citi",             logo:"citi.webp" },
  { firm:"Deloitte",         logo:"deloitte.webp" },
  { firm:"MiddleGround Capital", logo:"middleground.png" },
  { firm:"Prairie",          logo:"prairie.jpg" },
  { firm:"Baird Global Investment Banking", logo:"baird-gib.png" },
];

/* ---------------------------------------------------------------------
   STOCK PITCH COMPETITION
   --------------------------------------------------------------------- */
const PITCH_COMPETITION = {
  name: "2026 University Stock Pitch Competition",
  date: "April 9, 2026",
  groupPhoto: "img/pitch/finalists.jpg",
  // "team" lists the BCR members on each placing team.
  results: [
    { place:"1st", label:"First Place", note:"Entire Team BCR", ticker:"CHDN", company:"Churchill Downs", call:"Long",
      team:["Colin Albrecht","Oliver Liang"], photo:"img/pitch/first.jpg", deck:"decks/chdn-churchill-downs.pdf", cover:"assets/covers/deck-chdn.jpg" },
    { place:"2nd", label:"Second Place", note:"Entire Team BCR", ticker:"TMDX", company:"TransMedics Group", call:"Long",
      team:["Curtis Beavers","Stellan Knopp","Logan Kane"], photo:"img/pitch/second.jpg", deck:"decks/tmdx-transmedics.pdf", cover:"assets/covers/deck-tmdx.jpg" },
    { place:"3rd", label:"Third Place", note:"1 BCR Member", ticker:"ZETA", company:"Zeta Global", call:"Long",
      team:["John Sharma"], photo:"img/pitch/third.jpg", deck:"decks/zeta-zeta-global.pdf", cover:"assets/covers/deck-zeta.jpg" },
    { place:"4th", label:"Fourth Place", note:"2 BCR Members", ticker:"ZBH", company:"Zimmer Biomet", call:"Long",
      team:["Luca Milici","Brianna Fusz"], photo:"img/pitch/fourth.jpg", deck:"decks/zbh-zimmer-biomet.pdf", cover:"assets/covers/deck-zbh.jpg" },
  ],
};

/* ---------------------------------------------------------------------
   ARCHIVE - one entry per past semester, newest first.
     featured:       tickers of that semester's featured reports (they scroll across the top)
     seniorAnalysts: name, plus an optional role. People with a role get the top row;
                     everyone else sits in one row below, in the order listed.
     classGroups:    the analyst class; use one group with an empty label,
                     or several labelled groups if you ever want sub-lists
   --------------------------------------------------------------------- */
const ARCHIVE = [
  { semester: "Spring 2026",
    featured: ["ABT","CCJ","COF","CVE","KEX","NFLX","RACE","UBER","WM"],
    seniorAnalysts: [
      { name:"Louis Ward", role:"Chairman" }, { name:"Oliver Liang", role:"Advisor" },
      { name:"Colin Albrecht" }, { name:"Jill Patel" }, { name:"Chris Thompson" },
      { name:"Logan Kane" }, { name:"Brianna Fusz" }, { name:"Ben Murray-Cirulli" },
      { name:"Jonathan Robbins" },
    ],
    classGroups: [
      { label:"", names:["Brady Hausfeld","Caleb Boles","Carter Overtoom","Dawson Miracle","Grant Clay","Holly Cooper","Landon Hurtte","Logan Nickelman","Noah Thornberry","Sam Shewmaker","Samuel Clarke","Stellan Knopp","Thomas Chevalier","Adolphe Onusumba","Aiden Coulter","Ally Torres-Guzman","Coey Cheng","Curtis Beavers","Daniel Baker","Danny Saville","Elan Lane","Evan Kimberlain","Gia Zhang","Isaiah White","Keanu Kawata","Keegan Deters","Mateo Kai","Matteo Salinas","Matthew Smith","Roxane Ouali"] },
    ] },
  { semester: "Fall 2025",
    note: "Founding analyst class",
    featured: ["SCHW","BA","MNST","STX","HD","TMDX","BTU","LMT","SG","SOFI","COST"],
    seniorAnalysts: [
      { name:"Oliver Liang", role:"Chairman" }, { name:"Louis Ward" }, { name:"Colin Albrecht" },
      { name:"Jill Patel" }, { name:"Santiago Trujillo" }, { name:"Mitch Keiper" },
      { name:"Carson Vidra" }, { name:"Jake Conrad" },
    ],
    classGroups: [
      { label:"", names:["Adam Johnson","Aiden Leonard","AJ Abram","Alex Lorsbach","Austin Hinchberger","Ben Murray-Cirulli","Braden Hacker","Brady Hausfeld","Brianna Fusz","Brooks Jackson","Bryson Reynolds","Caleb Boles","Camryn Beatty","Carter Overtoom","Chris Thompson","Clayton Hord","Daniel Doctrow","Dawson Miracle","Drew Baker","Grant Clay","Harrison Gamble","Henry Ausnehmer","Holly Cooper","Horacio Magdaleno","Jack Bolyard","John Lubert","John Sharma","Jonathan Robbins","Kai Sanfilippo","Kano Hean","Landon Hurtte","Logan Kane","Logan Nickelman","Luca Milici","Noah Gibson","Noah Quinn","Noah Thornberry","Parker McKinley","Pranay Patel","Reece Sutton","Sam Anness","Sam Shewmaker","Samuel Clarke","Saurya Parajuli","Sophia Swann","Stella Bower","Stellan Knopp","Thomas Chevalier","Will Keller"] },
    ] },
];
