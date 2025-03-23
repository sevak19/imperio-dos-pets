import React, { useState } from "react";
import { Scissors, Syringe, Stethoscope, Bath, HeartPulse } from "lucide-react";
import { LiaToothSolid } from "react-icons/lia";
import Modal from "./modal";
import ServiceCard from "./ServiceCard";

const Services = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    wpplink: string;
    img: string;
  } | null>(null);

  const openModal = (title: string, description: string, wpplink: string, img: string) => {
    setModalContent({ title, description, wpplink, img });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div id="services" className="py-16 bg-customGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Stethoscope className="h-8 w-8" />}
            title="Consultas"
            description="Atendimento personalizado para diagnósticos precisos e tratamentos eficazes."
            openModal={openModal}
            wpplink="https://wa.me/5531994947303?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
            img="/dog1.png"
          />
          <ServiceCard
            icon={<Scissors className="h-8 w-8" />}
            title="Banho e Tosa"
            description="Cuidados estéticos e higiênicos para deixar seu pet sempre bonito e confortável."
            openModal={openModal}
            wpplink="https://wa.me/5531994947303?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Banho%20e%20Tosa."
            img="/cat1.png"
          />
          <ServiceCard
            icon={<Syringe className="h-8 w-8" />}
            title="Vacinação"
            description="Proteção completa para prevenir doenças e manter seu pet saudável."
            openModal={openModal}
            wpplink="https://wa.me/5531994947303?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Vacinação."
            img="/dog2.png"
          />
          <ServiceCard
            icon={<Bath className="h-8 w-8" />}
            title="Pet Shop"
            description="Produtos e acessórios"
            openModal={openModal}
            wpplink="https://wa.me/5531994947303?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20Produtos%20e%20Acessórios."
            img="/cat2.png"
          />
          <ServiceCard
            icon={<LiaToothSolid className="h-8 w-8" />}
            title="Tartarectomia"
            description="Limpeza e higiene dentária do seu pet"
            openModal={openModal}
            wpplink="https://wa.me/5531994947303?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Tartarectomia."
            img="/dog3.png"
          />
          <ServiceCard
            icon={<HeartPulse className="h-8 w-8" />}
            title="Cirurgia"
            description="Procedimentos cirúrgicos seguros e realizados por profissionais experientes."
            openModal={openModal}
            wpplink="https://wa.me/5531994947303?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20Procedimentos%20Cirúrgicos."
            img="/cat3.png"
          />
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && modalContent && (
        <Modal
          title={modalContent.title}
          description={modalContent.description}
          wpplink={modalContent.wpplink}
          img={modalContent.img}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Services;
