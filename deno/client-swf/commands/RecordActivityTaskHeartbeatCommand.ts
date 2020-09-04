import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient.ts";
import { ActivityTaskStatus, RecordActivityTaskHeartbeatInput } from "../models/index.ts";
import {
  deserializeAws_json1_0RecordActivityTaskHeartbeatCommand,
  serializeAws_json1_0RecordActivityTaskHeartbeatCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type RecordActivityTaskHeartbeatCommandInput = RecordActivityTaskHeartbeatInput;
export type RecordActivityTaskHeartbeatCommandOutput = ActivityTaskStatus & __MetadataBearer;

export class RecordActivityTaskHeartbeatCommand extends $Command<
  RecordActivityTaskHeartbeatCommandInput,
  RecordActivityTaskHeartbeatCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecordActivityTaskHeartbeatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecordActivityTaskHeartbeatCommandInput, RecordActivityTaskHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RecordActivityTaskHeartbeatInput.filterSensitiveLog,
      outputFilterSensitiveLog: ActivityTaskStatus.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecordActivityTaskHeartbeatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RecordActivityTaskHeartbeatCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RecordActivityTaskHeartbeatCommandOutput> {
    return deserializeAws_json1_0RecordActivityTaskHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
