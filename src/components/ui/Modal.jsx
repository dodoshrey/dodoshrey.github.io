import React, { useRef, useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-4xl max-w-4xl w-full p-16 relative"
        style={{ maxHeight: "80vh" }} // Set max height for modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="overflow-y-auto" style={{ maxHeight: "65vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;