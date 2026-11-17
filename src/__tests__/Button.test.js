import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, test } from "vitest";
import Button from "../components/Button.astro";
import * as style from "../styles/button.styles";

describe("Button", () => {
  let container;

  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  const render = props => container.renderToString(Button, { props });

  test("renders a link when href is provided", async () => {
    const result = await render({ label: "Contact", href: "#contact" });

    expect(result).toContain("<a");
    expect(result).toContain("href=\"#contact\"");
    expect(result).toMatch(/<span[^>]*>Contact<\/span>/);
    expect(result).not.toContain("<button");
  });

  test("renders a button when href is omitted", async () => {
    const result = await render({ label: "Open" });

    expect(result).toContain("<button");
    expect(result).toContain("type=\"button\"");
    expect(result).toMatch(/<span[^>]*>Open<\/span>/);
    expect(result).not.toContain("<a");
  });

  test("uses the solid style by default", async () => {
    const result = await render({ label: "Solid" });

    expect(result).toContain(style.solid);
    expect(result).not.toContain(style.text);
  });

  test("uses the text style when type is text", async () => {
    const result = await render({ label: "Text", type: "text" });

    expect(result).toContain(style.text);
    expect(result).not.toContain(style.solid);
  });

  test("appends custom styles to the class list", async () => {
    const result = await render({
      label: "Custom",
      href: "#x",
      styles: "custom-class",
    });

    expect(result).toContain("custom-class");
    expect(result).toContain(style.solid);
  });
});
