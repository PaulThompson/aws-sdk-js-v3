import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { DisassociateMemberFromGroupRequest, DisassociateMemberFromGroupResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DisassociateMemberFromGroupCommand,
  serializeAws_json1_1DisassociateMemberFromGroupCommand,
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

export type DisassociateMemberFromGroupCommandInput = DisassociateMemberFromGroupRequest;
export type DisassociateMemberFromGroupCommandOutput = DisassociateMemberFromGroupResponse & __MetadataBearer;

export class DisassociateMemberFromGroupCommand extends $Command<
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMemberFromGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DisassociateMemberFromGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateMemberFromGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMemberFromGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateMemberFromGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateMemberFromGroupCommandOutput> {
    return deserializeAws_json1_1DisassociateMemberFromGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
