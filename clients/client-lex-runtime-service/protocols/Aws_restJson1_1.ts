import {
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput
} from "../commands/DeleteSessionCommand";
import {
  GetSessionCommandInput,
  GetSessionCommandOutput
} from "../commands/GetSessionCommand";
import {
  PostContentCommandInput,
  PostContentCommandOutput
} from "../commands/PostContentCommand";
import {
  PostTextCommandInput,
  PostTextCommandOutput
} from "../commands/PostTextCommand";
import {
  PutSessionCommandInput,
  PutSessionCommandOutput
} from "../commands/PutSessionCommand";
import {
  BadGatewayException,
  BadRequestException,
  Button,
  ConflictException,
  DependencyFailedException,
  DialogAction,
  GenericAttachment,
  IntentSummary,
  InternalFailureException,
  LimitExceededException,
  LoopDetectedException,
  NotAcceptableException,
  NotFoundException,
  RequestTimeoutException,
  ResponseCard,
  SentimentResponse,
  UnsupportedMediaTypeException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1DeleteSessionCommand(
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  if (input.botAlias !== undefined) {
    const labelValue: any = input.botAlias.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: any = input.botName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: any = input.userId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetSessionCommand(
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  if (input.botAlias !== undefined) {
    const labelValue: any = input.botAlias.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: any = input.botName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: any = input.userId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  const query: any = {};
  if (input.checkpointLabelFilter !== undefined) {
    query["checkpointLabelFilter"] = input.checkpointLabelFilter.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1PostContentCommand(
  input: PostContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  headers["x-amz-content-sha256"] = "UNSIGNED_PAYLOAD";
  if (input.accept !== undefined) {
    headers["Accept"] = input.accept.toString();
  }
  if (input.contentType !== undefined) {
    headers["Content-Type"] = input.contentType.toString();
  }
  if (input.requestAttributes !== undefined) {
    headers[
      "x-amz-lex-request-attributes"
    ] = input.requestAttributes.toString();
  }
  if (input.sessionAttributes !== undefined) {
    headers[
      "x-amz-lex-session-attributes"
    ] = input.sessionAttributes.toString();
  }
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
  if (input.botAlias !== undefined) {
    const labelValue: any = input.botAlias.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: any = input.botName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: any = input.userId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any = {};
  if (input.inputStream !== undefined) {
    body = input.inputStream;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PostTextCommand(
  input: PostTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
  if (input.botAlias !== undefined) {
    const labelValue: any = input.botAlias.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: any = input.botName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: any = input.userId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.inputText !== undefined) {
    bodyParams["inputText"] = input.inputText;
  }
  if (input.requestAttributes !== undefined) {
    bodyParams["requestAttributes"] = serializeAws_restJson1_1StringMap(
      input.requestAttributes,
      context
    );
  }
  if (input.sessionAttributes !== undefined) {
    bodyParams["sessionAttributes"] = serializeAws_restJson1_1StringMap(
      input.sessionAttributes,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutSessionCommand(
  input: PutSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.accept !== undefined) {
    headers["Accept"] = input.accept.toString();
  }
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  if (input.botAlias !== undefined) {
    const labelValue: any = input.botAlias.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: any = input.botName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: any = input.userId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.dialogAction !== undefined) {
    bodyParams["dialogAction"] = serializeAws_restJson1_1DialogAction(
      input.dialogAction,
      context
    );
  }
  if (input.recentIntentSummaryView !== undefined) {
    bodyParams[
      "recentIntentSummaryView"
    ] = serializeAws_restJson1_1IntentSummaryList(
      input.recentIntentSummaryView,
      context
    );
  }
  if (input.sessionAttributes !== undefined) {
    bodyParams["sessionAttributes"] = serializeAws_restJson1_1StringMap(
      input.sessionAttributes,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1DeleteSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteSessionCommandError(output, context);
  }
  const contents: DeleteSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSessionResponse",
    botAlias: undefined,
    botName: undefined,
    sessionId: undefined,
    userId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.botAlias !== undefined) {
    contents.botAlias = data.botAlias;
  }
  if (data.botName !== undefined) {
    contents.botName = data.botName;
  }
  if (data.sessionId !== undefined) {
    contents.sessionId = data.sessionId;
  }
  if (data.userId !== undefined) {
    contents.userId = data.userId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.deepsense.runtimeservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetSessionCommandError(output, context);
  }
  const contents: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSessionResponse",
    dialogAction: undefined,
    recentIntentSummaryView: undefined,
    sessionAttributes: undefined,
    sessionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dialogAction !== undefined) {
    contents.dialogAction = deserializeAws_restJson1_1DialogAction(
      data.dialogAction,
      context
    );
  }
  if (data.recentIntentSummaryView !== undefined) {
    contents.recentIntentSummaryView = deserializeAws_restJson1_1IntentSummaryList(
      data.recentIntentSummaryView,
      context
    );
  }
  if (data.sessionAttributes !== undefined) {
    contents.sessionAttributes = deserializeAws_restJson1_1StringMap(
      data.sessionAttributes,
      context
    );
  }
  if (data.sessionId !== undefined) {
    contents.sessionId = data.sessionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.deepsense.runtimeservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PostContentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostContentCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PostContentCommandError(output, context);
  }
  const contents: PostContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PostContentResponse",
    audioStream: undefined,
    contentType: undefined,
    dialogState: undefined,
    inputTranscript: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    sentimentResponse: undefined,
    sessionAttributes: undefined,
    sessionId: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  if (output.headers["Content-Type"] !== undefined) {
    contents.contentType = output.headers["Content-Type"];
  }
  if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
    contents.dialogState = output.headers["x-amz-lex-dialog-state"];
  }
  if (output.headers["x-amz-lex-input-transcript"] !== undefined) {
    contents.inputTranscript = output.headers["x-amz-lex-input-transcript"];
  }
  if (output.headers["x-amz-lex-intent-name"] !== undefined) {
    contents.intentName = output.headers["x-amz-lex-intent-name"];
  }
  if (output.headers["x-amz-lex-message"] !== undefined) {
    contents.message = output.headers["x-amz-lex-message"];
  }
  if (output.headers["x-amz-lex-message-format"] !== undefined) {
    contents.messageFormat = output.headers["x-amz-lex-message-format"];
  }
  if (output.headers["x-amz-lex-sentiment"] !== undefined) {
    contents.sentimentResponse = output.headers["x-amz-lex-sentiment"];
  }
  if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
    contents.sessionAttributes = output.headers["x-amz-lex-session-attributes"];
  }
  if (output.headers["x-amz-lex-session-id"] !== undefined) {
    contents.sessionId = output.headers["x-amz-lex-session-id"];
  }
  if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
    contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
  }
  if (output.headers["x-amz-lex-slots"] !== undefined) {
    contents.slots = output.headers["x-amz-lex-slots"];
  }
  const data: any = output.body;
  contents.audioStream = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PostContentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostContentCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotAcceptableException":
    case "com.amazonaws.commonapi.exceptions#NotAcceptableException":
      response = await deserializeAws_restJson1_1NotAcceptableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.commonapi.exceptions#RequestTimeoutException":
      response = await deserializeAws_restJson1_1RequestTimeoutExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.commonapi.exceptions#UnsupportedMediaTypeException":
      response = await deserializeAws_restJson1_1UnsupportedMediaTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadGatewayException":
    case "com.amazonaws.deepsense.runtimeservice#BadGatewayException":
      response = await deserializeAws_restJson1_1BadGatewayExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DependencyFailedException":
    case "com.amazonaws.deepsense.runtimeservice#DependencyFailedException":
      response = await deserializeAws_restJson1_1DependencyFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LoopDetectedException":
    case "com.amazonaws.deepsense.runtimeservice#LoopDetectedException":
      response = await deserializeAws_restJson1_1LoopDetectedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.deepsense.runtimeservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PostTextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTextCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PostTextCommandError(output, context);
  }
  const contents: PostTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PostTextResponse",
    dialogState: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    responseCard: undefined,
    sentimentResponse: undefined,
    sessionAttributes: undefined,
    sessionId: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dialogState !== undefined) {
    contents.dialogState = data.dialogState;
  }
  if (data.intentName !== undefined) {
    contents.intentName = data.intentName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.messageFormat !== undefined) {
    contents.messageFormat = data.messageFormat;
  }
  if (data.responseCard !== undefined) {
    contents.responseCard = deserializeAws_restJson1_1ResponseCard(
      data.responseCard,
      context
    );
  }
  if (data.sentimentResponse !== undefined) {
    contents.sentimentResponse = deserializeAws_restJson1_1SentimentResponse(
      data.sentimentResponse,
      context
    );
  }
  if (data.sessionAttributes !== undefined) {
    contents.sessionAttributes = deserializeAws_restJson1_1StringMap(
      data.sessionAttributes,
      context
    );
  }
  if (data.sessionId !== undefined) {
    contents.sessionId = data.sessionId;
  }
  if (data.slotToElicit !== undefined) {
    contents.slotToElicit = data.slotToElicit;
  }
  if (data.slots !== undefined) {
    contents.slots = deserializeAws_restJson1_1StringMap(data.slots, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PostTextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTextCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadGatewayException":
    case "com.amazonaws.deepsense.runtimeservice#BadGatewayException":
      response = await deserializeAws_restJson1_1BadGatewayExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DependencyFailedException":
    case "com.amazonaws.deepsense.runtimeservice#DependencyFailedException":
      response = await deserializeAws_restJson1_1DependencyFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LoopDetectedException":
    case "com.amazonaws.deepsense.runtimeservice#LoopDetectedException":
      response = await deserializeAws_restJson1_1LoopDetectedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.deepsense.runtimeservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSessionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutSessionCommandError(output, context);
  }
  const contents: PutSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutSessionResponse",
    audioStream: undefined,
    contentType: undefined,
    dialogState: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    sessionAttributes: undefined,
    sessionId: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  if (output.headers["Content-Type"] !== undefined) {
    contents.contentType = output.headers["Content-Type"];
  }
  if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
    contents.dialogState = output.headers["x-amz-lex-dialog-state"];
  }
  if (output.headers["x-amz-lex-intent-name"] !== undefined) {
    contents.intentName = output.headers["x-amz-lex-intent-name"];
  }
  if (output.headers["x-amz-lex-message"] !== undefined) {
    contents.message = output.headers["x-amz-lex-message"];
  }
  if (output.headers["x-amz-lex-message-format"] !== undefined) {
    contents.messageFormat = output.headers["x-amz-lex-message-format"];
  }
  if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
    contents.sessionAttributes = output.headers["x-amz-lex-session-attributes"];
  }
  if (output.headers["x-amz-lex-session-id"] !== undefined) {
    contents.sessionId = output.headers["x-amz-lex-session-id"];
  }
  if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
    contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
  }
  if (output.headers["x-amz-lex-slots"] !== undefined) {
    contents.slots = output.headers["x-amz-lex-slots"];
  }
  const data: any = output.body;
  contents.audioStream = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSessionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotAcceptableException":
    case "com.amazonaws.commonapi.exceptions#NotAcceptableException":
      response = await deserializeAws_restJson1_1NotAcceptableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BadGatewayException":
    case "com.amazonaws.deepsense.runtimeservice#BadGatewayException":
      response = await deserializeAws_restJson1_1BadGatewayExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DependencyFailedException":
    case "com.amazonaws.deepsense.runtimeservice#DependencyFailedException":
      response = await deserializeAws_restJson1_1DependencyFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.deepsense.runtimeservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    __type: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (output.headers["Retry-After"] !== undefined) {
    contents.retryAfterSeconds = output.headers["Retry-After"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotAcceptableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotAcceptableException> => {
  const contents: NotAcceptableException = {
    __type: "NotAcceptableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1RequestTimeoutExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: RequestTimeoutException = {
    __type: "RequestTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedMediaTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedMediaTypeException> => {
  const contents: UnsupportedMediaTypeException = {
    __type: "UnsupportedMediaTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadGatewayExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
  const contents: BadGatewayException = {
    __type: "BadGatewayException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DependencyFailedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const contents: DependencyFailedException = {
    __type: "DependencyFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LoopDetectedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LoopDetectedException> => {
  const contents: LoopDetectedException = {
    __type: "LoopDetectedException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1DialogAction = (
  input: DialogAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.fulfillmentState !== undefined) {
    bodyParams["fulfillmentState"] = input.fulfillmentState;
  }
  if (input.intentName !== undefined) {
    bodyParams["intentName"] = input.intentName;
  }
  if (input.message !== undefined) {
    bodyParams["message"] = input.message;
  }
  if (input.messageFormat !== undefined) {
    bodyParams["messageFormat"] = input.messageFormat;
  }
  if (input.slotToElicit !== undefined) {
    bodyParams["slotToElicit"] = input.slotToElicit;
  }
  if (input.slots !== undefined) {
    bodyParams["slots"] = serializeAws_restJson1_1StringMap(
      input.slots,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IntentSummary = (
  input: IntentSummary,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.checkpointLabel !== undefined) {
    bodyParams["checkpointLabel"] = input.checkpointLabel;
  }
  if (input.confirmationStatus !== undefined) {
    bodyParams["confirmationStatus"] = input.confirmationStatus;
  }
  if (input.dialogActionType !== undefined) {
    bodyParams["dialogActionType"] = input.dialogActionType;
  }
  if (input.fulfillmentState !== undefined) {
    bodyParams["fulfillmentState"] = input.fulfillmentState;
  }
  if (input.intentName !== undefined) {
    bodyParams["intentName"] = input.intentName;
  }
  if (input.slotToElicit !== undefined) {
    bodyParams["slotToElicit"] = input.slotToElicit;
  }
  if (input.slots !== undefined) {
    bodyParams["slots"] = serializeAws_restJson1_1StringMap(
      input.slots,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1IntentSummaryList = (
  input: Array<IntentSummary>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1IntentSummary(entry, context)
  );
};

const serializeAws_restJson1_1StringMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DialogAction = (
  output: any,
  context: __SerdeContext
): DialogAction => {
  let contents: any = {
    __type: "DialogAction",
    fulfillmentState: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    slotToElicit: undefined,
    slots: undefined,
    type: undefined
  };
  if (output.fulfillmentState !== undefined) {
    contents.fulfillmentState = output.fulfillmentState;
  }
  if (output.intentName !== undefined) {
    contents.intentName = output.intentName;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.messageFormat !== undefined) {
    contents.messageFormat = output.messageFormat;
  }
  if (output.slotToElicit !== undefined) {
    contents.slotToElicit = output.slotToElicit;
  }
  if (output.slots !== undefined) {
    contents.slots = deserializeAws_restJson1_1StringMap(output.slots, context);
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1IntentSummary = (
  output: any,
  context: __SerdeContext
): IntentSummary => {
  let contents: any = {
    __type: "IntentSummary",
    checkpointLabel: undefined,
    confirmationStatus: undefined,
    dialogActionType: undefined,
    fulfillmentState: undefined,
    intentName: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  if (output.checkpointLabel !== undefined) {
    contents.checkpointLabel = output.checkpointLabel;
  }
  if (output.confirmationStatus !== undefined) {
    contents.confirmationStatus = output.confirmationStatus;
  }
  if (output.dialogActionType !== undefined) {
    contents.dialogActionType = output.dialogActionType;
  }
  if (output.fulfillmentState !== undefined) {
    contents.fulfillmentState = output.fulfillmentState;
  }
  if (output.intentName !== undefined) {
    contents.intentName = output.intentName;
  }
  if (output.slotToElicit !== undefined) {
    contents.slotToElicit = output.slotToElicit;
  }
  if (output.slots !== undefined) {
    contents.slots = deserializeAws_restJson1_1StringMap(output.slots, context);
  }
  return contents;
};

const deserializeAws_restJson1_1IntentSummaryList = (
  output: any,
  context: __SerdeContext
): Array<IntentSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IntentSummary(entry, context)
  );
};

const deserializeAws_restJson1_1SentimentResponse = (
  output: any,
  context: __SerdeContext
): SentimentResponse => {
  let contents: any = {
    __type: "SentimentResponse",
    sentimentLabel: undefined,
    sentimentScore: undefined
  };
  if (output.sentimentLabel !== undefined) {
    contents.sentimentLabel = output.sentimentLabel;
  }
  if (output.sentimentScore !== undefined) {
    contents.sentimentScore = output.sentimentScore;
  }
  return contents;
};

const deserializeAws_restJson1_1StringMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Button = (
  output: any,
  context: __SerdeContext
): Button => {
  let contents: any = {
    __type: "Button",
    text: undefined,
    value: undefined
  };
  if (output.text !== undefined) {
    contents.text = output.text;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1GenericAttachment = (
  output: any,
  context: __SerdeContext
): GenericAttachment => {
  let contents: any = {
    __type: "GenericAttachment",
    attachmentLinkUrl: undefined,
    buttons: undefined,
    imageUrl: undefined,
    subTitle: undefined,
    title: undefined
  };
  if (output.attachmentLinkUrl !== undefined) {
    contents.attachmentLinkUrl = output.attachmentLinkUrl;
  }
  if (output.buttons !== undefined) {
    contents.buttons = deserializeAws_restJson1_1listOfButtons(
      output.buttons,
      context
    );
  }
  if (output.imageUrl !== undefined) {
    contents.imageUrl = output.imageUrl;
  }
  if (output.subTitle !== undefined) {
    contents.subTitle = output.subTitle;
  }
  if (output.title !== undefined) {
    contents.title = output.title;
  }
  return contents;
};

const deserializeAws_restJson1_1ResponseCard = (
  output: any,
  context: __SerdeContext
): ResponseCard => {
  let contents: any = {
    __type: "ResponseCard",
    contentType: undefined,
    genericAttachments: undefined,
    version: undefined
  };
  if (output.contentType !== undefined) {
    contents.contentType = output.contentType;
  }
  if (output.genericAttachments !== undefined) {
    contents.genericAttachments = deserializeAws_restJson1_1genericAttachmentList(
      output.genericAttachments,
      context
    );
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1genericAttachmentList = (
  output: any,
  context: __SerdeContext
): Array<GenericAttachment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GenericAttachment(entry, context)
  );
};

const deserializeAws_restJson1_1listOfButtons = (
  output: any,
  context: __SerdeContext
): Array<Button> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Button(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};