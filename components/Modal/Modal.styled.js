import styled from "styled-components";
import Link from "next/link";
import { css } from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Modal = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
  position: relative;
  background-color: var(--color-red);
  color: var(--primary-color);
  position: fixed;
  top: 60%;
  left: 50%;
  width: 90vw;
  height: 70vh;
  z-index: 100;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 5px 20px rgb(0 0 0 / 5%);
  transform: translate(-50%, -50%);
  padding: 0 20px;
  ${({ variant }) =>
    variant === "showModal" &&
    css`
      padding-left: 20px;
      background-color: var(--tertiary-color);
    `}
`;

const StyledLink = styled(Link)`
  display: flex;

  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  margin: 10px 0;
  font-size: 0.8rem;

  && span {
    padding-left: 10px;
  }
  ${({ variant }) =>
    variant === "linkToSell" &&
    css`
      color: var(--tertiary-color);
      text-decoration: underline;
    `}
`;

export { ModalBackground, Modal, StyledLink };
