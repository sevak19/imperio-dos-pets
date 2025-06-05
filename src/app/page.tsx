"use client"; // Adicione essa linha no início do arquivo

import React, { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import AboutUs from "./components/about";
import Gallery from "./components/gallery";
import GradientSeparator from "./components/GradientSeparator";


function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const inputname = document.querySelector('input[name="name"]') as HTMLInputElement;
    const inputemail = document.querySelector('input[name="email"]') as HTMLInputElement;
    const inputnumero = document.querySelector('input[name="numero"]') as HTMLInputElement;
    const inputmessage = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
  
    // Transforme os dados antes de enviá-los para a API
    const formDataConverted = {
      nome: data.name,
      email: data.email,
      numero: data.numero,
      mensagem: data.message,
    };
  
    console.log("Form Data: ", formDataConverted); // Verifique no console
  
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
      if(result) {
        inputname.value = "";
        inputemail.value = "";
        inputnumero.value = "";
        inputmessage.value = "";
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    } finally {
      setIsLoading(false);  // Desativa o carregamento
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Added sticky positioning */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <AboutUs />

      <GradientSeparator />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">
                Entre em Contato
              </h2>
              <div className="mt-8 space-y-6">
                <ContactInfo
                  icon={<MapPin />}
                  text="Rua João Arantes, 341 - Cidade Nova, Belo Horizonte, Brasil"
                />
                <ContactInfo icon={<Phone />} text="(31) 9530-6014" />
                <ContactInfo icon={<Clock />} text="Seg-Sex: 9h às 18h" />
                <ContactInfo icon={<Clock />} text="Sab: 9h às 12h" />
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  className={`w-full ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600'} text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors`}
                  disabled={isLoading}  // Desativa o botão quando está enviando
                >
                  {isLoading ? (
                    <span>Enviando...</span>  // Mensagem de loading
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* Botão flutuante do WhatsApp */}
        <a
          href="https://wa.me/553195306014?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
        </a>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Império dos Pets"
                width={150}
                height={150}
              />
            </div>
            <div className="mt-4 md:mt-0">
              <p>&copy; 2025 Império dos Pets. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center">
      <div className="text-purple-600">{icon}</div>
      <span className="ml-3 text-gray-600">{text}</span>
    </div>
  );
}

export default App;
