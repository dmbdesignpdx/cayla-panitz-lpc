import { css } from "../../styled-system/css";


export const solid = css({
  paddingInline: "1rem",
  backgroundColor: "teal.400",
  color: "white",
  fontWeight: "bold",
  borderRadius: "5px",
  minBlockSize: "44px",
  display: "flex",
  alignItems: "center",

  _action: {
    backgroundColor: "teal.500",
  },
  _active: {
    transform: "scale(0.94)",
  },
});

export const text = css({
  color: "neutral.700",
  fontWeight: "bold",
  transition: "0.2s .1s",
  paddingBlock: "2ex",
  paddingInline: "0",
  fontSize: "1.4rem",

  lg: {
    paddingBlock: "1ex",
    paddingInline: "0",
    fontSize: "1rem",
    opacity: "1",
    transition: ".2s color",
  },

  _action: {
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    color: "teal.400",
  },
});
