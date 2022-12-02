import styled, { css } from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledArticle = styled.article`
  position: relative;
  margin-bottom: 50px;
`;

const StyledListItem = styled.li`
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `}
`;

export { ButtonContainer, StyledArticle, StyledListItem };
