import Svg from "../../Svg";
import { useState } from "react";
import Button from "../../Button";
import { ModalBackground, Modal, StyledLink } from "../Modal.styled";

function ShowContact({ article }) {
  const [openContact, setOpenContact] = useState(false);

  const { author, tel, mail } = article;
  return (
    <>
      <Button
        variant={author === "Eugen" ? "hide" : "contact"}
        ariaLabel="Kontaktdaten anzeigen"
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Svg
          variant="contact"
          size="20px"
        />
        Kontaktdaten
      </Button>

      {openContact && (
        <ModalBackground>
          <Modal variant="showModal">
            <Button
              variant="close"
              ariaLabel="Kontaktdaten schließen"
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Svg variant="close" />
            </Button>
            <h4>Kontaktdaten:</h4>
            <p>
              <Svg variant="person" />
              <span>{author}</span>
            </p>
            <StyledLink
              href={`tel: ${tel}`}
              aria-label="Diese Telefonnummer anrufen"
            >
              <Svg variant="contact" />
              <span>{tel}</span>
            </StyledLink>
            <StyledLink
              href={`mailto: ${mail}`}
              aria-label="Email schreiben"
            >
              <Svg variant="mail" />
              <span>{mail}</span>
            </StyledLink>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ShowContact;
