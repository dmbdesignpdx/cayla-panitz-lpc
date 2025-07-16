import { css } from "../../styled-system/css";


export const root = css({
  contain: "content",
  paddingBlock: "4rem 6rem",
  backgroundColor: "stone.800",
  color: "neutral.50",
  marginBlockStart: "xl",
});

export const content = css({
  layout: "wrap",
});

export const heading = css({
  textStyle: "heading",
  fontSize: "1.5rem",
  color: "yellow.300",
});

export const list = css({
  marginBlockStart: "2rem",
  fontSize: "1rem",

  "& a": {
    color: "blue.200",
    textDecorationLine: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: "0.2em",
    whiteSpace: "nowrap",
  },
});

export const item = css({
  display: "flex",
  marginBlockStart: "0.75em",
  flexFlow: "column wrap",

  lg: {
    flexDirection: "row",
    marginBlockStart: "0.25em",
  },

  "& dt::after": {
    content: "':'",
    marginInlineEnd: "0.5ch",
  },
});

export const legal = css({
  marginBlockStart: "2rem",
});
