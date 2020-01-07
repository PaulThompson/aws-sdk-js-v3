import {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MigrationHubConfigClient";
import {
  CreateHomeRegionControlRequest,
  CreateHomeRegionControlResult
} from "../models/index";
import {
  deserializeAws_json1_1CreateHomeRegionControlCommand,
  serializeAws_json1_1CreateHomeRegionControlCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreateHomeRegionControlCommandInput = CreateHomeRegionControlRequest;
export type CreateHomeRegionControlCommandOutput = CreateHomeRegionControlResult;

export class CreateHomeRegionControlCommand extends $Command<
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
  MigrationHubConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHomeRegionControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateHomeRegionControlCommandInput,
    CreateHomeRegionControlCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateHomeRegionControlCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHomeRegionControlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateHomeRegionControlCommandOutput> {
    return deserializeAws_json1_1CreateHomeRegionControlCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}