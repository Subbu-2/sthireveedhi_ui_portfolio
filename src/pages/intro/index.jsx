import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../../components/hero";
import SectionLinkGrid from "../../components/sectionLinkGrid";
import SectionModal from "../../components/sectionModal";
import Previews from "../../components/previews";
import "./index.scss";

const ALLOWED = new Set([
  "experience",
  "education",
  "certifications",
  "skills",
  "projects",
  "contact",
  "resume"
]);

export default function IntroPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const view = useMemo(() => {
    const v = (searchParams.get("view") || "").toLowerCase();
    return ALLOWED.has(v) ? v : "";
  }, [searchParams]);

  const openView = (key) => {
    setSearchParams({ view: key });
  };

  const closeView = () => {
    setSearchParams({});
  };

  return (
    <div className="ph-page">
      <div className="ph-page__wrap">
        <Hero onOpen={openView} />
        <Previews onOpen={openView} />
        <SectionLinkGrid onOpen={openView} />

        <SectionModal view={view} onClose={closeView} />
      </div>
    </div>
  );
}