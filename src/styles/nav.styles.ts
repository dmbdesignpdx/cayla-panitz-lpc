import { css } from "../../styled-system/css";


export const root = css({
  contain: "layout",
  inlineSize: "100%",
  blockSize: 14,
  position: "fixed",
  insetBlockStart: 0,
  insetInlineStart: 0,
  zIndex: 9,
  backgroundColor: "background",
  transition: "transform 300ms ease-in-out",
  boxShadow: "sm",

  lg: {
    blockSize: 16,
  },
});

export const container = css({
  layout: "wrap",
  display: "flex",
  blockSize: "100%",
  paddingBlock: "0",
  alignItems: "center",
  justifyContent: "space-between",
});

export const menu = css({
  display: "grid",
  alignItems: "center",
  inlineSize: "100vi",
  blockSize: "100vb",
  padding: "5",
  paddingBlockStart: "20",
  position: "fixed",
  insetInlineStart: "-101%",
  insetBlockStart: "0",
  backgroundColor: "background",
  gap: "7",
  placeContent: "start",
  transition: "transform 200ms ease-in-out",
  boxShadow: "sm",
  zIndex: "9",

  lg: {
    display: "flex",
    gap: "4",
    inlineSize: "auto",
    blockSize: "auto",
    position: "static",
    padding: 0,
    flexFlow: "row",
    boxShadow: "none",
    transition: "none",

    _open: {
      transform: "none",
    },
  },

  _open: {
    transform: "translateX(101%)",
  },
});

export const close = css({
  position: "absolute",
  insetInlineStart: "3",
  insetBlockStart: "3",
});

export const link = css({
  color: "neutral.700",
  fontWeight: "bold",
  transition: "0.2s .1s",
  marginBlockStart: "1em",
  paddingBlock: "2ex",
  paddingInline: "0",
  fontSize: "1.4rem",

  lg: {
    paddingBlock: "1ex",
    paddingInline: "0",
    marginInlineEnd: "4ch",
    insetInlineStart: "0",
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


export const email = css({
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
