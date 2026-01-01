/**
 * @file Provide a function to set meta tags for social media cards.
 * @module lib/setMetaCards
 */


import { type Page } from "src/types/main.d";
import { Public, Site } from "../constants/main";


export function setMetaCards(page: Page): [string, string][] {
  const tags = new Map([
    ["twitter:card", "summary_large_image"],
    ["twitter:description", page.description || ""],
    ["twitter:title", page.title || ""],
    ["twitte:image", Public.OG_PATH],
    ["twitter:image:alt", Public.OG_ALT],
    ["twitter:url", Site.URL],
    ["og:type", "website"],
    ["og:title", page.title || ""],
    ["og:site_name", Site.TITLE],
    ["og:description", page.description || ""],
    ["og:image", Public.OG_PATH],
    ["og:image:alt", Public.OG_ALT],
    ["og:image:width", Public.OG_WIDTH],
    ["og:image:height", Public.OG_HEIGHT],
    ["og:url", Site.URL],
  ]);

  return tags.entries().toArray();
}
