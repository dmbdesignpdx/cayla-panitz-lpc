import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";


export default defineConfig({
  site: "https://caylapanitzlpc.com",
  trailingSlash: "never",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 1,
      lastmod: new Date(),
      entryLimit: 2,
    }),
  ],
});
