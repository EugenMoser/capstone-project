import styled from "styled-components";

const StyledForm = styled.form`
  margin: 25px;
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

export { StyledForm, StyledButton };
