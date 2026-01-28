import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config/
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://www.i-forces.tech/",
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) => {
        // Exclude the manual sitemap page and API routes
        return !page.includes("/sitemap") && !page.includes("/api/");
      },
    }),
    react(),
  ],
});
