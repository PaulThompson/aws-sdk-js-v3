import { CloudDirectory } from "../CloudDirectory.ts";
import { CloudDirectoryClient } from "../CloudDirectoryClient.ts";
import {
  ListTypedLinkFacetAttributesCommand,
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "../commands/ListTypedLinkFacetAttributesCommand.ts";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListTypedLinkFacetAttributesCommandInput,
  ...args: any
): Promise<ListTypedLinkFacetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTypedLinkFacetAttributesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListTypedLinkFacetAttributesCommandInput,
  ...args: any
): Promise<ListTypedLinkFacetAttributesCommandOutput> => {
  // @ts-ignore
  return await client.listTypedLinkFacetAttributes(input, ...args);
};
export async function* listTypedLinkFacetAttributesPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListTypedLinkFacetAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListTypedLinkFacetAttributesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTypedLinkFacetAttributesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
