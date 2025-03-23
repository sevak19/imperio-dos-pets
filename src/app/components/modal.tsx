import React from "react";

interface ModalProps {
  title: string;
  description: string;
  wpplink: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, closeModal, wpplink}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {wpplink && (
          <a target="_blank" href={wpplink} rel="noopener noreferrer">
            <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4">
              Entre em Contato
            </button>
          </a>
        )}
        <button onClick={closeModal} className="bg-purple-600 text-white py-2 px-4 rounded-md">
            Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;