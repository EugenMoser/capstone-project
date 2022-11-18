import { getArticlesById } from "../../../../helpers/db";

async function handler(request, response) {
  const { id } = request.query;
  if (request.method === "GET") {
    const article = await getArticlesById(id);
    response.status(200).json(article);
  } else {
    response.status(405).setHeader("Allow", ["GET"]).send();
  }
}

export default handler;
