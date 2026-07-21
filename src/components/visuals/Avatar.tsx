function hueFromName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 360;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Avatar({ name, className }: { name: string; className?: string }) {
  const hue = hueFromName(name);

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`Avatar placeholder for ${name}`}
    >
      <defs>
        <linearGradient id={`av-grad-${hue}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#201f1f" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#av-grad-${hue})`} />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#00daf3" strokeOpacity="0.25" strokeWidth="1.5" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-jetbrains-mono), monospace"
        fontSize="30"
        fontWeight="600"
        fill="#c3f5ff"
      >
        {initials(name)}
      </text>
    </svg>
  );
}
