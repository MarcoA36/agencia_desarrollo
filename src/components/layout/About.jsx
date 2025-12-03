// "use client";
// import { useEffect, useState } from "react";
// import { Zap, Briefcase, DollarSign, Edit3 } from "lucide-react";

// export default function About() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const section = document.getElementById("about");
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   const items = [
//     {
//       icon: <Zap className="w-10 h-10 text-orange-400 mb-4" />,
//       title: "Rápidos y eficientes",
//       desc: "Tu sitio web listo en días, no semanas. Nos enfocamos en resultados rápidos y de calidad.",
//     },
//     {
//       icon: <Briefcase className="w-10 h-10 text-orange-400 mb-4" />,
//       title: "Diseño profesional",
//       desc: "Sitios modernos, visualmente atractivos y adaptados a cualquier dispositivo.",
//     },
//     {
//       icon: <DollarSign className="w-10 h-10 text-orange-400 mb-4" />,
//       title: "Planes accesibles",
//       desc: "Soluciones ajustadas a tu negocio sin comprometer la calidad.",
//     },
//     {
//       icon: <Edit3 className="w-10 h-10 text-orange-400 mb-4" />,
//       title: "Fácil de actualizar",
//       desc: "Podés modificar los textos e información de tu sitio sin depender de nadie.",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 text-white py-28 px-6 text-center overflow-hidden"
//     >
//       {/* Glow naranja sutil */}
//       <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-orange-500/10 blur-2xl -translate-x-1/2 pointer-events-none"></div>

//       <div
//         className={`relative max-w-5xl mx-auto transition-[opacity,transform] duration-1000 ${
//           visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-orange-400">
//           ¿Por qué elegirnos?
//         </h2>

//         <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="bg-zinc-900/80 backdrop-blur-[1px] p-8 rounded-2xl border border-white/5 shadow-lg hover:border-orange-400/40 hover:shadow-orange-500/20 hover:scale-105 transition-transform motion-safe:hover:scale-105 motion-safe:hover:shadow-lg"
//             >
//               <div className="flex flex-col items-center">
//                 {item.icon}
//                 <h3 className="text-xl font-semibold mb-3 text-orange-400">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
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
import { Zap, Briefcase, DollarSign, Edit3 } from "lucide-react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: <Zap className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Rápidos y eficientes",
      desc: "Tu sitio web listo en días, no semanas. Nos enfocamos en resultados rápidos y de calidad.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Diseño profesional",
      desc: "Sitios modernos, visualmente atractivos y adaptados a cualquier dispositivo.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Planes accesibles",
      desc: "Soluciones ajustadas a tu negocio sin comprometer la calidad.",
    },
    {
      icon: <Edit3 className="w-10 h-10 text-orange-400 mb-4" />,
      title: "Fácil de actualizar",
      desc: "Podés modificar los textos e información de tu sitio sin depender de nadie.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 text-white py-28 px-6 text-center overflow-hidden"
    >
      {/* Glow optimizado */}
      <div className="absolute bottom-0 left-1/2 w-[350px] h-[350px] bg-orange-500/10 blur-md -translate-x-1/2 pointer-events-none"></div>

      <div
        className={`relative max-w-5xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-orange-400">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900/80 p-8 rounded-2xl border border-white/5 shadow-lg hover:border-orange-400/40 hover:shadow-orange-500/20 transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-semibold mb-3 text-orange-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
