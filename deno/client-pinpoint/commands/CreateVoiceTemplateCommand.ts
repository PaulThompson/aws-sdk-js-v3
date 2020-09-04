import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { CreateVoiceTemplateRequest, CreateVoiceTemplateResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1CreateVoiceTemplateCommand,
  serializeAws_restJson1CreateVoiceTemplateCommand,
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

export type CreateVoiceTemplateCommandInput = CreateVoiceTemplateRequest;
export type CreateVoiceTemplateCommandOutput = CreateVoiceTemplateResponse & __MetadataBearer;

export class CreateVoiceTemplateCommand extends $Command<
  CreateVoiceTemplateCommandInput,
  CreateVoiceTemplateCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVoiceTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVoiceTemplateCommandInput, CreateVoiceTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateVoiceTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVoiceTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVoiceTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVoiceTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVoiceTemplateCommandOutput> {
    return deserializeAws_restJson1CreateVoiceTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
