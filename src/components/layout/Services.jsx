// "use client";
// import { useEffect, useState } from "react";
// import { Laptop, ShoppingBag, Wrench, Rocket } from "lucide-react";

// export default function Services() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const section = document.getElementById("services");
//       if (section) {
//         const top = section.getBoundingClientRect().top;
//         if (top < window.innerHeight - 150) setVisible(true);
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const services = [
//     {
//       icon: <Laptop className="w-10 h-10 text-orange-500 mb-4" />,
//       title: "Diseño Web Profesional",
//       desc: "Sitios modernos, rápidos y adaptados a celulares. Mostrá tu marca con estilo y confianza.",
//     },
//     {
//       icon: <ShoppingBag className="w-10 h-10 text-orange-500 mb-4" />,
//       title: "Tiendas Online",
//       desc: "Vendé tus productos fácilmente con pasarelas de pago seguras como MercadoPago.",
//     },
//     {
//       icon: <Wrench className="w-10 h-10 text-orange-500 mb-4" />,
//       title: "Sistemas Personalizados",
//       desc: "Gestión de clientes, pedidos o vehículos. Creamos soluciones a medida para tu negocio.",
//     },
//     {
//       icon: <Rocket className="w-10 h-10 text-orange-500 mb-4" />,
//       title: "Optimización & SEO",
//       desc: "Posicioná tu web en Google y atraé más clientes con un sitio optimizado.",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="relative bg-zinc-950 text-white py-24 px-6 overflow-hidden"
//     >
//       {/* Glow naranja de fondo */}
//       <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

//       <div
//         className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${
//           visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-orange-400">
//           Nuestros Servicios
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-transform"
//             >
//               <div className="flex flex-col items-center">
//                 {service.icon}
//                 <h3 className="text-xl font-semibold mb-2 text-orange-400">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{service.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




















"use client";
import { useEffect, useState } from "react";
import { Laptop, ShoppingBag, Wrench, Rocket } from "lucide-react";

export default function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("services");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 150) setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      icon: <Laptop className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Diseño Web Profesional",
      desc: "Sitios modernos, rápidos y adaptados a celulares. Mostrá tu marca con estilo y confianza.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Tiendas Online",
      desc: "Vendé tus productos fácilmente con pasarelas de pago seguras como MercadoPago.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Sistemas Personalizados",
      desc: "Gestión de clientes, pedidos o vehículos. Creamos soluciones a medida para tu negocio.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Optimización & SEO",
      desc: "Posicioná tu web en Google y atraé más clientes con un sitio optimizado.",
    },
  ];

  return (
    <section
      id="services"
      // className="relative bg-gradient-to-b from-zinc-950 to-zinc-900 text-white py-28 px-6 overflow-hidden"
      className="relative text-white py-24 px-6 overflow-hidden"
    >
      {/* Glow naranja sutil */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div
        className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-orange-400">
          Nuestros Servicios
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-lg hover:border-orange-400/40 hover:shadow-orange-500/20 hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3 text-orange-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
