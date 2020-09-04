import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient.ts";
import { SynthesizeSpeechInput, SynthesizeSpeechOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1SynthesizeSpeechCommand,
  serializeAws_restJson1SynthesizeSpeechCommand,
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

export type SynthesizeSpeechCommandInput = SynthesizeSpeechInput;
export type SynthesizeSpeechCommandOutput = SynthesizeSpeechOutput & __MetadataBearer;

export class SynthesizeSpeechCommand extends $Command<
  SynthesizeSpeechCommandInput,
  SynthesizeSpeechCommandOutput,
  PollyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SynthesizeSpeechCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SynthesizeSpeechCommandInput, SynthesizeSpeechCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SynthesizeSpeechInput.filterSensitiveLog,
      outputFilterSensitiveLog: SynthesizeSpeechOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SynthesizeSpeechCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SynthesizeSpeechCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SynthesizeSpeechCommandOutput> {
    return deserializeAws_restJson1SynthesizeSpeechCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
