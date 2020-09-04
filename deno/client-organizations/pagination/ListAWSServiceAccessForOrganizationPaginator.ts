import { Organizations } from "../Organizations.ts";
import { OrganizationsClient } from "../OrganizationsClient.ts";
import {
  ListAWSServiceAccessForOrganizationCommand,
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "../commands/ListAWSServiceAccessForOrganizationCommand.ts";
import { OrganizationsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListAWSServiceAccessForOrganizationCommandInput,
  ...args: any
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAWSServiceAccessForOrganizationCommand(input, ...args));
};
const makePagedRequest = async (
  client: Organizations,
  input: ListAWSServiceAccessForOrganizationCommandInput,
  ...args: any
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.listAWSServiceAccessForOrganization(input, ...args);
};
export async function* listAWSServiceAccessForOrganizationPaginate(
  config: OrganizationsPaginationConfiguration,
  input: ListAWSServiceAccessForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<ListAWSServiceAccessForOrganizationCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAWSServiceAccessForOrganizationCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
