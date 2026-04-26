/**
 * BridgeDivider
 * Decorative minimalist SVG arch nodding to Edmonton's Walterdale Bridge.
 * Sits between the Hero (dark) and the Gallery (light) and visually bridges them.
 */
export function BridgeDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative -mt-px w-full overflow-hidden bg-secondary"
    >
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="block h-[120px] w-full sm:h-[160px] lg:h-[200px]"
        role="presentation"
      >
        <defs>
          <linearGradient id="bridgeFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BDC3C7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#BDC3C7" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="riverFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2C2C2C" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Bridge deck */}
        <line
          x1="0"
          y1="150"
          x2="1440"
          y2="150"
          stroke="#BDC3C7"
          strokeWidth="2"
          strokeOpacity="0.7"
        />

        {/* Twin sleek arches — Walterdale silhouette */}
        <path
          d="M 220 150 Q 530 -30 840 150"
          fill="none"
          stroke="url(#bridgeFade)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 600 150 Q 910 -30 1220 150"
          fill="none"
          stroke="url(#bridgeFade)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Inner faint arch echoes — adds depth */}
        <path
          d="M 240 150 Q 530 -10 820 150"
          fill="none"
          stroke="#BDC3C7"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <path
          d="M 620 150 Q 910 -10 1200 150"
          fill="none"
          stroke="#BDC3C7"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        {/* Suspension cables */}
        {Array.from({ length: 14 }).map((_, i) => {
          const x1 = 240 + (i * (820 - 240)) / 13;
          // arch curve y at x for first arch (quadratic Bezier control y -10)
          const t = i / 13;
          const y1 = (1 - t) * (1 - t) * 150 + 2 * (1 - t) * t * -10 + t * t * 150;
          return (
            <line
              key={`c1-${i}`}
              x1={x1}
              y1={y1}
              x2={x1}
              y2={150}
              stroke="#BDC3C7"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          );
        })}
        {Array.from({ length: 14 }).map((_, i) => {
          const x1 = 620 + (i * (1200 - 620)) / 13;
          const t = i / 13;
          const y1 = (1 - t) * (1 - t) * 150 + 2 * (1 - t) * t * -10 + t * t * 150;
          return (
            <line
              key={`c2-${i}`}
              x1={x1}
              y1={y1}
              x2={x1}
              y2={150}
              stroke="#BDC3C7"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          );
        })}

        {/* Pylons */}
        <line x1="220" y1="150" x2="220" y2="170" stroke="#BDC3C7" strokeWidth="2.5" />
        <line x1="840" y1="150" x2="840" y2="170" stroke="#BDC3C7" strokeWidth="2.5" />
        <line x1="600" y1="150" x2="600" y2="170" stroke="#BDC3C7" strokeWidth="2.5" />
        <line x1="1220" y1="150" x2="1220" y2="170" stroke="#BDC3C7" strokeWidth="2.5" />

        {/* Riverbank transition */}
        <rect x="0" y="170" width="1440" height="30" fill="url(#riverFade)" />
      </svg>

      {/* Tiny location label */}
      <div className="absolute inset-x-0 bottom-2 text-center">
        <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-accent/60">
          ◇ Walterdale · Edmonton ◇
        </span>
      </div>
    </div>
  );
}
