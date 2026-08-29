// Small technical line-drawing per desk, in the same blueprint vocabulary
// as Blueprint.tsx — schematic motifs for what each desk actually works
// on, not literal renders of team hardware.
const GRAPHICS: Record<string, JSX.Element> = {
  // Design — airfoil section + chord line
  DS: (
    <>
      <line x1="8" y1="118" x2="152" y2="118" strokeDasharray="1 6" />
      <path d="M14 100 C 40 78, 70 74, 108 84 C 128 90, 142 100, 150 108 C 120 112, 80 116, 50 112 C 32 109, 20 104, 14 100 Z" />
      <line x1="14" y1="100" x2="150" y2="108" strokeDasharray="1 5" strokeWidth="0.8" />
      <circle cx="14" cy="100" r="2" fill="currentColor" stroke="none" />
      <circle cx="150" cy="108" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  // Structures — spar / rib cross-section with truss hatching
  ST: (
    <>
      <rect x="26" y="30" width="18" height="100" />
      <rect x="116" y="30" width="18" height="100" />
      <line x1="44" y1="46" x2="116" y2="46" />
      <line x1="44" y1="114" x2="116" y2="114" />
      <line x1="44" y1="46" x2="116" y2="114" strokeWidth="0.8" />
      <line x1="44" y1="114" x2="116" y2="46" strokeWidth="0.8" />
      <line x1="44" y1="80" x2="116" y2="80" strokeDasharray="1 5" strokeWidth="0.8" />
    </>
  ),
  // Avionics — flight-controller schematic: nodes and traces
  AV: (
    <>
      <rect x="60" y="60" width="40" height="40" />
      <line x1="60" y1="72" x2="30" y2="72" />
      <line x1="60" y1="88" x2="30" y2="88" />
      <line x1="100" y1="72" x2="130" y2="72" />
      <line x1="100" y1="88" x2="130" y2="88" />
      <line x1="72" y1="60" x2="72" y2="32" />
      <line x1="88" y1="60" x2="88" y2="32" />
      <line x1="72" y1="100" x2="72" y2="128" />
      <line x1="88" y1="100" x2="88" y2="128" />
      <circle cx="30" cy="72" r="2" fill="currentColor" stroke="none" />
      <circle cx="130" cy="88" r="2" fill="currentColor" stroke="none" />
      <circle cx="72" cy="32" r="2" fill="currentColor" stroke="none" />
      <circle cx="88" cy="128" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  // Management — schedule grid: rows of varying length, a coordination view
  MG: (
    <>
      <line x1="26" y1="34" x2="134" y2="34" strokeDasharray="1 6" strokeWidth="0.8" />
      <line x1="26" y1="58" x2="98" y2="58" strokeWidth="2" />
      <line x1="26" y1="80" x2="120" y2="80" strokeWidth="2" />
      <line x1="26" y1="102" x2="70" y2="102" strokeWidth="2" />
      <line x1="26" y1="124" x2="134" y2="124" strokeDasharray="1 6" strokeWidth="0.8" />
      <circle cx="98" cy="58" r="2" fill="currentColor" stroke="none" />
      <circle cx="120" cy="80" r="2" fill="currentColor" stroke="none" />
      <circle cx="70" cy="102" r="2" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function SubteamGraphic({ code }: { code: string }) {
  const graphic = GRAPHICS[code];
  if (!graphic) return null;

  return (
    <svg className="crew-graphic" viewBox="0 0 160 160" fill="none" stroke="currentColor" aria-hidden="true">
      <g strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round">
        {graphic}
      </g>
    </svg>
  );
}
