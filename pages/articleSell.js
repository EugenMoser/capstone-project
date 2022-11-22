import styled from "styled-components";
import Link from "next/link";
import Svg from "../components/Svg";
import { useState } from "react";
import accountData from "../helpers/accountData.json";
import { nanoid } from "nanoid";
//id: crypto.randomUUID()

function ArticleSell({ articles, setArticles }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const {
      name,
      size,
      gender,
      status,
      animal,
      smoker,
      description,
      price,
    } = Object.fromEntries(formData);
    console.log({
      name,
      size,
      gender,
      status,
      animal,
      smoker,
      description,
      price,
    });

    setArticles((oldArticles) => [
      ...oldArticles,

      {
        id: nanoid(),
        name,
        size,
        gender,
        status,
        animal,
        smoker,
        description,
        price,
        ...accountData,
      },
    ]);
  }

  const [checkedAnimal, setCheckedAnimal] = useState(false);
  const [checkedSmoker, setCheckedSmoker] = useState(false);
  const handleChangeAnimal = () => {
    setCheckedAnimal(!checkedAnimal);
  };
  const handleChangeSmoker = () => {
    setCheckedSmoker(!checkedSmoker);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
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

        <label
          htmlFor="animal"
          value={checkedAnimal ? true : false}
        >
          <input
            type="checkbox"
            name="animal"
            id="animal"
            onClick={handleChangeAnimal}
          ></input>
          Tierhaushalt
        </label>
        <label
          htmlFor="smoker"
          value={checkedSmoker ? true : false}
        >
          <input
            type="checkbox"
            name="smoker"
            id="smoker"
            onClick={handleChangeSmoker}
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

export default ArticleSell;

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
