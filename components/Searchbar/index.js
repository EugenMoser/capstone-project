import { useEffect } from "react";
import { StyledForm, StyledInput } from "./Searchbar.styled";

function Searchbar({ inputHandler, searchedText, resetValue }) {
  useEffect(() => {
    resetValue();
  }, []);

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
        autoFocus
      />
    </StyledForm>
  );
}
export default Searchbar;
