import { DatabaseMigrationService } from "../DatabaseMigrationService.ts";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient.ts";
import {
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "../commands/DescribeReplicationSubnetGroupsCommand.ts";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeReplicationSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationSubnetGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeReplicationSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationSubnetGroups(input, ...args);
};
export async function* describeReplicationSubnetGroupsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationSubnetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeReplicationSubnetGroupsCommandOutput;
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
