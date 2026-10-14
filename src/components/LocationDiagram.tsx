/**
 * Location context map for the county connection section.
 *
 * The county boundary, highways, and waterways are drawn from U.S. Census
 * TIGERweb geodata (county 01073, primary roads, areal hydrography), and the
 * Brighton and Birmingham markers sit at their real coordinates. The "program
 * region" label is a planning concept, not an official government district,
 * and the marker points are approximate — this is a context illustration, not
 * a survey-accurate or official map.
 */

export function LocationDiagram() {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          background: 'var(--navy)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          border: '1px solid var(--line)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static
            exported SVG; a plain img keeps it cacheable and works without JS */}
        <img
          src="/jefferson-county-map.svg"
          alt="Map of Jefferson County, Alabama showing Brighton, a municipality in the county, and the Birmingham region."
          width={1440}
          height={1080}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      <figcaption
        className="table-note"
        style={{ marginTop: '0.7rem', maxWidth: '60ch' }}
      >
        County boundary, highways, and waterways drawn from U.S. Census TIGER
        data; marker points are approximate. The program region label is a
        planning concept, not an official government district, and this is a
        context illustration — not a survey-accurate or official map.
      </figcaption>
    </figure>
  );
}
