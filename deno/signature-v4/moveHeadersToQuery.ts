import { HttpRequest, QueryParameterBag } from "../types/mod.ts";

import { cloneRequest } from "./cloneRequest.ts";

/**
 * @internal
 */
export function moveHeadersToQuery(request: HttpRequest): HttpRequest & { query: QueryParameterBag } {
  const { headers, query = {} as QueryParameterBag } =
    typeof (request as any).clone === "function" ? (request as any).clone() : cloneRequest(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.substr(0, 6) === "x-amz-") {
      query[name] = headers[name];
      delete headers[name];
    }
  }

  return {
    ...request,
    headers,
    query,
  };
}
