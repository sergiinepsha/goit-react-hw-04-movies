import queryString from "query-string";

export default function (queryStringUrl) {
  return queryString.parse(queryStringUrl);
}
