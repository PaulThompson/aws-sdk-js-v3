import { DocDB } from "../DocDB.ts";
import { DocDBClient } from "../DocDBClient.ts";
import {
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "../commands/DescribeOrderableDBInstanceOptionsCommand.ts";
import { DocDBPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...args: any
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrderableDBInstanceOptionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DocDB,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...args: any
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeOrderableDBInstanceOptions(input, ...args);
};
export async function* describeOrderableDBInstanceOptionsPaginate(
  config: DocDBPaginationConfiguration,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrderableDBInstanceOptionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeOrderableDBInstanceOptionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
