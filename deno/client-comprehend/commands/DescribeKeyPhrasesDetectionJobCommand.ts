import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { DescribeKeyPhrasesDetectionJobRequest, DescribeKeyPhrasesDetectionJobResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand,
  serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand,
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

export type DescribeKeyPhrasesDetectionJobCommandInput = DescribeKeyPhrasesDetectionJobRequest;
export type DescribeKeyPhrasesDetectionJobCommandOutput = DescribeKeyPhrasesDetectionJobResponse & __MetadataBearer;

export class DescribeKeyPhrasesDetectionJobCommand extends $Command<
  DescribeKeyPhrasesDetectionJobCommandInput,
  DescribeKeyPhrasesDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeKeyPhrasesDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeKeyPhrasesDetectionJobCommandInput, DescribeKeyPhrasesDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeKeyPhrasesDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeKeyPhrasesDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeKeyPhrasesDetectionJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeKeyPhrasesDetectionJobCommandOutput> {
    return deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
