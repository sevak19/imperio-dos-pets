import React from "react";
import Image from "next/image";

interface ModalProps {
  title: string;
  description: string;
  wpplink: string;
  img: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, closeModal, wpplink, img}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Image
            src={img}
            alt="petImage"
            width={500}
            height={250}
            objectFit="fit"
            className="rounded-lg mb-4"
        />
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