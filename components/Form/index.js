import accountData from "../../helpers/accountData.json";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledCheckbox,
  StyledTextarea,
  StyledUploadLabel,
  StyledUploadInput,
} from "./Form.styled";
import Svg from "../Svg";
import { StyledButton } from "../Style/Button.styled";
import { useRouter } from "next/router";

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
}) {
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, size, gender, status, description, price } =
      Object.fromEntries(formData);

    const checkedAnimal = animal.checked;
    const checkedSmoker = smoker.checked;
    const placeholderImage = "";

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
        placeholderImage,
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

    router.push("/myArticles");
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledUploadLabel htmlFor="uploadImage">
          <Svg
            variant="upload"
            size="35px"
          />
        </StyledUploadLabel>
        <StyledUploadInput
          type="file"
          id="uploadImage"
          name="uploadImage"
          defaultValue={""}
        />
        <label htmlFor="name">Artikelbezeichnung</label>
        <StyledInput
          type="text"
          name="name"
          defaultValue={nameContent}
          id="name"
          maxLength={20}
          pattern=".*[\S]+.*"
          required
        />
        <label htmlFor="size">Größe</label>
        <StyledInput
          type="number"
          name="size"
          defaultValue={sizeContent}
          id="size"
          maxLength={3}
          pattern=".*[\S]+.*"
        />
        <label htmlFor="gender">Geschlecht</label>
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
        <label htmlFor="status">Zustand</label>
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
        <label htmlFor="price">Preis (Euro)</label>
        <StyledInput
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
              variant="checkbox"
              type="checkbox"
              name="smoker"
              defaultChecked={smokerContent}
              id="smoker"
            />
            Raucherhaushalt
          </label>
        </StyledCheckbox>
        <StyledButton
          type="submit"
          variant="submit"
        >
          {buttonText}
        </StyledButton>
      </StyledForm>
    </>
  );
}
export default Form;
