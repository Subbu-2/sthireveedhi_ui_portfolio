import projects from "../../content/projects.json";
import "./index.scss";

function LinkBtn({ href, label }) {
  if (!href) return null;
  return (
    <a className="ph-pm__linkBtn" href={href} target="_blank" rel="noreferrer">
      {label} →
    </a>
  );
}

export default function ProjectsModal() {
  const items = projects.items || [];

  return (
    <div className="ph-pm">
      <div className="ph-pm__top">
        <div className="ph-pm__lead">
          A few projects that show my style: clean architecture, strong delivery, and production readiness.
        </div>
      </div>

      <div className="ph-pm__grid">
        {items.map((p) => (
          <div key={p.title} className="ph-pm__card">
            <div className="ph-pm__titleRow">
              <div className="ph-pm__title">{p.title}</div>
              <div className="ph-pm__links">
                <LinkBtn href={p.links?.live} label="Live" />
                <LinkBtn href={p.links?.repo} label="Repo" />
              </div>
            </div>

            <div className="ph-pm__tagline">{p.tagline}</div>

            <ul className="ph-pm__bullets">
              {(p.highlights || []).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="ph-pm__stack">
              {(p.stack || []).map((s) => (
                <span key={s} className="ph-pm__pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}