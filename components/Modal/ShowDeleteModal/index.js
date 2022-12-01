import styled from "styled-components";
import Svg from "../../Svg";
import { useState } from "react";
import { StyledButton } from "../../Style/Button.styled";
import { css } from "styled-components";

function ShowDeleteModal({
  articleName,
  articleId,
  articleAuthor,
  deleteArticle,
}) {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <StyledButton
        variant={articleAuthor !== "Eugen" ? "hide" : "edit"}
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Svg variant="delete" />
      </StyledButton>

      {openContact && (
        <ModalBackground>
          <Modal>
            <h4>Willst du deinen Artikel "{articleName}" löschen?</h4>
            <button onClick={() => deleteArticle(articleId)}>
              LÖSCHEN
            </button>
            <button
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              abbrechen
            </button>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ShowDeleteModal;

const StyledDeleteButton = styled.button`
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
