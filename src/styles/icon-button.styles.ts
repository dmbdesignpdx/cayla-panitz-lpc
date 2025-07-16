import { css } from "../../styled-system/css";


export const root = css({
  minInlineSize: "44px",
  minBlockSize: "44px",
  color: "inherit",
  display: "flex",
  background: "none",

  "& > svg": {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
  },

  lg: {
    display: "none",
    alignItems: "center",
    justifyContent: "center",
  },
});
