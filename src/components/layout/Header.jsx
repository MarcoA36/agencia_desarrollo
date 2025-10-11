"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-zinc-900/90 border-b border-zinc-800 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-orange-400 p-2 rounded-lg">
              <span className="text-zinc-900 text-lg font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-white font-semibold text-xl">ZonaWeb</span>
          </Link>

          {/* Nav Links */}
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

          {/* Botón principal */}
          <a
            href="#contact"
            className="hidden sm:inline-block bg-orange-400 text-zinc-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-orange-500 transition"
          >
            Comenzar
          </a>

          {/* Menú móvil */}
          <button
            className="sm:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end"
          onClick={() => setMenuOpen(false)}
        >
          {/* Drawer */}
          <div
            className="w-3/4 sm:w-1/3 bg-zinc-900 text-white flex flex-col p-6 space-y-6 shadow-xl animate-slideIn border-l border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-orange-400">ZonaWeb</h2>
              <button
                className="text-3xl hover:text-orange-400 transition"
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
                className="block text-center bg-orange-400 text-zinc-900 font-semibold py-3 rounded-full hover:bg-orange-500 transition"
              >
                Comenzar Proyecto
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Animación personalizada */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
