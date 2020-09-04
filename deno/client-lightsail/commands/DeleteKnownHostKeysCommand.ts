import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DeleteKnownHostKeysRequest, DeleteKnownHostKeysResult } from "../models/index.ts";
import {
  deserializeAws_json1_1DeleteKnownHostKeysCommand,
  serializeAws_json1_1DeleteKnownHostKeysCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type DeleteKnownHostKeysCommandInput = DeleteKnownHostKeysRequest;
export type DeleteKnownHostKeysCommandOutput = DeleteKnownHostKeysResult & __MetadataBearer;

export class DeleteKnownHostKeysCommand extends $Command<
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteKnownHostKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteKnownHostKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteKnownHostKeysResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteKnownHostKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteKnownHostKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteKnownHostKeysCommandOutput> {
    return deserializeAws_json1_1DeleteKnownHostKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
