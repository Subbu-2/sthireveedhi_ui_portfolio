import certs from "../../content/certifications.json";
import "./index.scss";

function CredLink({ url }) {
  if (!url) return null;
  return (
    <a className="ph-cfm__link" href={url} target="_blank" rel="noreferrer">
      Credential →
    </a>
  );
}

export default function CertificationsModal() {
  const items = certs.items || [];

  return (
    <div className="ph-cfm">
      <div className="ph-cfm__lead">Certifications and credentials.</div>

      <div className="ph-cfm__grid">
        {items.map((c, idx) => (
          <div key={`${c.name}-${idx}`} className="ph-cfm__card">
            <div className="ph-cfm__top">
              <div>
                <div className="ph-cfm__name">{c.name}</div>
                <div className="ph-cfm__issuer">{c.issuer}</div>
              </div>

              <div className="ph-cfm__meta">
                <div className="ph-cfm__dates">{c.dates}</div>
                <CredLink url={c.credentialUrl} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}