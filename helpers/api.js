function fetcher(url) {
  return fetch(url).then((response) => response.json());
}

export { fetcher };
