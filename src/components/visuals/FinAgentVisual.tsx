function bars(seed: number, count: number) {
  const values: number[] = [];
  let v = seed;
  for (let i = 0; i < count; i++) {
    v = (v * 9301 + 49297) % 233280;
    values.push(0.2 + (v / 233280) * 0.75);
  }
  return values;
}

export default function FinAgentVisual() {
  const series = bars(17, 24);

  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Financial data visualization with glowing bars and a network overlay"
    >
      <rect width="400" height="220" fill="#0e0e0e" />
      <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={220} />
        ))}
      </g>

      {/* bars */}
      <g>
        {series.map((h, i) => {
          const barW = 400 / series.length;
          const height = h * 150;
          return (
            <rect
              key={i}
              x={i * barW + 3}
              y={190 - height}
              width={barW - 6}
              height={height}
              fill="#00daf3"
              opacity={0.15 + h * 0.5}
            />
          );
        })}
      </g>

      {/* trend line */}
      <polyline
        points={series
          .map((h, i) => `${(i * 400) / series.length + 400 / series.length / 2},${190 - h * 150 - 10}`)
          .join(" ")}
        fill="none"
        stroke="#c3f5ff"
        strokeWidth="2"
        opacity="0.9"
      />

      <line x1="0" y1="190" x2="400" y2="190" stroke="#849396" strokeOpacity="0.4" />

      {/* floating data node */}
      <circle cx="330" cy="45" r="4" fill="#c3f5ff">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="330" cy="45" r="10" fill="#00daf3" opacity="0.15" />
    </svg>
  );
}
