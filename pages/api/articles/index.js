import getAllArticles from "../../../helpers/db";

async function handler(request, response) {
  if (request.method === "GET") {
    const allArticles = await getAllArticles();
    response.status(200).json(allArticles);
  } else {
    response.status(405).setHeader("Allow", ["GET"]).send();
  }
}

export default handler;
