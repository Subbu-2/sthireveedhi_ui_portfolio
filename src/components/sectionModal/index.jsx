import ModalShell from "../modalShell";
import ProjectsModal from "../projectsModal";
import ResumeModal from "../resumeModal";
import ContactModal from "../contactModal";
import SkillsModal from "../skillsModal";
import ExperienceModal from "../experienceModal";
import EducationModal from "../educationModal";
import CertificationsModal from "../certificationsModal";
import "./index.scss";

function Placeholder({ title }) {
  return (
    <div className="ph-sectionModal__placeholder">
      <div className="ph-sectionModal__big">{title}</div>
      <div className="ph-sectionModal__muted">
        Content will be wired from JSON next.
      </div>
    </div>
  );
}

export default function SectionModal({ view, onClose }) {
  const open = Boolean(view);

  const titleMap = {
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume"
  };

  const title = titleMap[view] || "Details";

  return (
    <ModalShell open={open} title={title} onClose={onClose}>
      {view === "projects" && <ProjectsModal />}
      {view === "experience" && <ExperienceModal />}
      {view === "education" && <EducationModal />}
      {view === "certifications" && <CertificationsModal />}
      {view === "skills" && <SkillsModal />}
      {view === "contact" && <ContactModal />}
      {view === "resume" && <ResumeModal />}
    </ModalShell>
  );
}