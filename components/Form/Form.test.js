import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Form from ".";

jest.mock("next/router", () => require("next-router-mock"));

describe("Button", () => {
  it("returns all inputs", async () => {
    const createArticle = jest.fn();
    const expectedName = "Testartikel";
    const expectedSize = "62";
    const expectedGender = "Unisex";
    const expectedStatus = "neu";
    const expectedDescription = "dies ist eine Beschreibung";
    const expectedPrice = "42";
    const expectedAnimal = true;
    const expectedSmoker = true;

    render(<Form onSubmit={createArticle} />);

    const nameInput = screen.getByLabelText(/artikelbezeichnung*/i);
    const sizeInput = screen.getByLabelText(/größe*/i);
    const genderInput = screen.getByLabelText(/geschlecht*/i);
    const statusInput = screen.getByLabelText(/zustand*/i);
    const descriptionInput = screen.getByLabelText(/beschreibung:/i);
    const priceInput = screen.getByRole(/price/i);
    const animalInput = screen.getByRole(/animal/i);
    const smokerInput = screen.getByRole(/smoker/i);

    await userEvent.type(nameInput, expectedName);
    await userEvent.selectOptions(sizeInput, expectedSize);
    await userEvent.selectOptions(genderInput, expectedGender);
    await userEvent.selectOptions(statusInput, expectedStatus);
    await userEvent.type(descriptionInput, expectedDescription);
    await userEvent.type(priceInput, expectedPrice);
    await userEvent.click(animalInput, expectedAnimal);
    await userEvent.click(smokerInput, expectedSmoker);

    expect(nameInput).toHaveValue(expectedName);
    expect(sizeInput).toHaveValue(expectedSize);
    expect(genderInput).toHaveValue(expectedGender);
    expect(statusInput).toHaveValue(expectedStatus);
    expect(descriptionInput).toHaveValue(expectedDescription);
    expect(priceInput).toHaveValue(42);
    expect(animalInput.checked).toEqual(expectedAnimal);
    expect(smokerInput.checked).toEqual(expectedSmoker);
  });
});
