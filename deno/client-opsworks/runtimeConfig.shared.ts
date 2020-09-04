import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";

export const ClientSharedValues = {
  apiVersion: "2013-02-18",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "opsworks",
};
