"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void; // Make onClose optional
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-[20px] w-[90%] sm:max-w-[500px]">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
