import { css } from "../../styled-system/css";


export const root = css({
  layout: "grid",
  marginBlockStart: "xl",
});

export const heading = css({
  centered: "lg",
  highlight: "violet.200",
  textStyle: "heading",
  fontSize: "heading",
  scrollMarginBlockStart: [20, 32],

  lg: {
    centered: "md",
  },
});

export const content = css({
  centered: "lg",

  "& > * + *": {
    marginBlockStart: "1rem",
  },

  "& h3": {
    fontWeight: "bold",
  },

  lg: {
    centered: "md",
  },
});
