export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-10">
          Contactanos
        </h2>

        <p className="text-gray-400 text-lg sm:text-xl mb-12">
          Envíanos un mensaje y nos pondremos en contacto en las próximas horas.
        </p>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Nombre"
            className="px-6 py-4 rounded-2xl bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-6 py-4 rounded-2xl bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Mensaje"
            rows="5"
            className="px-6 py-4 rounded-2xl bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 bg-orange-400 text-zinc-900 font-semibold rounded-2xl shadow-lg hover:bg-orange-500 transition"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="mt-12 text-gray-400 space-y-2">
          <p>📧 Email: contacto@zonaweb.com</p>
          <p>📱 WhatsApp: +54 9 2284656640</p>
        </div>
      </div>
    </section>
  );
}
