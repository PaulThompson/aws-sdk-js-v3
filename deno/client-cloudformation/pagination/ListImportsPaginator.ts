import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import {
  ListImportsCommand,
  ListImportsCommandInput,
  ListImportsCommandOutput,
} from "../commands/ListImportsCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListImportsCommandInput,
  ...args: any
): Promise<ListImportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImportsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListImportsCommandInput,
  ...args: any
): Promise<ListImportsCommandOutput> => {
  // @ts-ignore
  return await client.listImports(input, ...args);
};
export async function* listImportsPaginate(
  config: CloudFormationPaginationConfiguration,
  input: ListImportsCommandInput,
  ...additionalArguments: any
): Paginator<ListImportsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListImportsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
