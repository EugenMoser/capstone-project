import styled from "styled-components";
import Svg from "../../Svg";
import { useState } from "react";
import { StyledButton } from "../../Style/Button.styled";
import { ModalBackground, Modal } from "../Modal.styled";
import { ButtonContainer } from "../../Style/ArticleDetails.styled";

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
        variant={articleAuthor !== "Eugen" ? "hide" : "delete"}
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Svg
          variant="delete"
          size="25px"
        />
      </StyledButton>

      {openContact && (
        <ModalBackground>
          <Modal variant="delete">
            <StyledButton
              variant="close"
              aria-label="Kontaktdaten schließen"
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Svg variant="close" />
            </StyledButton>
            <h4>
              Willst du deinen Artikel "{articleName}" wirklich löschen?
            </h4>
            <ButtonContainer>
              <StyledButton
                variant="modalcancel"
                onClick={() => {
                  setOpenContact(!openContact);
                }}
              >
                abbrechen
              </StyledButton>
              <StyledButton
                variant="modaldelete"
                onClick={() => deleteArticle(articleId)}
              >
                löschen
              </StyledButton>
            </ButtonContainer>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ShowDeleteModal;
