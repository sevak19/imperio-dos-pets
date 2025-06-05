import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  wpplink: string;
  img: string;
  openModal: (title: string, description: string, wpplink: string, img: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  openModal,
  wpplink,
  img,
}) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() => openModal(title, description, wpplink, img)}
    >
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">Clique para saber mais!</p>
    </div>
  );
};

export default ServiceCard;
