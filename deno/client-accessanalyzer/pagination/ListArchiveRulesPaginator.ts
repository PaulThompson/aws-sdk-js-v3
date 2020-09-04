import { AccessAnalyzer } from "../AccessAnalyzer.ts";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient.ts";
import {
  ListArchiveRulesCommand,
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput,
} from "../commands/ListArchiveRulesCommand.ts";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListArchiveRulesCommandInput,
  ...args: any
): Promise<ListArchiveRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListArchiveRulesCommand(input, ...args));
};
const makePagedRequest = async (
  client: AccessAnalyzer,
  input: ListArchiveRulesCommandInput,
  ...args: any
): Promise<ListArchiveRulesCommandOutput> => {
  // @ts-ignore
  return await client.listArchiveRules(input, ...args);
};
export async function* listArchiveRulesPaginate(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListArchiveRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListArchiveRulesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListArchiveRulesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
