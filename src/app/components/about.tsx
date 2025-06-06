import BotaoTireDuvidas from "@/app/components/BotaoTireDuvidas";

const AboutUs = () => {
  return (
    <div id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagem à esquerda */}
          <div className="flex justify-center">
            <img
              src="/sobrenos.png" // substitua com o caminho correto da imagem
              alt="Sobre nós"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Título, texto e botão à direita */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
            <p className="text-lg text-gray-600 mb-6">
              Na Império dos Pets a nossa missão é garantir a qualidade de vida e o bem-estar dos seus animais de estimação. Com uma equipe dedicada e apaixonada, oferecemos uma ampla gama de serviços para cuidar da saúde e felicidade dos seus amigos peludos.
            </p>

            {/* Botão */}
            <BotaoTireDuvidas />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
