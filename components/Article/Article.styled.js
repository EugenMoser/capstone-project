import styled from "styled-components";
import Link from "next/link";
import { css } from "styled-components";

const StyledArticle = styled.article`
  margin: 0 25px 25px 25px;

  position: relative;
  background-color: white;
  border: none;
  border-radius: var(--border-radius);
`;

const StyledDetailsLink = styled(Link)`
  height: 35px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-style: none;
  color: var(--tertiary-color);
`;

const StyledArticleImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  background-color: var(--article-card);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 15px 20px;
`;

const StyledListItem = styled.li`
  list-style: none;
  font-size: 13px;
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `};
`;

export {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledList,
  StyledListItem,
};
