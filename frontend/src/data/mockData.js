// Static curated content for the editorial homepage.
// All content is mocked for the frontend-only MVP.

export const HEADER_LINKS = [
    { label: "The Field", href: "#field" },
    { label: "Cities", href: "#cities" },
    { label: "Dispatches", href: "#news" },
    { label: "Field Notes", href: "#tips" },
    { label: "Archive", href: "#archive" },
];

export const TICKER = [
    "PORTUGAL · Digital Nomad Visa applications surge 42% year-on-year",
    "JAPAN · Tokyo unveils tax-relief zones for foreign remote workers",
    "COLOMBIA · Medellín's El Poblado adds three new co-living towers",
    "SPAIN · Barcelona caps short-term rentals; long-stay demand rises",
    "INDONESIA · Bali's Ubud opens government-backed nomad hub",
    "GERMANY · Berlin coworking occupancy hits post-2019 record",
    "THAILAND · Chiang Mai debuts 10-year 'Long-Term Resident' pathway",
    "MEXICO · CDMX rolls out subsidised fiber for freelancers",
];

export const FEATURED = {
    id: "featured-1",
    kicker: "Cover Story · Issue 04",
    dateline: "Ubud, Bali — Feb 12, 2026",
    title: "The Quiet Rebellion Reshaping Coworking",
    deck:
        "From volcanic ridges in Bali to converted warehouses in Lisbon, a new generation of remote workers is choosing places, not offices — and rewriting the economics of the modern workday.",
    author: "Maren Okafor",
    readingTime: "12 min read",
    tags: ["Longform", "Culture", "Asia-Pacific"],
    image:
        "https://images.unsplash.com/photo-1604328727766-a151d1045ab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwY293b3JraW5nJTIwc3BhY2V8ZW58MHx8fHwxNzg1MDMzMjUyfDA&ixlib=rb-4.1.0&q=85",
};

export const REGIONS = [
    "All",
    "Europe",
    "Asia-Pacific",
    "Americas",
    "Africa",
    "Middle East",
];

export const NEWS = [
    {
        id: "n1",
        region: "Europe",
        country: "Portugal",
        city: "Lisbon",
        category: "Policy",
        headline:
            "Portugal extends the D8 nomad visa to 24 months amid record applications",
        excerpt:
            "The Foreign Ministry says demand from US, Brazilian and Indian applicants has tripled since 2024. Interior costs remain the tradeoff.",
        author: "Rui Tavares",
        date: "Feb 11, 2026",
        image:
            "https://images.pexels.com/photos/3747120/pexels-photo-3747120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: "n2",
        region: "Asia-Pacific",
        country: "Thailand",
        city: "Chiang Mai",
        category: "Community",
        headline:
            "Chiang Mai's expat co-op takes over a 1970s cinema — turns it into a members' library",
        excerpt:
            "The Punna Collective reopens the shuttered Kad Suan Kaew hall as a hybrid coworking loft, cafe and quiet reading room.",
        author: "Nok Suriyawong",
        date: "Feb 10, 2026",
        image: null,
    },
    {
        id: "n3",
        region: "Americas",
        country: "Mexico",
        city: "Mexico City",
        category: "Real Estate",
        headline:
            "Roma Norte and Condesa now house more coworking desks than Wall Street",
        excerpt:
            "New CBRE data shows CDMX's twin barrios crossed 41,000 dedicated remote-work desks — outpacing Manhattan south of 42nd Street.",
        author: "Alejandra Puig",
        date: "Feb 09, 2026",
        image:
            "https://images.unsplash.com/photo-1603464021578-f327592a89de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxsYXB0b3AlMjBjb2ZmZWUlMjB3b3JraW5nfGVufDB8fHx8MTc4NTAzMzI1Mnww&ixlib=rb-4.1.0&q=85",
    },
    {
        id: "n4",
        region: "Europe",
        country: "Germany",
        city: "Berlin",
        category: "Labour",
        headline:
            "Berlin's Betahaus federation votes to unionise night-shift community managers",
        excerpt:
            "A first in the coworking industry, following a two-year push by staff across nine Kreuzberg and Neukölln locations.",
        author: "Ines Bauer",
        date: "Feb 08, 2026",
        image: null,
    },
    {
        id: "n5",
        region: "Africa",
        country: "Kenya",
        city: "Nairobi",
        category: "Infrastructure",
        headline:
            "Silicon Savannah: Nairobi's fiber rollout cuts remote-work latency to European levels",
        excerpt:
            "Safaricom and Liquid Intelligent complete the Kilimani-Westlands corridor. Nomad arrivals up 27% in Q4.",
        author: "David Otieno",
        date: "Feb 07, 2026",
        image: null,
    },
    {
        id: "n6",
        region: "Middle East",
        country: "UAE",
        city: "Dubai",
        category: "Policy",
        headline:
            "Dubai's 'Virtual Working Programme' drops the $5k salary floor — opens doors to freelancers",
        excerpt:
            "The emirate softens income requirements to attract creative-industry applicants and long-tail entrepreneurs.",
        author: "Farah Al-Sayed",
        date: "Feb 06, 2026",
        image: null,
    },
    {
        id: "n7",
        region: "Asia-Pacific",
        country: "Japan",
        city: "Fukuoka",
        category: "Culture",
        headline:
            "Fukuoka named world's most liveable city for remote workers by Monocle index",
        excerpt:
            "Low rents, 8-minute commutes and a nascent English-language freelance scene tipped the scoring this year.",
        author: "Kenji Ito",
        date: "Feb 05, 2026",
        image:
            "https://images.pexels.com/photos/23230551/pexels-photo-23230551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: "n8",
        region: "Americas",
        country: "Colombia",
        city: "Medellín",
        category: "Community",
        headline:
            "The Medellín 'nomad tax' — locals push back on rising rents in El Poblado",
        excerpt:
            "Community councils propose a 3% levy on foreign long-stays to subsidise affordable housing for barrio residents.",
        author: "Carolina Restrepo",
        date: "Feb 04, 2026",
        image: null,
    },
];

