import {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient.ts";
import {
  AssociateResolverEndpointIpAddressRequest,
  AssociateResolverEndpointIpAddressResponse,
} from "../models/index.ts";
import {
  deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand,
  serializeAws_json1_1AssociateResolverEndpointIpAddressCommand,
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

export type AssociateResolverEndpointIpAddressCommandInput = AssociateResolverEndpointIpAddressRequest;
export type AssociateResolverEndpointIpAddressCommandOutput = AssociateResolverEndpointIpAddressResponse &
  __MetadataBearer;

export class AssociateResolverEndpointIpAddressCommand extends $Command<
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateResolverEndpointIpAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateResolverEndpointIpAddressCommandInput, AssociateResolverEndpointIpAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AssociateResolverEndpointIpAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateResolverEndpointIpAddressResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateResolverEndpointIpAddressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateResolverEndpointIpAddressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateResolverEndpointIpAddressCommandOutput> {
    return deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
