import exp from "../../content/experience.json";
import "./index.scss";

export default function ExperienceModal() {
  const items = exp.items || [];

  return (
    <div className="ph-xm">
      <div className="ph-xm__lead">
        Roles I’ve held, with impact focused on scale, reliability, and delivery.
      </div>

      <div className="ph-xm__timeline">
        {items.map((r, idx) => (
          <div key={`${r.company}-${r.title}-${idx}`} className="ph-xm__item">
            <div className="ph-xm__left">
              <div className="ph-xm__dot" />
              {idx !== items.length - 1 && <div className="ph-xm__line" />}
            </div>

            <div className="ph-xm__card">
              <div className="ph-xm__topRow">
                <div className="ph-xm__role">
                  <div className="ph-xm__title">{r.title}</div>
                  <div className="ph-xm__company">{r.company}</div>
                </div>

                <div className="ph-xm__meta">
                  <div className="ph-xm__dates">{r.dates}</div>
                  <div className="ph-xm__loc">{r.location}</div>
                </div>
              </div>

              {r.summary && <div className="ph-xm__summary">{r.summary}</div>}

              {Array.isArray(r.impact) && r.impact.length > 0 && (
                <ul className="ph-xm__bullets">
                  {r.impact.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}

              {Array.isArray(r.stack) && r.stack.length > 0 && (
                <div className="ph-xm__stack">
                  {r.stack.map((s) => (
                    <span key={s} className="ph-xm__pill">{s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}