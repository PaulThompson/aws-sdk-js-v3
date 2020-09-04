import { IoTThingsGraph } from "../IoTThingsGraph.ts";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient.ts";
import {
  SearchFlowTemplatesCommand,
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "../commands/SearchFlowTemplatesCommand.ts";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchFlowTemplatesCommandInput,
  ...args: any
): Promise<SearchFlowTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchFlowTemplatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchFlowTemplatesCommandInput,
  ...args: any
): Promise<SearchFlowTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.searchFlowTemplates(input, ...args);
};
export async function* searchFlowTemplatesPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchFlowTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<SearchFlowTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchFlowTemplatesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraph) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
