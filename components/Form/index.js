import accountData from "../../helpers/accountData.json";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledCheckbox,
  StyledTextarea,
  StyledUploadLabel,
  StyledUploadInput,
  StyledParagraph,
} from "./Form.styled";
import Svg from "../Svg";
import Button from "../Button";
//
import React from "react";
import { useState } from "react";

function Form({
  onSubmit,
  id,
  buttonText,
  nameContent,
  sizeContent,
  genderContent,
  statusContent,
  animalContent,
  smokerContent,
  descriptionContent,
  priceContent,
  router,
}) {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, size, gender, status, description, price } =
      Object.fromEntries(formData);

    const checkedAnimal = animal.checked;
    const checkedSmoker = smoker.checked;
    const placeholderImageValue = "";

    if (uploadImage.value === "") {
      onSubmit(
        id,
        name.trim(),
        size,
        gender,
        status,
        checkedAnimal,
        checkedSmoker,
        description.trim(),
        price,
        placeholderImageValue,
        accountData
      );
    } else {
      const response = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
      });
      const imageData = await response.json();
      const image = imageData.secureUrl;

      onSubmit(
        id,
        name.trim(),
        size,
        gender,
        status,
        checkedAnimal,
        checkedSmoker,
        description.trim(),
        price,
        image,
        accountData
      );
    }

    router.push("/myarticles");
  }

  const [imageValue, setImageValue] = useState("");

  function handlerImageValue(event) {
    const value = event.target.name;
    setImageValue(value);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledUploadLabel htmlFor="uploadImage">
          <Svg
            variant="upload"
            size="35px"
            aria-label="Bild hochladen"
          />
        </StyledUploadLabel>

        <StyledUploadInput
          type="file"
          id="uploadImage"
          name="uploadImage"
          defaultValue={""}
          onChange={handlerImageValue}
        />
        {imageValue === "" ? (
          ""
        ) : (
          <StyledParagraph>&#10003; Bild hinzugefügt</StyledParagraph>
        )}
        <label htmlFor="name">Artikelbezeichnung*</label>
        <StyledInput
          type="text"
          name="name"
          defaultValue={nameContent}
          id="name"
          maxLength={20}
          pattern=".*[\S]+.*"
          required
        />
        <label htmlFor="size">Größe*</label>
        <StyledSelect
          name="size"
          defaultValue={sizeContent ? sizeContent : ""}
          id="size"
          required
        >
          <option
            value=""
            disabled
          >
            Bitte wählen
          </option>
          <option value="50">50</option>
          <option value="56">56</option>
          <option value="62">62</option>
          <option value="68">68</option>
          <option value="74">74</option>
          <option value="80">80</option>
          <option value="86">86</option>
          <option value="92">92</option>
          <option value="98">98</option>
          <option value="104">104</option>
        </StyledSelect>

        <label htmlFor="gender">Geschlecht*</label>
        <StyledSelect
          name="gender"
          defaultValue={genderContent ? genderContent : ""}
          id="gender"
          required
        >
          <option
            value=""
            disabled
          >
            Bitte wählen
          </option>
          <option value="Mädchen">Mädchen</option>
          <option value="Junge">Junge</option>
          <option value="Unisex">Unisex</option>
        </StyledSelect>
        <label htmlFor="status">Zustand*</label>
        <StyledSelect
          name="status"
          id="status"
          defaultValue={statusContent ? statusContent : ""}
          required
        >
          <option
            value=""
            disabled
          >
            Bitte wählen
          </option>
          <option value="neu">neu</option>
          <option value="sehr gut">sehr gut</option>
          <option value="gut">gut</option>
          <option value="zufriedenstellend">zufriedenstellend</option>
        </StyledSelect>

        <label htmlFor="description">Beschreibung:</label>
        <StyledTextarea
          id="description"
          name="description"
          defaultValue={descriptionContent}
        ></StyledTextarea>
        <label htmlFor="price">Preis (Euro)*</label>
        <StyledInput
          role="price"
          type="number"
          name="price"
          defaultValue={priceContent}
          id="price"
          maxLength={4}
          step="0.01"
          pattern=".*[\S]+.*"
          required
        />
        <StyledCheckbox>
          <label htmlFor="animal">
            <StyledInput
              role="animal"
              variant="checkbox"
              type="checkbox"
              name="animal"
              defaultChecked={animalContent}
              id="animal"
            />
            Tierhaushalt
          </label>
          <label htmlFor="smoker">
            <StyledInput
              role="smoker"
              variant="checkbox"
              type="checkbox"
              name="smoker"
              defaultChecked={smokerContent}
              id="smoker"
            />
            Raucherhaushalt
          </label>
        </StyledCheckbox>
        <Button
          type="submit"
          variant="submit"
        >
          {buttonText}
        </Button>
      </StyledForm>
    </>
  );
}
export default Form;
