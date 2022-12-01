import styled from "styled-components";
import css from "styled-jsx/css";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledArticle = styled.article`
  position: relative;
  margin-bottom: 50px;
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
