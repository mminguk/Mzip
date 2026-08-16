import '../../styles/Description.css';

export default function Description({ description }) {
  return (
    <section className="description-section">
      <h3>설명</h3>
      <p>{description}</p>
    </section>
  );
}
