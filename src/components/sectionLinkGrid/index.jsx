import "./index.scss";

const SECTIONS = [
  { key: "experience", title: "Experience", sub: "Roles & impact" },
  { key: "education", title: "Education", sub: "Degrees & timeline" },
  { key: "certifications", title: "Certifications", sub: "AWS & more" },
  { key: "skills", title: "Skills", sub: "Strength areas" },
  { key: "projects", title: "Projects", sub: "Case studies" },
  { key: "contact", title: "Contact", sub: "Reach me" },
  { key: "resume", title: "Resume", sub: "PDF view" }
];

export default function SectionLinkGrid({ onOpen }) {
  return (
    <section className="ph-grid">
      <div className="ph-grid__titleRow">
        <h2 className="ph-grid__title">Explore</h2>
        <div className="ph-grid__hint">Click a tile to open.</div>
      </div>

      <div className="ph-grid__tiles">
        {SECTIONS.map((s) => (
          <button
            key={s.key}
            type="button"
            className="ph-grid__tile"
            onClick={() => onOpen(s.key)}
          >
            <div className="ph-grid__tileTop">{s.title}</div>
            <div className="ph-grid__tileBot">{s.sub}</div>
          </button>
        ))}
      </div>
    </section>
  );
}