import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { DescribeStorediSCSIVolumesInput, DescribeStorediSCSIVolumesOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeStorediSCSIVolumesCommand,
  serializeAws_json1_1DescribeStorediSCSIVolumesCommand,
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

export type DescribeStorediSCSIVolumesCommandInput = DescribeStorediSCSIVolumesInput;
export type DescribeStorediSCSIVolumesCommandOutput = DescribeStorediSCSIVolumesOutput & __MetadataBearer;

export class DescribeStorediSCSIVolumesCommand extends $Command<
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStorediSCSIVolumesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeStorediSCSIVolumesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStorediSCSIVolumesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStorediSCSIVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStorediSCSIVolumesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStorediSCSIVolumesCommandOutput> {
    return deserializeAws_json1_1DescribeStorediSCSIVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
