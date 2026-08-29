export default function Blueprint({ className }: { className?: string }) {
  return (
    <svg
      className={`blueprint${className ? ` ${className}` : ""}`}
      viewBox="0 0 480 480"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* centerline crosshair */}
      <line x1="240" y1="0" x2="240" y2="480" strokeDasharray="2 7" />
      <line x1="0" y1="240" x2="480" y2="240" strokeDasharray="2 7" />

      {/* flight path arc with waypoints */}
      <path d="M20 420 C 140 380, 200 200, 420 60" strokeDasharray="1 8" strokeWidth="1" />
      <circle cx="20" cy="420" r="3" fill="currentColor" stroke="none" />
      <circle cx="420" cy="60" r="3" fill="currentColor" stroke="none" />

      {/* tricopter top-view schematic */}
      <g strokeWidth="1.1">
        <line x1="240" y1="240" x2="240" y2="86" />
        <line x1="240" y1="240" x2="112" y2="322" />
        <line x1="240" y1="240" x2="368" y2="322" />
        <circle cx="240" cy="86" r="27" />
        <circle cx="112" cy="322" r="27" />
        <circle cx="368" cy="322" r="27" />
        <circle cx="240" cy="240" r="23" />
        <line x1="240" y1="217" x2="240" y2="200" />
      </g>

      {/* corner registration ticks */}
      <g strokeWidth="1">
        <path d="M14 14h18M14 14v18" />
        <path d="M466 14h-18M466 14v18" />
        <path d="M14 466h18M14 466v-18" />
        <path d="M466 466h-18M466 466v-18" />
      </g>

      <text x="24" y="452" className="blueprint-label" fill="currentColor" stroke="none">
        FIG. 01: TRICOPTER, TOP VIEW
      </text>
    </svg>
  );
}
