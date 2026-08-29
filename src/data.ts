export const stats = [
  { value: "16", unit: "YRS", label: "Airborne since 2010" },
  { value: "01", unit: "ASIA", label: "Rank in Asia-Pacific" },
  { value: "20+", unit: "", label: "Aircraft built" },
  { value: "06", unit: "WRLD", label: "All-time world rank" },
];

export type FlightLogEntry = {
  year: string;
  code: string;
  name: string;
  result: string;
  blurb: string;
  image: string | null;
  current?: boolean;
};

export const flightLog: FlightLogEntry[] = [
  {
    year: "2011",
    code: "F'11",
    name: "FALCONS ALPHA",
    result: "37TH OF 75 · FIRST U.S. ENTRY",
    blurb:
      "The team's first aircraft to cross the Atlantic and compete on American soil, at SAE Aero Design in Fort Worth, Texas. The opening flight of everything that followed.",
    image: "media/timeline/falcons-alpha-hero",
  },
  {
    year: "2012-15",
    code: "F'1X",
    name: "FALCONS BETA",
    result: "19TH OVERALL · VAN NUYS, LA",
    blurb:
      "Flown at the Van Nuys, Los Angeles competition during the team's early build-and-learn years. Exact season undocumented in surviving team records.",
    image: "media/timeline/falcons-beta-hero",
  },
  {
    year: "2012-13",
    code: "F'13",
    name: "JUGAAD",
    result: "REGULAR CLASS · RECORDS UNAVAILABLE",
    blurb:
      "One of the team's early Regular Class builds from the build-and-learn years, before the move up to Advanced Class. Detailed competition results haven't survived in team archives.",
    image: "media/timeline/jugaad-hero",
  },
  {
    year: "2013-14",
    code: "F'14",
    name: "KNIGHTOUT",
    result: "SAE AERO DESIGN · RECORDS UNAVAILABLE",
    blurb:
      "Flown as the team pushed toward Advanced Class competition. Named in team photo archives, but detailed results from that season haven't survived.",
    image: "media/timeline/knightout-hero",
  },
  {
    year: "2014-15",
    code: "F'15",
    name: "NAUTILUS",
    result: "ADVANCED CLASS · SAE AERO DESIGN EAST",
    blurb:
      "The season's biplane design, built to address the lack of credible aerodynamic data available for biplane configurations at the time. One of the more experimental airframes in team history.",
    image: "media/timeline/nautilus-hero",
  },
  {
    year: "2016",
    code: "F'16R",
    name: "CIRIO",
    result: "REGULAR CLASS · LOS ANGELES",
    blurb:
      "The team's Regular Class entry the same season as Carvao, built around a tapered wing spanning over a square metre and rated to lift more than 15 lb.",
    image: "media/timeline/cirio-hero",
  },
  {
    year: "2016",
    code: "F'16",
    name: "CARVAO",
    result: "9TH OVERALL, ADVANCED CLASS",
    blurb:
      "A medium-altitude, long-endurance design flown alongside sister aircraft Cirio at Los Angeles. The only Indian team to clear Advanced Class technical inspection that year.",
    image: "media/timeline/carvao-hero",
  },
  {
    year: "2017",
    code: "F'17",
    name: "JETAAYU",
    result: "7TH OVERALL · 4TH DESIGN REPORT",
    blurb:
      "Built to be reconfigured for weather analysis and thermal imaging. Also placed 3rd overall at SEDS-VIT's Indian Space Conclave that year.",
    image: "media/timeline/jetaayu-hero",
  },
  {
    year: "2018",
    code: "F'18",
    name: "ZEPHYRUS",
    result: "6TH OVERALL · BEST IN ASIA AT THE TIME",
    blurb:
      "Named for the Greek god of the west wind. Improved lift and payload-drop capacity carried the team to 6th in the world at SAE Aero Design East.",
    image: "media/timeline/zephyrus-hero",
  },
  {
    year: "2019",
    code: "F'19",
    name: "REDBIRD",
    result: "4TH OVERALL · 1ST DESIGN REPORT · 1ST PRESENTATION",
    blurb:
      "The best finish an Asia-Pacific team had ever posted, a record that stood for seven years until Indra's presentation win in 2026.",
    image: "media/timeline/redbird-plane",
  },
  {
    year: "2020",
    code: "F'20",
    name: "AIRAVAT",
    result: "3RD OVERALL · 1ST PRESENTATION",
    blurb:
      "An electric high-wing aircraft rated to lift 38 lb, built to autonomously release two powered delivery aircraft mid-air.",
    image: "media/timeline/airavat-hero",
  },
  {
    year: "2021",
    code: "F'21",
    name: "VULCAN",
    result: "1ST DESIGN REPORT · #1 IN ASIA",
    blurb:
      "Designed through a second pandemic-disrupted season. Topped the design report worldwide and held No.1 in Asia regardless.",
    image: "media/timeline/vulcan-hero",
  },
  {
    year: "2022",
    code: "F'22",
    name: "TRIDENT",
    result: "3RD OVERALL · 1ST DESIGN REPORT · 1ST PRESENTATION",
    blurb:
      "A single-motor mid-wing aircraft rated for 40 lb, deploying a lidar-guided ground vehicle mid-air to assist firefighters.",
    image: "media/timeline/trident-hero",
  },
  {
    year: "2023",
    code: "F'23",
    name: "AQUARIUS",
    result: "3RD DESIGN REPORT · 3RD PRESENTATION",
    blurb:
      "Named for the water-bearing constellation. Carried an 11 lb water payload and released its own Powered Autonomous Delivery Aircraft mid-mission.",
    image: "media/timeline/aquarius-hero",
  },
  {
    year: "2024",
    code: "F'24",
    name: "MARUT",
    result: "#1 IN ASIA · 2ND (TIED) FLIGHT PERFORMANCE",
    blurb:
      "A blended-wing firefighting concept with a 10-ft wingspan, rated to carry 13 lb of water and release a powered delta-wing vehicle mid-air.",
    image: "media/timeline/marut-hero",
  },
  {
    year: "2025",
    code: "F'25",
    name: "VIDHYUT",
    result: "3RD OVERALL · 1ST DESIGN REPORT",
    blurb:
      "A tiltrotor VTOL built for high-performance payload missions in tight spaces: vertical takeoff and landing without giving up forward-flight range.",
    image: "media/aircraft/vidhyut-hero",
  },
  {
    year: "2026",
    code: "F'26",
    name: "INDRA",
    result: "1ST PRESENTATION · 2ND DESIGN REPORT · 2ND MATHWORKS",
    blurb:
      "An electric VTOL tricopter for precision payload delivery and retrieval. When the war in Iran shut down international travel to Texas, the team cleared every submission-based round remotely. They couldn't fly the in-person mission, so SAE let them compete in everything that didn't require being there.",
    image: "media/aircraft/indra-hero",
    current: true,
  },
];

