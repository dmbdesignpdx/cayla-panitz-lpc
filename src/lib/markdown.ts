/**
 * @file Provide functions to parse Markdown text.
 */


import purify from "isomorphic-dompurify";
import { marked } from "marked";


export const md = {
  async inline(text: string): Promise<string> {
    const dirty: string = await marked.parseInline(text);

    return purify.sanitize(dirty);
  },
  async block(text: string): Promise<string> {
    const dirty: string = await marked.parse(text);

    return purify.sanitize(dirty);
  },
};
