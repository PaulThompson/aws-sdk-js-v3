import {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient.ts";
import { UpdateResolverRuleRequest, UpdateResolverRuleResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateResolverRuleCommand,
  serializeAws_json1_1UpdateResolverRuleCommand,
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

export type UpdateResolverRuleCommandInput = UpdateResolverRuleRequest;
export type UpdateResolverRuleCommandOutput = UpdateResolverRuleResponse & __MetadataBearer;

export class UpdateResolverRuleCommand extends $Command<
  UpdateResolverRuleCommandInput,
  UpdateResolverRuleCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResolverRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateResolverRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResolverRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResolverRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResolverRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResolverRuleCommandOutput> {
    return deserializeAws_json1_1UpdateResolverRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
