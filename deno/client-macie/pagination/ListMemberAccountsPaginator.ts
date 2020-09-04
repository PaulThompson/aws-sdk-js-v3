import { Macie } from "../Macie.ts";
import { MacieClient } from "../MacieClient.ts";
import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "../commands/ListMemberAccountsCommand.ts";
import { MaciePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: MacieClient,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMemberAccountsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Macie,
  input: ListMemberAccountsCommandInput,
  ...args: any
): Promise<ListMemberAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listMemberAccounts(input, ...args);
};
export async function* listMemberAccountsPaginate(
  config: MaciePaginationConfiguration,
  input: ListMemberAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListMemberAccountsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMemberAccountsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MacieClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie | MacieClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
