import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient.ts";
import { ListGroupResourcesInput, ListGroupResourcesOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1ListGroupResourcesCommand,
  serializeAws_restJson1ListGroupResourcesCommand,
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

export type ListGroupResourcesCommandInput = ListGroupResourcesInput;
export type ListGroupResourcesCommandOutput = ListGroupResourcesOutput & __MetadataBearer;

export class ListGroupResourcesCommand extends $Command<
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
  ResourceGroupsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListGroupResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGroupResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGroupResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGroupResourcesCommandOutput> {
    return deserializeAws_restJson1ListGroupResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
