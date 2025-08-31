import { css } from "../../styled-system/css";


export const root = css({
  contain: "content",
  insetBlockStart: "50%",
  insetInlineStart: "50%",
  translate: "-50% -50%",
  padding: "10",
  boxShadow: "md",
  borderRadius: "md",
  inlineSize: "50ch",
  transition: "opacity 500ms 500ms ease-in",

  _backdrop: {
    bg: "rgb(0 0 0 / 40%)",
    transition: "background 1000ms ease-in",

    _starting: {
      bg: "transparent",
    },
  },

  _starting: {
    opacity: "0",
  },
});


export const button = css({
  paddingInline: "1.25rem",
  backgroundColor: "teal.400",
  color: "white",
  fontWeight: "bold",
  borderRadius: "5px",
  minBlockSize: "44px",
  minInlineSize: "44px",
  marginBlockStart: "5",

  _action: {
    backgroundColor: "teal.500",
  },
  _active: {
    transform: "scale(0.94)",
  },
});
