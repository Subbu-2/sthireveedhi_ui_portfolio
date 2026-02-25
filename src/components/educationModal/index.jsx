import edu from "../../content/education.json";
import "./index.scss";

export default function EducationModal() {
  const items = edu.items || [];

  return (
    <div className="ph-em">
      <div className="ph-em__lead">Academic background and key highlights.</div>

      <div className="ph-em__grid">
        {items.map((e, idx) => (
          <div key={`${e.school}-${idx}`} className="ph-em__card">
            <div className="ph-em__top">
              <div>
                <div className="ph-em__school">{e.school}</div>
                <div className="ph-em__degree">{e.degree}{e.field ? ` • ${e.field}` : ""}</div>
              </div>

              <div className="ph-em__meta">
                <div className="ph-em__dates">{e.dates}</div>
                <div className="ph-em__loc">{e.location}</div>
              </div>
            </div>

            {Array.isArray(e.highlights) && e.highlights.length > 0 && (
              <ul className="ph-em__bullets">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}