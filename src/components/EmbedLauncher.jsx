import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function EmbedLauncher({
  icon,
  label,
  hint,
  title,
  src,
  height = 520,
  heightMobile = 380,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="embed">
      {!open ? (
        <button
          type="button"
          className="embed__cta"
          onClick={() => setOpen(true)}
        >
          {icon}
          <span>
            <span className="embed__cta-label">{label}</span>
            <small>{hint}</small>
          </span>
        </button>
      ) : (
        <div className="embed__frame">
          <div className="embed__head">
            <span>{title}</span>
            <button
              type="button"
              className="embed__close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <FiX />
            </button>
          </div>
          <iframe
            src={src}
            title={title}
            loading="lazy"
            style={{ "--embed-h": `${height}px`, "--embed-h-m": `${heightMobile}px` }}
          />
        </div>
      )}
    </div>
  );
}
