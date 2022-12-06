import styled, { css } from "styled-components";

const StyledForm = styled.form`
  margin: 10px 25px 5px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
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
  margin-bottom: 10px;
  border-radius: var(--border-radius);
  padding: 3px;
  background-color: var(--primary-color);
  color: #000000;
`;

const StyledTextarea = styled.textarea`
  margin-bottom: 10px;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const StyledUploadLabel = styled.label`
  background-color: var(--tertiary-color);
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius);
  border: none;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
`;

const StyledUploadInput = styled.input`
  display: none;
`;

const StyledParagraph = styled.p`
  position: absolute;
  margin: 0;
  top: 25px;
  right: 10px;
`;

export {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledCheckbox,
  StyledTextarea,
  StyledUploadLabel,
  StyledUploadInput,
  StyledParagraph,
};
