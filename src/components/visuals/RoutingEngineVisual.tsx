const ROUTES = [
  "M 20 140 L 120 90 L 210 110 L 300 60",
  "M 120 90 L 180 40",
  "M 210 110 L 260 170 L 340 150",
  "M 300 60 L 360 100",
  "M 20 140 L 60 190",
];

const NODES = [
  { x: 20, y: 140, r: 4 },
  { x: 120, y: 90, r: 5 },
  { x: 180, y: 40, r: 3 },
  { x: 210, y: 110, r: 5 },
  { x: 300, y: 60, r: 6 },
  { x: 360, y: 100, r: 4 },
  { x: 260, y: 170, r: 4 },
  { x: 340, y: 150, r: 4 },
  { x: 60, y: 190, r: 3 },
];

export default function RoutingEngineVisual() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Freight routing map with glowing connection lines between distribution nodes"
    >
      <defs>
        <linearGradient id="route-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00daf3" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#00daf3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00daf3" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#0e0e0e" />
      <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={220} />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 55} x2={400} y2={i * 55} />
        ))}
      </g>
      <g stroke="url(#route-line)" strokeWidth="1.5" fill="none">
        {ROUTES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <circle r="3" fill="#c3f5ff">
        <animateMotion dur="3.2s" repeatCount="indefinite" path={ROUTES[0]} />
      </circle>
      <circle r="2.5" fill="#c3f5ff">
        <animateMotion
          dur="2.4s"
          begin="0.6s"
          repeatCount="indefinite"
          path={ROUTES[2]}
        />
      </circle>
      {NODES.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 4} fill="#00daf3" opacity="0.18" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#c3f5ff" />
        </g>
      ))}
    </svg>
  );
}
