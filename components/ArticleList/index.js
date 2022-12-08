import Article from "../Article";
import { StyledArticleList } from "../Article/Article.styled";

function ArticleList({
  articles,
  secondHeadline,
  placeholderImage,
  toggleBookmark,
}) {
  return (
    <>
      <h2>{secondHeadline}</h2>
      <StyledArticleList>
        {articles
          .slice()
          .reverse()
          .map((article) => {
            return (
              <li key={article.id}>
                <Article
                  article={article}
                  placeholderImage={placeholderImage}
                  toggleBookmark={toggleBookmark}
                />
              </li>
            );
          })}
      </StyledArticleList>
    </>
  );
}

export default ArticleList;