export const subteams = [
  {
    code: "DS",
    name: "Design",
    color: "#f5a742",
    detail:
      "The foundation of every Falcons aircraft. Conceptual design, aerodynamic analysis, MDO, CFD and airfoil optimisation, turning ideas into mission-ready aerial systems, fixed-wing or VTOL.",
  },
  {
    code: "ST",
    name: "Structures",
    color: "#38c6b4",
    detail:
      "CAD modelling, structural analysis and weight optimisation translated into flight-worthy airframes, plus in-house composite fabrication, assembly and physical validation testing.",
  },
  {
    code: "AV",
    name: "Avionics",
    color: "#9b7cf0",
    detail:
      "Sensors, payloads, power systems and flight-control architecture for autonomous operation. Built AVGP, a vision-guided rover that navigates and reacts entirely on its own.",
  },
  {
    code: "MG",
    name: "Management",
    color: "#f2607a",
    detail:
      "Sponsorships, outreach and the coordination that turns a design into a funded, fabricated, flown aircraft, so every other department can focus on engineering.",
  },
];

export type GalleryItem = {
  src: string;
  category: "aircraft" | "team" | "events";
  alt: string;
  wide?: boolean;
};

export const gallery: GalleryItem[] = [
  { src: "media/aircraft/indra-hero", category: "aircraft", alt: "Indra, the F'26 tricopter, spotlit at night", wide: true },
  { src: "media/gallery/indra-1", category: "aircraft", alt: "Indra on the tarmac, close-up of the airframe" },
  { src: "media/gallery/indra-2", category: "aircraft", alt: "Indra's tricopter rotor assembly" },
  { src: "media/gallery/indra-flight1", category: "aircraft", alt: "Indra airborne during a test flight" },
  { src: "media/gallery/indra-flight2", category: "aircraft", alt: "Indra in flight, low pass" },
  { src: "media/gallery/indra-flight3", category: "aircraft", alt: "Indra climbing after a vertical takeoff" },
  { src: "media/gallery/indra-flight5", category: "aircraft", alt: "Indra descending for a precision landing" },
  { src: "media/gallery/indra-comp1", category: "aircraft", alt: "Indra on the competition flight line" },
  { src: "media/gallery/indra-5", category: "aircraft", alt: "Indra's payload bay detail" },
  { src: "media/gallery/indra-6", category: "aircraft", alt: "Indra viewed head-on" },
  { src: "media/gallery/vidhyut-2", category: "aircraft", alt: "Vidhyut, the F'25 tiltrotor VTOL" },
  { src: "media/gallery/vidhyut-flight2", category: "aircraft", alt: "Vidhyut transitioning to forward flight" },
  { src: "media/gallery/vidhyut-comp2", category: "aircraft", alt: "Vidhyut on the competition tarmac" },
  { src: "media/gallery/marut-1", category: "aircraft", alt: "Marut, the F'24 blended-wing firefighting concept" },
  { src: "media/gallery/marut-2", category: "aircraft", alt: "Marut's blended-wing planform from above" },
  { src: "media/gallery/trident-2", category: "aircraft", alt: "Trident, the F'22 mid-wing aircraft" },
  { src: "media/gallery/trident-4", category: "aircraft", alt: "Trident on final approach" },
  { src: "media/gallery/aquarius-1", category: "aircraft", alt: "Aquarius, the F'23 aircraft, on the ramp" },
  { src: "media/gallery/aquarius-3", category: "aircraft", alt: "Aquarius carrying its water payload" },
  { src: "media/gallery/vulcan-2", category: "aircraft", alt: "Vulcan, the F'21 pandemic-season aircraft" },
  { src: "media/gallery/zephyrus-2", category: "aircraft", alt: "Zephyrus, the F'18 aircraft" },
  { src: "media/gallery/jetaayu-2", category: "aircraft", alt: "Jetaayu, the F'17 aircraft" },
  { src: "media/gallery/redbird-1", category: "aircraft", alt: "Redbird, the F'19 aircraft, on the grid" },
  { src: "media/gallery/indra-team", category: "team", alt: "Team Falcons '26 in front of Indra", wide: true },
  { src: "media/gallery/team-photo", category: "team", alt: "Full team group photo" },
  { src: "media/gallery/team-india", category: "team", alt: "The team representing India at competition" },
  { src: "media/gallery/marut-comp-team3", category: "team", alt: "The Marut season crew at competition" },
  { src: "media/gallery/trident-team-events", category: "team", alt: "The Trident season team at an outreach event" },
  { src: "media/gallery/aquarius-flight-team", category: "team", alt: "The Aquarius flight crew on the line" },
  { src: "media/gallery/events-2", category: "events", alt: "Falcons at a build or outreach event" },
  { src: "media/gallery/events-3", category: "events", alt: "Falcons demonstrating an aircraft at an event" },
  { src: "media/gallery/events-ac24", category: "events", alt: "AeroConclave 2024" },
  { src: "media/gallery/events-ac25-1", category: "events", alt: "AeroConclave 2025, session one" },
  { src: "media/gallery/events-ac25-2", category: "events", alt: "AeroConclave 2025, session two" },
  { src: "media/gallery/events-id", category: "events", alt: "Falcons at an inter-departmental showcase" },
];

