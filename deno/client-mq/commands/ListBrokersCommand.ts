import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient.ts";
import { ListBrokersRequest, ListBrokersResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1ListBrokersCommand,
  serializeAws_restJson1ListBrokersCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type ListBrokersCommandInput = ListBrokersRequest;
export type ListBrokersCommandOutput = ListBrokersResponse & __MetadataBearer;

export class ListBrokersCommand extends $Command<
  ListBrokersCommandInput,
  ListBrokersCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBrokersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBrokersCommandInput, ListBrokersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListBrokersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBrokersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBrokersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBrokersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBrokersCommandOutput> {
    return deserializeAws_restJson1ListBrokersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
