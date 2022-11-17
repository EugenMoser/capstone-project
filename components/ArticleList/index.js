import Article from "../Article";
import styled from "styled-components";

function ArticleList({ articles }) {
  return (
    <>
      <h2>Alle Artikel in deiner Nähe:</h2>
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
