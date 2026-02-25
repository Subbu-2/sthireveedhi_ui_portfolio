import projects from "../../content/projects.json";
import "./index.scss";

export default function Previews({ onOpen }) {
  const top = (projects.items || []).slice(0, 2);

  return (
    <section className="ph-previews">
      <div className="ph-previews__row">
        <h2 className="ph-previews__title">Featured</h2>
        <button type="button" className="ph-previews__link" onClick={() => onOpen("projects")}>
          View all →
        </button>
      </div>

      <div className="ph-previews__grid">
        {top.map((p) => (
          <button
            key={p.title}
            type="button"
            className="ph-previews__card"
            onClick={() => onOpen("projects")}
          >
            <div className="ph-previews__cardTop">{p.title}</div>
            <div className="ph-previews__cardMid">{p.tagline}</div>

            <ul className="ph-previews__list">
              {(p.highlights || []).slice(0, 3).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="ph-previews__stack">
              {(p.stack || []).slice(0, 5).map((s) => (
                <span key={s} className="ph-previews__pill">{s}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}