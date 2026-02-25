import { useState } from "react";
import contact from "../../content/contact.json";
import "./index.scss";

function Row({ label, value, href }) {
  if (!value) return null;
  return (
    <div className="ph-cm__row">
      <div className="ph-cm__label">{label}</div>
      {href ? (
        <a className="ph-cm__value ph-cm__value--link" href={href} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <div className="ph-cm__value">{value}</div>
      )}
    </div>
  );
}

export default function ContactModal() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!contact.email) return;
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  };

  return (
    <div className="ph-cm">
      <div className="ph-cm__note">{contact.note}</div>

      <div className="ph-cm__card">
        <Row label="Email" value={contact.email} />
        <Row label="LinkedIn" value="Open profile" href={contact.linkedin} />
        <Row label="GitHub" value="Open profile" href={contact.github} />
        <Row label="Portfolio" value="Open site" href={contact.portfolio} />
      </div>

      <div className="ph-cm__actions">
        {contact.email && (
          <>
            <button type="button" className="ph-cm__btn ph-cm__btn--primary" onClick={copyEmail}>
              {copied ? "Copied!" : "Copy email"}
            </button>
            <a className="ph-cm__btn" href={`mailto:${contact.email}`}>
              Email me
            </a>
          </>
        )}

        {contact.linkedin && (
          <a className="ph-cm__btn" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}