import { css } from "../../styled-system/css";


export const root = css({
  contain: "layout",
  boxShadow: "0 2px 8px rgb(0 0 30 / 0.1)",
  padding: 10,
  borderBlockStart: "6px solid currentColor",
  borderRadius: 6,
  "& > *": {
    gridColumn: "1 / -1",
  },

  _firstOfType: {
    lg: { gridColumn: "1 / span 6" },

    color: "teal.400",
  },

  _lastOfType: {
    lg: { gridColumn: "7 / span 6" },
    color: "violet.400",
  },
});

export const heading = css({
  fontSize: "1.75rem",
  fontWeight: "bold",
});

export const list = css({
  color: "background.text",
  marginBlockStart: "1rem",

  "& li:not(:first-of-type)": {
    marginBlockStart: "0.75em",
  },

  "& p": {
    marginBlockStart: "2rem",
    fontSize: "0.875rem",
  },
});
