import styled from "styled-components";
import Svg from "../../components/Svg";
import { useState } from "react";
import Link from "next/link";

function ShowContact({ article }) {
  const [isOpen, setIsOpen] = useState(false);

  const { author, tel, mail } = article;
  return (
    <>
      <StyledContactButton
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <Svg
          variant="contact"
          size="20px"
        />
        Kontaktdaten
      </StyledContactButton>

      {isOpen && (
        <ModalBackground>
          <Modal>
            <StyledCloseButton
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
              }}
            >
              <Svg
                variant="close"
                size="35px"
              />
            </StyledCloseButton>
            <h4>Kontaktdaten von {author}</h4>
            <StyledLink href={`tel: ${tel}`}>Telefon: {tel} </StyledLink>
            <StyledLink href={`mailto: ${mail}`}>Mail: {mail}</StyledLink>
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
