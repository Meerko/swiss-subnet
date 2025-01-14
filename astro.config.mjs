// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "4jobao9y",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-01-13",
      studioBasePath: "/studio",
    }),
    react(),
  ],
  output: 'static'
});
