import { CodestarNotifications } from "../CodestarNotifications.ts";
import { CodestarNotificationsClient } from "../CodestarNotificationsClient.ts";
import {
  ListNotificationRulesCommand,
  ListNotificationRulesCommandInput,
  ListNotificationRulesCommandOutput,
} from "../commands/ListNotificationRulesCommand.ts";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodestarNotificationsClient,
  input: ListNotificationRulesCommandInput,
  ...args: any
): Promise<ListNotificationRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNotificationRulesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodestarNotifications,
  input: ListNotificationRulesCommandInput,
  ...args: any
): Promise<ListNotificationRulesCommandOutput> => {
  // @ts-ignore
  return await client.listNotificationRules(input, ...args);
};
export async function* listNotificationRulesPaginate(
  config: CodestarNotificationsPaginationConfiguration,
  input: ListNotificationRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListNotificationRulesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListNotificationRulesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodestarNotifications) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodestarNotificationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodestarNotifications | CodestarNotificationsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
