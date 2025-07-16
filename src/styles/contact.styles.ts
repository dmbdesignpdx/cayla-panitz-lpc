import { css } from "../../styled-system/css";


export const root = css({
  layout: "grid",
  marginBlockStart: "xl",
});

export const heading = css({
  gridColumn: "1 / span 4",
  textStyle: "heading",
  fontSize: "1.75rem",
  highlight: "yellow.200",

  lg: {
    gridColumnStart: "2",
  },
});

export const contact = css({
  gridColumn: "1 / span 6",

  lg: {
    gridColumnStart: "2",
  },
});

export const address = css({
  gridColumn: "1 / span 6",

  lg: {
    gridColumnStart: "2",
  },
});
