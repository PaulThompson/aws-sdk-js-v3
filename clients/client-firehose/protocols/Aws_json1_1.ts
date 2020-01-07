import {
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput
} from "../commands/CreateDeliveryStreamCommand";
import {
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput
} from "../commands/DeleteDeliveryStreamCommand";
import {
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput
} from "../commands/DescribeDeliveryStreamCommand";
import {
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput
} from "../commands/ListDeliveryStreamsCommand";
import {
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput
} from "../commands/ListTagsForDeliveryStreamCommand";
import {
  PutRecordBatchCommandInput,
  PutRecordBatchCommandOutput
} from "../commands/PutRecordBatchCommand";
import {
  PutRecordCommandInput,
  PutRecordCommandOutput
} from "../commands/PutRecordCommand";
import {
  StartDeliveryStreamEncryptionCommandInput,
  StartDeliveryStreamEncryptionCommandOutput
} from "../commands/StartDeliveryStreamEncryptionCommand";
import {
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput
} from "../commands/StopDeliveryStreamEncryptionCommand";
import {
  TagDeliveryStreamCommandInput,
  TagDeliveryStreamCommandOutput
} from "../commands/TagDeliveryStreamCommand";
import {
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput
} from "../commands/UntagDeliveryStreamCommand";
import {
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput
} from "../commands/UpdateDestinationCommand";
import {
  BufferingHints,
  CloudWatchLoggingOptions,
  ConcurrentModificationException,
  CopyCommand,
  CreateDeliveryStreamInput,
  CreateDeliveryStreamOutput,
  DataFormatConversionConfiguration,
  DeleteDeliveryStreamInput,
  DeleteDeliveryStreamOutput,
  DeliveryStreamDescription,
  DeliveryStreamEncryptionConfiguration,
  DeliveryStreamEncryptionConfigurationInput,
  DescribeDeliveryStreamInput,
  DescribeDeliveryStreamOutput,
  Deserializer,
  DestinationDescription,
  ElasticsearchBufferingHints,
  ElasticsearchDestinationConfiguration,
  ElasticsearchDestinationDescription,
  ElasticsearchDestinationUpdate,
  ElasticsearchRetryOptions,
  EncryptionConfiguration,
  ExtendedS3DestinationConfiguration,
  ExtendedS3DestinationDescription,
  ExtendedS3DestinationUpdate,
  FailureDescription,
  HiveJsonSerDe,
  InputFormatConfiguration,
  InvalidArgumentException,
  InvalidKMSResourceException,
  KMSEncryptionConfig,
  KinesisStreamSourceConfiguration,
  KinesisStreamSourceDescription,
  LimitExceededException,
  ListDeliveryStreamsInput,
  ListDeliveryStreamsOutput,
  ListTagsForDeliveryStreamInput,
  ListTagsForDeliveryStreamOutput,
  OpenXJsonSerDe,
  OrcSerDe,
  OutputFormatConfiguration,
  ParquetSerDe,
  ProcessingConfiguration,
  Processor,
  ProcessorParameter,
  PutRecordBatchInput,
  PutRecordBatchOutput,
  PutRecordBatchResponseEntry,
  PutRecordInput,
  PutRecordOutput,
  RedshiftDestinationConfiguration,
  RedshiftDestinationDescription,
  RedshiftDestinationUpdate,
  RedshiftRetryOptions,
  ResourceInUseException,
  ResourceNotFoundException,
  S3DestinationConfiguration,
  S3DestinationDescription,
  S3DestinationUpdate,
  SchemaConfiguration,
  Serializer,
  ServiceUnavailableException,
  SourceDescription,
  SplunkDestinationConfiguration,
  SplunkDestinationDescription,
  SplunkDestinationUpdate,
  SplunkRetryOptions,
  StartDeliveryStreamEncryptionInput,
  StartDeliveryStreamEncryptionOutput,
  StopDeliveryStreamEncryptionInput,
  StopDeliveryStreamEncryptionOutput,
  Tag,
  TagDeliveryStreamInput,
  TagDeliveryStreamOutput,
  UntagDeliveryStreamInput,
  UntagDeliveryStreamOutput,
  UpdateDestinationInput,
  UpdateDestinationOutput,
  _Record
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

export async function serializeAws_json1_1CreateDeliveryStreamCommand(
  input: CreateDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.CreateDeliveryStream";
  let body: any = {};
  const wrappedBody: any = {
    CreateDeliveryStreamInput: serializeAws_json1_1CreateDeliveryStreamInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDeliveryStream",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDeliveryStreamCommand(
  input: DeleteDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.DeleteDeliveryStream";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDeliveryStreamInput: serializeAws_json1_1DeleteDeliveryStreamInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDeliveryStream",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeDeliveryStreamCommand(
  input: DescribeDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.DescribeDeliveryStream";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDeliveryStreamInput: serializeAws_json1_1DescribeDeliveryStreamInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDeliveryStream",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDeliveryStreamsCommand(
  input: ListDeliveryStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.ListDeliveryStreams";
  let body: any = {};
  const wrappedBody: any = {
    ListDeliveryStreamsInput: serializeAws_json1_1ListDeliveryStreamsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDeliveryStreams",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForDeliveryStreamCommand(
  input: ListTagsForDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.ListTagsForDeliveryStream";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForDeliveryStreamInput: serializeAws_json1_1ListTagsForDeliveryStreamInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForDeliveryStream",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutRecordCommand(
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.PutRecord";
  let body: any = {};
  const wrappedBody: any = {
    PutRecordInput: serializeAws_json1_1PutRecordInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutRecord",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutRecordBatchCommand(
  input: PutRecordBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.PutRecordBatch";
  let body: any = {};
  const wrappedBody: any = {
    PutRecordBatchInput: serializeAws_json1_1PutRecordBatchInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutRecordBatch",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartDeliveryStreamEncryptionCommand(
  input: StartDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.StartDeliveryStreamEncryption";
  let body: any = {};
  const wrappedBody: any = {
    StartDeliveryStreamEncryptionInput: serializeAws_json1_1StartDeliveryStreamEncryptionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartDeliveryStreamEncryption",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopDeliveryStreamEncryptionCommand(
  input: StopDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.StopDeliveryStreamEncryption";
  let body: any = {};
  const wrappedBody: any = {
    StopDeliveryStreamEncryptionInput: serializeAws_json1_1StopDeliveryStreamEncryptionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopDeliveryStreamEncryption",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagDeliveryStreamCommand(
  input: TagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.TagDeliveryStream";
  let body: any = {};
  const wrappedBody: any = {
    TagDeliveryStreamInput: serializeAws_json1_1TagDeliveryStreamInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagDeliveryStream",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagDeliveryStreamCommand(
  input: UntagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.UntagDeliveryStream";
  let body: any = {};
  const wrappedBody: any = {
    UntagDeliveryStreamInput: serializeAws_json1_1UntagDeliveryStreamInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagDeliveryStream",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateDestinationCommand(
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.UpdateDestination";
  let body: any = {};
  const wrappedBody: any = {
    UpdateDestinationInput: serializeAws_json1_1UpdateDestinationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateDestination",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeliveryStreamOutput(
    data.CreateDeliveryStreamOutput,
    context
  );
  const response: CreateDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeliveryStreamOutput(
    data.DeleteDeliveryStreamOutput,
    context
  );
  const response: DeleteDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDeliveryStreamOutput(
    data.DescribeDeliveryStreamOutput,
    context
  );
  const response: DescribeDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListDeliveryStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeliveryStreamsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeliveryStreamsOutput(
    data.ListDeliveryStreamsOutput,
    context
  );
  const response: ListDeliveryStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeliveryStreamsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListDeliveryStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsForDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForDeliveryStreamOutput(
    data.ListTagsForDeliveryStreamOutput,
    context
  );
  const response: ListTagsForDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutRecordCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordOutput(
    data.PutRecordOutput,
    context
  );
  const response: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRecordOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutRecordCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose.v20150804#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutRecordBatchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRecordBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordBatchOutput(
    data.PutRecordBatchOutput,
    context
  );
  const response: PutRecordBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRecordBatchOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutRecordBatchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose.v20150804#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartDeliveryStreamEncryptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDeliveryStreamEncryptionOutput(
    data.StartDeliveryStreamEncryptionOutput,
    context
  );
  const response: StartDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDeliveryStreamEncryptionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopDeliveryStreamEncryptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDeliveryStreamEncryptionOutput(
    data.StopDeliveryStreamEncryptionOutput,
    context
  );
  const response: StopDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDeliveryStreamEncryptionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagDeliveryStreamOutput(
    data.TagDeliveryStreamOutput,
    context
  );
  const response: TagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagDeliveryStreamOutput(
    data.UntagDeliveryStreamOutput,
    context
  );
  const response: UntagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDestinationOutput(
    data.UpdateDestinationOutput,
    context
  );
  const response: UpdateDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDestinationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.firehose.v20150804#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = await deserializeAws_json1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.firehose.v20150804#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    output.body,
    context
  );
  const contents: ConcurrentModificationException = {
    __type: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(
    output.body,
    context
  );
  const contents: InvalidArgumentException = {
    __type: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKMSResourceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidKMSResourceException> => {
  const deserialized: any = deserializeAws_json1_1InvalidKMSResourceException(
    output.body,
    context
  );
  const contents: InvalidKMSResourceException = {
    __type: "InvalidKMSResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    output.body,
    context
  );
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    output.body,
    context
  );
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BufferingHints = (
  input: BufferingHints,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IntervalInSeconds !== undefined) {
    bodyParams["IntervalInSeconds"] = input.IntervalInSeconds;
  }
  if (input.SizeInMBs !== undefined) {
    bodyParams["SizeInMBs"] = input.SizeInMBs;
  }
  return bodyParams;
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: CloudWatchLoggingOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.LogGroupName !== undefined) {
    bodyParams["LogGroupName"] = input.LogGroupName;
  }
  if (input.LogStreamName !== undefined) {
    bodyParams["LogStreamName"] = input.LogStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1ColumnToJsonKeyMappings = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1CopyCommand = (
  input: CopyCommand,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CopyOptions !== undefined) {
    bodyParams["CopyOptions"] = input.CopyOptions;
  }
  if (input.DataTableColumns !== undefined) {
    bodyParams["DataTableColumns"] = input.DataTableColumns;
  }
  if (input.DataTableName !== undefined) {
    bodyParams["DataTableName"] = input.DataTableName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDeliveryStreamInput = (
  input: CreateDeliveryStreamInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamEncryptionConfigurationInput !== undefined) {
    bodyParams[
      "DeliveryStreamEncryptionConfigurationInput"
    ] = serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
      input.DeliveryStreamEncryptionConfigurationInput,
      context
    );
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.DeliveryStreamType !== undefined) {
    bodyParams["DeliveryStreamType"] = input.DeliveryStreamType;
  }
  if (input.ElasticsearchDestinationConfiguration !== undefined) {
    bodyParams[
      "ElasticsearchDestinationConfiguration"
    ] = serializeAws_json1_1ElasticsearchDestinationConfiguration(
      input.ElasticsearchDestinationConfiguration,
      context
    );
  }
  if (input.ExtendedS3DestinationConfiguration !== undefined) {
    bodyParams[
      "ExtendedS3DestinationConfiguration"
    ] = serializeAws_json1_1ExtendedS3DestinationConfiguration(
      input.ExtendedS3DestinationConfiguration,
      context
    );
  }
  if (input.KinesisStreamSourceConfiguration !== undefined) {
    bodyParams[
      "KinesisStreamSourceConfiguration"
    ] = serializeAws_json1_1KinesisStreamSourceConfiguration(
      input.KinesisStreamSourceConfiguration,
      context
    );
  }
  if (input.RedshiftDestinationConfiguration !== undefined) {
    bodyParams[
      "RedshiftDestinationConfiguration"
    ] = serializeAws_json1_1RedshiftDestinationConfiguration(
      input.RedshiftDestinationConfiguration,
      context
    );
  }
  if (input.S3DestinationConfiguration !== undefined) {
    bodyParams[
      "S3DestinationConfiguration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3DestinationConfiguration,
      context
    );
  }
  if (input.SplunkDestinationConfiguration !== undefined) {
    bodyParams[
      "SplunkDestinationConfiguration"
    ] = serializeAws_json1_1SplunkDestinationConfiguration(
      input.SplunkDestinationConfiguration,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagDeliveryStreamInputTagList(
      input.Tags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataFormatConversionConfiguration = (
  input: DataFormatConversionConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.InputFormatConfiguration !== undefined) {
    bodyParams[
      "InputFormatConfiguration"
    ] = serializeAws_json1_1InputFormatConfiguration(
      input.InputFormatConfiguration,
      context
    );
  }
  if (input.OutputFormatConfiguration !== undefined) {
    bodyParams[
      "OutputFormatConfiguration"
    ] = serializeAws_json1_1OutputFormatConfiguration(
      input.OutputFormatConfiguration,
      context
    );
  }
  if (input.SchemaConfiguration !== undefined) {
    bodyParams["SchemaConfiguration"] = serializeAws_json1_1SchemaConfiguration(
      input.SchemaConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDeliveryStreamInput = (
  input: DeleteDeliveryStreamInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AllowForceDelete !== undefined) {
    bodyParams["AllowForceDelete"] = input.AllowForceDelete;
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput = (
  input: DeliveryStreamEncryptionConfigurationInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyARN !== undefined) {
    bodyParams["KeyARN"] = input.KeyARN;
  }
  if (input.KeyType !== undefined) {
    bodyParams["KeyType"] = input.KeyType;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDeliveryStreamInput = (
  input: DescribeDeliveryStreamInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.ExclusiveStartDestinationId !== undefined) {
    bodyParams["ExclusiveStartDestinationId"] =
      input.ExclusiveStartDestinationId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1Deserializer = (
  input: Deserializer,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HiveJsonSerDe !== undefined) {
    bodyParams["HiveJsonSerDe"] = serializeAws_json1_1HiveJsonSerDe(
      input.HiveJsonSerDe,
      context
    );
  }
  if (input.OpenXJsonSerDe !== undefined) {
    bodyParams["OpenXJsonSerDe"] = serializeAws_json1_1OpenXJsonSerDe(
      input.OpenXJsonSerDe,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchBufferingHints = (
  input: ElasticsearchBufferingHints,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IntervalInSeconds !== undefined) {
    bodyParams["IntervalInSeconds"] = input.IntervalInSeconds;
  }
  if (input.SizeInMBs !== undefined) {
    bodyParams["SizeInMBs"] = input.SizeInMBs;
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchDestinationConfiguration = (
  input: ElasticsearchDestinationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BufferingHints !== undefined) {
    bodyParams[
      "BufferingHints"
    ] = serializeAws_json1_1ElasticsearchBufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterEndpoint !== undefined) {
    bodyParams["ClusterEndpoint"] = input.ClusterEndpoint;
  }
  if (input.DomainARN !== undefined) {
    bodyParams["DomainARN"] = input.DomainARN;
  }
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.IndexRotationPeriod !== undefined) {
    bodyParams["IndexRotationPeriod"] = input.IndexRotationPeriod;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1ElasticsearchRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Configuration !== undefined) {
    bodyParams[
      "S3Configuration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3Configuration,
      context
    );
  }
  if (input.TypeName !== undefined) {
    bodyParams["TypeName"] = input.TypeName;
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchDestinationUpdate = (
  input: ElasticsearchDestinationUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BufferingHints !== undefined) {
    bodyParams[
      "BufferingHints"
    ] = serializeAws_json1_1ElasticsearchBufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterEndpoint !== undefined) {
    bodyParams["ClusterEndpoint"] = input.ClusterEndpoint;
  }
  if (input.DomainARN !== undefined) {
    bodyParams["DomainARN"] = input.DomainARN;
  }
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.IndexRotationPeriod !== undefined) {
    bodyParams["IndexRotationPeriod"] = input.IndexRotationPeriod;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1ElasticsearchRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3Update !== undefined) {
    bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3Update,
      context
    );
  }
  if (input.TypeName !== undefined) {
    bodyParams["TypeName"] = input.TypeName;
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchRetryOptions = (
  input: ElasticsearchRetryOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DurationInSeconds !== undefined) {
    bodyParams["DurationInSeconds"] = input.DurationInSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionConfiguration = (
  input: EncryptionConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KMSEncryptionConfig !== undefined) {
    bodyParams["KMSEncryptionConfig"] = serializeAws_json1_1KMSEncryptionConfig(
      input.KMSEncryptionConfig,
      context
    );
  }
  if (input.NoEncryptionConfig !== undefined) {
    bodyParams["NoEncryptionConfig"] = input.NoEncryptionConfig;
  }
  return bodyParams;
};

const serializeAws_json1_1ExtendedS3DestinationConfiguration = (
  input: ExtendedS3DestinationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.DataFormatConversionConfiguration !== undefined) {
    bodyParams[
      "DataFormatConversionConfiguration"
    ] = serializeAws_json1_1DataFormatConversionConfiguration(
      input.DataFormatConversionConfiguration,
      context
    );
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupConfiguration !== undefined) {
    bodyParams[
      "S3BackupConfiguration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3BackupConfiguration,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  return bodyParams;
};

const serializeAws_json1_1ExtendedS3DestinationUpdate = (
  input: ExtendedS3DestinationUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.DataFormatConversionConfiguration !== undefined) {
    bodyParams[
      "DataFormatConversionConfiguration"
    ] = serializeAws_json1_1DataFormatConversionConfiguration(
      input.DataFormatConversionConfiguration,
      context
    );
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3BackupUpdate !== undefined) {
    bodyParams["S3BackupUpdate"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3BackupUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1HiveJsonSerDe = (
  input: HiveJsonSerDe,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TimestampFormats !== undefined) {
    bodyParams["TimestampFormats"] = serializeAws_json1_1ListOfNonEmptyStrings(
      input.TimestampFormats,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InputFormatConfiguration = (
  input: InputFormatConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Deserializer !== undefined) {
    bodyParams["Deserializer"] = serializeAws_json1_1Deserializer(
      input.Deserializer,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1KMSEncryptionConfig = (
  input: KMSEncryptionConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AWSKMSKeyARN !== undefined) {
    bodyParams["AWSKMSKeyARN"] = input.AWSKMSKeyARN;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisStreamSourceConfiguration = (
  input: KinesisStreamSourceConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KinesisStreamARN !== undefined) {
    bodyParams["KinesisStreamARN"] = input.KinesisStreamARN;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeliveryStreamsInput = (
  input: ListDeliveryStreamsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamType !== undefined) {
    bodyParams["DeliveryStreamType"] = input.DeliveryStreamType;
  }
  if (input.ExclusiveStartDeliveryStreamName !== undefined) {
    bodyParams["ExclusiveStartDeliveryStreamName"] =
      input.ExclusiveStartDeliveryStreamName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOfNonEmptyStrings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ListTagsForDeliveryStreamInput = (
  input: ListTagsForDeliveryStreamInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.ExclusiveStartTagKey !== undefined) {
    bodyParams["ExclusiveStartTagKey"] = input.ExclusiveStartTagKey;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1OpenXJsonSerDe = (
  input: OpenXJsonSerDe,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CaseInsensitive !== undefined) {
    bodyParams["CaseInsensitive"] = input.CaseInsensitive;
  }
  if (input.ColumnToJsonKeyMappings !== undefined) {
    bodyParams[
      "ColumnToJsonKeyMappings"
    ] = serializeAws_json1_1ColumnToJsonKeyMappings(
      input.ColumnToJsonKeyMappings,
      context
    );
  }
  if (input.ConvertDotsInJsonKeysToUnderscores !== undefined) {
    bodyParams["ConvertDotsInJsonKeysToUnderscores"] =
      input.ConvertDotsInJsonKeysToUnderscores;
  }
  return bodyParams;
};

const serializeAws_json1_1OrcSerDe = (
  input: OrcSerDe,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BlockSizeBytes !== undefined) {
    bodyParams["BlockSizeBytes"] = input.BlockSizeBytes;
  }
  if (input.BloomFilterColumns !== undefined) {
    bodyParams[
      "BloomFilterColumns"
    ] = serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(
      input.BloomFilterColumns,
      context
    );
  }
  if (input.BloomFilterFalsePositiveProbability !== undefined) {
    bodyParams["BloomFilterFalsePositiveProbability"] =
      input.BloomFilterFalsePositiveProbability;
  }
  if (input.Compression !== undefined) {
    bodyParams["Compression"] = input.Compression;
  }
  if (input.DictionaryKeyThreshold !== undefined) {
    bodyParams["DictionaryKeyThreshold"] = input.DictionaryKeyThreshold;
  }
  if (input.EnablePadding !== undefined) {
    bodyParams["EnablePadding"] = input.EnablePadding;
  }
  if (input.FormatVersion !== undefined) {
    bodyParams["FormatVersion"] = input.FormatVersion;
  }
  if (input.PaddingTolerance !== undefined) {
    bodyParams["PaddingTolerance"] = input.PaddingTolerance;
  }
  if (input.RowIndexStride !== undefined) {
    bodyParams["RowIndexStride"] = input.RowIndexStride;
  }
  if (input.StripeSizeBytes !== undefined) {
    bodyParams["StripeSizeBytes"] = input.StripeSizeBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputFormatConfiguration = (
  input: OutputFormatConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Serializer !== undefined) {
    bodyParams["Serializer"] = serializeAws_json1_1Serializer(
      input.Serializer,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ParquetSerDe = (
  input: ParquetSerDe,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BlockSizeBytes !== undefined) {
    bodyParams["BlockSizeBytes"] = input.BlockSizeBytes;
  }
  if (input.Compression !== undefined) {
    bodyParams["Compression"] = input.Compression;
  }
  if (input.EnableDictionaryCompression !== undefined) {
    bodyParams["EnableDictionaryCompression"] =
      input.EnableDictionaryCompression;
  }
  if (input.MaxPaddingBytes !== undefined) {
    bodyParams["MaxPaddingBytes"] = input.MaxPaddingBytes;
  }
  if (input.PageSizeBytes !== undefined) {
    bodyParams["PageSizeBytes"] = input.PageSizeBytes;
  }
  if (input.WriterVersion !== undefined) {
    bodyParams["WriterVersion"] = input.WriterVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1ProcessingConfiguration = (
  input: ProcessingConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.Processors !== undefined) {
    bodyParams["Processors"] = serializeAws_json1_1ProcessorList(
      input.Processors,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Processor = (
  input: Processor,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Parameters !== undefined) {
    bodyParams["Parameters"] = serializeAws_json1_1ProcessorParameterList(
      input.Parameters,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1ProcessorList = (
  input: Array<Processor>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1Processor(entry, context)
  );
};

const serializeAws_json1_1ProcessorParameter = (
  input: ProcessorParameter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ParameterName !== undefined) {
    bodyParams["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue !== undefined) {
    bodyParams["ParameterValue"] = input.ParameterValue;
  }
  return bodyParams;
};

const serializeAws_json1_1ProcessorParameterList = (
  input: Array<ProcessorParameter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ProcessorParameter(entry, context)
  );
};

const serializeAws_json1_1PutRecordBatchInput = (
  input: PutRecordBatchInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.Records !== undefined) {
    bodyParams["Records"] = serializeAws_json1_1PutRecordBatchRequestEntryList(
      input.Records,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutRecordBatchRequestEntryList = (
  input: Array<_Record>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1_Record(entry, context)
  );
};

const serializeAws_json1_1PutRecordInput = (
  input: PutRecordInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.Record !== undefined) {
    bodyParams["Record"] = serializeAws_json1_1_Record(input.Record, context);
  }
  return bodyParams;
};

const serializeAws_json1_1_Record = (
  input: _Record,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Data !== undefined) {
    bodyParams["Data"] = context.base64Encoder(input.Data);
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftDestinationConfiguration = (
  input: RedshiftDestinationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterJDBCURL !== undefined) {
    bodyParams["ClusterJDBCURL"] = input.ClusterJDBCURL;
  }
  if (input.CopyCommand !== undefined) {
    bodyParams["CopyCommand"] = serializeAws_json1_1CopyCommand(
      input.CopyCommand,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1RedshiftRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupConfiguration !== undefined) {
    bodyParams[
      "S3BackupConfiguration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3BackupConfiguration,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Configuration !== undefined) {
    bodyParams[
      "S3Configuration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3Configuration,
      context
    );
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftDestinationUpdate = (
  input: RedshiftDestinationUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterJDBCURL !== undefined) {
    bodyParams["ClusterJDBCURL"] = input.ClusterJDBCURL;
  }
  if (input.CopyCommand !== undefined) {
    bodyParams["CopyCommand"] = serializeAws_json1_1CopyCommand(
      input.CopyCommand,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1RedshiftRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3BackupUpdate !== undefined) {
    bodyParams["S3BackupUpdate"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3BackupUpdate,
      context
    );
  }
  if (input.S3Update !== undefined) {
    bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3Update,
      context
    );
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftRetryOptions = (
  input: RedshiftRetryOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DurationInSeconds !== undefined) {
    bodyParams["DurationInSeconds"] = input.DurationInSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1S3DestinationConfiguration = (
  input: S3DestinationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1S3DestinationUpdate = (
  input: S3DestinationUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1SchemaConfiguration = (
  input: SchemaConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams["CatalogId"] = input.CatalogId;
  }
  if (input.DatabaseName !== undefined) {
    bodyParams["DatabaseName"] = input.DatabaseName;
  }
  if (input.Region !== undefined) {
    bodyParams["Region"] = input.Region;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.VersionId !== undefined) {
    bodyParams["VersionId"] = input.VersionId;
  }
  return bodyParams;
};

const serializeAws_json1_1Serializer = (
  input: Serializer,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.OrcSerDe !== undefined) {
    bodyParams["OrcSerDe"] = serializeAws_json1_1OrcSerDe(
      input.OrcSerDe,
      context
    );
  }
  if (input.ParquetSerDe !== undefined) {
    bodyParams["ParquetSerDe"] = serializeAws_json1_1ParquetSerDe(
      input.ParquetSerDe,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SplunkDestinationConfiguration = (
  input: SplunkDestinationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.HECAcknowledgmentTimeoutInSeconds !== undefined) {
    bodyParams["HECAcknowledgmentTimeoutInSeconds"] =
      input.HECAcknowledgmentTimeoutInSeconds;
  }
  if (input.HECEndpoint !== undefined) {
    bodyParams["HECEndpoint"] = input.HECEndpoint;
  }
  if (input.HECEndpointType !== undefined) {
    bodyParams["HECEndpointType"] = input.HECEndpointType;
  }
  if (input.HECToken !== undefined) {
    bodyParams["HECToken"] = input.HECToken;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1SplunkRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Configuration !== undefined) {
    bodyParams[
      "S3Configuration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3Configuration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SplunkDestinationUpdate = (
  input: SplunkDestinationUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.HECAcknowledgmentTimeoutInSeconds !== undefined) {
    bodyParams["HECAcknowledgmentTimeoutInSeconds"] =
      input.HECAcknowledgmentTimeoutInSeconds;
  }
  if (input.HECEndpoint !== undefined) {
    bodyParams["HECEndpoint"] = input.HECEndpoint;
  }
  if (input.HECEndpointType !== undefined) {
    bodyParams["HECEndpointType"] = input.HECEndpointType;
  }
  if (input.HECToken !== undefined) {
    bodyParams["HECToken"] = input.HECToken;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1SplunkRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Update !== undefined) {
    bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3Update,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SplunkRetryOptions = (
  input: SplunkRetryOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DurationInSeconds !== undefined) {
    bodyParams["DurationInSeconds"] = input.DurationInSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1StartDeliveryStreamEncryptionInput = (
  input: StartDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamEncryptionConfigurationInput !== undefined) {
    bodyParams[
      "DeliveryStreamEncryptionConfigurationInput"
    ] = serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
      input.DeliveryStreamEncryptionConfigurationInput,
      context
    );
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1StopDeliveryStreamEncryptionInput = (
  input: StopDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagDeliveryStreamInput = (
  input: TagDeliveryStreamInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagDeliveryStreamInputTagList(
      input.Tags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TagDeliveryStreamInputTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1UntagDeliveryStreamInput = (
  input: UntagDeliveryStreamInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDestinationInput = (
  input: UpdateDestinationInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CurrentDeliveryStreamVersionId !== undefined) {
    bodyParams["CurrentDeliveryStreamVersionId"] =
      input.CurrentDeliveryStreamVersionId;
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.DestinationId !== undefined) {
    bodyParams["DestinationId"] = input.DestinationId;
  }
  if (input.ElasticsearchDestinationUpdate !== undefined) {
    bodyParams[
      "ElasticsearchDestinationUpdate"
    ] = serializeAws_json1_1ElasticsearchDestinationUpdate(
      input.ElasticsearchDestinationUpdate,
      context
    );
  }
  if (input.ExtendedS3DestinationUpdate !== undefined) {
    bodyParams[
      "ExtendedS3DestinationUpdate"
    ] = serializeAws_json1_1ExtendedS3DestinationUpdate(
      input.ExtendedS3DestinationUpdate,
      context
    );
  }
  if (input.RedshiftDestinationUpdate !== undefined) {
    bodyParams[
      "RedshiftDestinationUpdate"
    ] = serializeAws_json1_1RedshiftDestinationUpdate(
      input.RedshiftDestinationUpdate,
      context
    );
  }
  if (input.S3DestinationUpdate !== undefined) {
    bodyParams["S3DestinationUpdate"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3DestinationUpdate,
      context
    );
  }
  if (input.SplunkDestinationUpdate !== undefined) {
    bodyParams[
      "SplunkDestinationUpdate"
    ] = serializeAws_json1_1SplunkDestinationUpdate(
      input.SplunkDestinationUpdate,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1BufferingHints = (
  output: any,
  context: __SerdeContext
): BufferingHints => {
  let contents: any = {
    __type: "BufferingHints",
    IntervalInSeconds: undefined,
    SizeInMBs: undefined
  };
  if (output.IntervalInSeconds !== undefined) {
    contents.IntervalInSeconds = output.IntervalInSeconds;
  }
  if (output.SizeInMBs !== undefined) {
    contents.SizeInMBs = output.SizeInMBs;
  }
  return contents;
};

const deserializeAws_json1_1CloudWatchLoggingOptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptions => {
  let contents: any = {
    __type: "CloudWatchLoggingOptions",
    Enabled: undefined,
    LogGroupName: undefined,
    LogStreamName: undefined
  };
  if (output.Enabled !== undefined) {
    contents.Enabled = output.Enabled;
  }
  if (output.LogGroupName !== undefined) {
    contents.LogGroupName = output.LogGroupName;
  }
  if (output.LogStreamName !== undefined) {
    contents.LogStreamName = output.LogStreamName;
  }
  return contents;
};

const deserializeAws_json1_1ColumnToJsonKeyMappings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CopyCommand = (
  output: any,
  context: __SerdeContext
): CopyCommand => {
  let contents: any = {
    __type: "CopyCommand",
    CopyOptions: undefined,
    DataTableColumns: undefined,
    DataTableName: undefined
  };
  if (output.CopyOptions !== undefined) {
    contents.CopyOptions = output.CopyOptions;
  }
  if (output.DataTableColumns !== undefined) {
    contents.DataTableColumns = output.DataTableColumns;
  }
  if (output.DataTableName !== undefined) {
    contents.DataTableName = output.DataTableName;
  }
  return contents;
};

const deserializeAws_json1_1CreateDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): CreateDeliveryStreamOutput => {
  let contents: any = {
    __type: "CreateDeliveryStreamOutput",
    DeliveryStreamARN: undefined
  };
  if (output.DeliveryStreamARN !== undefined) {
    contents.DeliveryStreamARN = output.DeliveryStreamARN;
  }
  return contents;
};

const deserializeAws_json1_1DataFormatConversionConfiguration = (
  output: any,
  context: __SerdeContext
): DataFormatConversionConfiguration => {
  let contents: any = {
    __type: "DataFormatConversionConfiguration",
    Enabled: undefined,
    InputFormatConfiguration: undefined,
    OutputFormatConfiguration: undefined,
    SchemaConfiguration: undefined
  };
  if (output.Enabled !== undefined) {
    contents.Enabled = output.Enabled;
  }
  if (output.InputFormatConfiguration !== undefined) {
    contents.InputFormatConfiguration = deserializeAws_json1_1InputFormatConfiguration(
      output.InputFormatConfiguration,
      context
    );
  }
  if (output.OutputFormatConfiguration !== undefined) {
    contents.OutputFormatConfiguration = deserializeAws_json1_1OutputFormatConfiguration(
      output.OutputFormatConfiguration,
      context
    );
  }
  if (output.SchemaConfiguration !== undefined) {
    contents.SchemaConfiguration = deserializeAws_json1_1SchemaConfiguration(
      output.SchemaConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DeleteDeliveryStreamOutput => {
  let contents: any = {
    __type: "DeleteDeliveryStreamOutput"
  };
  return contents;
};

const deserializeAws_json1_1DeliveryStreamDescription = (
  output: any,
  context: __SerdeContext
): DeliveryStreamDescription => {
  let contents: any = {
    __type: "DeliveryStreamDescription",
    CreateTimestamp: undefined,
    DeliveryStreamARN: undefined,
    DeliveryStreamEncryptionConfiguration: undefined,
    DeliveryStreamName: undefined,
    DeliveryStreamStatus: undefined,
    DeliveryStreamType: undefined,
    Destinations: undefined,
    FailureDescription: undefined,
    HasMoreDestinations: undefined,
    LastUpdateTimestamp: undefined,
    Source: undefined,
    VersionId: undefined
  };
  if (output.CreateTimestamp !== undefined) {
    contents.CreateTimestamp = new Date(
      output.CreateTimestamp % 1 != 0
        ? Math.round(output.CreateTimestamp * 1000)
        : output.CreateTimestamp
    );
  }
  if (output.DeliveryStreamARN !== undefined) {
    contents.DeliveryStreamARN = output.DeliveryStreamARN;
  }
  if (output.DeliveryStreamEncryptionConfiguration !== undefined) {
    contents.DeliveryStreamEncryptionConfiguration = deserializeAws_json1_1DeliveryStreamEncryptionConfiguration(
      output.DeliveryStreamEncryptionConfiguration,
      context
    );
  }
  if (output.DeliveryStreamName !== undefined) {
    contents.DeliveryStreamName = output.DeliveryStreamName;
  }
  if (output.DeliveryStreamStatus !== undefined) {
    contents.DeliveryStreamStatus = output.DeliveryStreamStatus;
  }
  if (output.DeliveryStreamType !== undefined) {
    contents.DeliveryStreamType = output.DeliveryStreamType;
  }
  if (output.Destinations !== undefined) {
    contents.Destinations = deserializeAws_json1_1DestinationDescriptionList(
      output.Destinations,
      context
    );
  }
  if (output.FailureDescription !== undefined) {
    contents.FailureDescription = deserializeAws_json1_1FailureDescription(
      output.FailureDescription,
      context
    );
  }
  if (output.HasMoreDestinations !== undefined) {
    contents.HasMoreDestinations = output.HasMoreDestinations;
  }
  if (output.LastUpdateTimestamp !== undefined) {
    contents.LastUpdateTimestamp = new Date(
      output.LastUpdateTimestamp % 1 != 0
        ? Math.round(output.LastUpdateTimestamp * 1000)
        : output.LastUpdateTimestamp
    );
  }
  if (output.Source !== undefined) {
    contents.Source = deserializeAws_json1_1SourceDescription(
      output.Source,
      context
    );
  }
  if (output.VersionId !== undefined) {
    contents.VersionId = output.VersionId;
  }
  return contents;
};

const deserializeAws_json1_1DeliveryStreamEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): DeliveryStreamEncryptionConfiguration => {
  let contents: any = {
    __type: "DeliveryStreamEncryptionConfiguration",
    FailureDescription: undefined,
    KeyARN: undefined,
    KeyType: undefined,
    Status: undefined
  };
  if (output.FailureDescription !== undefined) {
    contents.FailureDescription = deserializeAws_json1_1FailureDescription(
      output.FailureDescription,
      context
    );
  }
  if (output.KeyARN !== undefined) {
    contents.KeyARN = output.KeyARN;
  }
  if (output.KeyType !== undefined) {
    contents.KeyType = output.KeyType;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DeliveryStreamNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DescribeDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryStreamOutput => {
  let contents: any = {
    __type: "DescribeDeliveryStreamOutput",
    DeliveryStreamDescription: undefined
  };
  if (output.DeliveryStreamDescription !== undefined) {
    contents.DeliveryStreamDescription = deserializeAws_json1_1DeliveryStreamDescription(
      output.DeliveryStreamDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Deserializer = (
  output: any,
  context: __SerdeContext
): Deserializer => {
  let contents: any = {
    __type: "Deserializer",
    HiveJsonSerDe: undefined,
    OpenXJsonSerDe: undefined
  };
  if (output.HiveJsonSerDe !== undefined) {
    contents.HiveJsonSerDe = deserializeAws_json1_1HiveJsonSerDe(
      output.HiveJsonSerDe,
      context
    );
  }
  if (output.OpenXJsonSerDe !== undefined) {
    contents.OpenXJsonSerDe = deserializeAws_json1_1OpenXJsonSerDe(
      output.OpenXJsonSerDe,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DestinationDescription = (
  output: any,
  context: __SerdeContext
): DestinationDescription => {
  let contents: any = {
    __type: "DestinationDescription",
    DestinationId: undefined,
    ElasticsearchDestinationDescription: undefined,
    ExtendedS3DestinationDescription: undefined,
    RedshiftDestinationDescription: undefined,
    S3DestinationDescription: undefined,
    SplunkDestinationDescription: undefined
  };
  if (output.DestinationId !== undefined) {
    contents.DestinationId = output.DestinationId;
  }
  if (output.ElasticsearchDestinationDescription !== undefined) {
    contents.ElasticsearchDestinationDescription = deserializeAws_json1_1ElasticsearchDestinationDescription(
      output.ElasticsearchDestinationDescription,
      context
    );
  }
  if (output.ExtendedS3DestinationDescription !== undefined) {
    contents.ExtendedS3DestinationDescription = deserializeAws_json1_1ExtendedS3DestinationDescription(
      output.ExtendedS3DestinationDescription,
      context
    );
  }
  if (output.RedshiftDestinationDescription !== undefined) {
    contents.RedshiftDestinationDescription = deserializeAws_json1_1RedshiftDestinationDescription(
      output.RedshiftDestinationDescription,
      context
    );
  }
  if (output.S3DestinationDescription !== undefined) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  if (output.SplunkDestinationDescription !== undefined) {
    contents.SplunkDestinationDescription = deserializeAws_json1_1SplunkDestinationDescription(
      output.SplunkDestinationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DestinationDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<DestinationDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DestinationDescription(entry, context)
  );
};

const deserializeAws_json1_1ElasticsearchBufferingHints = (
  output: any,
  context: __SerdeContext
): ElasticsearchBufferingHints => {
  let contents: any = {
    __type: "ElasticsearchBufferingHints",
    IntervalInSeconds: undefined,
    SizeInMBs: undefined
  };
  if (output.IntervalInSeconds !== undefined) {
    contents.IntervalInSeconds = output.IntervalInSeconds;
  }
  if (output.SizeInMBs !== undefined) {
    contents.SizeInMBs = output.SizeInMBs;
  }
  return contents;
};

const deserializeAws_json1_1ElasticsearchDestinationDescription = (
  output: any,
  context: __SerdeContext
): ElasticsearchDestinationDescription => {
  let contents: any = {
    __type: "ElasticsearchDestinationDescription",
    BufferingHints: undefined,
    CloudWatchLoggingOptions: undefined,
    ClusterEndpoint: undefined,
    DomainARN: undefined,
    IndexName: undefined,
    IndexRotationPeriod: undefined,
    ProcessingConfiguration: undefined,
    RetryOptions: undefined,
    RoleARN: undefined,
    S3BackupMode: undefined,
    S3DestinationDescription: undefined,
    TypeName: undefined
  };
  if (output.BufferingHints !== undefined) {
    contents.BufferingHints = deserializeAws_json1_1ElasticsearchBufferingHints(
      output.BufferingHints,
      context
    );
  }
  if (output.CloudWatchLoggingOptions !== undefined) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (output.ClusterEndpoint !== undefined) {
    contents.ClusterEndpoint = output.ClusterEndpoint;
  }
  if (output.DomainARN !== undefined) {
    contents.DomainARN = output.DomainARN;
  }
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.IndexRotationPeriod !== undefined) {
    contents.IndexRotationPeriod = output.IndexRotationPeriod;
  }
  if (output.ProcessingConfiguration !== undefined) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RetryOptions !== undefined) {
    contents.RetryOptions = deserializeAws_json1_1ElasticsearchRetryOptions(
      output.RetryOptions,
      context
    );
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.S3BackupMode !== undefined) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  if (output.S3DestinationDescription !== undefined) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  if (output.TypeName !== undefined) {
    contents.TypeName = output.TypeName;
  }
  return contents;
};

const deserializeAws_json1_1ElasticsearchRetryOptions = (
  output: any,
  context: __SerdeContext
): ElasticsearchRetryOptions => {
  let contents: any = {
    __type: "ElasticsearchRetryOptions",
    DurationInSeconds: undefined
  };
  if (output.DurationInSeconds !== undefined) {
    contents.DurationInSeconds = output.DurationInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  let contents: any = {
    __type: "EncryptionConfiguration",
    KMSEncryptionConfig: undefined,
    NoEncryptionConfig: undefined
  };
  if (output.KMSEncryptionConfig !== undefined) {
    contents.KMSEncryptionConfig = deserializeAws_json1_1KMSEncryptionConfig(
      output.KMSEncryptionConfig,
      context
    );
  }
  if (output.NoEncryptionConfig !== undefined) {
    contents.NoEncryptionConfig = output.NoEncryptionConfig;
  }
  return contents;
};

const deserializeAws_json1_1ExtendedS3DestinationDescription = (
  output: any,
  context: __SerdeContext
): ExtendedS3DestinationDescription => {
  let contents: any = {
    __type: "ExtendedS3DestinationDescription",
    BucketARN: undefined,
    BufferingHints: undefined,
    CloudWatchLoggingOptions: undefined,
    CompressionFormat: undefined,
    DataFormatConversionConfiguration: undefined,
    EncryptionConfiguration: undefined,
    ErrorOutputPrefix: undefined,
    Prefix: undefined,
    ProcessingConfiguration: undefined,
    RoleARN: undefined,
    S3BackupDescription: undefined,
    S3BackupMode: undefined
  };
  if (output.BucketARN !== undefined) {
    contents.BucketARN = output.BucketARN;
  }
  if (output.BufferingHints !== undefined) {
    contents.BufferingHints = deserializeAws_json1_1BufferingHints(
      output.BufferingHints,
      context
    );
  }
  if (output.CloudWatchLoggingOptions !== undefined) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (output.CompressionFormat !== undefined) {
    contents.CompressionFormat = output.CompressionFormat;
  }
  if (output.DataFormatConversionConfiguration !== undefined) {
    contents.DataFormatConversionConfiguration = deserializeAws_json1_1DataFormatConversionConfiguration(
      output.DataFormatConversionConfiguration,
      context
    );
  }
  if (output.EncryptionConfiguration !== undefined) {
    contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(
      output.EncryptionConfiguration,
      context
    );
  }
  if (output.ErrorOutputPrefix !== undefined) {
    contents.ErrorOutputPrefix = output.ErrorOutputPrefix;
  }
  if (output.Prefix !== undefined) {
    contents.Prefix = output.Prefix;
  }
  if (output.ProcessingConfiguration !== undefined) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.S3BackupDescription !== undefined) {
    contents.S3BackupDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3BackupDescription,
      context
    );
  }
  if (output.S3BackupMode !== undefined) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  return contents;
};

const deserializeAws_json1_1FailureDescription = (
  output: any,
  context: __SerdeContext
): FailureDescription => {
  let contents: any = {
    __type: "FailureDescription",
    Details: undefined,
    Type: undefined
  };
  if (output.Details !== undefined) {
    contents.Details = output.Details;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1HiveJsonSerDe = (
  output: any,
  context: __SerdeContext
): HiveJsonSerDe => {
  let contents: any = {
    __type: "HiveJsonSerDe",
    TimestampFormats: undefined
  };
  if (output.TimestampFormats !== undefined) {
    contents.TimestampFormats = deserializeAws_json1_1ListOfNonEmptyStrings(
      output.TimestampFormats,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): InputFormatConfiguration => {
  let contents: any = {
    __type: "InputFormatConfiguration",
    Deserializer: undefined
  };
  if (output.Deserializer !== undefined) {
    contents.Deserializer = deserializeAws_json1_1Deserializer(
      output.Deserializer,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  let contents: any = {
    __type: "InvalidArgumentException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidKMSResourceException = (
  output: any,
  context: __SerdeContext
): InvalidKMSResourceException => {
  let contents: any = {
    __type: "InvalidKMSResourceException",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSEncryptionConfig = (
  output: any,
  context: __SerdeContext
): KMSEncryptionConfig => {
  let contents: any = {
    __type: "KMSEncryptionConfig",
    AWSKMSKeyARN: undefined
  };
  if (output.AWSKMSKeyARN !== undefined) {
    contents.AWSKMSKeyARN = output.AWSKMSKeyARN;
  }
  return contents;
};

const deserializeAws_json1_1KinesisStreamSourceDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamSourceDescription => {
  let contents: any = {
    __type: "KinesisStreamSourceDescription",
    DeliveryStartTimestamp: undefined,
    KinesisStreamARN: undefined,
    RoleARN: undefined
  };
  if (output.DeliveryStartTimestamp !== undefined) {
    contents.DeliveryStartTimestamp = new Date(
      output.DeliveryStartTimestamp % 1 != 0
        ? Math.round(output.DeliveryStartTimestamp * 1000)
        : output.DeliveryStartTimestamp
    );
  }
  if (output.KinesisStreamARN !== undefined) {
    contents.KinesisStreamARN = output.KinesisStreamARN;
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListDeliveryStreamsOutput = (
  output: any,
  context: __SerdeContext
): ListDeliveryStreamsOutput => {
  let contents: any = {
    __type: "ListDeliveryStreamsOutput",
    DeliveryStreamNames: undefined,
    HasMoreDeliveryStreams: undefined
  };
  if (output.DeliveryStreamNames !== undefined) {
    contents.DeliveryStreamNames = deserializeAws_json1_1DeliveryStreamNameList(
      output.DeliveryStreamNames,
      context
    );
  }
  if (output.HasMoreDeliveryStreams !== undefined) {
    contents.HasMoreDeliveryStreams = output.HasMoreDeliveryStreams;
  }
  return contents;
};

const deserializeAws_json1_1ListOfNonEmptyStrings = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListTagsForDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForDeliveryStreamOutput => {
  let contents: any = {
    __type: "ListTagsForDeliveryStreamOutput",
    HasMoreTags: undefined,
    Tags: undefined
  };
  if (output.HasMoreTags !== undefined) {
    contents.HasMoreTags = output.HasMoreTags;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList(
      output.Tags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1OpenXJsonSerDe = (
  output: any,
  context: __SerdeContext
): OpenXJsonSerDe => {
  let contents: any = {
    __type: "OpenXJsonSerDe",
    CaseInsensitive: undefined,
    ColumnToJsonKeyMappings: undefined,
    ConvertDotsInJsonKeysToUnderscores: undefined
  };
  if (output.CaseInsensitive !== undefined) {
    contents.CaseInsensitive = output.CaseInsensitive;
  }
  if (output.ColumnToJsonKeyMappings !== undefined) {
    contents.ColumnToJsonKeyMappings = deserializeAws_json1_1ColumnToJsonKeyMappings(
      output.ColumnToJsonKeyMappings,
      context
    );
  }
  if (output.ConvertDotsInJsonKeysToUnderscores !== undefined) {
    contents.ConvertDotsInJsonKeysToUnderscores =
      output.ConvertDotsInJsonKeysToUnderscores;
  }
  return contents;
};

const deserializeAws_json1_1OrcSerDe = (
  output: any,
  context: __SerdeContext
): OrcSerDe => {
  let contents: any = {
    __type: "OrcSerDe",
    BlockSizeBytes: undefined,
    BloomFilterColumns: undefined,
    BloomFilterFalsePositiveProbability: undefined,
    Compression: undefined,
    DictionaryKeyThreshold: undefined,
    EnablePadding: undefined,
    FormatVersion: undefined,
    PaddingTolerance: undefined,
    RowIndexStride: undefined,
    StripeSizeBytes: undefined
  };
  if (output.BlockSizeBytes !== undefined) {
    contents.BlockSizeBytes = output.BlockSizeBytes;
  }
  if (output.BloomFilterColumns !== undefined) {
    contents.BloomFilterColumns = deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(
      output.BloomFilterColumns,
      context
    );
  }
  if (output.BloomFilterFalsePositiveProbability !== undefined) {
    contents.BloomFilterFalsePositiveProbability =
      output.BloomFilterFalsePositiveProbability;
  }
  if (output.Compression !== undefined) {
    contents.Compression = output.Compression;
  }
  if (output.DictionaryKeyThreshold !== undefined) {
    contents.DictionaryKeyThreshold = output.DictionaryKeyThreshold;
  }
  if (output.EnablePadding !== undefined) {
    contents.EnablePadding = output.EnablePadding;
  }
  if (output.FormatVersion !== undefined) {
    contents.FormatVersion = output.FormatVersion;
  }
  if (output.PaddingTolerance !== undefined) {
    contents.PaddingTolerance = output.PaddingTolerance;
  }
  if (output.RowIndexStride !== undefined) {
    contents.RowIndexStride = output.RowIndexStride;
  }
  if (output.StripeSizeBytes !== undefined) {
    contents.StripeSizeBytes = output.StripeSizeBytes;
  }
  return contents;
};

const deserializeAws_json1_1OutputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): OutputFormatConfiguration => {
  let contents: any = {
    __type: "OutputFormatConfiguration",
    Serializer: undefined
  };
  if (output.Serializer !== undefined) {
    contents.Serializer = deserializeAws_json1_1Serializer(
      output.Serializer,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ParquetSerDe = (
  output: any,
  context: __SerdeContext
): ParquetSerDe => {
  let contents: any = {
    __type: "ParquetSerDe",
    BlockSizeBytes: undefined,
    Compression: undefined,
    EnableDictionaryCompression: undefined,
    MaxPaddingBytes: undefined,
    PageSizeBytes: undefined,
    WriterVersion: undefined
  };
  if (output.BlockSizeBytes !== undefined) {
    contents.BlockSizeBytes = output.BlockSizeBytes;
  }
  if (output.Compression !== undefined) {
    contents.Compression = output.Compression;
  }
  if (output.EnableDictionaryCompression !== undefined) {
    contents.EnableDictionaryCompression = output.EnableDictionaryCompression;
  }
  if (output.MaxPaddingBytes !== undefined) {
    contents.MaxPaddingBytes = output.MaxPaddingBytes;
  }
  if (output.PageSizeBytes !== undefined) {
    contents.PageSizeBytes = output.PageSizeBytes;
  }
  if (output.WriterVersion !== undefined) {
    contents.WriterVersion = output.WriterVersion;
  }
  return contents;
};

const deserializeAws_json1_1ProcessingConfiguration = (
  output: any,
  context: __SerdeContext
): ProcessingConfiguration => {
  let contents: any = {
    __type: "ProcessingConfiguration",
    Enabled: undefined,
    Processors: undefined
  };
  if (output.Enabled !== undefined) {
    contents.Enabled = output.Enabled;
  }
  if (output.Processors !== undefined) {
    contents.Processors = deserializeAws_json1_1ProcessorList(
      output.Processors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Processor = (
  output: any,
  context: __SerdeContext
): Processor => {
  let contents: any = {
    __type: "Processor",
    Parameters: undefined,
    Type: undefined
  };
  if (output.Parameters !== undefined) {
    contents.Parameters = deserializeAws_json1_1ProcessorParameterList(
      output.Parameters,
      context
    );
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ProcessorList = (
  output: any,
  context: __SerdeContext
): Array<Processor> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Processor(entry, context)
  );
};

const deserializeAws_json1_1ProcessorParameter = (
  output: any,
  context: __SerdeContext
): ProcessorParameter => {
  let contents: any = {
    __type: "ProcessorParameter",
    ParameterName: undefined,
    ParameterValue: undefined
  };
  if (output.ParameterName !== undefined) {
    contents.ParameterName = output.ParameterName;
  }
  if (output.ParameterValue !== undefined) {
    contents.ParameterValue = output.ParameterValue;
  }
  return contents;
};

const deserializeAws_json1_1ProcessorParameterList = (
  output: any,
  context: __SerdeContext
): Array<ProcessorParameter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProcessorParameter(entry, context)
  );
};

const deserializeAws_json1_1PutRecordBatchOutput = (
  output: any,
  context: __SerdeContext
): PutRecordBatchOutput => {
  let contents: any = {
    __type: "PutRecordBatchOutput",
    Encrypted: undefined,
    FailedPutCount: undefined,
    RequestResponses: undefined
  };
  if (output.Encrypted !== undefined) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.FailedPutCount !== undefined) {
    contents.FailedPutCount = output.FailedPutCount;
  }
  if (output.RequestResponses !== undefined) {
    contents.RequestResponses = deserializeAws_json1_1PutRecordBatchResponseEntryList(
      output.RequestResponses,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutRecordBatchResponseEntry = (
  output: any,
  context: __SerdeContext
): PutRecordBatchResponseEntry => {
  let contents: any = {
    __type: "PutRecordBatchResponseEntry",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    RecordId: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.RecordId !== undefined) {
    contents.RecordId = output.RecordId;
  }
  return contents;
};

const deserializeAws_json1_1PutRecordBatchResponseEntryList = (
  output: any,
  context: __SerdeContext
): Array<PutRecordBatchResponseEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutRecordBatchResponseEntry(entry, context)
  );
};

const deserializeAws_json1_1PutRecordOutput = (
  output: any,
  context: __SerdeContext
): PutRecordOutput => {
  let contents: any = {
    __type: "PutRecordOutput",
    Encrypted: undefined,
    RecordId: undefined
  };
  if (output.Encrypted !== undefined) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.RecordId !== undefined) {
    contents.RecordId = output.RecordId;
  }
  return contents;
};

const deserializeAws_json1_1RedshiftDestinationDescription = (
  output: any,
  context: __SerdeContext
): RedshiftDestinationDescription => {
  let contents: any = {
    __type: "RedshiftDestinationDescription",
    CloudWatchLoggingOptions: undefined,
    ClusterJDBCURL: undefined,
    CopyCommand: undefined,
    ProcessingConfiguration: undefined,
    RetryOptions: undefined,
    RoleARN: undefined,
    S3BackupDescription: undefined,
    S3BackupMode: undefined,
    S3DestinationDescription: undefined,
    Username: undefined
  };
  if (output.CloudWatchLoggingOptions !== undefined) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (output.ClusterJDBCURL !== undefined) {
    contents.ClusterJDBCURL = output.ClusterJDBCURL;
  }
  if (output.CopyCommand !== undefined) {
    contents.CopyCommand = deserializeAws_json1_1CopyCommand(
      output.CopyCommand,
      context
    );
  }
  if (output.ProcessingConfiguration !== undefined) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RetryOptions !== undefined) {
    contents.RetryOptions = deserializeAws_json1_1RedshiftRetryOptions(
      output.RetryOptions,
      context
    );
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.S3BackupDescription !== undefined) {
    contents.S3BackupDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3BackupDescription,
      context
    );
  }
  if (output.S3BackupMode !== undefined) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  if (output.S3DestinationDescription !== undefined) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  if (output.Username !== undefined) {
    contents.Username = output.Username;
  }
  return contents;
};

const deserializeAws_json1_1RedshiftRetryOptions = (
  output: any,
  context: __SerdeContext
): RedshiftRetryOptions => {
  let contents: any = {
    __type: "RedshiftRetryOptions",
    DurationInSeconds: undefined
  };
  if (output.DurationInSeconds !== undefined) {
    contents.DurationInSeconds = output.DurationInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1S3DestinationDescription = (
  output: any,
  context: __SerdeContext
): S3DestinationDescription => {
  let contents: any = {
    __type: "S3DestinationDescription",
    BucketARN: undefined,
    BufferingHints: undefined,
    CloudWatchLoggingOptions: undefined,
    CompressionFormat: undefined,
    EncryptionConfiguration: undefined,
    ErrorOutputPrefix: undefined,
    Prefix: undefined,
    RoleARN: undefined
  };
  if (output.BucketARN !== undefined) {
    contents.BucketARN = output.BucketARN;
  }
  if (output.BufferingHints !== undefined) {
    contents.BufferingHints = deserializeAws_json1_1BufferingHints(
      output.BufferingHints,
      context
    );
  }
  if (output.CloudWatchLoggingOptions !== undefined) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (output.CompressionFormat !== undefined) {
    contents.CompressionFormat = output.CompressionFormat;
  }
  if (output.EncryptionConfiguration !== undefined) {
    contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(
      output.EncryptionConfiguration,
      context
    );
  }
  if (output.ErrorOutputPrefix !== undefined) {
    contents.ErrorOutputPrefix = output.ErrorOutputPrefix;
  }
  if (output.Prefix !== undefined) {
    contents.Prefix = output.Prefix;
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1SchemaConfiguration = (
  output: any,
  context: __SerdeContext
): SchemaConfiguration => {
  let contents: any = {
    __type: "SchemaConfiguration",
    CatalogId: undefined,
    DatabaseName: undefined,
    Region: undefined,
    RoleARN: undefined,
    TableName: undefined,
    VersionId: undefined
  };
  if (output.CatalogId !== undefined) {
    contents.CatalogId = output.CatalogId;
  }
  if (output.DatabaseName !== undefined) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  if (output.VersionId !== undefined) {
    contents.VersionId = output.VersionId;
  }
  return contents;
};

const deserializeAws_json1_1Serializer = (
  output: any,
  context: __SerdeContext
): Serializer => {
  let contents: any = {
    __type: "Serializer",
    OrcSerDe: undefined,
    ParquetSerDe: undefined
  };
  if (output.OrcSerDe !== undefined) {
    contents.OrcSerDe = deserializeAws_json1_1OrcSerDe(
      output.OrcSerDe,
      context
    );
  }
  if (output.ParquetSerDe !== undefined) {
    contents.ParquetSerDe = deserializeAws_json1_1ParquetSerDe(
      output.ParquetSerDe,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SourceDescription = (
  output: any,
  context: __SerdeContext
): SourceDescription => {
  let contents: any = {
    __type: "SourceDescription",
    KinesisStreamSourceDescription: undefined
  };
  if (output.KinesisStreamSourceDescription !== undefined) {
    contents.KinesisStreamSourceDescription = deserializeAws_json1_1KinesisStreamSourceDescription(
      output.KinesisStreamSourceDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SplunkDestinationDescription = (
  output: any,
  context: __SerdeContext
): SplunkDestinationDescription => {
  let contents: any = {
    __type: "SplunkDestinationDescription",
    CloudWatchLoggingOptions: undefined,
    HECAcknowledgmentTimeoutInSeconds: undefined,
    HECEndpoint: undefined,
    HECEndpointType: undefined,
    HECToken: undefined,
    ProcessingConfiguration: undefined,
    RetryOptions: undefined,
    S3BackupMode: undefined,
    S3DestinationDescription: undefined
  };
  if (output.CloudWatchLoggingOptions !== undefined) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (output.HECAcknowledgmentTimeoutInSeconds !== undefined) {
    contents.HECAcknowledgmentTimeoutInSeconds =
      output.HECAcknowledgmentTimeoutInSeconds;
  }
  if (output.HECEndpoint !== undefined) {
    contents.HECEndpoint = output.HECEndpoint;
  }
  if (output.HECEndpointType !== undefined) {
    contents.HECEndpointType = output.HECEndpointType;
  }
  if (output.HECToken !== undefined) {
    contents.HECToken = output.HECToken;
  }
  if (output.ProcessingConfiguration !== undefined) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RetryOptions !== undefined) {
    contents.RetryOptions = deserializeAws_json1_1SplunkRetryOptions(
      output.RetryOptions,
      context
    );
  }
  if (output.S3BackupMode !== undefined) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  if (output.S3DestinationDescription !== undefined) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SplunkRetryOptions = (
  output: any,
  context: __SerdeContext
): SplunkRetryOptions => {
  let contents: any = {
    __type: "SplunkRetryOptions",
    DurationInSeconds: undefined
  };
  if (output.DurationInSeconds !== undefined) {
    contents.DurationInSeconds = output.DurationInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1StartDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StartDeliveryStreamEncryptionOutput => {
  let contents: any = {
    __type: "StartDeliveryStreamEncryptionOutput"
  };
  return contents;
};

const deserializeAws_json1_1StopDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StopDeliveryStreamEncryptionOutput => {
  let contents: any = {
    __type: "StopDeliveryStreamEncryptionOutput"
  };
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): TagDeliveryStreamOutput => {
  let contents: any = {
    __type: "TagDeliveryStreamOutput"
  };
  return contents;
};

const deserializeAws_json1_1UntagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): UntagDeliveryStreamOutput => {
  let contents: any = {
    __type: "UntagDeliveryStreamOutput"
  };
  return contents;
};

const deserializeAws_json1_1UpdateDestinationOutput = (
  output: any,
  context: __SerdeContext
): UpdateDestinationOutput => {
  let contents: any = {
    __type: "UpdateDestinationOutput"
  };
  return contents;
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