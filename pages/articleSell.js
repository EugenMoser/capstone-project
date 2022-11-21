import styled from "styled-components";
import Link from "next/link";
import Svg from "../components/Svg";

function ArticleSell() {
  return (
    <>
      <StyledForm>
        <label
          htmlFor="name"
          aria-label="Name eingeben"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          maxLength={20}
        ></input>
        <label
          htmlFor="groesse"
          aria-label="Größe eingeben"
        >
          Größe
        </label>
        <input
          type="number"
          id="groesse"
          maxLength={3}
        ></input>
        <label
          htmlFor="geschlecht"
          aria-label="Geschlecht auswählen"
          required
        >
          Geschlecht
        </label>
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
            bitte eingeben
          </option>
          <option value="mädchen">Mädchen</option>
          <option value="junge">Junge</option>
        </select>
        <label
          htmlFor="zustand"
          aria-label="Zustand auswählen"
          required
        >
          Zustand
        </label>
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
            bitte eingeben
          </option>
          <option value="neu">neu</option>
          <option value="sehr gut">sehr gut</option>
          <option value="gut">gut</option>
          <option value="zufriedenstellend">zufriedenstellend</option>
        </select>
        <label
          htmlFor="animal"
          name="animal"
          aria-label="Tierhaushalt wählen"
        >
          <input
            type="checkbox"
            id="animal"
          ></input>
          Tierhaushalt
        </label>
        <label
          htmlFor="smoker"
          name="smoker"
          aria-label="Raucherhaushalt wählen"
        >
          <input
            type="checkbox"
            id="smoker"
          ></input>
          Raucherhaushalt
        </label>
        <label
          htmlFor="description"
          name="description"
        >
          Beschreibung:
        </label>
        <textarea id="description"></textarea>
        <label
          htmlFor="price"
          aria-label="Verkaufspreis eingeben"
        >
          Preis in Euro
        </label>
        <input
          type="number"
          id="price"
          maxLength={4}
          step="0.01"
        ></input>
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
