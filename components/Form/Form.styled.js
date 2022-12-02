import styled, { css } from "styled-components";

const StyledForm = styled.form`
  margin: 25px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 15px;
  border-radius: var(--border-radius);
  line-height: 1.5;

  ${({ variant }) =>
    variant === "checkbox" &&
    css`
      margin-bottom: 0;
      accent-color: var(--checkbox-color);
    `}
`;

const StyledSelect = styled.select`
  margin-bottom: 15px;
  border-radius: var(--border-radius);
  padding: 3px;
  background-color: var(--primary-color);
  color: #000000;
`;

const StyledTextarea = styled.textarea`
  margin-bottom: 15px;
  border-radius: var(--border-radius);
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledCheckbox,
  StyledTextarea,
};
