import { AutoScaling } from "../AutoScaling.ts";
import { AutoScalingClient } from "../AutoScalingClient.ts";
import {
  DescribeNotificationConfigurationsCommand,
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "../commands/DescribeNotificationConfigurationsCommand.ts";
import { AutoScalingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeNotificationConfigurationsCommandInput,
  ...args: any
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeNotificationConfigurationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribeNotificationConfigurationsCommandInput,
  ...args: any
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.describeNotificationConfigurations(input, ...args);
};
export async function* describeNotificationConfigurationsPaginate(
  config: AutoScalingPaginationConfiguration,
  input: DescribeNotificationConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNotificationConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeNotificationConfigurationsCommandOutput;
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
