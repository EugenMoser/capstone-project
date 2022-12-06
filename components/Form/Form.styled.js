import styled, { css } from "styled-components";

const StyledForm = styled.form`
  margin: 10px 25px 5px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 13px;
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
  margin-bottom: 13px;
  border-radius: var(--border-radius);
  padding: 3px;
  background-color: var(--primary-color);
  color: #000000;
`;

const StyledTextarea = styled.textarea`
  margin-bottom: 13px;
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
  margin: 0 auto;
`;

const StyledUploadInput = styled.input`
  display: none;
`;

export {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledCheckbox,
  StyledTextarea,
  StyledUploadLabel,
  StyledUploadInput,
};
