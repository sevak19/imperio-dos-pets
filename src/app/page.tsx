import React from "react";
import {
  Heart,
  MapPin,
  Phone,
  Clock,
  Scissors,
  Syringe,
  Stethoscope,
  Bath,
} from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Added sticky positioning */}
      <Header></Header>

      {/* Hero Section */}
      <Hero></Hero>
      {/* Services Section */}
      <div id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Stethoscope className="h-8 w-8" />}
              title="Consultas"
              description="Atendimento veterinário completo"
            />
            <ServiceCard
              icon={<Scissors className="h-8 w-8" />}
              title="Banho e Tosa"
              description="Cuidados com a higiene do seu pet"
            />
            <ServiceCard
              icon={<Syringe className="h-8 w-8" />}
              title="Vacinação"
              description="Proteção e prevenção"
            />
            <ServiceCard
              icon={<Bath className="h-8 w-8" />}
              title="Pet Shop"
              description="Produtos e acessórios"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Sobre Nós
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Com mais de 10 anos de experiência, o Império dos Pets se dedica a
            oferecer o melhor cuidado para seu animal de estimação. Nossa equipe
            de profissionais qualificados está sempre pronta para atender você e
            seu pet com todo o carinho e atenção que merecem.
          </p>
        </div>
      </div>

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
                  text="Rua dos Pets, 123 - Centro"
                />
                <ContactInfo icon={<Phone />} text="(11) 99999-9999" />
                <ContactInfo icon={<Clock />} text="Seg-Sáb: 8h às 19h" />
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-semibold">
                Império dos Pets
              </span>
            </div>
            <div className="mt-4 md:mt-0">
              <p>&copy; 2024 Império dos Pets. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