export const CITIES = [
    {
        slug: "bali",
        name: "Bali",
        country: "Indonesia",
        blurb:
            "Rice-terrace villages and beach-town cafés, where the internet is faster than the traffic.",
        priceIndex: "$$",
        wifi: "180 Mbps avg",
        temp: "27°C",
        image:
            "https://images.pexels.com/photos/35428411/pexels-photo-35428411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        slug: "lisbon",
        name: "Lisbon",
        country: "Portugal",
        blurb:
            "Tiled façades, Atlantic light, and Europe's most generous long-stay visa in a decade.",
        priceIndex: "$$$",
        wifi: "240 Mbps avg",
        temp: "18°C",
        image:
            "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxsaXNib24lMjBzdHJlZXQlMjB0cmFtfGVufDB8fHx8MTc4NTAzMzI1Mnww&ixlib=rb-4.1.0&q=85",
    },
    {
        slug: "cdmx",
        name: "Mexico City",
        country: "Mexico",
        blurb:
            "A megalopolis in bloom — third-wave cafés, high-altitude nights, and neighbourhood-scale living.",
        priceIndex: "$$",
        wifi: "160 Mbps avg",
        temp: "21°C",
        image:
            "https://images.pexels.com/photos/18399439/pexels-photo-18399439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        slug: "berlin",
        name: "Berlin",
        country: "Germany",
        blurb:
            "Techno cathedrals by night, industrial-loft coworking by day. Still the coldest bargain in the EU.",
        priceIndex: "$$$",
        wifi: "220 Mbps avg",
        temp: "6°C",
        image:
            "https://images.pexels.com/photos/23230551/pexels-photo-23230551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        slug: "chiang-mai",
        name: "Chiang Mai",
        country: "Thailand",
        blurb:
            "The original nomad capital — temples, mango sticky rice, and a $250 studio if you know where to look.",
        priceIndex: "$",
        wifi: "150 Mbps avg",
        temp: "29°C",
        image:
            "https://images.unsplash.com/photo-1599576838688-8a6c11263108?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxjaGlhbmclMjBtYWklMjB0ZW1wbGV8ZW58MHx8fHwxNzg1MDMzMjUyfDA&ixlib=rb-4.1.0&q=85",
    },
    {
        slug: "medellin",
        name: "Medellín",
        country: "Colombia",
        blurb:
            "City of Eternal Spring, cable-cars over a valley, and a cafeteria scene rivalling Melbourne.",
        priceIndex: "$$",
        wifi: "170 Mbps avg",
        temp: "22°C",
        image:
            "https://images.pexels.com/photos/16637442/pexels-photo-16637442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

export const TIPS = [
    {
        num: "01",
        title: "Book the wrong flight",
        body:
            "Fly into a secondary airport in your target country. You'll save 30–40%, and land somewhere the tourists haven't polished yet.",
    },
    {
        num: "02",
        title: "Two weeks, three places, one visa",
        body:
            "A Schengen 90-day is a stack of possibilities. Split it: three cities, three moods, three deadlines. Movement is the antidote to burnout.",
    },
    {
        num: "03",
        title: "Never trust the first café",
        body:
            "The nearest coffee shop rarely has the best wifi. Walk fifteen minutes further. The reward is always disproportionate.",
    },
    {
        num: "04",
        title: "Write the local number down",
        body:
            "Get a SIM in the first hour. Not the second day. Everything downstream — payments, transit, deliveries — hangs off it.",
    },
    {
        num: "05",
        title: "Find the coworking with a library, not a bar",
        body:
            "Anyone can serve craft beer at 4pm. A silent reading room at 10am is where the good ideas actually land.",
    },
    {
        num: "06",
        title: "Leave before you're bored",
        body:
            "The tenth day in a new city is when it starts feeling like home. Book the next leg on day eight. Return only when you miss it.",
    },
];

export const STATS = [
    { value: "184", label: "Countries covered" },
    { value: "2,411", label: "Coworking spaces indexed" },
    { value: "36.5M", label: "Global remote workforce" },
    { value: "Weekly", label: "Dispatch cadence" },
];
