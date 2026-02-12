export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn-primary no-print"
    >
      Print / Save as PDF
    </button>
  );
}
