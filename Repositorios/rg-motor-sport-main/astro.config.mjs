// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import astroIcon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    astroIcon({
      include: {
        mdi: ["*"], // o íconos específicos que necesites
      },
    }),
  ],
  output: "server",
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 60,
  }),
  prefetch: true,
});
