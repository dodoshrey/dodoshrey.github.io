import React, { useRef, useEffect } from "react";

const Modal = ({ open, onClose, children, ariaLabel = "Modal Dialog" }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose?.();
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose?.();
      }
      // Trap focus inside modal
      if (event.key === "Tab" && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];
        if (!event.shiftKey && document.activeElement === lastEl) {
          event.preventDefault();
          firstEl.focus();
        }
        if (event.shiftKey && document.activeElement === firstEl) {
          event.preventDefault();
          lastEl.focus();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    // Focus modal on open
    setTimeout(() => {
      if (modalRef.current) {
        const focusable = modalRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) focusable.focus();
      }
    }, 0);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="presentation"
      aria-hidden="false"
      style={{ margin: 0, padding: 0 }}
    >
      <div
        ref={modalRef}
        className="bg-blue-400 dark:bg-gray-800 rounded-xl shadow-4xl max-w-4xl w-full p-3 sm:p-6 relative"
        style={{ maxHeight: "80vh" }}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-12 text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Close modal"
        >
          ×
        </button>
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "65vh", scrollbarGutter: "stable both-edges", scrollbarWidth: "thin",  }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;