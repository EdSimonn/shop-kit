/** @format */

import React, { useEffect, useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // This allows us to accept any valid React children in the Drawer component.
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Adjust the timing based on your transition duration in CSS.
  };
  return (
    <div
      className={`fixed inset-0 overflow-hidden z-50 transition-opacity ${
        isOpen
          ? "ease-out opacity-100 pointer-events-auto"
          : "ease-in opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity ${
            isOpen ? "bg-gray-500 opacity-75" : "bg-transparent opacity-0"
          }`}
          onClick={handleClose}
        />

        <section className="absolute inset-y-0 left-0 pr-10 max-w-full flex sm:pr-16 outline-none">
          <div className="w-screen max-w-sm">
            <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
              <div className="flex-1 h-0 overflow-y-auto">
                <div className="py-6 px-4 space-y-6">{children}</div>
              </div>
              <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                <button
                  onClick={onClose}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Drawer;
