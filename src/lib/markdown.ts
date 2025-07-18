/**
 * @file Provide functions to parse Markdown text.
 */


import purify from "isomorphic-dompurify";
import {
  type RendererObject,
  type Tokens,
  marked,
} from "marked";


const renderer: RendererObject = {
  link({ href, tokens }: Tokens.Link): string {
    const text = this.parser.parseInline(tokens);
    const external = href.startsWith("http");

    if (external) return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    return `<a href="${href}">${text}</a>`;
  },
};

marked.use({ renderer });

export const md = {
  async inline(text: string): Promise<string> {
    const dirty: string = await marked.parseInline(text);

    return purify.sanitize(dirty, { ADD_ATTR: ["target"] });
  },
  async block(text: string): Promise<string> {
    const dirty: string = await marked.parse(text);

    return purify.sanitize(dirty, { ADD_ATTR: ["target"] });
  },
};
