import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeExportTasksCommandInput,
  ...args: any
): Promise<DescribeExportTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeExportTasksCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeExportTasksCommandInput,
  ...args: any
): Promise<DescribeExportTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeExportTasks(input, ...args);
};
export async function* describeExportTasksPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeExportTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeExportTasksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeExportTasksCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
