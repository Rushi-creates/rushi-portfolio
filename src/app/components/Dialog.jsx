// components/Dialog.js
import React from 'react';

const Dialog = ({ isOpen, onClose, title, imageSrc, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 p-4">
      <div className="bg-black p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-red-800 text-2xl"
          aria-label="Close dialog"
        >
          &times;
        </button>
        <div className="relative">
          {imageSrc && (
            <div className="w-full h-80 bg-black flex items-center justify-center overflow-hidden rounded-lg mb-4 ">
              <img
                src={imageSrc}
                alt="Dialog Image"
                className="object-contain w-full h-full"
              />
            </div>
          )}
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
