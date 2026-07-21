export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 600 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Abstract network of glowing nodes representing intelligent automation"
    >
      <defs>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00daf3" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#00daf3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00daf3" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="600" height="500" fill="#0e0e0e" />
      <rect width="600" height="500" fill="url(#hero-glow)" />

      {/* faint grid */}
      <g stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={500} />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 50} x2={600} y2={i * 50} />
        ))}
      </g>

      {/* connecting lines */}
      <g stroke="url(#hero-line)" strokeWidth="1.5" fill="none">
        <path d="M 90 380 L 220 260 L 340 320 L 470 150" />
        <path d="M 220 260 L 300 140" />
        <path d="M 340 320 L 470 400" />
        <path d="M 470 150 L 540 220" />
        <path d="M 90 380 L 150 450" />
      </g>

      {/* pulse traveling along main path */}
      <circle r="4" fill="#c3f5ff">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M 90 380 L 220 260 L 340 320 L 470 150"
        />
      </circle>

      {/* nodes */}
      {[
        { x: 90, y: 380, r: 6 },
        { x: 220, y: 260, r: 8 },
        { x: 300, y: 140, r: 5 },
        { x: 340, y: 320, r: 7 },
        { x: 470, y: 150, r: 9 },
        { x: 540, y: 220, r: 5 },
        { x: 470, y: 400, r: 5 },
        { x: 150, y: 450, r: 4 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill="#00daf3" opacity="0.15" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#c3f5ff" />
        </g>
      ))}
    </svg>
  );
}
