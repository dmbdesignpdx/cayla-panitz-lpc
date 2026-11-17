import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, test } from "vitest";
import Footer from "../components/Footer.astro";

describe("Footer", () => {
  let container;

  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  const render = props => container.renderToString(Footer, { props });

  test("renders the heading when provided", async () => {
    const result = await render({ heading: "Resources" });

    expect(result).toMatch(/<h3[^>]*>Resources<\/h3>/);
  });

  test("omits the heading when not provided", async () => {
    const result = await render({});

    expect(result).not.toContain("<h3");
  });

  test("renders each resource as a term and a tel: link", async () => {
    const result = await render({
      resources: [
        { id: "1", key: "Crisis Line", value: "988" },
        { id: "2", key: "Hotline", value: "(800) 273-8255" },
      ],
    });

    expect(result).toContain("<dl");
    expect(result).toMatch(/<dt[^>]*>Crisis Line<\/dt>/);
    expect(result).toMatch(/<dt[^>]*>Hotline<\/dt>/);
    expect(result).toContain("href=\"tel:988\"");
    expect(result).toContain("href=\"tel:8002738255\"");
    expect(result).toMatch(/<a[^>]*>\(800\) 273-8255<\/a>/);
  });

  test("omits the resource list when resources are not provided", async () => {
    const result = await render({ heading: "Resources" });

    expect(result).not.toContain("<dl");
  });

  test("renders the copyright with the current year", async () => {
    const result = await render({ copyright: "Cayla Panitz, LPC" });
    const year = new Date().getFullYear();

    expect(result).toMatch(
      new RegExp(`<small[^>]*>Copyright ${year} Cayla Panitz, LPC</small>`),
    );
  });

  test("falls back to a period when copyright is null", async () => {
    const result = await render({ copyright: null });
    const year = new Date().getFullYear();

    expect(result).toMatch(
      new RegExp(`<small[^>]*>Copyright ${year} \\.</small>`),
    );
  });
});
