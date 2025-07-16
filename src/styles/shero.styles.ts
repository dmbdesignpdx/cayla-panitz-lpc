import { css } from "../../styled-system/css";


export const root = css({
  layout: "grid",
  container: "shero / inline-size",
  contain: "strict",
  blockSize: "100vb",
  textAlign: "center",
  alignContent: "center",

  lg: {
    textAlign: "left",
    gridTemplateRows: "1fr 1fr",
  },
});

export const heading = css({
  textStyle: "heading",
  justifySelf: "center",
  fontSize: "display",
  marginBlockStart: "0.8em",
  zIndex: 2,

  lg: {
    marginInlineStart: "-0.1ch",
    marginBlockStart: "auto",
    justifySelf: "start",
    gridColumn: "2 / span 6",
  },

  "& > span": {
    highlight: "yellow.200",
  },

  "& > abbr": {
    fontSize: "40%",
    marginInlineStart: "-0.1ch",
    textDecoration: "none",
    color: "neutral.500",
  },
});

export const copy = css({
  zIndex: 2,
  textWrap: "pretty",

  md: {
    gridColumn: "3 / 11",
  },

  lg: {
    gridColumn: "2 / span 5",
  },
});

export const container = css({
  zIndex: 1,
  inlineSize: "58%",
  marginInline: "auto",
  marginBlockStart: "2em",

  md: {
    inlineSize: "40%",
    marginBlockStart: "3em",
  },

  lg: {
    inlineSize: "80%",
    margin: "auto",
    gridColumn: "8 / -2",
    gridRow: "1 / -1",
  },
});

export const image = css({
  inlineSize: "100%",
  blockSize: "auto",
  aspectRatio: "3 / 4",
  borderRadius: "md",
  objectFit: "cover",
  objectPosition: "center",
  zIndex: 2,
  backgroundColor: "neutral.100",
});
