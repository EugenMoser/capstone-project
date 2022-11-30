import Article from "../Article";
import { StyledList } from "./ArticleList.styled";
import { StyledH2 } from "../Style/Font.styled";

function ArticleList({ articles, secondHeadline }) {
  return (
    <>
      <StyledH2>{secondHeadline}</StyledH2>
      <StyledList>
        {articles
          .slice()
          .reverse()
          .map((article) => {
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
