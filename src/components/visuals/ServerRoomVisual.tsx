export default function ServerRoomVisual() {
  const racks = [40, 100, 160, 220, 280, 340];

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Server room rack visualization with glowing status indicators"
    >
      <rect width="400" height="400" fill="#0a0a0a" />

      {/* perspective floor lines */}
      <g stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={i * 50} y1={400} x2={200} y2={140} />
        ))}
      </g>

      {/* rack columns receding */}
      {racks.map((x, i) => {
        const scale = 1 - i * 0.11;
        const w = 34 * scale;
        const h = 260 * scale;
        const topY = 340 - h;
        return (
          <g key={x}>
            <rect
              x={x - w / 2}
              y={topY}
              width={w}
              height={h}
              rx="3"
              fill="#161616"
              stroke="#3b494c"
              strokeWidth="1"
            />
            {Array.from({ length: 7 }).map((_, j) => (
              <rect
                key={j}
                x={x - w / 2 + w * 0.15}
                y={topY + h * 0.08 + j * (h * 0.12)}
                width={w * 0.7}
                height={h * 0.05}
                fill="#00daf3"
                opacity={0.25 + ((i + j) % 3) * 0.2}
              >
                <animate
                  attributeName="opacity"
                  values={`${0.2 + ((i + j) % 3) * 0.15};${0.6};${0.2 + ((i + j) % 3) * 0.15}`}
                  dur={`${2 + ((i + j) % 4)}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>
        );
      })}

      {/* ambient glow */}
      <ellipse cx="200" cy="360" rx="220" ry="40" fill="#00daf3" opacity="0.08" />
      <ellipse cx="200" cy="150" rx="120" ry="30" fill="#00daf3" opacity="0.06" />
    </svg>
  );
}
