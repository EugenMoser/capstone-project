import Svg from "../../components/Svg";
import accountData from "../../helpers/accountData.json";
import styled from "styled-components";
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

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, size, gender, status, description, price } =
      Object.fromEntries(formData);

    const checkedAnimal = animal.checked;
    const checkedSmoker = smoker.checked;

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
      accountData
    );

    router.push("/myArticles");
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Artikelbezeichnung</label>
        <input
          type="text"
          name="name"
          defaultValue={nameContent}
          id="name"
          maxLength={20}
          pattern=".*[\S]+.*"
          required
        ></input>
        <label htmlFor="size">Größe</label>
        <input
          type="number"
          name="size"
          defaultValue={sizeContent}
          id="size"
          maxLength={3}
          pattern=".*[\S]+.*"
        ></input>

        <label htmlFor="gender">Geschlecht</label>
        <select
          name="gender"
          defaultValue={genderContent ? genderContent : ""}
          id="gender"
          required
        >
          <option
            value=""
            disabled
          >
            bitte wählen
          </option>
          <option value="Mädchen">Mädchen</option>
          <option value="Junge">Junge</option>
          <option value="Unisex">Unisex</option>
        </select>

        <label htmlFor="status">Zustand</label>
        <select
          name="status"
          id="status"
          defaultValue={statusContent ? statusContent : ""}
          required
        >
          <option
            value=""
            disabled
          >
            bitte wählen
          </option>
          <option value="neu">neu</option>
          <option value="sehr gut">sehr gut</option>
          <option value="gut">gut</option>
          <option value="zufriedenstellend">zufriedenstellend</option>
        </select>

        <label htmlFor="animal">
          <input
            type="checkbox"
            name="animal"
            defaultChecked={animalContent}
            id="animal"
          ></input>
          Tierhaushalt
        </label>
        <label htmlFor="smoker">
          <input
            type="checkbox"
            name="smoker"
            defaultChecked={smokerContent}
            id="smoker"
          ></input>
          Raucherhaushalt
        </label>

        <label htmlFor="description">Beschreibung:</label>
        <textarea
          id="description"
          name="description"
          placeholder="keine Beschreibung vorhanden"
          defaultValue={descriptionContent}
        ></textarea>
        <label htmlFor="price">Preis in Euro</label>
        <input
          type="number"
          name="price"
          defaultValue={priceContent}
          id="price"
          maxLength={4}
          step="0.01"
          pattern=".*[\S]+.*"
        ></input>
        <button type="submit">{buttonText}</button>
        <StyledButton
          type="button"
          onClick={() => router.back()}
          aria-label="Artikel Details schließen und zur Homepage zurück"
        >
          <Svg
            variant="close"
            size="35px"
          />
        </StyledButton>
      </StyledForm>
    </>
  );
}
export default Form;

const StyledForm = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border-style: none;
  color: inherit;
  cursor: pointer;
  background-color: transparent;
`;
