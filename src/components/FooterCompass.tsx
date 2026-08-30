// Background texture for the contact section: a large compass rose plus
// the same coordinate readout the hero HUD opens with — the page ends
// where it started, just quieter. Purely decorative.
export default function FooterCompass() {
  return (
    <svg className="footer-compass" viewBox="0 0 520 520" fill="none" aria-hidden="true">
      <circle cx="260" cy="260" r="200" stroke="currentColor" strokeWidth="1" />
      <circle cx="260" cy="260" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="1 6" />
      <circle cx="260" cy="260" r="3" fill="currentColor" stroke="none" />
      <line x1="260" y1="20" x2="260" y2="500" stroke="currentColor" strokeWidth="1" strokeDasharray="1 8" />
      <line x1="20" y1="260" x2="500" y2="260" stroke="currentColor" strokeWidth="1" strokeDasharray="1 8" />
      <path d="M260 60 L272 96 L260 88 L248 96 Z" fill="currentColor" stroke="none" />
      <g fontFamily="var(--f-mono)" fontSize="11" letterSpacing="2" fill="currentColor" stroke="none">
        <text x="260" y="46" textAnchor="middle">N</text>
        <text x="474" y="264" textAnchor="middle">E</text>
        <text x="260" y="482" textAnchor="middle">S</text>
        <text x="46" y="264" textAnchor="middle">W</text>
      </g>
      <text
        x="260"
        y="260"
        textAnchor="middle"
        fontFamily="var(--f-mono)"
        fontSize="13"
        letterSpacing="1.5"
        fill="currentColor"
        stroke="none"
        transform="translate(0 130)"
      >
        12.9165°N, 79.1325°E
      </text>
    </svg>
  );
}
