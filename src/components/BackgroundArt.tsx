/**
 * Decorative, map-inspired line art for hero bands.
 * This is an abstract geometric pattern — it is NOT a map or photograph of
 * Brighton, Alabama, and makes no geographic claim.
 */

export function BackgroundArt({ variant = 'hero' }: { variant?: 'hero' | 'page' }) {
  const id = variant === 'hero' ? 'art-hero' : 'art-page';
  return (
    <svg
      className="hero-art"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 640"
    >
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#17374E" />
          <stop offset="100%" stopColor="#102B3F" />
        </linearGradient>
        <pattern
          id={`${id}-grid`}
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="rgba(246,244,237,0.07)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="1200" height="640" fill={`url(#${id}-fade)`} />
      <rect width="1200" height="640" fill={`url(#${id}-grid)`} />
      {/* Contour-style curves, evoking a planning map */}
      <g fill="none" stroke="rgba(200,164,93,0.28)" strokeWidth="1.6">
        <path d="M-40 470 C 180 380, 320 560, 560 470 S 980 320, 1260 420" />
        <path d="M-40 520 C 200 440, 360 600, 620 510 S 1020 380, 1260 470" opacity="0.7" />
        <path d="M-40 420 C 160 330, 300 500, 520 420 S 940 270, 1260 360" opacity="0.5" />
      </g>
      <g fill="none" stroke="rgba(37,99,79,0.55)" strokeWidth="2">
        <path d="M-20 180 C 220 120, 380 260, 640 200 S 1040 90, 1240 160" />
        <path d="M-20 230 C 240 170, 420 300, 680 240 S 1060 140, 1240 210" opacity="0.6" />
      </g>
      {/* Nodes and connectors — a network of partners */}
      <g stroke="rgba(246,244,237,0.25)" strokeWidth="1.2">
        <line x1="880" y1="90" x2="1010" y2="170" />
        <line x1="1010" y1="170" x2="1120" y2="90" />
        <line x1="880" y1="90" x2="950" y2="30" />
        <line x1="1010" y1="170" x2="1080" y2="280" />
      </g>
      <g fill="rgba(200,164,93,0.65)">
        <circle cx="880" cy="90" r="5" />
        <circle cx="1010" cy="170" r="6.5" />
        <circle cx="1120" cy="90" r="4.5" />
        <circle cx="950" cy="30" r="4" />
        <circle cx="1080" cy="280" r="5" />
      </g>
    </svg>
  );
}
