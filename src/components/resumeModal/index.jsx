import "./index.scss";

export default function ResumeModal() {
  const pdfUrl = "/sthireveedhi.pdf"; // keep this name in /public

  return (
    <div className="ph-resume">
      <div className="ph-resume__row">
        <a className="ph-resume__btn ph-resume__btn--primary" href={pdfUrl} download>
          Download PDF
        </a>
        <a className="ph-resume__btn" href={pdfUrl} target="_blank" rel="noreferrer">
          Open in new tab
        </a>
      </div>

      <div className="ph-resume__frameWrap">
        <object className="ph-resume__obj" data={pdfUrl} type="application/pdf">
          <iframe title="Resume" className="ph-resume__frame" src={pdfUrl} />
        </object>

        <div className="ph-resume__fallback">
          If the PDF doesn’t render here, use <b>Open in new tab</b> or <b>Download PDF</b>.
        </div>
      </div>
    </div>
  );
}