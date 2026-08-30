// A proper paper-airplane/dart silhouette (the classic "send" glyph: nose,
// swept body, folded centerline) shared by the loading screen, the easter
// egg, and the flight log's empty-photo state, instead of each hand-rolling
// a similar but slightly different dart shape.
//
// Returns the path fragment only (no wrapping <svg>) so it can drop into
// whatever viewBox="0 0 24 24" fill="none" svg — plain or motion.svg,
// animated or not — the caller already has.
export default function PaperPlaneGlyph() {
  return (
    <>
      <path d="M22 2 15 22 11 13 2 9Z" fill="currentColor" />
      <path d="M22 2 11 13" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.45" />
    </>
  );
}
