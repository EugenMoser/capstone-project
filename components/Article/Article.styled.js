import styled, { css } from "styled-components";
import Link from "next/link";

const StyledArticle = styled.article`
  margin: 0 25px 20px 25px;
  position: relative;
  background-color: var(--primary-color);
  border: none;
  border-radius: var(--border-radius);
`;

const StyledDetailsLink = styled(Link)`
  height: 35px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: var(--tertiary-color);
`;

const StyledArticleImageContainer = styled.div`
  position: relative;
  height: 35vh;
  background-color: var(--article-card);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`;

const StyledArticleList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledList = styled.ul`
  position: relative;
  margin: 0;
  padding: 0 20px 20px 20px;
`;

const StyledTagContainer = styled.div`
  width: 150px;
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  top: -25px;
  right: 25px;
`;
const StyledListItem = styled.li`
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `};
  ${({ variant }) =>
    variant === "priceDetailspage" &&
    css`
      margin-top: 0.8rem;
    `};
  ${({ variant }) =>
    variant === "taganimal" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `};
  ${({ variant }) =>
    variant === "tagsmoker" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `};
`;

const StyledTagSpan = styled.span`
  font-size: 0.6rem;
`;

export {
  StyledArticle,
  StyledDetailsLink,
  StyledArticleImageContainer,
  StyledArticleList,
  StyledList,
  StyledListItem,
  StyledTagContainer,
  StyledTagSpan,
};