export const sponsorTiers = [
  {
    name: "Title",
    tagline: "Your mark on the fuselage",
    perks: [
      "Largest logo placement on the flagship aircraft",
      "Named recognition across every team channel and the brochure",
      "First call on technical collaboration with the design and avionics desks",
    ],
  },
  {
    name: "Gold",
    tagline: "On every panel that matters",
    perks: [
      "Prominent logo on the aircraft and pit signage",
      "Feature placement on the website and social channels",
      "Invitation to pre-competition test flights",
    ],
  },
  {
    name: "Silver",
    tagline: "Backing the build",
    perks: [
      "Logo on the aircraft decal sheet",
      "Listed on the website and sponsor wall",
      "Season wrap-up report after competition",
    ],
  },
];

export const sponsors = [
  { file: "aeroatoms", name: "Aero Atoms", url: "https://aeroatoms.com/" },
  { file: "ansys", name: "ANSYS", url: "https://ansys.synopsys.com/" },
  { file: "cadfem", name: "CADFEM", url: "https://www.cadfem.net/en/home.html" },
  { file: "drkstore", name: "drk store", url: "https://www.drkstore.in/" },
  { file: "emax", name: "EMAX", url: "https://www.emax-usa.com/" },
  { file: "gemfan", name: "Gemfan", url: "https://www.gemfanhobby.com/" },
  { file: "gensace", name: "Gens Ace", url: "https://genstattu.com/" },
  { file: "kenesto", name: "Kenesto", url: "https://www.kenesto.com/" },
  { file: "landmark", name: "Landmark", url: "https://landmarklanding.com/" },
  { file: "onshape", name: "Onshape", url: "https://www.onshape.com/en/" },
  { file: "protocase", name: "Protocase", url: "https://www.protocase.com/" },
  { file: "solidworks", name: "SOLIDWORKS", url: "https://www.solidworks.com/" },
  { file: "tattu", name: "Tattu", url: "https://www.tattuworld.com/" },
];

export type Testimonial = {
  quote: string;
  source: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "One of the most stable planes he flew all competition.",
    source: "SAE Aero Design competition pilot",
    context: "On flying the team's 2016 entry, via DARcorporation",
  },
];

export const contact = {
  email: "assailingfalcons@vit.ac.in",
  phone: "+91 87927 29316",
  address: "Vellore Institute of Technology, Vellore, Tamil Nadu 632014",
  instagramUrl: "https://www.instagram.com/assailingfalcons/",
  linkedinUrl: "https://www.linkedin.com/company/assailing-falcons/",
  youtubeUrl: "https://www.youtube.com/@assailingfalcons_vit",
  site: "assailingfalcons.in",
};
