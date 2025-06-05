"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <section id="gallery" className="pt-12 pb-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 text-center">
          O carinho que seu pet merece
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          slidesPerView={1}
          className="gallery-swiper"
        >
          {["galeria.png", "galeria.png"].map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={`/${img}`}
                  alt={`Imagem ${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !text-black"></div>
          <div className="swiper-button-next !text-black"></div>
        </Swiper>

        {/* Paginação bem próxima à imagem */}
        <div className="custom-pagination mt-2 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Gallery;
