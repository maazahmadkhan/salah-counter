import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/salah-counter/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#317EFB",
        icons: [
          {
            src: "/salah.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/salah.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
