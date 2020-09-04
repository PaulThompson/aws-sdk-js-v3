import { EMR } from "../EMR.ts";
import { EMRClient } from "../EMRClient.ts";
import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand.ts";
import { EMRPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: EMRClient,
  input: ListStepsCommandInput,
  ...args: any
): Promise<ListStepsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStepsCommand(input, ...args));
};
const makePagedRequest = async (
  client: EMR,
  input: ListStepsCommandInput,
  ...args: any
): Promise<ListStepsCommandOutput> => {
  // @ts-ignore
  return await client.listSteps(input, ...args);
};
export async function* listStepsPaginate(
  config: EMRPaginationConfiguration,
  input: ListStepsCommandInput,
  ...additionalArguments: any
): Paginator<ListStepsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListStepsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
