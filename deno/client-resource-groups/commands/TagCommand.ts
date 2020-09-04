import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient.ts";
import { TagInput, TagOutput } from "../models/index.ts";
import { deserializeAws_restJson1TagCommand, serializeAws_restJson1TagCommand } from "../protocols/Aws_restJson1.ts";
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

export type TagCommandInput = TagInput;
export type TagCommandOutput = TagOutput & __MetadataBearer;

export class TagCommand extends $Command<TagCommandInput, TagCommandOutput, ResourceGroupsClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagCommandInput, TagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: TagInput.filterSensitiveLog,
      outputFilterSensitiveLog: TagOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagCommandOutput> {
    return deserializeAws_restJson1TagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
