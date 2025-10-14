"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Mapeamos las variables exactamente como tu plantilla EmailJS
      await emailjs.send(
        "service_wregi1i",   // Service ID
        "template_t30ubel",  // Template ID
        {
          name: form.name,
          message: form.message,
          contact: form.email, // el email del usuario
        },
        "LybJfHsngnMNhmfOs"  // Public Key
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error al enviar el mensaje:", err);
      setError("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  return (
    <section id="contact" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-10">
          Contáctanos
        </h2>

        <p className="text-gray-400 text-lg sm:text-xl mb-12">
          Envíanos un mensaje y nos pondremos en contacto en las próximas horas.
        </p>

        {sent && (
          <p className="text-green-400 text-lg font-semibold mb-4">
            ✅ ¡Mensaje enviado correctamente!
          </p>
        )}

        {error && (
          <p className="text-red-400 text-lg font-semibold mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="px-6 py-4 rounded-2xl bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-6 py-4 rounded-2xl bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="px-6 py-4 rounded-2xl bg-zinc-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-orange-400 text-zinc-900 font-semibold rounded-2xl shadow-lg hover:bg-orange-500 transition"
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>

        <div className="mt-12 flex flex-col items-center gap-4 text-gray-400 text-lg">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl text-orange-400" />
            <span>marco_95_5@yahoo.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-2xl text-orange-400" />
            <span>+54 9 2284 656640</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-2xl text-orange-400" />
            <span>Olavarría, Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>
    </section>
  );
}
