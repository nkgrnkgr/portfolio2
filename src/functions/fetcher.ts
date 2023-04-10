const get = (
  path: string,
  param?: Record<string, unknown>,
  headers?: Record<string, string>
) =>
  fetch(path, {
    headers,
  }).then((response) => response.json());

export const fetcher = {
  get,
};
