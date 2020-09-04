import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  ListAttachedRolePoliciesCommand,
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "../commands/ListAttachedRolePoliciesCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListAttachedRolePoliciesCommandInput,
  ...args: any
): Promise<ListAttachedRolePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttachedRolePoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListAttachedRolePoliciesCommandInput,
  ...args: any
): Promise<ListAttachedRolePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listAttachedRolePolicies(input, ...args);
};
export async function* listAttachedRolePoliciesPaginate(
  config: IAMPaginationConfiguration,
  input: ListAttachedRolePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttachedRolePoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAttachedRolePoliciesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
