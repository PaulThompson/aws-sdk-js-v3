import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  SearchNetworkProfilesCommand,
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
} from "../commands/SearchNetworkProfilesCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchNetworkProfilesCommandInput,
  ...args: any
): Promise<SearchNetworkProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchNetworkProfilesCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchNetworkProfilesCommandInput,
  ...args: any
): Promise<SearchNetworkProfilesCommandOutput> => {
  // @ts-ignore
  return await client.searchNetworkProfiles(input, ...args);
};
export async function* searchNetworkProfilesPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchNetworkProfilesCommandInput,
  ...additionalArguments: any
): Paginator<SearchNetworkProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchNetworkProfilesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
