// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), react()],
  output: "server",
  adapter: vercel(),
  prefetch: true,
});
