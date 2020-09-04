import { DeviceFarm } from "../DeviceFarm.ts";
import { DeviceFarmClient } from "../DeviceFarmClient.ts";
import {
  ListDevicePoolsCommand,
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput,
} from "../commands/ListDevicePoolsCommand.ts";
import { DeviceFarmPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListDevicePoolsCommandInput,
  ...args: any
): Promise<ListDevicePoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDevicePoolsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListDevicePoolsCommandInput,
  ...args: any
): Promise<ListDevicePoolsCommandOutput> => {
  // @ts-ignore
  return await client.listDevicePools(input, ...args);
};
export async function* listDevicePoolsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListDevicePoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListDevicePoolsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDevicePoolsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
