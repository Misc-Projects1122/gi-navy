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
  site: "https://g1-navy.vercel.app",
  integrations: [tailwind(), mdx(), sitemap(), react()],
});
