// import "./globals.css";

// export const metadata = {
//   title: "ZONAWEB | Sitios y sistemas que hacen crecer tu negocio",
//   description:
//     "Diseño web profesional, tiendas online y sistemas de gestión adaptados a tu negocio. Presencia online rápida, simple y accesible.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="es">
//       <body className="antialiased bg-white text-gray-900">
//         {children}
//       </body>
//     </html>
//   );
// }


import "./globals.css";

export const metadata = {
  title: "ZONAWEB | Sitios y sistemas que hacen crecer tu negocio",
  description:
    "Diseño web profesional, tiendas online y sistemas de gestión adaptados a tu negocio. Presencia online rápida, simple y accesible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased text-gray-100 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
