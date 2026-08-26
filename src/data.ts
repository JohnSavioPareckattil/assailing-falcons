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
  image: string;
  current?: boolean;
};

export const flightLog: FlightLogEntry[] = [
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
    result: "6TH OVERALL — BEST IN ASIA AT THE TIME",
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
      "The best finish an Asia-Pacific team had ever posted — a record that stood for seven years, until Indra's presentation win in 2026.",
    image: "media/timeline/redbird-award",
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
    result: "1ST DESIGN REPORT — #1 IN ASIA",
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
    image: "media/timeline/aquarius-award",
  },
  {
    year: "2024",
    code: "F'24",
    name: "MARUT",
    result: "#1 IN ASIA · 2ND (TIED) FLIGHT PERFORMANCE",
    blurb:
      "A blended-wing firefighting concept with a 10-ft wingspan, rated to carry 13 lb of water and release a powered delta-wing vehicle mid-air.",
    image: "media/timeline/marut-team",
  },
  {
    year: "2025",
    code: "F'25",
    name: "VIDHYUT",
    result: "3RD OVERALL · 1ST DESIGN REPORT",
    blurb:
      "A tiltrotor VTOL built for high-performance payload missions in tight spaces — vertical takeoff and landing without giving up forward-flight range.",
    image: "media/aircraft/vidhyut-hero",
  },
  {
    year: "2026",
    code: "F'26",
    name: "INDRA",
    result: "1ST PRESENTATION · 2ND DESIGN REPORT · 2ND MATHWORKS",
    blurb:
      "An electric VTOL tricopter for precision payload delivery and retrieval. When the war in Iran shut down international travel to Texas, the team cleared every submission-based round remotely and simply couldn't fly the in-person mission — SAE let them compete in everything that didn't require being there.",
    image: "media/aircraft/indra-hero",
    current: true,
  },
];

export const subteams = [
  {
    code: "DS",
    name: "Design",
    detail:
      "The foundation of every Falcons aircraft. Conceptual design, aerodynamic analysis, MDO, CFD and airfoil optimisation — turning ideas into mission-ready aerial systems, fixed-wing or VTOL.",
  },
  {
    code: "ST",
    name: "Structures",
    detail:
      "CAD modelling, structural analysis and weight optimisation translated into flight-worthy airframes — plus in-house composite fabrication, assembly and physical validation testing.",
  },
  {
    code: "AV",
    name: "Avionics",
    detail:
      "Sensors, payloads, power systems and flight-control architecture for autonomous operation. Built AVGP, a vision-guided rover that navigates and reacts entirely on its own.",
  },
  {
    code: "MG",
    name: "Management",
    detail:
      "Sponsorships, outreach and the coordination that turns a design into a funded, fabricated, flown aircraft — so every other department can focus on engineering.",
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

export const leadership = [
  { name: "Samyak Doshi", role: "Team Captain", phone: "+91 98250 55701" },
  { name: "Veer Joshi", role: "Team Manager", phone: "+91 63517 81836" },
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
