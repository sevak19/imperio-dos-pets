
"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function FormularioContato() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.target as HTMLFormElement;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const numero = form.numero.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !numero || !message) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    const formDataConverted = {
      nome: name,
      email,
      numero,
      mensagem: message,
    };

    try {
      const response = await fetch("/api/agendar", {
        method: "POST",
        body: JSON.stringify(formDataConverted),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log("Result: ", result);

      if (result) {
        setSuccessMessage("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        setErrorMessage("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setErrorMessage("Erro ao enviar. Verifique sua conexão.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {successMessage && <p className="text-green-600">{successMessage}</p>}

      <input
        type="text"
        name="name"
        placeholder="Nome"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-black"
      />
      <input
        type="text"
        name="numero"
        placeholder="Telefone de contato"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-black"
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-black"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600"
        } text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors`}
      >
        {isLoading ? (
         <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
               Enviando...
            </span>
         ) : (
            "Enviar Mensagem"
         )}
      </button>
    </form>
  );
}
