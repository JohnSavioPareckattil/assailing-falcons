export const stats = [
  { value: "15", unit: "YRS", label: "Airborne since 2010" },
  { value: "01", unit: "ASIA", label: "Rank in Asia, nine years running" },
  { value: "3RD", unit: "'25", label: "Worldwide — SAE AeroDesign West" },
  { value: "05", unit: "/10Y", label: "Podium finishes, last ten years" },
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
    year: "2019",
    code: "F'19",
    name: "REDBIRD",
    result: "4TH OVERALL · 1ST DESIGN REPORT · 1ST PRESENTATION",
    blurb:
      "The best finish an Asia-Pacific team had ever posted at SAE AeroDesign. Engineers from Boeing, Lockheed Martin and NASA took notice.",
    image: "/media/timeline/redbird-award",
  },
  {
    year: "2022",
    code: "F'22",
    name: "TRIDENT",
    result: "3RD OVERALL",
    blurb:
      "A clean-sheet rebuild after two lockdown years, flown back onto the World podium on the first attempt.",
    image: "/media/timeline/trident-hero",
  },
  {
    year: "2023",
    code: "F'23",
    name: "AQUARIUS",
    result: "3RD WORLDWIDE — DESIGN REPORT",
    blurb:
      "SAE Aero Design East, Lakeland FL. Third in the world on the design report, seventh overall.",
    image: "/media/timeline/aquarius-award",
  },
  {
    year: "2024",
    code: "F'24",
    name: "MARUT",
    result: "6TH — DESIGN REPORT",
    blurb:
      "A harder mission profile, a heavier payload class, and a lesson banked for the airframe that followed it.",
    image: "/media/timeline/marut-team",
  },
  {
    year: "2025",
    code: "F'25",
    name: "VIDHYUT",
    result: "1ST DESIGN REPORT · 3RD PRESENTATION · 3RD OVERALL",
    blurb:
      "An autonomous eVTOL, built to deliver and recapture its own payload mid-mission. Current flagship, team #219.",
    image: "/media/aircraft/vidhyut-hero",
    current: true,
  },
];

export const subteams = [
  {
    code: "AD",
    name: "Aerodynamics & Design",
    detail:
      "Control surfaces, drag reduction, airfoil selection and fuselage lofting — the shape everything else answers to.",
  },
  {
    code: "CFD",
    name: "Computational Fluid Dynamics",
    detail: "ANSYS Fluent and STAR-CCM+ runs that validate the shape before a single rib is cut.",
  },
  {
    code: "ST",
    name: "Structures",
    detail:
      "SolidWorks and CATIA models translated into balsa, carbon and composite — landing gear included.",
  },
  {
    code: "AV",
    name: "Avionics",
    detail: "Flight controllers, sensors and the autonomous stack that flies the eVTOL mission profile.",
  },
  {
    code: "PR",
    name: "Propulsion",
    detail: "Motor, ESC and prop matching against IC alternatives, optimised for every mission leg.",
  },
  {
    code: "MG",
    name: "Management",
    detail: "Sponsorship, logistics, documentation — the operation that gets an aircraft to Florida or Kansas at all.",
  },
];

export const sponsors = [
  { file: "aeroatoms", name: "Aero Atoms" },
  { file: "ansys", name: "ANSYS" },
  { file: "cadfem", name: "CADFEM" },
  { file: "drkstore", name: "drk store" },
  { file: "emax", name: "EMAX" },
  { file: "gemfan", name: "Gemfan" },
  { file: "gensace", name: "Gens Ace" },
  { file: "kenesto", name: "Kenesto" },
  { file: "landmark", name: "Landmark" },
  { file: "onshape", name: "Onshape" },
  { file: "protocase", name: "Protocase" },
  { file: "solidworks", name: "SOLIDWORKS" },
  { file: "tattu", name: "Tattu" },
];

export const leadership = [
  { name: "Samyak Doshi", role: "Team Captain", phone: "+91 98250 55701" },
  { name: "Veer Joshi", role: "Team Manager", phone: "+91 63517 81836" },
];

export const contact = {
  email: "assailingfalcons@vit.ac.in",
  instagram: "assailingfalcons",
  instagramUrl: "https://instagram.com/assailingfalcons",
  linkedinUrl: "https://in.linkedin.com/company/assailing-falcons",
  site: "assailingfalcons.in",
};
