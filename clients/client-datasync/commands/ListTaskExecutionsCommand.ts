import {
  DataSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataSyncClient";
import {
  ListTaskExecutionsRequest,
  ListTaskExecutionsResponse
} from "../models/index";
import {
  deserializeAws_json1_1ListTaskExecutionsCommand,
  serializeAws_json1_1ListTaskExecutionsCommand
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

export type ListTaskExecutionsCommandInput = ListTaskExecutionsRequest;
export type ListTaskExecutionsCommandOutput = ListTaskExecutionsResponse;

export class ListTaskExecutionsCommand extends $Command<
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTaskExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput> {
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
    input: ListTaskExecutionsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTaskExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListTaskExecutionsCommandOutput> {
    return deserializeAws_json1_1ListTaskExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}