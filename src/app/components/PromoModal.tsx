"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type PromoModalProps = {
  onClose: () => void;
  onWhatsApp: () => void;
};

const PromoModal = ({ onClose, onWhatsApp }: PromoModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl border border-purple-300 overflow-hidden w-full max-w-md p-6"
          initial={{ y: -40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Botão de fechar */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-all"
          >
            <X size={24} />
          </button>

          {/* Título animado */}
          <motion.h2
            className="text-center text-xl font-bold text-purple-700 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            🎉 Promoção Especial! 🎉
          </motion.h2>

          {/* Imagem com animação e hover */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/promocao.png"
              alt="Promoção"
              width={350}
              height={350}
              className="rounded-2xl shadow-xl border-4 border-purple-200 transition duration-300 hover:scale-105 hover:border-purple-400"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Botão WhatsApp */}
          <motion.button
            onClick={onWhatsApp}
            className="relative w-full py-3 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 via-green-400 to-green-600 hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eu Quero!
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoModal;
