export enum EntryType {
  CONTACT_BLOCK = "ContactBlock",
  CONTENT_BLOCK = "ContentBlock",
  CONTENT_COLLECTION = "ContentCollection",
}

export enum CollectionType {
  DEFAULT = "default",
  STAGGERED = "staggered",
  CARDS = "cards",
}

export enum DialogType {
  ACCEPT = "accept",
  CHOICE = "choice",
}

export enum Stage {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export enum Color {
  RED = "red",
  TEAL = "teal",
  YELLOW = "yellow",
}

export enum FontUrl {
  API = "https://fonts.googleapis.com",
  STATIC = "https://fonts.gstatic.com",
  STYLE = "https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&family=Playfair+Display:wght@800&display=swap",
}

export enum Site {
  URL = "https://caylapanitzlpc.com",
  TITLE = "Cayla Panitz, LPC",
  AUTHOR = "Daniel Blake",
  COLOR = "#2dd4bf",
}

export enum Public {
  FAVICON = "favicon.ico",
  OG_PATH = "/cayla-panitz-og.png",
  OG_TYPE = "image/png",
  OG_WIDTH = "1200",
  OG_HEIGHT = "628",
  OG_ALT = "Cayla Panitz, LPC",
}

export enum Assets {
  REGION = "us-west-2",
  URL = "https://us-west-2.graphassets.com",
}

export enum Label {
  EMAIL = "Email",
  PHONE = "Phone",
  FAX = "Fax",
  OPEN = "Open",
  CLOSE = "Close",
}

export enum Id {
  MENU = "menu",
}

/**
 * @todo - Move to CMS
 */
export const dictionary = {
  lpc: {
    abbr: "LPC",
    title: "Licensed Professional Counselor",
  },
};
