import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  width?: string; // Optional custom width
  height?: string; // Optional custom height
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, width = "900px", height = "400px", children }) => {
  if (!open) return null; // Don't render if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the overlay
      >
        <button className="close-button" onClick={onClose}>
          &times; {/* Close button */}
        </button>
        {children}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000; // Ensure it overlays other content
        }
        .modal-content {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          position: relative; // Ensure the close button is positioned correctly
          padding: 20px;
          max-width: 100%;
          max-height: 100%;
          overflow: auto; // Allow scrolling if content is too long
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Modal;
