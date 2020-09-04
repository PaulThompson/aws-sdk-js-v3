import { AppMesh } from "../AppMesh.ts";
import { AppMeshClient } from "../AppMeshClient.ts";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand.ts";
import { AppMeshPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsForResourceCommand(input, ...args));
};
const makePagedRequest = async (
  client: AppMesh,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.listTagsForResource(input, ...args);
};
export async function* listTagsForResourcePaginate(
  config: AppMeshPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsForResourceCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTagsForResourceCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof AppMesh) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppMeshClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppMesh | AppMeshClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
