"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
    >
      {/* Imagen de fondo con Next/Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Fondo hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Gradiente overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/85 to-zinc-900/70"></div>
      </div>

      {/* Contenido */}
      <div className="container relative z-10 flex flex-col items-center justify-center opacity-0 translate-y-10 animate-fade-in">
        {/* Encabezado */}
        <h1 className="text-[clamp(2rem,5vw,4rem)] sm:text-[clamp(3rem,5vw,5rem)] md:text-[clamp(4rem,5vw,6rem)] font-extrabold text-white mb-6 leading-tight max-w-3xl">
          Soluciones digitales{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            para tu empresa
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-8">
          Sitios web, aplicaciones, sistemas y estrategias pensadas para trabajar de manera conjunta 
          y adaptadas a lo que tu negocio o emprendimiento necesita.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-4 min-h-[48px] bg-orange-400 text-zinc-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 transition transform hover:scale-105"
          >
            Comenzar Proyecto →
          </a>
          <a
            href="#services"
            className="px-8 py-4 min-h-[48px] border border-orange-400 text-orange-400 font-semibold rounded-full hover:bg-orange-400/10 transition transform hover:scale-105"
          >
            Nuestos servicios
          </a>
        </div>
      </div>

      {/* Animación CSS */}
      <style jsx>{`
        @keyframes fade-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
