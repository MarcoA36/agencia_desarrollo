"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/hero-bg.webp")`,
        }}
      ></div>

      {/* Capa de color degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/85 to-zinc-900/70"></div>

      {/* Contenido */}
      <div
        className={`container relative z-10 flex flex-col items-center justify-center transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Encabezado */}
        {/* <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
          Potenciamos tu presencia{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">
            digital
          </span>{" "}
          con soluciones web reales.
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-12">
          Sitios web modernos, rápidos y hechos a medida para impulsar tu marca.
          Tecnología, diseño y estrategia unidos en un solo lugar.
        </p> */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
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
            href="#services"
            className="px-8 py-4 bg-orange-400 text-zinc-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 transition transform hover:scale-105"
          >
            Comenzar Proyecto →
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-orange-400 text-orange-400 font-semibold rounded-full hover:bg-orange-400/10 transition transform hover:scale-105"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
