import { defineConfig } from "@pandacss/dev";


export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,astro}"],
  exclude: [],
  outdir: "styled-system",

  theme: {
    extend: {

      tokens: {
        spacing: {
          gap: { value: "clamp(0.875rem, 0.49rem + 1.64vw, 1.875rem)" },
          xl: { value: "clamp(5.25rem, 1.5259rem + 12.4138vw, 12rem)" },
        },
      },

      semanticTokens: {
        colors: {
          background: {
            DEFAULT: { value: "{colors.neutral.50}" },
            text: { value: "{colors.neutral.800}" },
          },
        },
        fontSizes: {
          display: {
            value: "clamp(2.5rem, 1.83rem + 2.96cqi, 4.5rem)",
          },
          heading: {
            value: "2.25rem",
          },
        },
        sizes: {
          layout: { value: "84.38rem" },
        },
        fonts: {
          heading: {
            value: "'Playfair Display', Georgia, serif",
          },
          body: {
            value: "Heebo, Arial, sans-serif",
          },
        },
      },

      textStyles: {
        body: {
          description: "Root text styles for body copy.",
          value: {
            fontFamily: "body",
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.02em",
            textRendering: "optimizeSpeed",
          },
        },
        heading: {
          description: "Root text styles for headings.",
          value: {
            fontFamily: "heading",
            fontWeight: "800",
            lineHeight: "1.2",
            letterSpacing: "0.01em",
            textRendering: "geometricPrecision",
          },
        },
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },

  utilities: {
    extend: {

      layout: {
        className: "layout",
        values: ["wrap", "grid"],
        transform(value: string, { token }) {
          const grid = {
            display: "grid",
            grid: "auto / repeat(12, 1fr)",
            gap: token("spacing.gap"),
            "& > *": {
              gridColumn: "1 / -1",
            },
          };

          return {
            ...(value === "grid" ? grid : {}),
            inlineSize: "100%",
            maxInlineSize: token("sizes.layout"),
            paddingInline: token("spacing.gap"),
            marginInline: "auto",
            scrollMarginBlockStart: token("spacing.24"),
          };
        },
      },

      centered: {
        className: "centered",
        values: {
          lg: "1",
          md: "2",
          sm: "3",
        },
        transform(value: string) {
          return {
            gridColumnStart: value,
            gridColumnEnd: Number(value) * -1,
          };
        },
      },

      highlight: {
        className: "highlight",
        values: "colors",
        transform(value: string) {
          return {
            inlineSize: "fit-content",
            "&::before": {
              content: "''",
              inlineSize: "100%",
              blockSize: "0.6em",
              position: "absolute",
              insetInlineStart: "0.1em",
              insetBlockEnd: "0.1em",
              zIndex: -1,
              backgroundColor: value,
            },
          };
        },
      },
    },
  },

  conditions: {
    extend: {
      action: [
        "@media (any-hover: hover) and (any-pointer: fine)",
        "&:hover",
      ],
    },
  },

  globalCss: {
    "*": {
      position: "relative",
    },
    html: {
      fontSize: "100%",
      colorScheme: "only light",
      _motionSafe: {
        scrollBehavior: "smooth",
      },
    },
    body: {
      textStyle: "body",
      backgroundColor: "background",
      color: "background.text",
      hyphens: "none",
      fontSize: "1.125rem",

      lg: {
        fontSize: "1.25rem",
      },
    },
    svg: {
      transformOrigin: "center",
    },
    img: {
      inlineSize: "100%",
      blockSize: "auto",
    },
    address: {
      fontStyle: "normal",
    },
    "[data-sr]": {
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
    },
    "[data-markdown]": {
      "& a": {
        color: "teal.600",
        fontWeight: "600",

        _action: {
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          textDecorationThickness: "1px",
        },
      },
    },
  },
});
