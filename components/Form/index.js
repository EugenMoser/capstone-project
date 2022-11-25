import Svg from "../../components/Svg";
import accountData from "../../helpers/accountData.json";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

function Form({ setArticles }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, size, gender, status, description, price } =
      Object.fromEntries(formData);

    const checkedAnimal = animal.checked;
    const checkedSmoker = smoker.checked;

    setArticles((oldArticles) => [
      ...oldArticles,
      {
        id: nanoid(),
        name,
        size,
        gender,
        status,
        animal: checkedAnimal,
        smoker: checkedSmoker,
        description,
        price,
        ...accountData,
      },
    ]);
    router.push("/");
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Artikelbezeichnung</label>
        <input
          type="text"
          name="name"
          id="name"
          maxLength={20}
        ></input>
        <label
          htmlFor="size"
          required
        >
          Größe
        </label>
        <input
          type="number"
          name="size"
          id="size"
          maxLength={3}
        ></input>

        <label htmlFor="gender">Geschlecht</label>
        <select
          name="gender"
          id="gender"
          defaultValue={""}
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
          defaultValue={""}
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
            id="animal"
          ></input>
          Tierhaushalt
        </label>
        <label htmlFor="smoker">
          <input
            type="checkbox"
            name="smoker"
            id="smoker"
          ></input>
          Raucherhaushalt
        </label>

        <label htmlFor="description">Beschreibung:</label>
        <textarea
          id="description"
          name="description"
        ></textarea>
        <label htmlFor="price">Preis in Euro</label>
        <input
          type="number"
          name="price"
          id="price"
          maxLength={4}
          step="0.01"
        ></input>
        <button type="submit">bestätigen</button>
      </StyledForm>
      <StyledLink
        href="/"
        aria-label="Artikel Details schließen und zur Homepage zurück"
      >
        <Svg
          variant="close"
          size="35px"
        />
      </StyledLink>
    </>
  );
}

export default Form;

const StyledForm = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 10px;
  top: 10px;
  border-style: none;
  color: inherit;
`;
