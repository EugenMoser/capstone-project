import { StyledForm, StyledInput } from "./Searchbar.styled";

function Searchbar({ inputHandler, searchedText }) {
  return (
    <StyledForm onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search"></label>
      <StyledInput
        type="text"
        id="search"
        name="search"
        value={searchedText}
        onChange={inputHandler}
        placeholder="z. B. Strampler"
      />
    </StyledForm>
  );
}
export default Searchbar;
