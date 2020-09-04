import { DatabaseMigrationService } from "../DatabaseMigrationService.ts";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient.ts";
import {
  DescribeTableStatisticsCommand,
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "../commands/DescribeTableStatisticsCommand.ts";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeTableStatisticsCommandInput,
  ...args: any
): Promise<DescribeTableStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTableStatisticsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeTableStatisticsCommandInput,
  ...args: any
): Promise<DescribeTableStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.describeTableStatistics(input, ...args);
};
export async function* describeTableStatisticsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeTableStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTableStatisticsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeTableStatisticsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
