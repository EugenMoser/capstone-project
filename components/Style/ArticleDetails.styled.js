import styled from "styled-components";
import css from "styled-jsx/css";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledArticle = styled.article`
  position: relative;
  margin-bottom: 50px; //for navbar
`;

const StyledListItem = styled.li`
  list-style: none;
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `}
`;

export { ButtonContainer, StyledArticle, StyledListItem };
