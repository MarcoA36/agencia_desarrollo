export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-gray-300 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Logo y breve descripción */}
        <div className="flex-1">
          <h3 className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
            ZONAWEB
          </h3>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Sitios y sistemas que hacen crecer tu negocio 🚀 <br />
            Presencia online profesional — rápida, simple y accesible.
          </p>
        </div>

        {/* Secciones */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-4">Secciones</h4>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-orange-400 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-400 transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition-colors">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto y redes */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-4">Contacto</h4>
          <p>📧 contacto@zonaweb.com</p>
          <p>📱 +54 9 2284656640</p>
          <div className="flex gap-5 mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-transform hover:scale-110"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-transform hover:scale-110"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-transform hover:scale-110"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
          ZONAWEB
        </span>
        . Todos los derechos reservados.
      </div>
    </footer>
  );
}
