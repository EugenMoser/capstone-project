import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Article from "./index";

describe("Article", () => {
  it("renders inputs of an article", () => {
    const article = {
      id: "1",
      name: "Body",
      price: 10.0,
      size: "98",
      gender: "Mädchen",
      status: "gut",
      animal: false,
      smoker: true,
      description:
        "Verkaufe meinen sehr gut erhaltenen Body. Hat keine Flecken.",
      author: "Anna",
      distance: "20",
      tel: "+49 0123 456789",
      mail: "anna@mail.com",
      image: "/images/body.JPG",
      isBookmarked: false,
    };
    render(<Article article={article} />);

    const name = screen.getByText(/body/i);
    const size = screen.getByText(/98/i);
    const gender = screen.getByText(/mädchen/i);
    const price = screen.getByText(/10/i);

    expect(name).toHaveTextContent(article.name);
    expect(size).toHaveTextContent(article.size);
    expect(gender).toHaveTextContent(article.gender);
    expect(price).toHaveTextContent(article.price);
  });
});
