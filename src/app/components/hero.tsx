"use client"

import Image from "next/image";

const Hero = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 112; // This matches our header height of 4rem (64px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
    };
    return ( 
        <div id="home" className="relative bg-customWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Toda a{" "}
                <span className="text-purple-600">excelência veterinária</span>{" "}
                em um só lugar!
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                Cuidamos do seu pet com todo amor e carinho que ele merece.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Agende uma Consulta
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&w=800"
                alt="Happy dog"
                className="rounded-lg shadow-xl"  width={500} height={300}
              />
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Hero;