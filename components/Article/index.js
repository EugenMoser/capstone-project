import styled from "styled-components";

function Article({ article }) {
  return (
    <List>
      <Art>
        <img
          src={article.image}
          width="110px"
        />
        <div>
          <h3>{article.article}</h3>
          <p>Größe: {article.size}</p>
          <p>Geschlecht: {article.gender}</p>
          <p>Preis: {article.price}</p>
        </div>
      </Art>
    </List>
  );
}

export default Article;

const List = styled.li`
  border: 1px solid black;
  margin: 2rem;
  list-style: none;
`;

const Art = styled.article`
  display: flex;
  width: 80vw;
  height: 200px;
`;
