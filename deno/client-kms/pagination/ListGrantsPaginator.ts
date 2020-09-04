import { KMS } from "../KMS.ts";
import { KMSClient } from "../KMSClient.ts";
import { ListGrantsCommand, ListGrantsCommandInput, ListGrantsCommandOutput } from "../commands/ListGrantsCommand.ts";
import { KMSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: KMSClient,
  input: ListGrantsCommandInput,
  ...args: any
): Promise<ListGrantsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGrantsCommand(input, ...args));
};
const makePagedRequest = async (
  client: KMS,
  input: ListGrantsCommandInput,
  ...args: any
): Promise<ListGrantsCommandOutput> => {
  // @ts-ignore
  return await client.listGrants(input, ...args);
};
export async function* listGrantsPaginate(
  config: KMSPaginationConfiguration,
  input: ListGrantsCommandInput,
  ...additionalArguments: any
): Paginator<ListGrantsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListGrantsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
