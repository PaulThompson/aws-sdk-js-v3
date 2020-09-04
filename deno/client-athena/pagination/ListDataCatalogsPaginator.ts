import { Athena } from "../Athena.ts";
import { AthenaClient } from "../AthenaClient.ts";
import {
  ListDataCatalogsCommand,
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
} from "../commands/ListDataCatalogsCommand.ts";
import { AthenaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListDataCatalogsCommandInput,
  ...args: any
): Promise<ListDataCatalogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataCatalogsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Athena,
  input: ListDataCatalogsCommandInput,
  ...args: any
): Promise<ListDataCatalogsCommandOutput> => {
  // @ts-ignore
  return await client.listDataCatalogs(input, ...args);
};
export async function* listDataCatalogsPaginate(
  config: AthenaPaginationConfiguration,
  input: ListDataCatalogsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataCatalogsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDataCatalogsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
