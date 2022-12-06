import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Article from "./index";

describe("Article", () => {
  it("renders all inputs of an article", async () => {
    const article = {
      name: "Body",
      size: "46",
      gender: "Unisex",
      price: "20",
    };
    render(<Article article={article} />);

    const name = screen.getByText(/body/i);
    const size = screen.getByText(/46/i);
    const gender = screen.getByText(/unisex/i);
    const price = screen.getByText(/20/i);

    expect(name).toHaveTextContent(article.name);
    expect(size).toHaveTextContent(article.size);
    expect(gender).toHaveTextContent(article.gender);
    expect(price).toHaveTextContent(article.price);
  });
});
