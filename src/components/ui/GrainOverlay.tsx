/**
 * Texture de grain très subtile appliquée à toute la page,
 * générée en SVG (feTurbulence) et encodée en data URI — signature print du guide.
 */
const grainSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>`;

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,${grainSvg}")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
