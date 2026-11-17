import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Card from "../components/Card.astro";

test("Card with slots", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Card, {
    props: {
      heading: "This is a card",
      content: {
        copy: "This is some content for the card.",
      },
    },
  });

  expect(result).toContain("This is a card");
  expect(result).toContain("This is some content for the card.");
});
