import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient.ts";
import { PutDataLakeSettingsRequest, PutDataLakeSettingsResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1PutDataLakeSettingsCommand,
  serializeAws_json1_1PutDataLakeSettingsCommand,
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

export type PutDataLakeSettingsCommandInput = PutDataLakeSettingsRequest;
export type PutDataLakeSettingsCommandOutput = PutDataLakeSettingsResponse & __MetadataBearer;

export class PutDataLakeSettingsCommand extends $Command<
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDataLakeSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDataLakeSettingsCommandInput, PutDataLakeSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutDataLakeSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutDataLakeSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDataLakeSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutDataLakeSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDataLakeSettingsCommandOutput> {
    return deserializeAws_json1_1PutDataLakeSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
