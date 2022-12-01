import styled from "styled-components";
import { css } from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;

  ${({ variant }) =>
    variant === "submit" &&
    css`
      background-color: var(--tertiary-color);
      width: 176px;
      height: 35px;
      border-radius: var(--border-radius);
      border: none;
      color: var(--primary-color);
      font-size: 16px;
      align-self: center;
    `}

  ${({ variant }) =>
    variant === "contact" &&
    css`
      background-color: var(--tertiary-color);
      width: 176px;
      height: 35px;
      border-radius: var(--border-radius);
      border: none;
      color: var(--primary-color);
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin: 0 auto;
      padding: 0 20px;
    `}

    ${({ variant }) =>
    variant === "edit" &&
    css`
      background-color: var(--tertiary-color);
      width: 150px;
      height: 35px;
      border-radius: var(--border-radius);
      border: none;
      color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
      border-style: none;
    `}
    ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: var(--modal-delete-color);
      width: 150px;
      height: 35px;
      border-radius: var(--border-radius);
      border: none;
      color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
      border-style: none;
    `}


  ${({ variant }) =>
    variant === "close" &&
    css`
      background-color: transparent;
      position: absolute;
      right: 20px;
      top: 20px;
      padding: 0;
      border-style: none;
      z-index: 100;
    `};

  ${({ variant }) =>
    variant === "modaldelete" &&
    css`
      background-color: var(--primary-color);
      width: 120px;
      height: 35px;
      border-radius: var(--border-radius);
      border: none;
      color: var(--modal-delete-color);
      margin-top: 50px;
      padding: 0;
      border-style: none;
      font-size: 16px;
    `}
  ${({ variant }) =>
    variant === "modalcancel" &&
    css`
      background-color: var(--primary-color);
      width: 120px;
      height: 35px;
      border-radius: var(--border-radius);
      border: none;
      margin-top: 50px;
      padding: 0;
      border-style: none;
      font-size: 16px;
    `}

  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `};
`;

export { StyledButton };
