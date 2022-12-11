import Svg from "../../Svg";
import { useState } from "react";
import Button from "../../Button";
import { ModalBackground, Modal } from "../Modal.styled";
import { ButtonContainer } from "../../Style/ArticleDetails.styled";

function ShowDeleteModal({
  articleName,
  articleId,
  articleAuthor,
  onDeleteArticle,
}) {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Button
        variant={articleAuthor !== "Eugen" ? "hide" : "delete"}
        ariaLabel="löschen"
        onClick={() => {
          setOpenContact(!openContact);
        }}
      >
        <Svg
          variant="delete"
          size="25px"
        />
      </Button>

      {openContact && (
        <ModalBackground>
          <Modal variant="delete">
            <Button
              variant="close"
              ariaLabel="Kontaktdaten schließen"
              onClick={() => {
                setOpenContact(!openContact);
              }}
            >
              <Svg variant="close" />
            </Button>
            <h4>
              Willst du deinen Artikel "{articleName}" wirklich löschen?
            </h4>
            <ButtonContainer>
              <Button
                variant="modalcancel"
                ariaLabel="abbrechen"
                onClick={() => {
                  setOpenContact(!openContact);
                }}
              >
                abbrechen
              </Button>
              <Button
                variant="modaldelete"
                ariaLabel="Artikel löschen"
                onClick={() => onDeleteArticle(articleId)}
              >
                löschen
              </Button>
            </ButtonContainer>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}

export default ShowDeleteModal;
