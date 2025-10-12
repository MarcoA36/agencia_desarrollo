"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener optimizado
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú con Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-zinc-900/90 border-b border-zinc-800 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-orange-400 p-2 rounded-lg">
              <span className="text-zinc-900 text-lg font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-white font-semibold text-xl">ZonaWeb</span>
          </Link>

          <nav className="hidden sm:flex gap-8 text-gray-300 font-medium">
            <a href="#services" className="hover:text-orange-400 transition">
              Servicios
            </a>
            <a href="#about" className="hover:text-orange-400 transition">
              Nosotros
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contacto
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-block bg-orange-400 text-zinc-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-orange-500 transition motion-safe:hover:scale-105"
          >
            Comenzar
          </a>

          <button
            className="sm:hidden text-white text-2xl focus:outline-none"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay solo para fondo */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 sm:w-1/3 bg-zinc-900 text-white flex flex-col p-6 space-y-6 shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-orange-400">ZonaWeb</h2>
          <button
            className="text-3xl hover:text-orange-400 transition"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-medium">
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400 transition"
          >
            Servicios
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400 transition"
          >
            Nosotros
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400 transition"
          >
            Contacto
          </a>
        </nav>

        <div className="mt-auto">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-orange-400 text-zinc-900 font-semibold py-3 rounded-full hover:bg-orange-500 transition motion-safe:hover:scale-105"
          >
            Comenzar Proyecto
          </a>
        </div>
      </div>
    </>
  );
}
