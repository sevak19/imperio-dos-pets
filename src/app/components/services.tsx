import React from "react";
import { Scissors, Syringe, Stethoscope, Bath } from "lucide-react";

const Services = () => {
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
  );
};

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
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Services;
