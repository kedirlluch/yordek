import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático, publicado en Vercel.
  output: "export",
  // URLs con barra final, como en el mapa del sitio (/quitar-gotele/).
  trailingSlash: true,
  // Sin servidor no hay optimización: las imágenes se suben ya en AVIF/WebP.
  images: { unoptimized: true },
};

export default nextConfig;
