import { ApplicationInsights } from "../ApplicationInsights.ts";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient.ts";
import {
  ListLogPatternsCommand,
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput,
} from "../commands/ListLogPatternsCommand.ts";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListLogPatternsCommandInput,
  ...args: any
): Promise<ListLogPatternsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLogPatternsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ApplicationInsights,
  input: ListLogPatternsCommandInput,
  ...args: any
): Promise<ListLogPatternsCommandOutput> => {
  // @ts-ignore
  return await client.listLogPatterns(input, ...args);
};
export async function* listLogPatternsPaginate(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternsCommandInput,
  ...additionalArguments: any
): Paginator<ListLogPatternsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListLogPatternsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationInsights) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationInsightsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationInsights | ApplicationInsightsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
