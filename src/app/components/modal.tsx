import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  title: string;
  description: string;
  wpplink: string;
  img: string;
  closeModal: () => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: "-10%" },
  visible: { opacity: 1, scale: 1, y: "0%" },
  exit: { opacity: 0, scale: 0.8, y: "10%" },
};

const Modal: React.FC<ModalProps> = ({ title, description, closeModal, wpplink, img }) => {
  const [showCatalog, setShowCatalog] = useState(false);

  const isPharmacy = title === "Farmácia Pet";
  const isPetShop = title === "Pet Shop";

  // Fecha modal ao clicar no backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
  const pharmacyItems = [
    { id: 1, name: "Antibiótico Canino", image: "/catalogo/farmacia/antibiotico.png", available: true },
    { id: 2, name: "Vermífugo para Gatos", image: "/catalogo/farmacia/vermifigo.png", available: false },
    { id: 3, name: "Shampoo Medicinal", image: "/catalogo/farmacia/shampoo.png", available: true },
    { id: 4, name: "Suplemento Vitaminico", image: "/catalogo/farmacia/suplemento.png", available: true },
    { id: 5, name: "Colírio Veterinário", image: "/catalogo/farmacia/colirio.png", available: false },
    { id: 6, name: "Pomada Cicatrizante", image: "/catalogo/farmacia/pomada.png", available: true },
  ];

  const petShopItems = [
    { id: 1, name: "Bola Interativa", image: "/catalogo/petshop/bola.png", available: true },
    { id: 2, name: "Coleira Ajustável", image: "/catalogo/petshop/coleira.png", available: true },
    { id: 3, name: "Ração Premium", image: "/catalogo/petshop/racao.png", available: true },
    { id: 4, name: "Osso de Brinquedo", image: "/catalogo/petshop/osso.png", available: false },
    { id: 5, name: "Arranhador para Gatos", image: "/catalogo/petshop/arranhador.png", available: false },
    { id: 6, name: "Casinha para Cachorros", image: "/catalogo/petshop/casa.png", available: true },
    { id: 7, name: "Tapete Higiênico", image: "/catalogo/petshop/tapete.png", available: true },
  ];


  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {!showCatalog ? (
            <>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 mb-6">{description}</p>
              <Image
                src={img}
                alt="petImage"
                width={500}
                height={250}
                objectFit="contain"
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

              {isPharmacy && (
                <button
                  onClick={() => setShowCatalog(true)}
                  className="bg-purple-600 text-white py-2 px-4 rounded-md ml-2"
                >
                  Catálogo
                </button>
              )}

              {isPetShop && (
                <button
                  onClick={() => setShowCatalog(true)}
                  className="bg-purple-600 text-white py-2 px-4 rounded-md ml-2"
                >
                  Catálogo
                </button>
              )}
            </>
          ) : (
            <>
              {isPharmacy ? (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Farmácia Pet</h3>
                  <p className="text-gray-600 mb-4">Confira nossos medicamentos e suplementos:</p>
                  <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                    {pharmacyItems.map((item) => (
                      <div
                        key={item.id}
                        className={`flex flex-col items-center ${!item.available ? "opacity-50" : ""}`}
                      >
                        <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-lg" />
                        <p className="text-gray-700 text-sm mt-2">{item.name}</p>
                        {!item.available && <span className="text-red-500 text-xs font-bold">Indisponível</span>}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Pet Shop</h3>
                  <p className="text-gray-600 mb-4">Confira nossos produtos para seu pet:</p>
                  <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                    {petShopItems.map((item) => (
                      <div
                        key={item.id}
                        className={`flex flex-col items-center ${!item.available ? "opacity-50" : ""}`}
                      >
                        <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-lg" />
                        <p className="text-gray-700 text-sm mt-2">{item.name}</p>
                        {!item.available && <span className="text-red-500 text-xs font-bold">Indisponível</span>}
                      </div>
                    ))}
                  </div>
                </>
              )}
              <button
                onClick={() => setShowCatalog(false)}
                className="bg-purple-600 text-white py-2 px-4 rounded-md mt-4"
              >
                Voltar
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
