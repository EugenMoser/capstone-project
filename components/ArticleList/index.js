import Article from "../Article";
import styled from "styled-components";

function ArticleList({ articles, secondHeadline }) {
  return (
    <>
      <h2>{secondHeadline}</h2>
      <StyledList>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <Article article={article} />
            </li>
          );
        })}
      </StyledList>
    </>
  );
}

export default ArticleList;

const StyledList = styled.ul`
  padding: 0;
`;
