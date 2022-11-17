import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../helpers/api";

function articleDetails() {
  const { query } = useRouter();
  const { id } = query;
  const { data: article, error } = useSWR(`/api/articles/${id}`, fetcher);

  if (!data) <p>Artikel Details werden geladen...</p>;
  if (error) <p>Fehler! keine Artikel Details gefunden.</p>;

  console.log(data);

  return (
    <>
      <article>
        <h3>{}Artikel Details</h3>
      </article>
    </>
  );
}

export default articleDetails;
