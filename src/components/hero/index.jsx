import profile from "../../content/profile.json";
import "./index.scss";

export default function Hero({ onOpen }) {
  return (
    <section className="ph-hero">
      <div className="ph-hero__inner">
        <div className="ph-hero__badge">{profile.location}</div>

        <h1 className="ph-hero__title">{profile.name}</h1>
        <p className="ph-hero__sub">{profile.headline}</p>

        <p className="ph-hero__summary">{profile.summary}</p>

        <div className="ph-hero__ctaRow">
          <button
            type="button"
            className="ph-hero__btn ph-hero__btn--primary"
            onClick={() => onOpen(profile.cta.primary.view)}
          >
            {profile.cta.primary.label}
          </button>

          <button
            type="button"
            className="ph-hero__btn"
            onClick={() => onOpen(profile.cta.secondary.view)}
          >
            {profile.cta.secondary.label}
          </button>
        </div>

        <div className="ph-hero__highlights">
          {profile.highlights.map((h) => (
            <div key={h} className="ph-hero__chip">{h}</div>
          ))}
        </div>
      </div>
    </section>
  );
}