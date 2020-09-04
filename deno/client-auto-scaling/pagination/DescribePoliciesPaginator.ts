import { AutoScaling } from "../AutoScaling.ts";
import { AutoScalingClient } from "../AutoScalingClient.ts";
import {
  DescribePoliciesCommand,
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput,
} from "../commands/DescribePoliciesCommand.ts";
import { AutoScalingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribePoliciesCommandInput,
  ...args: any
): Promise<DescribePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribePoliciesCommandInput,
  ...args: any
): Promise<DescribePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.describePolicies(input, ...args);
};
export async function* describePoliciesPaginate(
  config: AutoScalingPaginationConfiguration,
  input: DescribePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribePoliciesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
