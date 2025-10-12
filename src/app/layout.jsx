// import "./globals.css";

// export const metadata = {
//   title: "ZONAWEB | Sitios y sistemas que hacen crecer tu negocio",
//   description:
//     "Diseño web profesional, tiendas online y sistemas de gestión adaptados a tu negocio. Presencia online rápida, simple y accesible.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="es">
//       <body className="antialiased text-gray-100 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 min-h-screen">
//         {children}
//       </body>
//     </html>
//   );
// }


import "./globals.css";

export const metadata = {
  title: "ZONAWEB | Diseño web, tiendas online y sistemas para tu negocio",
  description:
    "Creamos sitios web profesionales, tiendas online y sistemas de gestión que impulsan tu presencia digital. Soluciones rápidas, simples y accesibles.",
  keywords: [
    "diseño web",
    "paginas web",
    "e-commerce",
    "tiendas online",
    "sistemas de gestión",
    "páginas web profesionales",
    "zonweb",
    "diseñador web argentina",
    "desarrollo web",
    "olavarría",
  ],
  authors: [{ name: "ZONAWEB", url: "https://zonaweb.site" }],
  metadataBase: new URL("https://zonaweb.site"), 
  openGraph: {
    title: "ZONAWEB | Sitios y sistemas que hacen crecer tu negocio",
    description:
      "Diseño web profesional, tiendas online y sistemas de gestión adaptados a tu negocio.",
    url: "https://zonaweb.site",
    siteName: "ZONAWEB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZONAWEB - Diseño web profesional y sistemas de gestión",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZONAWEB | Diseño web, tiendas online y sistemas para tu negocio",
    description:
      "Creamos sitios web profesionales, tiendas online y sistemas de gestión que impulsan tu presencia digital.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://zonaweb.site",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased text-gray-100 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 min-h-screen">
        {children}

        {/* 📊 Datos estructurados para SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZONAWEB",
              url: "https://zonaweb.site",
              // logo: "https://zonaweb.site/logo.png",
              // sameAs: [
              //   "https://www.facebook.com/zonaweb",
              //   "https://www.instagram.com/zonaweb",
              //   "https://www.linkedin.com/company/zonaweb",
              // ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54 9 2284656640",
                contactType: "Atención al cliente",
                areaServed: "AR",
                availableLanguage: "Spanish",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
