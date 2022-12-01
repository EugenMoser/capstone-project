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
      justify-content: space-around;
      margin: 0 auto;
    `}

    ${({ variant }) =>
    variant === "edit" &&
    css`
      background-color: transparent;
      color: var(--tertiary-color);
      padding: 0;
      border-style: none;
    `}


  ${({ variant }) =>
    variant === "close" &&
    css`
      background-color: transparent;
      color: var(--tertiary-color);
      position: absolute;
      right: 20px;
      top: 20px;
      padding: 0;
      border-style: none;
      z-index: 100;
    `};

  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `};
`;

export { StyledButton };
