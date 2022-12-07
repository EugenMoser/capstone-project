import styled from "styled-components";
import Svg from "../Svg";

const StyledForm = styled.form`
  margin: 25px 0 0;
  padding: 0 25px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  width: 100vw;
  border-radius: var(--border-radius);
  border: 2px solid var(--tertiary-color);
`;

export { StyledForm, StyledInput };
