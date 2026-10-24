import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático, publicado en Vercel.
  output: "export",
  // URLs con barra final, como en el mapa del sitio (/quitar-gotele/).
  trailingSlash: true,
  // Sin servidor no hay optimización: scripts/fotos.py genera cada foto en WebP a 480, 800 y 1200 px
  // y lib/image-loader.ts elige el archivo según el ancho que pide el navegador.
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [480, 800, 1200],
    imageSizes: [],
  },
};

export default nextConfig;
