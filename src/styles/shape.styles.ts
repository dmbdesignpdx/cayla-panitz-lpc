import { cva } from "../../styled-system/css";


export const root = cva({
  base: {
    position: "absolute",
    contain: "layout",
    transition: "0.2s linear",
  },
  variants: {
    color: {
      teal: {
        zIndex: 1,
        inlineSize: "25%",
        insetInlineStart: "-34%",
        insetBlockStart: "14%",
        fill: "yellow.300",

        lg: {
          fill: "teal.400",
        },
      },
      red: {
        zIndex: 1,
        inlineSize: "80%",
        insetInlineEnd: "-20%",
        insetBlockStart: "-16%",
        fill: "red.400",
      },
      yellow: {
        zIndex: 3,
        inlineSize: "42%",
        insetInlineStart: "-16%",
        insetBlockEnd: "-15%",
        fill: "teal.400",

        lg: {
          fill: "yellow.300",
        },
      },
    },
  },
});
