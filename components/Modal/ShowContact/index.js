import styled from "styled-components";
import Svg from "../../Svg";
import { useState } from "react";

import { StyledButton } from "../../Style/Button.styled";
import { ModalBackground, Modal, StyledLink } from "../Modal.styled";
import {
  StyledH4,
  StyledParagraphName,
  StyledSpan,
} from "../../Style/Font.styled";

function ShowContact({ article }) {
  const [openContact, setOpenContact] = useState(false);

  const { author, tel, mail } = article;
  return (
    <>
      <StyledButton
        variant={author === "Eugen" ? "hide" : "contact"}
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
      </StyledButton>

      {openContact && (
        <ModalBackground>
          <Modal variant="showModal">
            <StyledButton
              variant="close"
              aria-label="Kontaktdaten schließen"
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Svg variant="close" />
            </StyledButton>
            <StyledH4>Kontaktdaten:</StyledH4>
            <StyledParagraphName>
              <Svg variant="person" />
              <StyledSpan>{author}</StyledSpan>
            </StyledParagraphName>
            <StyledLink
              href={`tel: ${tel}`}
              aria-label="Diese Telefonnummer anrufen"
            >
              <Svg variant="contact" />
              <StyledSpan>Telefon: {tel}</StyledSpan>
            </StyledLink>
            <StyledLink
              href={`mailto: ${mail}`}
              aria-label="Email schreiben"
            >
              <Svg variant="mail" />
              <StyledSpan>Mail: {mail}</StyledSpan>
            </StyledLink>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ShowContact;

const StyledCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border-style: none;
  color: inherit;
  background-color: inherit;
`;
