export default function VisionScanVisual() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Computer vision wireframe scan overlay on a manufactured part"
    >
      <rect width="400" height="220" fill="#0e0e0e" />
      <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={220} />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 55} x2={400} y2={i * 55} />
        ))}
      </g>

      {/* scanned object outline */}
      <polygon
        points="140,60 260,60 290,110 260,170 140,170 110,110"
        fill="none"
        stroke="#849396"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <polygon
        points="140,60 260,60 290,110 260,170 140,170 110,110"
        fill="#00daf3"
        opacity="0.04"
      />

      {/* wireframe mesh inside */}
      <g stroke="#00daf3" strokeOpacity="0.35" strokeWidth="1">
        <line x1="110" y1="110" x2="290" y2="110" />
        <line x1="140" y1="60" x2="140" y2="170" />
        <line x1="200" y1="60" x2="200" y2="170" />
        <line x1="260" y1="60" x2="260" y2="170" />
      </g>

      {/* defect markers */}
      {[
        { x: 175, y: 90 },
        { x: 230, y: 135 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="10" fill="none" stroke="#ffb4ab" strokeWidth="1.5">
            <animate attributeName="r" values="8;14;8" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx={p.x} cy={p.y} r="2.5" fill="#ffb4ab" />
        </g>
      ))}

      {/* scanning laser line */}
      <line x1="0" y1="60" x2="400" y2="60" stroke="#c3f5ff" strokeWidth="1.5" opacity="0.8">
        <animate attributeName="y1" values="50;180;50" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="50;180;50" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}
