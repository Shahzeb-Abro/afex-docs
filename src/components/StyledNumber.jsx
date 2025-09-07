export default function StyledNumber({ number }) {
  return (
    <span className="styled-number">
      <span>[</span> {number} <span>]</span>
    </span>
  );
}
