import skills from "../../content/skills.json";
import "./index.scss";

export default function SkillsModal() {
  return (
    <div className="ph-sm">
      <div className="ph-sm__lead">
        A quick snapshot of what I work with regularly.
      </div>

      <div className="ph-sm__grid">
        {(skills.groups || []).map((g) => (
          <div key={g.title} className="ph-sm__card">
            <div className="ph-sm__title">{g.title}</div>
            <div className="ph-sm__chips">
              {(g.items || []).map((it) => (
                <span key={it} className="ph-sm__chip">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}