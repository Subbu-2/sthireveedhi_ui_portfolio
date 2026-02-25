import { useEffect, useRef, useState } from "react";
import "./index.scss";

export default function ModalShell({ open, title, children, onClose }) {
  const panelRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(open);
  const [phase, setPhase] = useState(open ? "open" : "closed"); // "opening" | "open" | "closing" | "closed"
  const startYRef = useRef(null);
  const lastYRef = useRef(null);
  const startTRef = useRef(null);

  // Mount / unmount with exit animation
  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // next tick -> opening -> open
      requestAnimationFrame(() => {
        setPhase("opening");
        requestAnimationFrame(() => setPhase("open"));
      });
      return;
    }

    // closing
    if (shouldRender) {
      setPhase("closing");
      const t = setTimeout(() => {
        setPhase("closed");
        setShouldRender(false);
      }, 220); // must match CSS duration
      return () => clearTimeout(t);
    }
  }, [open, shouldRender]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // lock body scroll while rendered
  useEffect(() => {
    if (!shouldRender) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [shouldRender]);

  // focus on open
  useEffect(() => {
    if (phase !== "open") return;
    panelRef.current?.focus();
  }, [phase]);

  const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 767px)").matches;

  const onTouchStart = (e) => {
    if (!isMobile()) return;
    if (!e.touches || e.touches.length !== 1) return;

    // Only allow swipe-close if the modal body is scrolled to top
    const bodyEl = panelRef.current?.querySelector(".ph-modal__body");
    const atTop = !bodyEl || bodyEl.scrollTop <= 0;
    if (!atTop) return;

    const y = e.touches[0].clientY;
    startYRef.current = y;
    lastYRef.current = y;
    startTRef.current = Date.now();
  };

  const onTouchMove = (e) => {
    if (!isMobile()) return;
    if (startYRef.current == null) return;
    if (!e.touches || e.touches.length !== 1) return;

    const y = e.touches[0].clientY;
    lastYRef.current = y;

    const delta = y - startYRef.current;
    if (delta <= 0) return; // only downward

    // Prevent rubber-band scrolling and give a subtle drag feel
    e.preventDefault();

    const panel = panelRef.current;
    if (!panel) return;

    const translate = Math.min(delta, 140);
    panel.style.transform = `translateY(${translate}px)`;
    panel.style.transition = "none";
  };

  const resetPanelTransform = () => {
    const panel = panelRef.current;
    if (!panel) return;
    panel.style.transition = "";
    panel.style.transform = "";
  };

  const onTouchEnd = () => {
    if (!isMobile()) return;
    if (startYRef.current == null) return;

    const delta = (lastYRef.current ?? startYRef.current) - startYRef.current;
    const dt = Math.max(1, Date.now() - (startTRef.current ?? Date.now()));
    const velocity = delta / dt; // px per ms

    // thresholds
    const shouldClose = delta > 90 || velocity > 0.8;

    startYRef.current = null;
    lastYRef.current = null;
    startTRef.current = null;

    if (shouldClose) {
      resetPanelTransform();
      onClose();
    } else {
      // snap back
      const panel = panelRef.current;
      if (panel) {
        panel.style.transition = "transform 180ms ease";
        panel.style.transform = "translateY(0)";
        setTimeout(() => {
          resetPanelTransform();
        }, 190);
      }
    }
  };

  if (!shouldRender) return null;

  const rootClass =
    phase === "open" || phase === "opening"
      ? "ph-modal ph-modal--open"
      : "ph-modal ph-modal--closing";

  return (
    <div className={rootClass} role="dialog" aria-modal="true" aria-label={title}>
      <div className="ph-modal__backdrop" onClick={onClose} />

      <div
        className="ph-modal__panel"
        tabIndex={-1}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="ph-modal__grab" aria-hidden="true" />
        <div className="ph-modal__header">
          <div className="ph-modal__title">{title}</div>
          <button type="button" className="ph-modal__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="ph-modal__body">{children}</div>
      </div>
    </div>
  );
}