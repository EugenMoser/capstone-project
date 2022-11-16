function Article({ article }) {
  return (
    <li>
      <article>
        <h3>{article.article}</h3>
        <img url={article.image} />
        <p>{article.size}</p>
        <p>{article.gender}</p>
        <p>{article.price}</p>
      </article>
    </li>
  );
}

export default Article;
