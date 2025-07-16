import { css } from "../../styled-system/css";


export const root = css({
  contain: "layout",
  display: "grid",
  justifyItems: "start",
  gap: "gap",
  gridTemplateAreas: `
    "i"
    "h"
    "c"
  `,

  "&:not(:first-of-type)": {
    marginBlockStart: "xl",
  },

  lg: {
    gridTemplateColumns: "repeat(12, 1fr)",
    _even: {
      gridTemplateAreas: `
      "i i i i i . h h h h h h"
      "i i i i i . c c c c c c"
    `,
    },

    _odd: {
      gridTemplateAreas: `
      "h h h h h h . i i i i i"
      "c c c c c c . i i i i i"
    `,
    },
  },
});


export const heading = css({
  textStyle: "heading",
  fontSize: "heading",
  gridArea: "h",
  alignSelf: "end",

  "[data-staggered]:nth-of-type(1) &": {
    highlight: "violet.200",
  },

  "[data-staggered]:nth-of-type(2) &": {
    highlight: "teal.200",
  },

  "[data-staggered]:nth-of-type(3) &": {
    highlight: "red.200",
  },
});


export const content = css({
  gridArea: "c",

  "& > * + *": {
    marginBlockStart: "1rem",
  },
});

export const image = css({
  gridArea: "i",
  alignSelf: "center",
  animation: "fadeIn 1s ease-in-out",
  animationPlayState: "running",
  objectFit: "cover",
  aspectRatio: "4 / 5",
  borderRadius: "md",

  lg: {
    aspectRatio: "4 / 6",
  },

  "&[data-lazy]": {
    animationPlayState: "paused",
  },
});
