import styled from "styled-components";
import Svg from "../../Svg";
import { useState } from "react";
import Link from "next/link";
import { css } from "styled-components";

function ShowContact({ article }) {
  const [openContact, setOpenContact] = useState(false);

  const { author, tel, mail } = article;
  return (
    <>
      <StyledContactButton
        variant={author === "Eugen" && "hide"}
        aria-label="Kontaktdaten anzeigen"
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Svg
          variant="contact"
          size="20px"
        />
        Kontaktdaten
      </StyledContactButton>

      {openContact && (
        <ModalBackground>
          <Modal>
            <StyledCloseButton
              aria-label="Kontaktdaten schließen"
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Svg variant="close" />
            </StyledCloseButton>
            <h4>Kontaktdaten von {author}</h4>
            <StyledLink
              href={`tel: ${tel}`}
              aria-label="Diese Telefonnummer anrufen"
            >
              Telefon: {tel}
            </StyledLink>
            <StyledLink
              href={`mailto: ${mail}`}
              aria-label="Email schreiben"
            >
              Mail: {mail}
            </StyledLink>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ShowContact;

const StyledContactButton = styled.button`
  display: flex;
  text-align: center;
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `}
`;

const ModalBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = styled.address`
  font-style: normal;
  position: relative;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  height: 50vh;
  z-index: 100;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%), 0 5px 20px rgb(0 0 0 / 5%);
  transform: translate(-50%, -50%);
`;

const StyledCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border-style: none;
  color: inherit;
  background-color: inherit;
`;

const StyledLink = styled(Link)`
  display: flex;
`;
