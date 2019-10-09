import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResources } from "../model/operations/GetResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourcesInput } from "../types/GetResourcesInput";
import { GetResourcesOutput } from "../types/GetResourcesOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetResourcesInput";
export * from "../types/GetResourcesOutput";
export * from "../types/GetResourcesExceptionsUnion";

export class GetResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourcesInput,
      OutputTypesUnion,
      GetResourcesOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourcesInput,
    GetResourcesOutput,
    Blob
  >();

  constructor(readonly input: GetResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResourcesInput, GetResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourcesInput, GetResourcesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}