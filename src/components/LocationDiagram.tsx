/**
 * Illustrative location context diagram.
 *
 * This is a labeled schematic, NOT an official or survey-accurate map, and
 * not a photograph. It communicates only: Brighton is a municipality in
 * Jefferson County, Alabama, within the Birmingham region. County program
 * regions are labeled as program regions — not official government districts.
 */

export function LocationDiagram() {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          background: 'var(--navy)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(1rem, 3vw, 1.8rem)',
          border: '1px solid var(--line)',
        }}
      >
        <svg
          viewBox="0 0 520 360"
          role="img"
          aria-labelledby="locdiag-title locdiag-desc"
          style={{ width: '100%', height: 'auto' }}
        >
          <title id="locdiag-title">
            Illustrative context diagram: Brighton in Jefferson County, Alabama
          </title>
          <desc id="locdiag-desc">
            A simplified schematic showing Brighton as a municipality within
            Jefferson County, Alabama, near the Birmingham region. The diagram
            is illustrative and not to scale.
          </desc>
          <defs>
            <linearGradient id="county-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#17374E" />
              <stop offset="100%" stopColor="#12303F" />
            </linearGradient>
          </defs>

          {/* County outline — abstract, stylized boundary */}
          <path
            d="M70 60 L 300 40 L 450 80 L 470 200 L 400 320 L 210 330 L 90 260 Z"
            fill="url(#county-fill)"
            stroke="rgba(200,164,93,0.75)"
            strokeWidth="2"
          />

          {/* Program region shading — labeled as program region, not a district */}
          <path
            d="M240 130 L 380 120 L 400 220 L 280 250 Z"
            fill="rgba(37,99,79,0.35)"
            stroke="rgba(37,99,79,0.8)"
            strokeWidth="1.5"
            strokeDasharray="6 5"
          />
          <text
            x="318"
            y="190"
            textAnchor="middle"
            fill="rgba(246,244,237,0.75)"
            fontFamily="Manrope, sans-serif"
            fontSize="11"
            fontWeight="600"
          >
            Program region
          </text>
          <text
            x="318"
            y="206"
            textAnchor="middle"
            fill="rgba(246,244,237,0.55)"
            fontFamily="Manrope, sans-serif"
            fontSize="10"
          >
            (illustrative — not an official district)
          </text>

          {/* Region label */}
          <text
            x="150"
            y="110"
            fill="rgba(246,244,237,0.6)"
            fontFamily="Manrope, sans-serif"
            fontSize="12"
            fontWeight="700"
            letterSpacing="1.5"
          >
            JEFFERSON COUNTY, AL
          </text>

          {/* Birmingham region reference */}
          <circle cx="300" cy="95" r="6" fill="rgba(246,244,237,0.5)" />
          <text
            x="314"
            y="100"
            fill="rgba(246,244,237,0.65)"
            fontFamily="Open Sans, sans-serif"
            fontSize="12"
          >
            Birmingham region
          </text>

          {/* Brighton node */}
          <circle cx="190" cy="205" r="10" fill="#C8A45D" />
          <circle
            cx="190"
            cy="205"
            r="17"
            fill="none"
            stroke="rgba(200,164,93,0.55)"
            strokeWidth="1.5"
          />
          <text
            x="190"
            y="243"
            textAnchor="middle"
            fill="#F6F4ED"
            fontFamily="Manrope, sans-serif"
            fontSize="15"
            fontWeight="800"
          >
            Brighton
          </text>
          <text
            x="190"
            y="261"
            textAnchor="middle"
            fill="rgba(246,244,237,0.7)"
            fontFamily="Open Sans, sans-serif"
            fontSize="11.5"
          >
            A municipality in Jefferson County
          </text>
        </svg>
      </div>
      <figcaption
        className="table-note"
        style={{ marginTop: '0.7rem', maxWidth: '60ch' }}
      >
        Illustrative context diagram — not to scale and not an official map.
        Proposed program regions are planning concepts, not government
        districts. An accurate regional map will replace this when supplied.
      </figcaption>
    </figure>
  );
}
