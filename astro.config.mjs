// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    icon({
      include: {
        // Incluir solo los iconos que necesitamos
        mdi: ["*"],
      },
    }),
  ],
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  prefetch: true,
});
