export default function DataFlowVisual() {
  const lanes = [40, 90, 140, 190];

  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Horizontal data synchronization streams flowing between server nodes"
    >
      <rect width="400" height="220" fill="#0e0e0e" />
      <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 55} x2={400} y2={i * 55} />
        ))}
      </g>

      {/* server node blocks on left and right */}
      {[20, 360].map((x) => (
        <g key={x}>
          <rect x={x - 12} y={70} width="24" height="80" rx="4" fill="#201f1f" stroke="#3b494c" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={x - 8} y={80 + i * 22} width="16" height="10" rx="2" fill="#00daf3" opacity="0.5" />
          ))}
        </g>
      ))}

      {/* flow lines */}
      <g stroke="#00daf3" strokeOpacity="0.35" strokeWidth="1.5" fill="none">
        {lanes.map((y) => (
          <line key={y} x1="40" y1={y} x2="360" y2={y} />
        ))}
      </g>

      {/* traveling packets */}
      {lanes.map((y, i) => (
        <circle key={y} cy={y} r="3.5" fill="#c3f5ff">
          <animate
            attributeName="cx"
            values="40;360;40"
            dur={`${3 + i * 0.6}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
