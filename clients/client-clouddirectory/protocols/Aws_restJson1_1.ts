import {
  AddFacetToObjectCommandInput,
  AddFacetToObjectCommandOutput
} from "../commands/AddFacetToObjectCommand";
import {
  ApplySchemaCommandInput,
  ApplySchemaCommandOutput
} from "../commands/ApplySchemaCommand";
import {
  AttachObjectCommandInput,
  AttachObjectCommandOutput
} from "../commands/AttachObjectCommand";
import {
  AttachPolicyCommandInput,
  AttachPolicyCommandOutput
} from "../commands/AttachPolicyCommand";
import {
  AttachToIndexCommandInput,
  AttachToIndexCommandOutput
} from "../commands/AttachToIndexCommand";
import {
  AttachTypedLinkCommandInput,
  AttachTypedLinkCommandOutput
} from "../commands/AttachTypedLinkCommand";
import {
  BatchReadCommandInput,
  BatchReadCommandOutput
} from "../commands/BatchReadCommand";
import {
  BatchWriteCommandInput,
  BatchWriteCommandOutput
} from "../commands/BatchWriteCommand";
import {
  CreateDirectoryCommandInput,
  CreateDirectoryCommandOutput
} from "../commands/CreateDirectoryCommand";
import {
  CreateFacetCommandInput,
  CreateFacetCommandOutput
} from "../commands/CreateFacetCommand";
import {
  CreateIndexCommandInput,
  CreateIndexCommandOutput
} from "../commands/CreateIndexCommand";
import {
  CreateObjectCommandInput,
  CreateObjectCommandOutput
} from "../commands/CreateObjectCommand";
import {
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput
} from "../commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput
} from "../commands/CreateTypedLinkFacetCommand";
import {
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput
} from "../commands/DeleteDirectoryCommand";
import {
  DeleteFacetCommandInput,
  DeleteFacetCommandOutput
} from "../commands/DeleteFacetCommand";
import {
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput
} from "../commands/DeleteObjectCommand";
import {
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput
} from "../commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput
} from "../commands/DeleteTypedLinkFacetCommand";
import {
  DetachFromIndexCommandInput,
  DetachFromIndexCommandOutput
} from "../commands/DetachFromIndexCommand";
import {
  DetachObjectCommandInput,
  DetachObjectCommandOutput
} from "../commands/DetachObjectCommand";
import {
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput
} from "../commands/DetachPolicyCommand";
import {
  DetachTypedLinkCommandInput,
  DetachTypedLinkCommandOutput
} from "../commands/DetachTypedLinkCommand";
import {
  DisableDirectoryCommandInput,
  DisableDirectoryCommandOutput
} from "../commands/DisableDirectoryCommand";
import {
  EnableDirectoryCommandInput,
  EnableDirectoryCommandOutput
} from "../commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput
} from "../commands/GetAppliedSchemaVersionCommand";
import {
  GetDirectoryCommandInput,
  GetDirectoryCommandOutput
} from "../commands/GetDirectoryCommand";
import {
  GetFacetCommandInput,
  GetFacetCommandOutput
} from "../commands/GetFacetCommand";
import {
  GetLinkAttributesCommandInput,
  GetLinkAttributesCommandOutput
} from "../commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput
} from "../commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput
} from "../commands/GetObjectInformationCommand";
import {
  GetSchemaAsJsonCommandInput,
  GetSchemaAsJsonCommandOutput
} from "../commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput
} from "../commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput
} from "../commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput
} from "../commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput
} from "../commands/ListDevelopmentSchemaArnsCommand";
import {
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput
} from "../commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput
} from "../commands/ListFacetAttributesCommand";
import {
  ListFacetNamesCommandInput,
  ListFacetNamesCommandOutput
} from "../commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput
} from "../commands/ListIncomingTypedLinksCommand";
import {
  ListIndexCommandInput,
  ListIndexCommandOutput
} from "../commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput
} from "../commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput
} from "../commands/ListObjectAttributesCommand";
import {
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput
} from "../commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput
} from "../commands/ListObjectParentPathsCommand";
import {
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput
} from "../commands/ListObjectParentsCommand";
import {
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput
} from "../commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput
} from "../commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput
} from "../commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput
} from "../commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput
} from "../commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput
} from "../commands/ListTypedLinkFacetNamesCommand";
import {
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput
} from "../commands/LookupPolicyCommand";
import {
  PublishSchemaCommandInput,
  PublishSchemaCommandOutput
} from "../commands/PublishSchemaCommand";
import {
  PutSchemaFromJsonCommandInput,
  PutSchemaFromJsonCommandOutput
} from "../commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput
} from "../commands/RemoveFacetFromObjectCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateFacetCommandInput,
  UpdateFacetCommandOutput
} from "../commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput
} from "../commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput
} from "../commands/UpdateObjectAttributesCommand";
import {
  UpdateSchemaCommandInput,
  UpdateSchemaCommandOutput
} from "../commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput
} from "../commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput
} from "../commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput
} from "../commands/UpgradePublishedSchemaCommand";
import {
  AccessDeniedException,
  AttributeKey,
  AttributeKeyAndValue,
  AttributeNameAndValue,
  BatchAddFacetToObject,
  BatchAddFacetToObjectResponse,
  BatchAttachObject,
  BatchAttachObjectResponse,
  BatchAttachPolicy,
  BatchAttachPolicyResponse,
  BatchAttachToIndex,
  BatchAttachToIndexResponse,
  BatchAttachTypedLink,
  BatchAttachTypedLinkResponse,
  BatchCreateIndex,
  BatchCreateIndexResponse,
  BatchCreateObject,
  BatchCreateObjectResponse,
  BatchDeleteObject,
  BatchDeleteObjectResponse,
  BatchDetachFromIndex,
  BatchDetachFromIndexResponse,
  BatchDetachObject,
  BatchDetachObjectResponse,
  BatchDetachPolicy,
  BatchDetachPolicyResponse,
  BatchDetachTypedLink,
  BatchDetachTypedLinkResponse,
  BatchGetLinkAttributes,
  BatchGetLinkAttributesResponse,
  BatchGetObjectAttributes,
  BatchGetObjectAttributesResponse,
  BatchGetObjectInformation,
  BatchGetObjectInformationResponse,
  BatchListAttachedIndices,
  BatchListAttachedIndicesResponse,
  BatchListIncomingTypedLinks,
  BatchListIncomingTypedLinksResponse,
  BatchListIndex,
  BatchListIndexResponse,
  BatchListObjectAttributes,
  BatchListObjectAttributesResponse,
  BatchListObjectChildren,
  BatchListObjectChildrenResponse,
  BatchListObjectParentPaths,
  BatchListObjectParentPathsResponse,
  BatchListObjectParents,
  BatchListObjectParentsResponse,
  BatchListObjectPolicies,
  BatchListObjectPoliciesResponse,
  BatchListOutgoingTypedLinks,
  BatchListOutgoingTypedLinksResponse,
  BatchListPolicyAttachments,
  BatchListPolicyAttachmentsResponse,
  BatchLookupPolicy,
  BatchLookupPolicyResponse,
  BatchReadException,
  BatchReadOperation,
  BatchReadOperationResponse,
  BatchReadSuccessfulResponse,
  BatchRemoveFacetFromObject,
  BatchRemoveFacetFromObjectResponse,
  BatchUpdateLinkAttributes,
  BatchUpdateLinkAttributesResponse,
  BatchUpdateObjectAttributes,
  BatchUpdateObjectAttributesResponse,
  BatchWriteException,
  BatchWriteOperation,
  BatchWriteOperationResponse,
  CannotListParentOfRootException,
  Directory,
  DirectoryAlreadyExistsException,
  DirectoryDeletedException,
  DirectoryNotDisabledException,
  DirectoryNotEnabledException,
  Facet,
  FacetAlreadyExistsException,
  FacetAttribute,
  FacetAttributeDefinition,
  FacetAttributeReference,
  FacetAttributeUpdate,
  FacetInUseException,
  FacetNotFoundException,
  FacetValidationException,
  IncompatibleSchemaException,
  IndexAttachment,
  IndexedAttributeMissingException,
  InternalServiceException,
  InvalidArnException,
  InvalidAttachmentException,
  InvalidFacetUpdateException,
  InvalidNextTokenException,
  InvalidRuleException,
  InvalidSchemaDocException,
  InvalidTaggingRequestException,
  LimitExceededException,
  LinkAttributeAction,
  LinkAttributeUpdate,
  LinkNameAlreadyInUseException,
  NotIndexException,
  NotNodeException,
  NotPolicyException,
  ObjectAlreadyDetachedException,
  ObjectAttributeAction,
  ObjectAttributeRange,
  ObjectAttributeUpdate,
  ObjectIdentifierAndLinkNameTuple,
  ObjectNotDetachedException,
  ObjectReference,
  PathToObjectIdentifiers,
  PolicyAttachment,
  PolicyToPath,
  ResourceNotFoundException,
  RetryableConflictException,
  Rule,
  SchemaAlreadyExistsException,
  SchemaAlreadyPublishedException,
  SchemaFacet,
  StillContainsLinksException,
  Tag,
  TypedAttributeValue,
  TypedAttributeValueRange,
  TypedLinkAttributeDefinition,
  TypedLinkAttributeRange,
  TypedLinkFacet,
  TypedLinkFacetAttributeUpdate,
  TypedLinkSchemaAndFacetName,
  TypedLinkSpecifier,
  UnsupportedIndexTypeException,
  ValidationException
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

export async function serializeAws_restJson1_1AddFacetToObjectCommand(
  input: AddFacetToObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ObjectAttributeList !== undefined) {
    bodyParams[
      "ObjectAttributeList"
    ] = serializeAws_restJson1_1AttributeKeyAndValueList(
      input.ObjectAttributeList,
      context
    );
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.SchemaFacet !== undefined) {
    bodyParams["SchemaFacet"] = serializeAws_restJson1_1SchemaFacet(
      input.SchemaFacet,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ApplySchemaCommand(
  input: ApplySchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/apply";
  let body: any = {};
  const bodyParams: any = {};
  if (input.PublishedSchemaArn !== undefined) {
    bodyParams["PublishedSchemaArn"] = input.PublishedSchemaArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AttachObjectCommand(
  input: AttachObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ChildReference !== undefined) {
    bodyParams["ChildReference"] = serializeAws_restJson1_1ObjectReference(
      input.ChildReference,
      context
    );
  }
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AttachPolicyCommand(
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.PolicyReference !== undefined) {
    bodyParams["PolicyReference"] = serializeAws_restJson1_1ObjectReference(
      input.PolicyReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AttachToIndexCommand(
  input: AttachToIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/attach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.IndexReference !== undefined) {
    bodyParams["IndexReference"] = serializeAws_restJson1_1ObjectReference(
      input.IndexReference,
      context
    );
  }
  if (input.TargetReference !== undefined) {
    bodyParams["TargetReference"] = serializeAws_restJson1_1ObjectReference(
      input.TargetReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AttachTypedLinkCommand(
  input: AttachTypedLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams[
      "Attributes"
    ] = serializeAws_restJson1_1AttributeNameAndValueList(
      input.Attributes,
      context
    );
  }
  if (input.SourceObjectReference !== undefined) {
    bodyParams[
      "SourceObjectReference"
    ] = serializeAws_restJson1_1ObjectReference(
      input.SourceObjectReference,
      context
    );
  }
  if (input.TargetObjectReference !== undefined) {
    bodyParams[
      "TargetObjectReference"
    ] = serializeAws_restJson1_1ObjectReference(
      input.TargetObjectReference,
      context
    );
  }
  if (input.TypedLinkFacet !== undefined) {
    bodyParams[
      "TypedLinkFacet"
    ] = serializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      input.TypedLinkFacet,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1BatchReadCommand(
  input: BatchReadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/batchread";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Operations !== undefined) {
    bodyParams["Operations"] = serializeAws_restJson1_1BatchReadOperationList(
      input.Operations,
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

export async function serializeAws_restJson1_1BatchWriteCommand(
  input: BatchWriteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/batchwrite";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Operations !== undefined) {
    bodyParams["Operations"] = serializeAws_restJson1_1BatchWriteOperationList(
      input.Operations,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDirectoryCommand(
  input: CreateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/create";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateFacetCommand(
  input: CreateFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/create";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_restJson1_1FacetAttributeList(
      input.Attributes,
      context
    );
  }
  if (input.FacetStyle !== undefined) {
    bodyParams["FacetStyle"] = input.FacetStyle;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ObjectType !== undefined) {
    bodyParams["ObjectType"] = input.ObjectType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateIndexCommand(
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index";
  let body: any = {};
  const bodyParams: any = {};
  if (input.IsUnique !== undefined) {
    bodyParams["IsUnique"] = input.IsUnique;
  }
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.OrderedIndexedAttributeList !== undefined) {
    bodyParams[
      "OrderedIndexedAttributeList"
    ] = serializeAws_restJson1_1AttributeKeyList(
      input.OrderedIndexedAttributeList,
      context
    );
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateObjectCommand(
  input: CreateObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object";
  let body: any = {};
  const bodyParams: any = {};
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.ObjectAttributeList !== undefined) {
    bodyParams[
      "ObjectAttributeList"
    ] = serializeAws_restJson1_1AttributeKeyAndValueList(
      input.ObjectAttributeList,
      context
    );
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  if (input.SchemaFacets !== undefined) {
    bodyParams["SchemaFacets"] = serializeAws_restJson1_1SchemaFacetList(
      input.SchemaFacets,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateSchemaCommand(
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/create";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateTypedLinkFacetCommand(
  input: CreateTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/create";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Facet !== undefined) {
    bodyParams["Facet"] = serializeAws_restJson1_1TypedLinkFacet(
      input.Facet,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteDirectoryCommand(
  input: DeleteDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteFacetCommand(
  input: DeleteFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/delete";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteObjectCommand(
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/delete";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteSchemaCommand(
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteTypedLinkFacetCommand(
  input: DeleteTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/delete";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DetachFromIndexCommand(
  input: DetachFromIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/detach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.IndexReference !== undefined) {
    bodyParams["IndexReference"] = serializeAws_restJson1_1ObjectReference(
      input.IndexReference,
      context
    );
  }
  if (input.TargetReference !== undefined) {
    bodyParams["TargetReference"] = serializeAws_restJson1_1ObjectReference(
      input.TargetReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DetachObjectCommand(
  input: DetachObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/detach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DetachPolicyCommand(
  input: DetachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/detach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.PolicyReference !== undefined) {
    bodyParams["PolicyReference"] = serializeAws_restJson1_1ObjectReference(
      input.PolicyReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DetachTypedLinkCommand(
  input: DetachTypedLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/detach";
  let body: any = {};
  const bodyParams: any = {};
  if (input.TypedLinkSpecifier !== undefined) {
    bodyParams[
      "TypedLinkSpecifier"
    ] = serializeAws_restJson1_1TypedLinkSpecifier(
      input.TypedLinkSpecifier,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DisableDirectoryCommand(
  input: DisableDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/disable";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1EnableDirectoryCommand(
  input: EnableDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/enable";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetAppliedSchemaVersionCommand(
  input: GetAppliedSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/getappliedschema";
  let body: any = {};
  const bodyParams: any = {};
  if (input.SchemaArn !== undefined) {
    bodyParams["SchemaArn"] = input.SchemaArn;
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

export async function serializeAws_restJson1_1GetDirectoryCommand(
  input: GetDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/get";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetFacetCommand(
  input: GetFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
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

export async function serializeAws_restJson1_1GetLinkAttributesCommand(
  input: GetLinkAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath =
    "/amazonclouddirectory/2017-01-11/typedlink/attributes/get";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AttributeNames !== undefined) {
    bodyParams["AttributeNames"] = serializeAws_restJson1_1AttributeNameList(
      input.AttributeNames,
      context
    );
  }
  if (input.ConsistencyLevel !== undefined) {
    bodyParams["ConsistencyLevel"] = input.ConsistencyLevel;
  }
  if (input.TypedLinkSpecifier !== undefined) {
    bodyParams[
      "TypedLinkSpecifier"
    ] = serializeAws_restJson1_1TypedLinkSpecifier(
      input.TypedLinkSpecifier,
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

export async function serializeAws_restJson1_1GetObjectAttributesCommand(
  input: GetObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes/get";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AttributeNames !== undefined) {
    bodyParams["AttributeNames"] = serializeAws_restJson1_1AttributeNameList(
      input.AttributeNames,
      context
    );
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.SchemaFacet !== undefined) {
    bodyParams["SchemaFacet"] = serializeAws_restJson1_1SchemaFacet(
      input.SchemaFacet,
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

export async function serializeAws_restJson1_1GetObjectInformationCommand(
  input: GetObjectInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/information";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1GetSchemaAsJsonCommand(
  input: GetSchemaAsJsonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetTypedLinkFacetInformationCommand(
  input: GetTypedLinkFacetInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/get";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
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

export async function serializeAws_restJson1_1ListAppliedSchemaArnsCommand(
  input: ListAppliedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/applied";
  let body: any = {};
  const bodyParams: any = {};
  if (input.DirectoryArn !== undefined) {
    bodyParams["DirectoryArn"] = input.DirectoryArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SchemaArn !== undefined) {
    bodyParams["SchemaArn"] = input.SchemaArn;
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

export async function serializeAws_restJson1_1ListAttachedIndicesCommand(
  input: ListAttachedIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/indices";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TargetReference !== undefined) {
    bodyParams["TargetReference"] = serializeAws_restJson1_1ObjectReference(
      input.TargetReference,
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

export async function serializeAws_restJson1_1ListDevelopmentSchemaArnsCommand(
  input: ListDevelopmentSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/development";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListDirectoriesCommand(
  input: ListDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/list";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.state !== undefined) {
    bodyParams["state"] = input.state;
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

export async function serializeAws_restJson1_1ListFacetAttributesCommand(
  input: ListFacetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/attributes";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListFacetNamesCommand(
  input: ListFacetNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/list";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListIncomingTypedLinksCommand(
  input: ListIncomingTypedLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/incoming";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ConsistencyLevel !== undefined) {
    bodyParams["ConsistencyLevel"] = input.ConsistencyLevel;
  }
  if (input.FilterAttributeRanges !== undefined) {
    bodyParams[
      "FilterAttributeRanges"
    ] = serializeAws_restJson1_1TypedLinkAttributeRangeList(
      input.FilterAttributeRanges,
      context
    );
  }
  if (input.FilterTypedLink !== undefined) {
    bodyParams[
      "FilterTypedLink"
    ] = serializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      input.FilterTypedLink,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1ListIndexCommand(
  input: ListIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/targets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.IndexReference !== undefined) {
    bodyParams["IndexReference"] = serializeAws_restJson1_1ObjectReference(
      input.IndexReference,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.RangesOnIndexedValues !== undefined) {
    bodyParams[
      "RangesOnIndexedValues"
    ] = serializeAws_restJson1_1ObjectAttributeRangeList(
      input.RangesOnIndexedValues,
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

export async function serializeAws_restJson1_1ListManagedSchemaArnsCommand(
  input: ListManagedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/managed";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SchemaArn !== undefined) {
    bodyParams["SchemaArn"] = input.SchemaArn;
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

export async function serializeAws_restJson1_1ListObjectAttributesCommand(
  input: ListObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes";
  let body: any = {};
  const bodyParams: any = {};
  if (input.FacetFilter !== undefined) {
    bodyParams["FacetFilter"] = serializeAws_restJson1_1SchemaFacet(
      input.FacetFilter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1ListObjectChildrenCommand(
  input: ListObjectChildrenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/children";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1ListObjectParentPathsCommand(
  input: ListObjectParentPathsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/parentpaths";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1ListObjectParentsCommand(
  input: ListObjectParentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/parent";
  let body: any = {};
  const bodyParams: any = {};
  if (input.IncludeAllLinksToEachParent !== undefined) {
    bodyParams["IncludeAllLinksToEachParent"] =
      input.IncludeAllLinksToEachParent;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1ListObjectPoliciesCommand(
  input: ListObjectPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/policy";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1ListOutgoingTypedLinksCommand(
  input: ListOutgoingTypedLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/outgoing";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ConsistencyLevel !== undefined) {
    bodyParams["ConsistencyLevel"] = input.ConsistencyLevel;
  }
  if (input.FilterAttributeRanges !== undefined) {
    bodyParams[
      "FilterAttributeRanges"
    ] = serializeAws_restJson1_1TypedLinkAttributeRangeList(
      input.FilterAttributeRanges,
      context
    );
  }
  if (input.FilterTypedLink !== undefined) {
    bodyParams[
      "FilterTypedLink"
    ] = serializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      input.FilterTypedLink,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1ListPolicyAttachmentsCommand(
  input: ListPolicyAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConsistencyLevel !== undefined) {
    headers["x-amz-consistency-level"] = input.ConsistencyLevel.toString();
  }
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attachment";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PolicyReference !== undefined) {
    bodyParams["PolicyReference"] = serializeAws_restJson1_1ObjectReference(
      input.PolicyReference,
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

export async function serializeAws_restJson1_1ListPublishedSchemaArnsCommand(
  input: ListPublishedSchemaArnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/published";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SchemaArn !== undefined) {
    bodyParams["SchemaArn"] = input.SchemaArn;
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
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

export async function serializeAws_restJson1_1ListTypedLinkFacetAttributesCommand(
  input: ListTypedLinkFacetAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath =
    "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListTypedLinkFacetNamesCommand(
  input: ListTypedLinkFacetNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/list";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1LookupPolicyCommand(
  input: LookupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/lookup";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
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

export async function serializeAws_restJson1_1PublishSchemaCommand(
  input: PublishSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DevelopmentSchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.DevelopmentSchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/publish";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MinorVersion !== undefined) {
    bodyParams["MinorVersion"] = input.MinorVersion;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Version !== undefined) {
    bodyParams["Version"] = input.Version;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutSchemaFromJsonCommand(
  input: PutSchemaFromJsonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Document !== undefined) {
    bodyParams["Document"] = input.Document;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RemoveFacetFromObjectCommand(
  input: RemoveFacetFromObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets/delete";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.SchemaFacet !== undefined) {
    bodyParams["SchemaFacet"] = serializeAws_restJson1_1SchemaFacet(
      input.SchemaFacet,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags/add";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags/remove";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_restJson1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFacetCommand(
  input: UpdateFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AttributeUpdates !== undefined) {
    bodyParams[
      "AttributeUpdates"
    ] = serializeAws_restJson1_1FacetAttributeUpdateList(
      input.AttributeUpdates,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ObjectType !== undefined) {
    bodyParams["ObjectType"] = input.ObjectType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateLinkAttributesCommand(
  input: UpdateLinkAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath =
    "/amazonclouddirectory/2017-01-11/typedlink/attributes/update";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AttributeUpdates !== undefined) {
    bodyParams[
      "AttributeUpdates"
    ] = serializeAws_restJson1_1LinkAttributeUpdateList(
      input.AttributeUpdates,
      context
    );
  }
  if (input.TypedLinkSpecifier !== undefined) {
    bodyParams[
      "TypedLinkSpecifier"
    ] = serializeAws_restJson1_1TypedLinkSpecifier(
      input.TypedLinkSpecifier,
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

export async function serializeAws_restJson1_1UpdateObjectAttributesCommand(
  input: UpdateObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.DirectoryArn !== undefined) {
    headers["x-amz-data-partition"] = input.DirectoryArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/update";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AttributeUpdates !== undefined) {
    bodyParams[
      "AttributeUpdates"
    ] = serializeAws_restJson1_1ObjectAttributeUpdateList(
      input.AttributeUpdates,
      context
    );
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateSchemaCommand(
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/update";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateTypedLinkFacetCommand(
  input: UpdateTypedLinkFacetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.SchemaArn !== undefined) {
    headers["x-amz-data-partition"] = input.SchemaArn.toString();
  }
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AttributeUpdates !== undefined) {
    bodyParams[
      "AttributeUpdates"
    ] = serializeAws_restJson1_1TypedLinkFacetAttributeUpdateList(
      input.AttributeUpdates,
      context
    );
  }
  if (input.IdentityAttributeOrder !== undefined) {
    bodyParams[
      "IdentityAttributeOrder"
    ] = serializeAws_restJson1_1AttributeNameList(
      input.IdentityAttributeOrder,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpgradeAppliedSchemaCommand(
  input: UpgradeAppliedSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradeapplied";
  let body: any = {};
  const bodyParams: any = {};
  if (input.DirectoryArn !== undefined) {
    bodyParams["DirectoryArn"] = input.DirectoryArn;
  }
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.PublishedSchemaArn !== undefined) {
    bodyParams["PublishedSchemaArn"] = input.PublishedSchemaArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpgradePublishedSchemaCommand(
  input: UpgradePublishedSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradepublished";
  let body: any = {};
  const bodyParams: any = {};
  if (input.DevelopmentSchemaArn !== undefined) {
    bodyParams["DevelopmentSchemaArn"] = input.DevelopmentSchemaArn;
  }
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MinorVersion !== undefined) {
    bodyParams["MinorVersion"] = input.MinorVersion;
  }
  if (input.PublishedSchemaArn !== undefined) {
    bodyParams["PublishedSchemaArn"] = input.PublishedSchemaArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AddFacetToObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFacetToObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AddFacetToObjectCommandError(
      output,
      context
    );
  }
  const contents: AddFacetToObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddFacetToObjectResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AddFacetToObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFacetToObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ApplySchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySchemaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ApplySchemaCommandError(output, context);
  }
  const contents: ApplySchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApplySchemaResponse",
    AppliedSchemaArn: undefined,
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  if (data.DirectoryArn !== undefined) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ApplySchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySchemaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidAttachmentException":
      response = await deserializeAws_restJson1_1InvalidAttachmentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory.v20170111#SchemaAlreadyExistsException":
      response = await deserializeAws_restJson1_1SchemaAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1AttachObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AttachObjectCommandError(output, context);
  }
  const contents: AttachObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachObjectResponse",
    AttachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AttachedObjectIdentifier !== undefined) {
    contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AttachObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidAttachmentException":
      response = await deserializeAws_restJson1_1InvalidAttachmentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory.v20170111#LinkNameAlreadyInUseException":
      response = await deserializeAws_restJson1_1LinkNameAlreadyInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1AttachPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AttachPolicyCommandError(output, context);
  }
  const contents: AttachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachPolicyResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AttachPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory.v20170111#NotPolicyException":
      response = await deserializeAws_restJson1_1NotPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1AttachToIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachToIndexCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AttachToIndexCommandError(output, context);
  }
  const contents: AttachToIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachToIndexResponse",
    AttachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AttachedObjectIdentifier !== undefined) {
    contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AttachToIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachToIndexCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IndexedAttributeMissingException":
    case "com.amazonaws.clouddirectory.v20170111#IndexedAttributeMissingException":
      response = await deserializeAws_restJson1_1IndexedAttributeMissingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidAttachmentException":
      response = await deserializeAws_restJson1_1InvalidAttachmentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory.v20170111#LinkNameAlreadyInUseException":
      response = await deserializeAws_restJson1_1LinkNameAlreadyInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory.v20170111#NotIndexException":
      response = await deserializeAws_restJson1_1NotIndexExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1AttachTypedLinkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTypedLinkCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1AttachTypedLinkCommandError(
      output,
      context
    );
  }
  const contents: AttachTypedLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachTypedLinkResponse",
    TypedLinkSpecifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.TypedLinkSpecifier !== undefined) {
    contents.TypedLinkSpecifier = deserializeAws_restJson1_1TypedLinkSpecifier(
      data.TypedLinkSpecifier,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AttachTypedLinkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTypedLinkCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidAttachmentException":
      response = await deserializeAws_restJson1_1InvalidAttachmentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1BatchReadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchReadCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1BatchReadCommandError(output, context);
  }
  const contents: BatchReadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchReadResponse",
    Responses: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Responses !== undefined) {
    contents.Responses = deserializeAws_restJson1_1BatchReadOperationResponseList(
      data.Responses,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchReadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchReadCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1BatchWriteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1BatchWriteCommandError(output, context);
  }
  const contents: BatchWriteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchWriteResponse",
    Responses: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Responses !== undefined) {
    contents.Responses = deserializeAws_restJson1_1BatchWriteOperationResponseList(
      data.Responses,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchWriteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BatchWriteException":
    case "com.amazonaws.clouddirectory.v20170111#BatchWriteException":
      response = await deserializeAws_restJson1_1BatchWriteExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateDirectoryCommandError(
      output,
      context
    );
  }
  const contents: CreateDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDirectoryResponse",
    AppliedSchemaArn: undefined,
    DirectoryArn: undefined,
    Name: undefined,
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  if (data.DirectoryArn !== undefined) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryAlreadyExistsException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryAlreadyExistsException":
      response = await deserializeAws_restJson1_1DirectoryAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateFacetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFacetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateFacetCommandError(output, context);
  }
  const contents: CreateFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFacetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFacetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFacetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory.v20170111#FacetAlreadyExistsException":
      response = await deserializeAws_restJson1_1FacetAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidRuleException":
      response = await deserializeAws_restJson1_1InvalidRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateIndexCommandError(output, context);
  }
  const contents: CreateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIndexResponse",
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory.v20170111#LinkNameAlreadyInUseException":
      response = await deserializeAws_restJson1_1LinkNameAlreadyInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory.v20170111#UnsupportedIndexTypeException":
      response = await deserializeAws_restJson1_1UnsupportedIndexTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateObjectCommandError(output, context);
  }
  const contents: CreateObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateObjectResponse",
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory.v20170111#LinkNameAlreadyInUseException":
      response = await deserializeAws_restJson1_1LinkNameAlreadyInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory.v20170111#UnsupportedIndexTypeException":
      response = await deserializeAws_restJson1_1UnsupportedIndexTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateSchemaCommandError(output, context);
  }
  const contents: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSchemaResponse",
    SchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory.v20170111#SchemaAlreadyExistsException":
      response = await deserializeAws_restJson1_1SchemaAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateTypedLinkFacetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypedLinkFacetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateTypedLinkFacetCommandError(
      output,
      context
    );
  }
  const contents: CreateTypedLinkFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTypedLinkFacetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateTypedLinkFacetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypedLinkFacetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory.v20170111#FacetAlreadyExistsException":
      response = await deserializeAws_restJson1_1FacetAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidRuleException":
      response = await deserializeAws_restJson1_1InvalidRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteDirectoryCommandError(
      output,
      context
    );
  }
  const contents: DeleteDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDirectoryResponse",
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryDeletedException":
      response = await deserializeAws_restJson1_1DirectoryDeletedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotDisabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotDisabledException":
      response = await deserializeAws_restJson1_1DirectoryNotDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteFacetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteFacetCommandError(output, context);
  }
  const contents: DeleteFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFacetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFacetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFacetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetInUseException":
    case "com.amazonaws.clouddirectory.v20170111#FacetInUseException":
      response = await deserializeAws_restJson1_1FacetInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteObjectResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ObjectNotDetachedException":
    case "com.amazonaws.clouddirectory.v20170111#ObjectNotDetachedException":
      response = await deserializeAws_restJson1_1ObjectNotDetachedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteSchemaCommandError(output, context);
  }
  const contents: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSchemaResponse",
    SchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "StillContainsLinksException":
    case "com.amazonaws.clouddirectory.v20170111#StillContainsLinksException":
      response = await deserializeAws_restJson1_1StillContainsLinksExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteTypedLinkFacetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypedLinkFacetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteTypedLinkFacetCommandError(
      output,
      context
    );
  }
  const contents: DeleteTypedLinkFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTypedLinkFacetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteTypedLinkFacetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypedLinkFacetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DetachFromIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachFromIndexCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DetachFromIndexCommandError(
      output,
      context
    );
  }
  const contents: DetachFromIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachFromIndexResponse",
    DetachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DetachedObjectIdentifier !== undefined) {
    contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DetachFromIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachFromIndexCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory.v20170111#NotIndexException":
      response = await deserializeAws_restJson1_1NotIndexExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ObjectAlreadyDetachedException":
    case "com.amazonaws.clouddirectory.v20170111#ObjectAlreadyDetachedException":
      response = await deserializeAws_restJson1_1ObjectAlreadyDetachedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DetachObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DetachObjectCommandError(output, context);
  }
  const contents: DetachObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachObjectResponse",
    DetachedObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DetachedObjectIdentifier !== undefined) {
    contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DetachObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotNodeException":
    case "com.amazonaws.clouddirectory.v20170111#NotNodeException":
      response = await deserializeAws_restJson1_1NotNodeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DetachPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DetachPolicyCommandError(output, context);
  }
  const contents: DetachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachPolicyResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DetachPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory.v20170111#NotPolicyException":
      response = await deserializeAws_restJson1_1NotPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DetachTypedLinkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTypedLinkCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DetachTypedLinkCommandError(
      output,
      context
    );
  }
  const contents: DetachTypedLinkCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DetachTypedLinkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTypedLinkCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DisableDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDirectoryCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisableDirectoryCommandError(
      output,
      context
    );
  }
  const contents: DisableDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableDirectoryResponse",
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisableDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDirectoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryDeletedException":
      response = await deserializeAws_restJson1_1DirectoryDeletedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1EnableDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDirectoryCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1EnableDirectoryCommandError(
      output,
      context
    );
  }
  const contents: EnableDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableDirectoryResponse",
    DirectoryArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1EnableDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDirectoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryDeletedException":
      response = await deserializeAws_restJson1_1DirectoryDeletedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetAppliedSchemaVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppliedSchemaVersionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetAppliedSchemaVersionCommandError(
      output,
      context
    );
  }
  const contents: GetAppliedSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppliedSchemaVersionResponse",
    AppliedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetAppliedSchemaVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppliedSchemaVersionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDirectoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetDirectoryCommandError(output, context);
  }
  const contents: GetDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDirectoryResponse",
    Directory: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Directory !== undefined) {
    contents.Directory = deserializeAws_restJson1_1Directory(
      data.Directory,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDirectoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetFacetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFacetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetFacetCommandError(output, context);
  }
  const contents: GetFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFacetResponse",
    Facet: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Facet !== undefined) {
    contents.Facet = deserializeAws_restJson1_1Facet(data.Facet, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFacetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFacetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetLinkAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAttributesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetLinkAttributesCommandError(
      output,
      context
    );
  }
  const contents: GetLinkAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLinkAttributesResponse",
    Attributes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1AttributeKeyAndValueList(
      data.Attributes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetLinkAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAttributesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetObjectAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetObjectAttributesCommandError(
      output,
      context
    );
  }
  const contents: GetObjectAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetObjectAttributesResponse",
    Attributes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1AttributeKeyAndValueList(
      data.Attributes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetObjectAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetObjectInformationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectInformationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetObjectInformationCommandError(
      output,
      context
    );
  }
  const contents: GetObjectInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetObjectInformationResponse",
    ObjectIdentifier: undefined,
    SchemaFacets: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  if (data.SchemaFacets !== undefined) {
    contents.SchemaFacets = deserializeAws_restJson1_1SchemaFacetList(
      data.SchemaFacets,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetObjectInformationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectInformationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetSchemaAsJsonCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAsJsonCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetSchemaAsJsonCommandError(
      output,
      context
    );
  }
  const contents: GetSchemaAsJsonCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSchemaAsJsonResponse",
    Document: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Document !== undefined) {
    contents.Document = data.Document;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSchemaAsJsonCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAsJsonCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetTypedLinkFacetInformationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypedLinkFacetInformationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetTypedLinkFacetInformationCommandError(
      output,
      context
    );
  }
  const contents: GetTypedLinkFacetInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTypedLinkFacetInformationResponse",
    IdentityAttributeOrder: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IdentityAttributeOrder !== undefined) {
    contents.IdentityAttributeOrder = deserializeAws_restJson1_1AttributeNameList(
      data.IdentityAttributeOrder,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTypedLinkFacetInformationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypedLinkFacetInformationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListAppliedSchemaArnsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppliedSchemaArnsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListAppliedSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListAppliedSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAppliedSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined) {
    contents.SchemaArns = deserializeAws_restJson1_1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAppliedSchemaArnsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppliedSchemaArnsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListAttachedIndicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedIndicesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListAttachedIndicesCommandError(
      output,
      context
    );
  }
  const contents: ListAttachedIndicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAttachedIndicesResponse",
    IndexAttachments: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IndexAttachments !== undefined) {
    contents.IndexAttachments = deserializeAws_restJson1_1IndexAttachmentList(
      data.IndexAttachments,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAttachedIndicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedIndicesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDevelopmentSchemaArnsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevelopmentSchemaArnsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDevelopmentSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListDevelopmentSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDevelopmentSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined) {
    contents.SchemaArns = deserializeAws_restJson1_1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDevelopmentSchemaArnsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevelopmentSchemaArnsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDirectoriesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoriesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListDirectoriesCommandError(
      output,
      context
    );
  }
  const contents: ListDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDirectoriesResponse",
    Directories: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Directories !== undefined) {
    contents.Directories = deserializeAws_restJson1_1DirectoryList(
      data.Directories,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDirectoriesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoriesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListFacetAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetAttributesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListFacetAttributesCommandError(
      output,
      context
    );
  }
  const contents: ListFacetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFacetAttributesResponse",
    Attributes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1FacetAttributeList(
      data.Attributes,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFacetAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetAttributesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListFacetNamesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetNamesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListFacetNamesCommandError(
      output,
      context
    );
  }
  const contents: ListFacetNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFacetNamesResponse",
    FacetNames: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FacetNames !== undefined) {
    contents.FacetNames = deserializeAws_restJson1_1FacetNameList(
      data.FacetNames,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFacetNamesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFacetNamesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListIncomingTypedLinksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncomingTypedLinksCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListIncomingTypedLinksCommandError(
      output,
      context
    );
  }
  const contents: ListIncomingTypedLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIncomingTypedLinksResponse",
    LinkSpecifiers: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LinkSpecifiers !== undefined) {
    contents.LinkSpecifiers = deserializeAws_restJson1_1TypedLinkSpecifierList(
      data.LinkSpecifiers,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListIncomingTypedLinksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncomingTypedLinksCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListIndexCommandError(output, context);
  }
  const contents: ListIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIndexResponse",
    IndexAttachments: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IndexAttachments !== undefined) {
    contents.IndexAttachments = deserializeAws_restJson1_1IndexAttachmentList(
      data.IndexAttachments,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory.v20170111#NotIndexException":
      response = await deserializeAws_restJson1_1NotIndexExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListManagedSchemaArnsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedSchemaArnsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListManagedSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListManagedSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListManagedSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined) {
    contents.SchemaArns = deserializeAws_restJson1_1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListManagedSchemaArnsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedSchemaArnsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListObjectAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectAttributesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListObjectAttributesCommandError(
      output,
      context
    );
  }
  const contents: ListObjectAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectAttributesResponse",
    Attributes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1AttributeKeyAndValueList(
      data.Attributes,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListObjectAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectAttributesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListObjectChildrenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectChildrenCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListObjectChildrenCommandError(
      output,
      context
    );
  }
  const contents: ListObjectChildrenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectChildrenResponse",
    Children: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Children !== undefined) {
    contents.Children = deserializeAws_restJson1_1LinkNameToObjectIdentifierMap(
      data.Children,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListObjectChildrenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectChildrenCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotNodeException":
    case "com.amazonaws.clouddirectory.v20170111#NotNodeException":
      response = await deserializeAws_restJson1_1NotNodeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListObjectParentPathsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentPathsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListObjectParentPathsCommandError(
      output,
      context
    );
  }
  const contents: ListObjectParentPathsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectParentPathsResponse",
    NextToken: undefined,
    PathToObjectIdentifiersList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.PathToObjectIdentifiersList !== undefined) {
    contents.PathToObjectIdentifiersList = deserializeAws_restJson1_1PathToObjectIdentifiersList(
      data.PathToObjectIdentifiersList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListObjectParentPathsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentPathsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListObjectParentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListObjectParentsCommandError(
      output,
      context
    );
  }
  const contents: ListObjectParentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectParentsResponse",
    NextToken: undefined,
    ParentLinks: undefined,
    Parents: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.ParentLinks !== undefined) {
    contents.ParentLinks = deserializeAws_restJson1_1ObjectIdentifierAndLinkNameList(
      data.ParentLinks,
      context
    );
  }
  if (data.Parents !== undefined) {
    contents.Parents = deserializeAws_restJson1_1ObjectIdentifierToLinkNameMap(
      data.Parents,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListObjectParentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectParentsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CannotListParentOfRootException":
    case "com.amazonaws.clouddirectory.v20170111#CannotListParentOfRootException":
      response = await deserializeAws_restJson1_1CannotListParentOfRootExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListObjectPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectPoliciesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListObjectPoliciesCommandError(
      output,
      context
    );
  }
  const contents: ListObjectPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListObjectPoliciesResponse",
    AttachedPolicyIds: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AttachedPolicyIds !== undefined) {
    contents.AttachedPolicyIds = deserializeAws_restJson1_1ObjectIdentifierList(
      data.AttachedPolicyIds,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListObjectPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectPoliciesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListOutgoingTypedLinksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingTypedLinksCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListOutgoingTypedLinksCommandError(
      output,
      context
    );
  }
  const contents: ListOutgoingTypedLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOutgoingTypedLinksResponse",
    NextToken: undefined,
    TypedLinkSpecifiers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.TypedLinkSpecifiers !== undefined) {
    contents.TypedLinkSpecifiers = deserializeAws_restJson1_1TypedLinkSpecifierList(
      data.TypedLinkSpecifiers,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListOutgoingTypedLinksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingTypedLinksCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListPolicyAttachmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyAttachmentsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListPolicyAttachmentsCommandError(
      output,
      context
    );
  }
  const contents: ListPolicyAttachmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPolicyAttachmentsResponse",
    NextToken: undefined,
    ObjectIdentifiers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.ObjectIdentifiers !== undefined) {
    contents.ObjectIdentifiers = deserializeAws_restJson1_1ObjectIdentifierList(
      data.ObjectIdentifiers,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPolicyAttachmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyAttachmentsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory.v20170111#NotPolicyException":
      response = await deserializeAws_restJson1_1NotPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListPublishedSchemaArnsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishedSchemaArnsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListPublishedSchemaArnsCommandError(
      output,
      context
    );
  }
  const contents: ListPublishedSchemaArnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPublishedSchemaArnsResponse",
    NextToken: undefined,
    SchemaArns: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined) {
    contents.SchemaArns = deserializeAws_restJson1_1Arns(
      data.SchemaArns,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPublishedSchemaArnsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublishedSchemaArnsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    NextToken: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1TagList(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidTaggingRequestException":
      response = await deserializeAws_restJson1_1InvalidTaggingRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTypedLinkFacetAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetAttributesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTypedLinkFacetAttributesCommandError(
      output,
      context
    );
  }
  const contents: ListTypedLinkFacetAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypedLinkFacetAttributesResponse",
    Attributes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1TypedLinkAttributeDefinitionList(
      data.Attributes,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTypedLinkFacetAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetAttributesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTypedLinkFacetNamesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetNamesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTypedLinkFacetNamesCommandError(
      output,
      context
    );
  }
  const contents: ListTypedLinkFacetNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypedLinkFacetNamesResponse",
    FacetNames: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FacetNames !== undefined) {
    contents.FacetNames = deserializeAws_restJson1_1TypedLinkNameList(
      data.FacetNames,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTypedLinkFacetNamesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypedLinkFacetNamesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1LookupPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupPolicyCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1LookupPolicyCommandError(output, context);
  }
  const contents: LookupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LookupPolicyResponse",
    NextToken: undefined,
    PolicyToPathList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.PolicyToPathList !== undefined) {
    contents.PolicyToPathList = deserializeAws_restJson1_1PolicyToPathList(
      data.PolicyToPathList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1LookupPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PublishSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishSchemaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PublishSchemaCommandError(output, context);
  }
  const contents: PublishSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PublishSchemaResponse",
    PublishedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.PublishedSchemaArn !== undefined) {
    contents.PublishedSchemaArn = data.PublishedSchemaArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PublishSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishSchemaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "SchemaAlreadyPublishedException":
    case "com.amazonaws.clouddirectory.v20170111#SchemaAlreadyPublishedException":
      response = await deserializeAws_restJson1_1SchemaAlreadyPublishedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutSchemaFromJsonCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaFromJsonCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutSchemaFromJsonCommandError(
      output,
      context
    );
  }
  const contents: PutSchemaFromJsonCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutSchemaFromJsonResponse",
    Arn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutSchemaFromJsonCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaFromJsonCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidRuleException":
      response = await deserializeAws_restJson1_1InvalidRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidSchemaDocException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidSchemaDocException":
      response = await deserializeAws_restJson1_1InvalidSchemaDocExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RemoveFacetFromObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFacetFromObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1RemoveFacetFromObjectCommandError(
      output,
      context
    );
  }
  const contents: RemoveFacetFromObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveFacetFromObjectResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RemoveFacetFromObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFacetFromObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidTaggingRequestException":
      response = await deserializeAws_restJson1_1InvalidTaggingRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidTaggingRequestException":
      response = await deserializeAws_restJson1_1InvalidTaggingRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateFacetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFacetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateFacetCommandError(output, context);
  }
  const contents: UpdateFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFacetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFacetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFacetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidFacetUpdateException":
      response = await deserializeAws_restJson1_1InvalidFacetUpdateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidRuleException":
      response = await deserializeAws_restJson1_1InvalidRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateLinkAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkAttributesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateLinkAttributesCommandError(
      output,
      context
    );
  }
  const contents: UpdateLinkAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLinkAttributesResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateLinkAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkAttributesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateObjectAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateObjectAttributesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateObjectAttributesCommandError(
      output,
      context
    );
  }
  const contents: UpdateObjectAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateObjectAttributesResponse",
    ObjectIdentifier: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateObjectAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateObjectAttributesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory.v20170111#DirectoryNotEnabledException":
      response = await deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory.v20170111#LinkNameAlreadyInUseException":
      response = await deserializeAws_restJson1_1LinkNameAlreadyInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateSchemaCommandError(output, context);
  }
  const contents: UpdateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSchemaResponse",
    SchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateTypedLinkFacetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypedLinkFacetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateTypedLinkFacetCommandError(
      output,
      context
    );
  }
  const contents: UpdateTypedLinkFacetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTypedLinkFacetResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateTypedLinkFacetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypedLinkFacetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#FacetNotFoundException":
      response = await deserializeAws_restJson1_1FacetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory.v20170111#FacetValidationException":
      response = await deserializeAws_restJson1_1FacetValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidFacetUpdateException":
      response = await deserializeAws_restJson1_1InvalidFacetUpdateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidRuleException":
      response = await deserializeAws_restJson1_1InvalidRuleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpgradeAppliedSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAppliedSchemaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpgradeAppliedSchemaCommandError(
      output,
      context
    );
  }
  const contents: UpgradeAppliedSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpgradeAppliedSchemaResponse",
    DirectoryArn: undefined,
    UpgradedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  if (data.UpgradedSchemaArn !== undefined) {
    contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpgradeAppliedSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAppliedSchemaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory.v20170111#IncompatibleSchemaException":
      response = await deserializeAws_restJson1_1IncompatibleSchemaExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidAttachmentException":
      response = await deserializeAws_restJson1_1InvalidAttachmentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory.v20170111#SchemaAlreadyExistsException":
      response = await deserializeAws_restJson1_1SchemaAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpgradePublishedSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradePublishedSchemaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpgradePublishedSchemaCommandError(
      output,
      context
    );
  }
  const contents: UpgradePublishedSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpgradePublishedSchemaResponse",
    UpgradedSchemaArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.UpgradedSchemaArn !== undefined) {
    contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpgradePublishedSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradePublishedSchemaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory.v20170111#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory.v20170111#IncompatibleSchemaException":
      response = await deserializeAws_restJson1_1IncompatibleSchemaExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory.v20170111#InternalServiceException":
      response = await deserializeAws_restJson1_1InternalServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidArnException":
      response = await deserializeAws_restJson1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory.v20170111#InvalidAttachmentException":
      response = await deserializeAws_restJson1_1InvalidAttachmentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory.v20170111#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory.v20170111#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory.v20170111#RetryableConflictException":
      response = await deserializeAws_restJson1_1RetryableConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory.v20170111#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.clouddirectory.v20170111#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
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

const deserializeAws_restJson1_1BatchWriteExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BatchWriteException> => {
  const contents: BatchWriteException = {
    __type: "BatchWriteException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Index: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Index !== undefined) {
    contents.Index = data.Index;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1CannotListParentOfRootExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CannotListParentOfRootException> => {
  const contents: CannotListParentOfRootException = {
    __type: "CannotListParentOfRootException",
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

const deserializeAws_restJson1_1DirectoryAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DirectoryAlreadyExistsException> => {
  const contents: DirectoryAlreadyExistsException = {
    __type: "DirectoryAlreadyExistsException",
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

const deserializeAws_restJson1_1DirectoryDeletedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DirectoryDeletedException> => {
  const contents: DirectoryDeletedException = {
    __type: "DirectoryDeletedException",
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

const deserializeAws_restJson1_1DirectoryNotDisabledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DirectoryNotDisabledException> => {
  const contents: DirectoryNotDisabledException = {
    __type: "DirectoryNotDisabledException",
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

const deserializeAws_restJson1_1DirectoryNotEnabledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DirectoryNotEnabledException> => {
  const contents: DirectoryNotEnabledException = {
    __type: "DirectoryNotEnabledException",
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

const deserializeAws_restJson1_1FacetAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FacetAlreadyExistsException> => {
  const contents: FacetAlreadyExistsException = {
    __type: "FacetAlreadyExistsException",
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

const deserializeAws_restJson1_1FacetInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FacetInUseException> => {
  const contents: FacetInUseException = {
    __type: "FacetInUseException",
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

const deserializeAws_restJson1_1FacetNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FacetNotFoundException> => {
  const contents: FacetNotFoundException = {
    __type: "FacetNotFoundException",
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

const deserializeAws_restJson1_1FacetValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FacetValidationException> => {
  const contents: FacetValidationException = {
    __type: "FacetValidationException",
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

const deserializeAws_restJson1_1IncompatibleSchemaExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncompatibleSchemaException> => {
  const contents: IncompatibleSchemaException = {
    __type: "IncompatibleSchemaException",
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

const deserializeAws_restJson1_1IndexedAttributeMissingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IndexedAttributeMissingException> => {
  const contents: IndexedAttributeMissingException = {
    __type: "IndexedAttributeMissingException",
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

const deserializeAws_restJson1_1InternalServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: InternalServiceException = {
    __type: "InternalServiceException",
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

const deserializeAws_restJson1_1InvalidArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const contents: InvalidArnException = {
    __type: "InvalidArnException",
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

const deserializeAws_restJson1_1InvalidAttachmentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidAttachmentException> => {
  const contents: InvalidAttachmentException = {
    __type: "InvalidAttachmentException",
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

const deserializeAws_restJson1_1InvalidFacetUpdateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidFacetUpdateException> => {
  const contents: InvalidFacetUpdateException = {
    __type: "InvalidFacetUpdateException",
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

const deserializeAws_restJson1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
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

const deserializeAws_restJson1_1InvalidRuleExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRuleException> => {
  const contents: InvalidRuleException = {
    __type: "InvalidRuleException",
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

const deserializeAws_restJson1_1InvalidSchemaDocExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSchemaDocException> => {
  const contents: InvalidSchemaDocException = {
    __type: "InvalidSchemaDocException",
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

const deserializeAws_restJson1_1InvalidTaggingRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTaggingRequestException> => {
  const contents: InvalidTaggingRequestException = {
    __type: "InvalidTaggingRequestException",
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

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
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

const deserializeAws_restJson1_1LinkNameAlreadyInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LinkNameAlreadyInUseException> => {
  const contents: LinkNameAlreadyInUseException = {
    __type: "LinkNameAlreadyInUseException",
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

const deserializeAws_restJson1_1NotIndexExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotIndexException> => {
  const contents: NotIndexException = {
    __type: "NotIndexException",
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

const deserializeAws_restJson1_1NotNodeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotNodeException> => {
  const contents: NotNodeException = {
    __type: "NotNodeException",
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

const deserializeAws_restJson1_1NotPolicyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotPolicyException> => {
  const contents: NotPolicyException = {
    __type: "NotPolicyException",
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

const deserializeAws_restJson1_1ObjectAlreadyDetachedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ObjectAlreadyDetachedException> => {
  const contents: ObjectAlreadyDetachedException = {
    __type: "ObjectAlreadyDetachedException",
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

const deserializeAws_restJson1_1ObjectNotDetachedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ObjectNotDetachedException> => {
  const contents: ObjectNotDetachedException = {
    __type: "ObjectNotDetachedException",
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

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
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

const deserializeAws_restJson1_1RetryableConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RetryableConflictException> => {
  const contents: RetryableConflictException = {
    __type: "RetryableConflictException",
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

const deserializeAws_restJson1_1SchemaAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SchemaAlreadyExistsException> => {
  const contents: SchemaAlreadyExistsException = {
    __type: "SchemaAlreadyExistsException",
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

const deserializeAws_restJson1_1SchemaAlreadyPublishedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SchemaAlreadyPublishedException> => {
  const contents: SchemaAlreadyPublishedException = {
    __type: "SchemaAlreadyPublishedException",
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

const deserializeAws_restJson1_1StillContainsLinksExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<StillContainsLinksException> => {
  const contents: StillContainsLinksException = {
    __type: "StillContainsLinksException",
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

const deserializeAws_restJson1_1UnsupportedIndexTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedIndexTypeException> => {
  const contents: UnsupportedIndexTypeException = {
    __type: "UnsupportedIndexTypeException",
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

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    __type: "ValidationException",
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

const serializeAws_restJson1_1AttributeKey = (
  input: AttributeKey,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FacetName !== undefined) {
    bodyParams["FacetName"] = input.FacetName;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SchemaArn !== undefined) {
    bodyParams["SchemaArn"] = input.SchemaArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AttributeKeyAndValue = (
  input: AttributeKeyAndValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_restJson1_1AttributeKey(
      input.Key,
      context
    );
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = serializeAws_restJson1_1TypedAttributeValue(
      input.Value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AttributeKeyAndValueList = (
  input: Array<AttributeKeyAndValue>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1AttributeKeyAndValue(entry, context)
  );
};

const serializeAws_restJson1_1AttributeKeyList = (
  input: Array<AttributeKey>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1AttributeKey(entry, context)
  );
};

const serializeAws_restJson1_1AttributeNameAndValue = (
  input: AttributeNameAndValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = serializeAws_restJson1_1TypedAttributeValue(
      input.Value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AttributeNameAndValueList = (
  input: Array<AttributeNameAndValue>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1AttributeNameAndValue(entry, context)
  );
};

const serializeAws_restJson1_1AttributeNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1BatchAddFacetToObject = (
  input: BatchAddFacetToObject,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectAttributeList !== undefined) {
    bodyParams[
      "ObjectAttributeList"
    ] = serializeAws_restJson1_1AttributeKeyAndValueList(
      input.ObjectAttributeList,
      context
    );
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.SchemaFacet !== undefined) {
    bodyParams["SchemaFacet"] = serializeAws_restJson1_1SchemaFacet(
      input.SchemaFacet,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchAttachObject = (
  input: BatchAttachObject,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ChildReference !== undefined) {
    bodyParams["ChildReference"] = serializeAws_restJson1_1ObjectReference(
      input.ChildReference,
      context
    );
  }
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchAttachPolicy = (
  input: BatchAttachPolicy,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.PolicyReference !== undefined) {
    bodyParams["PolicyReference"] = serializeAws_restJson1_1ObjectReference(
      input.PolicyReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchAttachToIndex = (
  input: BatchAttachToIndex,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexReference !== undefined) {
    bodyParams["IndexReference"] = serializeAws_restJson1_1ObjectReference(
      input.IndexReference,
      context
    );
  }
  if (input.TargetReference !== undefined) {
    bodyParams["TargetReference"] = serializeAws_restJson1_1ObjectReference(
      input.TargetReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchAttachTypedLink = (
  input: BatchAttachTypedLink,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams[
      "Attributes"
    ] = serializeAws_restJson1_1AttributeNameAndValueList(
      input.Attributes,
      context
    );
  }
  if (input.SourceObjectReference !== undefined) {
    bodyParams[
      "SourceObjectReference"
    ] = serializeAws_restJson1_1ObjectReference(
      input.SourceObjectReference,
      context
    );
  }
  if (input.TargetObjectReference !== undefined) {
    bodyParams[
      "TargetObjectReference"
    ] = serializeAws_restJson1_1ObjectReference(
      input.TargetObjectReference,
      context
    );
  }
  if (input.TypedLinkFacet !== undefined) {
    bodyParams[
      "TypedLinkFacet"
    ] = serializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      input.TypedLinkFacet,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchCreateIndex = (
  input: BatchCreateIndex,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BatchReferenceName !== undefined) {
    bodyParams["BatchReferenceName"] = input.BatchReferenceName;
  }
  if (input.IsUnique !== undefined) {
    bodyParams["IsUnique"] = input.IsUnique;
  }
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.OrderedIndexedAttributeList !== undefined) {
    bodyParams[
      "OrderedIndexedAttributeList"
    ] = serializeAws_restJson1_1AttributeKeyList(
      input.OrderedIndexedAttributeList,
      context
    );
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchCreateObject = (
  input: BatchCreateObject,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BatchReferenceName !== undefined) {
    bodyParams["BatchReferenceName"] = input.BatchReferenceName;
  }
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.ObjectAttributeList !== undefined) {
    bodyParams[
      "ObjectAttributeList"
    ] = serializeAws_restJson1_1AttributeKeyAndValueList(
      input.ObjectAttributeList,
      context
    );
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  if (input.SchemaFacet !== undefined) {
    bodyParams["SchemaFacet"] = serializeAws_restJson1_1SchemaFacetList(
      input.SchemaFacet,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchDeleteObject = (
  input: BatchDeleteObject,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchDetachFromIndex = (
  input: BatchDetachFromIndex,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexReference !== undefined) {
    bodyParams["IndexReference"] = serializeAws_restJson1_1ObjectReference(
      input.IndexReference,
      context
    );
  }
  if (input.TargetReference !== undefined) {
    bodyParams["TargetReference"] = serializeAws_restJson1_1ObjectReference(
      input.TargetReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchDetachObject = (
  input: BatchDetachObject,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BatchReferenceName !== undefined) {
    bodyParams["BatchReferenceName"] = input.BatchReferenceName;
  }
  if (input.LinkName !== undefined) {
    bodyParams["LinkName"] = input.LinkName;
  }
  if (input.ParentReference !== undefined) {
    bodyParams["ParentReference"] = serializeAws_restJson1_1ObjectReference(
      input.ParentReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchDetachPolicy = (
  input: BatchDetachPolicy,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.PolicyReference !== undefined) {
    bodyParams["PolicyReference"] = serializeAws_restJson1_1ObjectReference(
      input.PolicyReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchDetachTypedLink = (
  input: BatchDetachTypedLink,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TypedLinkSpecifier !== undefined) {
    bodyParams[
      "TypedLinkSpecifier"
    ] = serializeAws_restJson1_1TypedLinkSpecifier(
      input.TypedLinkSpecifier,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchGetLinkAttributes = (
  input: BatchGetLinkAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeNames !== undefined) {
    bodyParams["AttributeNames"] = serializeAws_restJson1_1AttributeNameList(
      input.AttributeNames,
      context
    );
  }
  if (input.TypedLinkSpecifier !== undefined) {
    bodyParams[
      "TypedLinkSpecifier"
    ] = serializeAws_restJson1_1TypedLinkSpecifier(
      input.TypedLinkSpecifier,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchGetObjectAttributes = (
  input: BatchGetObjectAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeNames !== undefined) {
    bodyParams["AttributeNames"] = serializeAws_restJson1_1AttributeNameList(
      input.AttributeNames,
      context
    );
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.SchemaFacet !== undefined) {
    bodyParams["SchemaFacet"] = serializeAws_restJson1_1SchemaFacet(
      input.SchemaFacet,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchGetObjectInformation = (
  input: BatchGetObjectInformation,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListAttachedIndices = (
  input: BatchListAttachedIndices,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TargetReference !== undefined) {
    bodyParams["TargetReference"] = serializeAws_restJson1_1ObjectReference(
      input.TargetReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListIncomingTypedLinks = (
  input: BatchListIncomingTypedLinks,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FilterAttributeRanges !== undefined) {
    bodyParams[
      "FilterAttributeRanges"
    ] = serializeAws_restJson1_1TypedLinkAttributeRangeList(
      input.FilterAttributeRanges,
      context
    );
  }
  if (input.FilterTypedLink !== undefined) {
    bodyParams[
      "FilterTypedLink"
    ] = serializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      input.FilterTypedLink,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListIndex = (
  input: BatchListIndex,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexReference !== undefined) {
    bodyParams["IndexReference"] = serializeAws_restJson1_1ObjectReference(
      input.IndexReference,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.RangesOnIndexedValues !== undefined) {
    bodyParams[
      "RangesOnIndexedValues"
    ] = serializeAws_restJson1_1ObjectAttributeRangeList(
      input.RangesOnIndexedValues,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListObjectAttributes = (
  input: BatchListObjectAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FacetFilter !== undefined) {
    bodyParams["FacetFilter"] = serializeAws_restJson1_1SchemaFacet(
      input.FacetFilter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListObjectChildren = (
  input: BatchListObjectChildren,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListObjectParentPaths = (
  input: BatchListObjectParentPaths,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListObjectParents = (
  input: BatchListObjectParents,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListObjectPolicies = (
  input: BatchListObjectPolicies,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListOutgoingTypedLinks = (
  input: BatchListOutgoingTypedLinks,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FilterAttributeRanges !== undefined) {
    bodyParams[
      "FilterAttributeRanges"
    ] = serializeAws_restJson1_1TypedLinkAttributeRangeList(
      input.FilterAttributeRanges,
      context
    );
  }
  if (input.FilterTypedLink !== undefined) {
    bodyParams[
      "FilterTypedLink"
    ] = serializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      input.FilterTypedLink,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchListPolicyAttachments = (
  input: BatchListPolicyAttachments,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PolicyReference !== undefined) {
    bodyParams["PolicyReference"] = serializeAws_restJson1_1ObjectReference(
      input.PolicyReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchLookupPolicy = (
  input: BatchLookupPolicy,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchReadOperation = (
  input: BatchReadOperation,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GetLinkAttributes !== undefined) {
    bodyParams[
      "GetLinkAttributes"
    ] = serializeAws_restJson1_1BatchGetLinkAttributes(
      input.GetLinkAttributes,
      context
    );
  }
  if (input.GetObjectAttributes !== undefined) {
    bodyParams[
      "GetObjectAttributes"
    ] = serializeAws_restJson1_1BatchGetObjectAttributes(
      input.GetObjectAttributes,
      context
    );
  }
  if (input.GetObjectInformation !== undefined) {
    bodyParams[
      "GetObjectInformation"
    ] = serializeAws_restJson1_1BatchGetObjectInformation(
      input.GetObjectInformation,
      context
    );
  }
  if (input.ListAttachedIndices !== undefined) {
    bodyParams[
      "ListAttachedIndices"
    ] = serializeAws_restJson1_1BatchListAttachedIndices(
      input.ListAttachedIndices,
      context
    );
  }
  if (input.ListIncomingTypedLinks !== undefined) {
    bodyParams[
      "ListIncomingTypedLinks"
    ] = serializeAws_restJson1_1BatchListIncomingTypedLinks(
      input.ListIncomingTypedLinks,
      context
    );
  }
  if (input.ListIndex !== undefined) {
    bodyParams["ListIndex"] = serializeAws_restJson1_1BatchListIndex(
      input.ListIndex,
      context
    );
  }
  if (input.ListObjectAttributes !== undefined) {
    bodyParams[
      "ListObjectAttributes"
    ] = serializeAws_restJson1_1BatchListObjectAttributes(
      input.ListObjectAttributes,
      context
    );
  }
  if (input.ListObjectChildren !== undefined) {
    bodyParams[
      "ListObjectChildren"
    ] = serializeAws_restJson1_1BatchListObjectChildren(
      input.ListObjectChildren,
      context
    );
  }
  if (input.ListObjectParentPaths !== undefined) {
    bodyParams[
      "ListObjectParentPaths"
    ] = serializeAws_restJson1_1BatchListObjectParentPaths(
      input.ListObjectParentPaths,
      context
    );
  }
  if (input.ListObjectParents !== undefined) {
    bodyParams[
      "ListObjectParents"
    ] = serializeAws_restJson1_1BatchListObjectParents(
      input.ListObjectParents,
      context
    );
  }
  if (input.ListObjectPolicies !== undefined) {
    bodyParams[
      "ListObjectPolicies"
    ] = serializeAws_restJson1_1BatchListObjectPolicies(
      input.ListObjectPolicies,
      context
    );
  }
  if (input.ListOutgoingTypedLinks !== undefined) {
    bodyParams[
      "ListOutgoingTypedLinks"
    ] = serializeAws_restJson1_1BatchListOutgoingTypedLinks(
      input.ListOutgoingTypedLinks,
      context
    );
  }
  if (input.ListPolicyAttachments !== undefined) {
    bodyParams[
      "ListPolicyAttachments"
    ] = serializeAws_restJson1_1BatchListPolicyAttachments(
      input.ListPolicyAttachments,
      context
    );
  }
  if (input.LookupPolicy !== undefined) {
    bodyParams["LookupPolicy"] = serializeAws_restJson1_1BatchLookupPolicy(
      input.LookupPolicy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchReadOperationList = (
  input: Array<BatchReadOperation>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1BatchReadOperation(entry, context)
  );
};

const serializeAws_restJson1_1BatchRemoveFacetFromObject = (
  input: BatchRemoveFacetFromObject,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  if (input.SchemaFacet !== undefined) {
    bodyParams["SchemaFacet"] = serializeAws_restJson1_1SchemaFacet(
      input.SchemaFacet,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchUpdateLinkAttributes = (
  input: BatchUpdateLinkAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeUpdates !== undefined) {
    bodyParams[
      "AttributeUpdates"
    ] = serializeAws_restJson1_1LinkAttributeUpdateList(
      input.AttributeUpdates,
      context
    );
  }
  if (input.TypedLinkSpecifier !== undefined) {
    bodyParams[
      "TypedLinkSpecifier"
    ] = serializeAws_restJson1_1TypedLinkSpecifier(
      input.TypedLinkSpecifier,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchUpdateObjectAttributes = (
  input: BatchUpdateObjectAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeUpdates !== undefined) {
    bodyParams[
      "AttributeUpdates"
    ] = serializeAws_restJson1_1ObjectAttributeUpdateList(
      input.AttributeUpdates,
      context
    );
  }
  if (input.ObjectReference !== undefined) {
    bodyParams["ObjectReference"] = serializeAws_restJson1_1ObjectReference(
      input.ObjectReference,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchWriteOperation = (
  input: BatchWriteOperation,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AddFacetToObject !== undefined) {
    bodyParams[
      "AddFacetToObject"
    ] = serializeAws_restJson1_1BatchAddFacetToObject(
      input.AddFacetToObject,
      context
    );
  }
  if (input.AttachObject !== undefined) {
    bodyParams["AttachObject"] = serializeAws_restJson1_1BatchAttachObject(
      input.AttachObject,
      context
    );
  }
  if (input.AttachPolicy !== undefined) {
    bodyParams["AttachPolicy"] = serializeAws_restJson1_1BatchAttachPolicy(
      input.AttachPolicy,
      context
    );
  }
  if (input.AttachToIndex !== undefined) {
    bodyParams["AttachToIndex"] = serializeAws_restJson1_1BatchAttachToIndex(
      input.AttachToIndex,
      context
    );
  }
  if (input.AttachTypedLink !== undefined) {
    bodyParams[
      "AttachTypedLink"
    ] = serializeAws_restJson1_1BatchAttachTypedLink(
      input.AttachTypedLink,
      context
    );
  }
  if (input.CreateIndex !== undefined) {
    bodyParams["CreateIndex"] = serializeAws_restJson1_1BatchCreateIndex(
      input.CreateIndex,
      context
    );
  }
  if (input.CreateObject !== undefined) {
    bodyParams["CreateObject"] = serializeAws_restJson1_1BatchCreateObject(
      input.CreateObject,
      context
    );
  }
  if (input.DeleteObject !== undefined) {
    bodyParams["DeleteObject"] = serializeAws_restJson1_1BatchDeleteObject(
      input.DeleteObject,
      context
    );
  }
  if (input.DetachFromIndex !== undefined) {
    bodyParams[
      "DetachFromIndex"
    ] = serializeAws_restJson1_1BatchDetachFromIndex(
      input.DetachFromIndex,
      context
    );
  }
  if (input.DetachObject !== undefined) {
    bodyParams["DetachObject"] = serializeAws_restJson1_1BatchDetachObject(
      input.DetachObject,
      context
    );
  }
  if (input.DetachPolicy !== undefined) {
    bodyParams["DetachPolicy"] = serializeAws_restJson1_1BatchDetachPolicy(
      input.DetachPolicy,
      context
    );
  }
  if (input.DetachTypedLink !== undefined) {
    bodyParams[
      "DetachTypedLink"
    ] = serializeAws_restJson1_1BatchDetachTypedLink(
      input.DetachTypedLink,
      context
    );
  }
  if (input.RemoveFacetFromObject !== undefined) {
    bodyParams[
      "RemoveFacetFromObject"
    ] = serializeAws_restJson1_1BatchRemoveFacetFromObject(
      input.RemoveFacetFromObject,
      context
    );
  }
  if (input.UpdateLinkAttributes !== undefined) {
    bodyParams[
      "UpdateLinkAttributes"
    ] = serializeAws_restJson1_1BatchUpdateLinkAttributes(
      input.UpdateLinkAttributes,
      context
    );
  }
  if (input.UpdateObjectAttributes !== undefined) {
    bodyParams[
      "UpdateObjectAttributes"
    ] = serializeAws_restJson1_1BatchUpdateObjectAttributes(
      input.UpdateObjectAttributes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchWriteOperationList = (
  input: Array<BatchWriteOperation>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1BatchWriteOperation(entry, context)
  );
};

const serializeAws_restJson1_1FacetAttribute = (
  input: FacetAttribute,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeDefinition !== undefined) {
    bodyParams[
      "AttributeDefinition"
    ] = serializeAws_restJson1_1FacetAttributeDefinition(
      input.AttributeDefinition,
      context
    );
  }
  if (input.AttributeReference !== undefined) {
    bodyParams[
      "AttributeReference"
    ] = serializeAws_restJson1_1FacetAttributeReference(
      input.AttributeReference,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RequiredBehavior !== undefined) {
    bodyParams["RequiredBehavior"] = input.RequiredBehavior;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FacetAttributeDefinition = (
  input: FacetAttributeDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DefaultValue !== undefined) {
    bodyParams["DefaultValue"] = serializeAws_restJson1_1TypedAttributeValue(
      input.DefaultValue,
      context
    );
  }
  if (input.IsImmutable !== undefined) {
    bodyParams["IsImmutable"] = input.IsImmutable;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_restJson1_1RuleMap(input.Rules, context);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FacetAttributeList = (
  input: Array<FacetAttribute>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1FacetAttribute(entry, context)
  );
};

const serializeAws_restJson1_1FacetAttributeReference = (
  input: FacetAttributeReference,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TargetAttributeName !== undefined) {
    bodyParams["TargetAttributeName"] = input.TargetAttributeName;
  }
  if (input.TargetFacetName !== undefined) {
    bodyParams["TargetFacetName"] = input.TargetFacetName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FacetAttributeUpdate = (
  input: FacetAttributeUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = input.Action;
  }
  if (input.Attribute !== undefined) {
    bodyParams["Attribute"] = serializeAws_restJson1_1FacetAttribute(
      input.Attribute,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FacetAttributeUpdateList = (
  input: Array<FacetAttributeUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1FacetAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1_1LinkAttributeAction = (
  input: LinkAttributeAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeActionType !== undefined) {
    bodyParams["AttributeActionType"] = input.AttributeActionType;
  }
  if (input.AttributeUpdateValue !== undefined) {
    bodyParams[
      "AttributeUpdateValue"
    ] = serializeAws_restJson1_1TypedAttributeValue(
      input.AttributeUpdateValue,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1LinkAttributeUpdate = (
  input: LinkAttributeUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeAction !== undefined) {
    bodyParams["AttributeAction"] = serializeAws_restJson1_1LinkAttributeAction(
      input.AttributeAction,
      context
    );
  }
  if (input.AttributeKey !== undefined) {
    bodyParams["AttributeKey"] = serializeAws_restJson1_1AttributeKey(
      input.AttributeKey,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1LinkAttributeUpdateList = (
  input: Array<LinkAttributeUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1LinkAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1_1ObjectAttributeAction = (
  input: ObjectAttributeAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectAttributeActionType !== undefined) {
    bodyParams["ObjectAttributeActionType"] = input.ObjectAttributeActionType;
  }
  if (input.ObjectAttributeUpdateValue !== undefined) {
    bodyParams[
      "ObjectAttributeUpdateValue"
    ] = serializeAws_restJson1_1TypedAttributeValue(
      input.ObjectAttributeUpdateValue,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ObjectAttributeRange = (
  input: ObjectAttributeRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeKey !== undefined) {
    bodyParams["AttributeKey"] = serializeAws_restJson1_1AttributeKey(
      input.AttributeKey,
      context
    );
  }
  if (input.Range !== undefined) {
    bodyParams["Range"] = serializeAws_restJson1_1TypedAttributeValueRange(
      input.Range,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ObjectAttributeRangeList = (
  input: Array<ObjectAttributeRange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1ObjectAttributeRange(entry, context)
  );
};

const serializeAws_restJson1_1ObjectAttributeUpdate = (
  input: ObjectAttributeUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ObjectAttributeAction !== undefined) {
    bodyParams[
      "ObjectAttributeAction"
    ] = serializeAws_restJson1_1ObjectAttributeAction(
      input.ObjectAttributeAction,
      context
    );
  }
  if (input.ObjectAttributeKey !== undefined) {
    bodyParams["ObjectAttributeKey"] = serializeAws_restJson1_1AttributeKey(
      input.ObjectAttributeKey,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ObjectAttributeUpdateList = (
  input: Array<ObjectAttributeUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1ObjectAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1_1ObjectReference = (
  input: ObjectReference,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Selector !== undefined) {
    bodyParams["Selector"] = input.Selector;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Rule = (
  input: Rule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Parameters !== undefined) {
    bodyParams["Parameters"] = serializeAws_restJson1_1RuleParameterMap(
      input.Parameters,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RuleMap = (
  input: { [key: string]: Rule },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1Rule(input[key], context);
  });
  return mapParams;
};

const serializeAws_restJson1_1RuleParameterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1SchemaFacet = (
  input: SchemaFacet,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FacetName !== undefined) {
    bodyParams["FacetName"] = input.FacetName;
  }
  if (input.SchemaArn !== undefined) {
    bodyParams["SchemaArn"] = input.SchemaArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SchemaFacetList = (
  input: Array<SchemaFacet>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1SchemaFacet(entry, context)
  );
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Tag(entry, context)
  );
};

const serializeAws_restJson1_1TypedAttributeValue = (
  input: TypedAttributeValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BinaryValue !== undefined) {
    bodyParams["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.BooleanValue !== undefined) {
    bodyParams["BooleanValue"] = input.BooleanValue;
  }
  if (input.DatetimeValue !== undefined) {
    bodyParams["DatetimeValue"] = Math.round(
      input.DatetimeValue.getTime() / 1000
    );
  }
  if (input.NumberValue !== undefined) {
    bodyParams["NumberValue"] = input.NumberValue;
  }
  if (input.StringValue !== undefined) {
    bodyParams["StringValue"] = input.StringValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TypedAttributeValueRange = (
  input: TypedAttributeValueRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndMode !== undefined) {
    bodyParams["EndMode"] = input.EndMode;
  }
  if (input.EndValue !== undefined) {
    bodyParams["EndValue"] = serializeAws_restJson1_1TypedAttributeValue(
      input.EndValue,
      context
    );
  }
  if (input.StartMode !== undefined) {
    bodyParams["StartMode"] = input.StartMode;
  }
  if (input.StartValue !== undefined) {
    bodyParams["StartValue"] = serializeAws_restJson1_1TypedAttributeValue(
      input.StartValue,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TypedLinkAttributeDefinition = (
  input: TypedLinkAttributeDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DefaultValue !== undefined) {
    bodyParams["DefaultValue"] = serializeAws_restJson1_1TypedAttributeValue(
      input.DefaultValue,
      context
    );
  }
  if (input.IsImmutable !== undefined) {
    bodyParams["IsImmutable"] = input.IsImmutable;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RequiredBehavior !== undefined) {
    bodyParams["RequiredBehavior"] = input.RequiredBehavior;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_restJson1_1RuleMap(input.Rules, context);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TypedLinkAttributeDefinitionList = (
  input: Array<TypedLinkAttributeDefinition>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1TypedLinkAttributeDefinition(entry, context)
  );
};

const serializeAws_restJson1_1TypedLinkAttributeRange = (
  input: TypedLinkAttributeRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.Range !== undefined) {
    bodyParams["Range"] = serializeAws_restJson1_1TypedAttributeValueRange(
      input.Range,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TypedLinkAttributeRangeList = (
  input: Array<TypedLinkAttributeRange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1TypedLinkAttributeRange(entry, context)
  );
};

const serializeAws_restJson1_1TypedLinkFacet = (
  input: TypedLinkFacet,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams[
      "Attributes"
    ] = serializeAws_restJson1_1TypedLinkAttributeDefinitionList(
      input.Attributes,
      context
    );
  }
  if (input.IdentityAttributeOrder !== undefined) {
    bodyParams[
      "IdentityAttributeOrder"
    ] = serializeAws_restJson1_1AttributeNameList(
      input.IdentityAttributeOrder,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TypedLinkFacetAttributeUpdate = (
  input: TypedLinkFacetAttributeUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = input.Action;
  }
  if (input.Attribute !== undefined) {
    bodyParams[
      "Attribute"
    ] = serializeAws_restJson1_1TypedLinkAttributeDefinition(
      input.Attribute,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TypedLinkFacetAttributeUpdateList = (
  input: Array<TypedLinkFacetAttributeUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1TypedLinkFacetAttributeUpdate(entry, context)
  );
};

const serializeAws_restJson1_1TypedLinkSchemaAndFacetName = (
  input: TypedLinkSchemaAndFacetName,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.SchemaArn !== undefined) {
    bodyParams["SchemaArn"] = input.SchemaArn;
  }
  if (input.TypedLinkName !== undefined) {
    bodyParams["TypedLinkName"] = input.TypedLinkName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TypedLinkSpecifier = (
  input: TypedLinkSpecifier,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IdentityAttributeValues !== undefined) {
    bodyParams[
      "IdentityAttributeValues"
    ] = serializeAws_restJson1_1AttributeNameAndValueList(
      input.IdentityAttributeValues,
      context
    );
  }
  if (input.SourceObjectReference !== undefined) {
    bodyParams[
      "SourceObjectReference"
    ] = serializeAws_restJson1_1ObjectReference(
      input.SourceObjectReference,
      context
    );
  }
  if (input.TargetObjectReference !== undefined) {
    bodyParams[
      "TargetObjectReference"
    ] = serializeAws_restJson1_1ObjectReference(
      input.TargetObjectReference,
      context
    );
  }
  if (input.TypedLinkFacet !== undefined) {
    bodyParams[
      "TypedLinkFacet"
    ] = serializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      input.TypedLinkFacet,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1Arns = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1AttributeKey = (
  output: any,
  context: __SerdeContext
): AttributeKey => {
  let contents: any = {
    __type: "AttributeKey",
    FacetName: undefined,
    Name: undefined,
    SchemaArn: undefined
  };
  if (output.FacetName !== undefined) {
    contents.FacetName = output.FacetName;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.SchemaArn !== undefined) {
    contents.SchemaArn = output.SchemaArn;
  }
  return contents;
};

const deserializeAws_restJson1_1AttributeKeyAndValue = (
  output: any,
  context: __SerdeContext
): AttributeKeyAndValue => {
  let contents: any = {
    __type: "AttributeKeyAndValue",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = deserializeAws_restJson1_1AttributeKey(output.Key, context);
  }
  if (output.Value !== undefined) {
    contents.Value = deserializeAws_restJson1_1TypedAttributeValue(
      output.Value,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AttributeKeyAndValueList = (
  output: any,
  context: __SerdeContext
): Array<AttributeKeyAndValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AttributeKeyAndValue(entry, context)
  );
};

const deserializeAws_restJson1_1AttributeNameAndValue = (
  output: any,
  context: __SerdeContext
): AttributeNameAndValue => {
  let contents: any = {
    __type: "AttributeNameAndValue",
    AttributeName: undefined,
    Value: undefined
  };
  if (output.AttributeName !== undefined) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.Value !== undefined) {
    contents.Value = deserializeAws_restJson1_1TypedAttributeValue(
      output.Value,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AttributeNameAndValueList = (
  output: any,
  context: __SerdeContext
): Array<AttributeNameAndValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AttributeNameAndValue(entry, context)
  );
};

const deserializeAws_restJson1_1AttributeNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1BatchAddFacetToObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchAddFacetToObjectResponse => {
  let contents: any = {
    __type: "BatchAddFacetToObjectResponse"
  };
  return contents;
};

const deserializeAws_restJson1_1BatchAttachObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachObjectResponse => {
  let contents: any = {
    __type: "BatchAttachObjectResponse",
    attachedObjectIdentifier: undefined
  };
  if (output.attachedObjectIdentifier !== undefined) {
    contents.attachedObjectIdentifier = output.attachedObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchAttachPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachPolicyResponse => {
  let contents: any = {
    __type: "BatchAttachPolicyResponse"
  };
  return contents;
};

const deserializeAws_restJson1_1BatchAttachToIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachToIndexResponse => {
  let contents: any = {
    __type: "BatchAttachToIndexResponse",
    AttachedObjectIdentifier: undefined
  };
  if (output.AttachedObjectIdentifier !== undefined) {
    contents.AttachedObjectIdentifier = output.AttachedObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchAttachTypedLinkResponse = (
  output: any,
  context: __SerdeContext
): BatchAttachTypedLinkResponse => {
  let contents: any = {
    __type: "BatchAttachTypedLinkResponse",
    TypedLinkSpecifier: undefined
  };
  if (output.TypedLinkSpecifier !== undefined) {
    contents.TypedLinkSpecifier = deserializeAws_restJson1_1TypedLinkSpecifier(
      output.TypedLinkSpecifier,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchCreateIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateIndexResponse => {
  let contents: any = {
    __type: "BatchCreateIndexResponse",
    ObjectIdentifier: undefined
  };
  if (output.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = output.ObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchCreateObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateObjectResponse => {
  let contents: any = {
    __type: "BatchCreateObjectResponse",
    ObjectIdentifier: undefined
  };
  if (output.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = output.ObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchDeleteObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteObjectResponse => {
  let contents: any = {
    __type: "BatchDeleteObjectResponse"
  };
  return contents;
};

const deserializeAws_restJson1_1BatchDetachFromIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachFromIndexResponse => {
  let contents: any = {
    __type: "BatchDetachFromIndexResponse",
    DetachedObjectIdentifier: undefined
  };
  if (output.DetachedObjectIdentifier !== undefined) {
    contents.DetachedObjectIdentifier = output.DetachedObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchDetachObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachObjectResponse => {
  let contents: any = {
    __type: "BatchDetachObjectResponse",
    detachedObjectIdentifier: undefined
  };
  if (output.detachedObjectIdentifier !== undefined) {
    contents.detachedObjectIdentifier = output.detachedObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchDetachPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachPolicyResponse => {
  let contents: any = {
    __type: "BatchDetachPolicyResponse"
  };
  return contents;
};

const deserializeAws_restJson1_1BatchDetachTypedLinkResponse = (
  output: any,
  context: __SerdeContext
): BatchDetachTypedLinkResponse => {
  let contents: any = {
    __type: "BatchDetachTypedLinkResponse"
  };
  return contents;
};

const deserializeAws_restJson1_1BatchGetLinkAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetLinkAttributesResponse => {
  let contents: any = {
    __type: "BatchGetLinkAttributesResponse",
    Attributes: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1AttributeKeyAndValueList(
      output.Attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchGetObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectAttributesResponse => {
  let contents: any = {
    __type: "BatchGetObjectAttributesResponse",
    Attributes: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1AttributeKeyAndValueList(
      output.Attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchGetObjectInformationResponse = (
  output: any,
  context: __SerdeContext
): BatchGetObjectInformationResponse => {
  let contents: any = {
    __type: "BatchGetObjectInformationResponse",
    ObjectIdentifier: undefined,
    SchemaFacets: undefined
  };
  if (output.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = output.ObjectIdentifier;
  }
  if (output.SchemaFacets !== undefined) {
    contents.SchemaFacets = deserializeAws_restJson1_1SchemaFacetList(
      output.SchemaFacets,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListAttachedIndicesResponse = (
  output: any,
  context: __SerdeContext
): BatchListAttachedIndicesResponse => {
  let contents: any = {
    __type: "BatchListAttachedIndicesResponse",
    IndexAttachments: undefined,
    NextToken: undefined
  };
  if (output.IndexAttachments !== undefined) {
    contents.IndexAttachments = deserializeAws_restJson1_1IndexAttachmentList(
      output.IndexAttachments,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListIncomingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListIncomingTypedLinksResponse => {
  let contents: any = {
    __type: "BatchListIncomingTypedLinksResponse",
    LinkSpecifiers: undefined,
    NextToken: undefined
  };
  if (output.LinkSpecifiers !== undefined) {
    contents.LinkSpecifiers = deserializeAws_restJson1_1TypedLinkSpecifierList(
      output.LinkSpecifiers,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListIndexResponse = (
  output: any,
  context: __SerdeContext
): BatchListIndexResponse => {
  let contents: any = {
    __type: "BatchListIndexResponse",
    IndexAttachments: undefined,
    NextToken: undefined
  };
  if (output.IndexAttachments !== undefined) {
    contents.IndexAttachments = deserializeAws_restJson1_1IndexAttachmentList(
      output.IndexAttachments,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectAttributesResponse => {
  let contents: any = {
    __type: "BatchListObjectAttributesResponse",
    Attributes: undefined,
    NextToken: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_restJson1_1AttributeKeyAndValueList(
      output.Attributes,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListObjectChildrenResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectChildrenResponse => {
  let contents: any = {
    __type: "BatchListObjectChildrenResponse",
    Children: undefined,
    NextToken: undefined
  };
  if (output.Children !== undefined) {
    contents.Children = deserializeAws_restJson1_1LinkNameToObjectIdentifierMap(
      output.Children,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListObjectParentPathsResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectParentPathsResponse => {
  let contents: any = {
    __type: "BatchListObjectParentPathsResponse",
    NextToken: undefined,
    PathToObjectIdentifiersList: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PathToObjectIdentifiersList !== undefined) {
    contents.PathToObjectIdentifiersList = deserializeAws_restJson1_1PathToObjectIdentifiersList(
      output.PathToObjectIdentifiersList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListObjectParentsResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectParentsResponse => {
  let contents: any = {
    __type: "BatchListObjectParentsResponse",
    NextToken: undefined,
    ParentLinks: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ParentLinks !== undefined) {
    contents.ParentLinks = deserializeAws_restJson1_1ObjectIdentifierAndLinkNameList(
      output.ParentLinks,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListObjectPoliciesResponse = (
  output: any,
  context: __SerdeContext
): BatchListObjectPoliciesResponse => {
  let contents: any = {
    __type: "BatchListObjectPoliciesResponse",
    AttachedPolicyIds: undefined,
    NextToken: undefined
  };
  if (output.AttachedPolicyIds !== undefined) {
    contents.AttachedPolicyIds = deserializeAws_restJson1_1ObjectIdentifierList(
      output.AttachedPolicyIds,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListOutgoingTypedLinksResponse = (
  output: any,
  context: __SerdeContext
): BatchListOutgoingTypedLinksResponse => {
  let contents: any = {
    __type: "BatchListOutgoingTypedLinksResponse",
    NextToken: undefined,
    TypedLinkSpecifiers: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.TypedLinkSpecifiers !== undefined) {
    contents.TypedLinkSpecifiers = deserializeAws_restJson1_1TypedLinkSpecifierList(
      output.TypedLinkSpecifiers,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchListPolicyAttachmentsResponse = (
  output: any,
  context: __SerdeContext
): BatchListPolicyAttachmentsResponse => {
  let contents: any = {
    __type: "BatchListPolicyAttachmentsResponse",
    NextToken: undefined,
    ObjectIdentifiers: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ObjectIdentifiers !== undefined) {
    contents.ObjectIdentifiers = deserializeAws_restJson1_1ObjectIdentifierList(
      output.ObjectIdentifiers,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchLookupPolicyResponse = (
  output: any,
  context: __SerdeContext
): BatchLookupPolicyResponse => {
  let contents: any = {
    __type: "BatchLookupPolicyResponse",
    NextToken: undefined,
    PolicyToPathList: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PolicyToPathList !== undefined) {
    contents.PolicyToPathList = deserializeAws_restJson1_1PolicyToPathList(
      output.PolicyToPathList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchReadException = (
  output: any,
  context: __SerdeContext
): BatchReadException => {
  let contents: any = {
    __type: "BatchReadException",
    Message: undefined,
    Type: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchReadOperationResponse = (
  output: any,
  context: __SerdeContext
): BatchReadOperationResponse => {
  let contents: any = {
    __type: "BatchReadOperationResponse",
    ExceptionResponse: undefined,
    SuccessfulResponse: undefined
  };
  if (output.ExceptionResponse !== undefined) {
    contents.ExceptionResponse = deserializeAws_restJson1_1BatchReadException(
      output.ExceptionResponse,
      context
    );
  }
  if (output.SuccessfulResponse !== undefined) {
    contents.SuccessfulResponse = deserializeAws_restJson1_1BatchReadSuccessfulResponse(
      output.SuccessfulResponse,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchReadOperationResponseList = (
  output: any,
  context: __SerdeContext
): Array<BatchReadOperationResponse> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BatchReadOperationResponse(entry, context)
  );
};

const deserializeAws_restJson1_1BatchReadSuccessfulResponse = (
  output: any,
  context: __SerdeContext
): BatchReadSuccessfulResponse => {
  let contents: any = {
    __type: "BatchReadSuccessfulResponse",
    GetLinkAttributes: undefined,
    GetObjectAttributes: undefined,
    GetObjectInformation: undefined,
    ListAttachedIndices: undefined,
    ListIncomingTypedLinks: undefined,
    ListIndex: undefined,
    ListObjectAttributes: undefined,
    ListObjectChildren: undefined,
    ListObjectParentPaths: undefined,
    ListObjectParents: undefined,
    ListObjectPolicies: undefined,
    ListOutgoingTypedLinks: undefined,
    ListPolicyAttachments: undefined,
    LookupPolicy: undefined
  };
  if (output.GetLinkAttributes !== undefined) {
    contents.GetLinkAttributes = deserializeAws_restJson1_1BatchGetLinkAttributesResponse(
      output.GetLinkAttributes,
      context
    );
  }
  if (output.GetObjectAttributes !== undefined) {
    contents.GetObjectAttributes = deserializeAws_restJson1_1BatchGetObjectAttributesResponse(
      output.GetObjectAttributes,
      context
    );
  }
  if (output.GetObjectInformation !== undefined) {
    contents.GetObjectInformation = deserializeAws_restJson1_1BatchGetObjectInformationResponse(
      output.GetObjectInformation,
      context
    );
  }
  if (output.ListAttachedIndices !== undefined) {
    contents.ListAttachedIndices = deserializeAws_restJson1_1BatchListAttachedIndicesResponse(
      output.ListAttachedIndices,
      context
    );
  }
  if (output.ListIncomingTypedLinks !== undefined) {
    contents.ListIncomingTypedLinks = deserializeAws_restJson1_1BatchListIncomingTypedLinksResponse(
      output.ListIncomingTypedLinks,
      context
    );
  }
  if (output.ListIndex !== undefined) {
    contents.ListIndex = deserializeAws_restJson1_1BatchListIndexResponse(
      output.ListIndex,
      context
    );
  }
  if (output.ListObjectAttributes !== undefined) {
    contents.ListObjectAttributes = deserializeAws_restJson1_1BatchListObjectAttributesResponse(
      output.ListObjectAttributes,
      context
    );
  }
  if (output.ListObjectChildren !== undefined) {
    contents.ListObjectChildren = deserializeAws_restJson1_1BatchListObjectChildrenResponse(
      output.ListObjectChildren,
      context
    );
  }
  if (output.ListObjectParentPaths !== undefined) {
    contents.ListObjectParentPaths = deserializeAws_restJson1_1BatchListObjectParentPathsResponse(
      output.ListObjectParentPaths,
      context
    );
  }
  if (output.ListObjectParents !== undefined) {
    contents.ListObjectParents = deserializeAws_restJson1_1BatchListObjectParentsResponse(
      output.ListObjectParents,
      context
    );
  }
  if (output.ListObjectPolicies !== undefined) {
    contents.ListObjectPolicies = deserializeAws_restJson1_1BatchListObjectPoliciesResponse(
      output.ListObjectPolicies,
      context
    );
  }
  if (output.ListOutgoingTypedLinks !== undefined) {
    contents.ListOutgoingTypedLinks = deserializeAws_restJson1_1BatchListOutgoingTypedLinksResponse(
      output.ListOutgoingTypedLinks,
      context
    );
  }
  if (output.ListPolicyAttachments !== undefined) {
    contents.ListPolicyAttachments = deserializeAws_restJson1_1BatchListPolicyAttachmentsResponse(
      output.ListPolicyAttachments,
      context
    );
  }
  if (output.LookupPolicy !== undefined) {
    contents.LookupPolicy = deserializeAws_restJson1_1BatchLookupPolicyResponse(
      output.LookupPolicy,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchRemoveFacetFromObjectResponse = (
  output: any,
  context: __SerdeContext
): BatchRemoveFacetFromObjectResponse => {
  let contents: any = {
    __type: "BatchRemoveFacetFromObjectResponse"
  };
  return contents;
};

const deserializeAws_restJson1_1BatchUpdateLinkAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateLinkAttributesResponse => {
  let contents: any = {
    __type: "BatchUpdateLinkAttributesResponse"
  };
  return contents;
};

const deserializeAws_restJson1_1BatchUpdateObjectAttributesResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateObjectAttributesResponse => {
  let contents: any = {
    __type: "BatchUpdateObjectAttributesResponse",
    ObjectIdentifier: undefined
  };
  if (output.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = output.ObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchWriteOperationResponse = (
  output: any,
  context: __SerdeContext
): BatchWriteOperationResponse => {
  let contents: any = {
    __type: "BatchWriteOperationResponse",
    AddFacetToObject: undefined,
    AttachObject: undefined,
    AttachPolicy: undefined,
    AttachToIndex: undefined,
    AttachTypedLink: undefined,
    CreateIndex: undefined,
    CreateObject: undefined,
    DeleteObject: undefined,
    DetachFromIndex: undefined,
    DetachObject: undefined,
    DetachPolicy: undefined,
    DetachTypedLink: undefined,
    RemoveFacetFromObject: undefined,
    UpdateLinkAttributes: undefined,
    UpdateObjectAttributes: undefined
  };
  if (output.AddFacetToObject !== undefined) {
    contents.AddFacetToObject = deserializeAws_restJson1_1BatchAddFacetToObjectResponse(
      output.AddFacetToObject,
      context
    );
  }
  if (output.AttachObject !== undefined) {
    contents.AttachObject = deserializeAws_restJson1_1BatchAttachObjectResponse(
      output.AttachObject,
      context
    );
  }
  if (output.AttachPolicy !== undefined) {
    contents.AttachPolicy = deserializeAws_restJson1_1BatchAttachPolicyResponse(
      output.AttachPolicy,
      context
    );
  }
  if (output.AttachToIndex !== undefined) {
    contents.AttachToIndex = deserializeAws_restJson1_1BatchAttachToIndexResponse(
      output.AttachToIndex,
      context
    );
  }
  if (output.AttachTypedLink !== undefined) {
    contents.AttachTypedLink = deserializeAws_restJson1_1BatchAttachTypedLinkResponse(
      output.AttachTypedLink,
      context
    );
  }
  if (output.CreateIndex !== undefined) {
    contents.CreateIndex = deserializeAws_restJson1_1BatchCreateIndexResponse(
      output.CreateIndex,
      context
    );
  }
  if (output.CreateObject !== undefined) {
    contents.CreateObject = deserializeAws_restJson1_1BatchCreateObjectResponse(
      output.CreateObject,
      context
    );
  }
  if (output.DeleteObject !== undefined) {
    contents.DeleteObject = deserializeAws_restJson1_1BatchDeleteObjectResponse(
      output.DeleteObject,
      context
    );
  }
  if (output.DetachFromIndex !== undefined) {
    contents.DetachFromIndex = deserializeAws_restJson1_1BatchDetachFromIndexResponse(
      output.DetachFromIndex,
      context
    );
  }
  if (output.DetachObject !== undefined) {
    contents.DetachObject = deserializeAws_restJson1_1BatchDetachObjectResponse(
      output.DetachObject,
      context
    );
  }
  if (output.DetachPolicy !== undefined) {
    contents.DetachPolicy = deserializeAws_restJson1_1BatchDetachPolicyResponse(
      output.DetachPolicy,
      context
    );
  }
  if (output.DetachTypedLink !== undefined) {
    contents.DetachTypedLink = deserializeAws_restJson1_1BatchDetachTypedLinkResponse(
      output.DetachTypedLink,
      context
    );
  }
  if (output.RemoveFacetFromObject !== undefined) {
    contents.RemoveFacetFromObject = deserializeAws_restJson1_1BatchRemoveFacetFromObjectResponse(
      output.RemoveFacetFromObject,
      context
    );
  }
  if (output.UpdateLinkAttributes !== undefined) {
    contents.UpdateLinkAttributes = deserializeAws_restJson1_1BatchUpdateLinkAttributesResponse(
      output.UpdateLinkAttributes,
      context
    );
  }
  if (output.UpdateObjectAttributes !== undefined) {
    contents.UpdateObjectAttributes = deserializeAws_restJson1_1BatchUpdateObjectAttributesResponse(
      output.UpdateObjectAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchWriteOperationResponseList = (
  output: any,
  context: __SerdeContext
): Array<BatchWriteOperationResponse> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BatchWriteOperationResponse(entry, context)
  );
};

const deserializeAws_restJson1_1Directory = (
  output: any,
  context: __SerdeContext
): Directory => {
  let contents: any = {
    __type: "Directory",
    CreationDateTime: undefined,
    DirectoryArn: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.CreationDateTime !== undefined) {
    contents.CreationDateTime = new Date(
      output.CreationDateTime % 1 != 0
        ? Math.round(output.CreationDateTime * 1000)
        : output.CreationDateTime
    );
  }
  if (output.DirectoryArn !== undefined) {
    contents.DirectoryArn = output.DirectoryArn;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_restJson1_1DirectoryList = (
  output: any,
  context: __SerdeContext
): Array<Directory> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Directory(entry, context)
  );
};

const deserializeAws_restJson1_1Facet = (
  output: any,
  context: __SerdeContext
): Facet => {
  let contents: any = {
    __type: "Facet",
    FacetStyle: undefined,
    Name: undefined,
    ObjectType: undefined
  };
  if (output.FacetStyle !== undefined) {
    contents.FacetStyle = output.FacetStyle;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.ObjectType !== undefined) {
    contents.ObjectType = output.ObjectType;
  }
  return contents;
};

const deserializeAws_restJson1_1FacetAttribute = (
  output: any,
  context: __SerdeContext
): FacetAttribute => {
  let contents: any = {
    __type: "FacetAttribute",
    AttributeDefinition: undefined,
    AttributeReference: undefined,
    Name: undefined,
    RequiredBehavior: undefined
  };
  if (output.AttributeDefinition !== undefined) {
    contents.AttributeDefinition = deserializeAws_restJson1_1FacetAttributeDefinition(
      output.AttributeDefinition,
      context
    );
  }
  if (output.AttributeReference !== undefined) {
    contents.AttributeReference = deserializeAws_restJson1_1FacetAttributeReference(
      output.AttributeReference,
      context
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.RequiredBehavior !== undefined) {
    contents.RequiredBehavior = output.RequiredBehavior;
  }
  return contents;
};

const deserializeAws_restJson1_1FacetAttributeDefinition = (
  output: any,
  context: __SerdeContext
): FacetAttributeDefinition => {
  let contents: any = {
    __type: "FacetAttributeDefinition",
    DefaultValue: undefined,
    IsImmutable: undefined,
    Rules: undefined,
    Type: undefined
  };
  if (output.DefaultValue !== undefined) {
    contents.DefaultValue = deserializeAws_restJson1_1TypedAttributeValue(
      output.DefaultValue,
      context
    );
  }
  if (output.IsImmutable !== undefined) {
    contents.IsImmutable = output.IsImmutable;
  }
  if (output.Rules !== undefined) {
    contents.Rules = deserializeAws_restJson1_1RuleMap(output.Rules, context);
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1FacetAttributeList = (
  output: any,
  context: __SerdeContext
): Array<FacetAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FacetAttribute(entry, context)
  );
};

const deserializeAws_restJson1_1FacetAttributeReference = (
  output: any,
  context: __SerdeContext
): FacetAttributeReference => {
  let contents: any = {
    __type: "FacetAttributeReference",
    TargetAttributeName: undefined,
    TargetFacetName: undefined
  };
  if (output.TargetAttributeName !== undefined) {
    contents.TargetAttributeName = output.TargetAttributeName;
  }
  if (output.TargetFacetName !== undefined) {
    contents.TargetFacetName = output.TargetFacetName;
  }
  return contents;
};

const deserializeAws_restJson1_1FacetNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1IndexAttachment = (
  output: any,
  context: __SerdeContext
): IndexAttachment => {
  let contents: any = {
    __type: "IndexAttachment",
    IndexedAttributes: undefined,
    ObjectIdentifier: undefined
  };
  if (output.IndexedAttributes !== undefined) {
    contents.IndexedAttributes = deserializeAws_restJson1_1AttributeKeyAndValueList(
      output.IndexedAttributes,
      context
    );
  }
  if (output.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = output.ObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1IndexAttachmentList = (
  output: any,
  context: __SerdeContext
): Array<IndexAttachment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IndexAttachment(entry, context)
  );
};

const deserializeAws_restJson1_1LinkNameToObjectIdentifierMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ObjectIdentifierAndLinkNameList = (
  output: any,
  context: __SerdeContext
): Array<ObjectIdentifierAndLinkNameTuple> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ObjectIdentifierAndLinkNameTuple(entry, context)
  );
};

const deserializeAws_restJson1_1ObjectIdentifierAndLinkNameTuple = (
  output: any,
  context: __SerdeContext
): ObjectIdentifierAndLinkNameTuple => {
  let contents: any = {
    __type: "ObjectIdentifierAndLinkNameTuple",
    LinkName: undefined,
    ObjectIdentifier: undefined
  };
  if (output.LinkName !== undefined) {
    contents.LinkName = output.LinkName;
  }
  if (output.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = output.ObjectIdentifier;
  }
  return contents;
};

const deserializeAws_restJson1_1ObjectIdentifierList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ObjectIdentifierToLinkNameMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ObjectReference = (
  output: any,
  context: __SerdeContext
): ObjectReference => {
  let contents: any = {
    __type: "ObjectReference",
    Selector: undefined
  };
  if (output.Selector !== undefined) {
    contents.Selector = output.Selector;
  }
  return contents;
};

const deserializeAws_restJson1_1PathToObjectIdentifiers = (
  output: any,
  context: __SerdeContext
): PathToObjectIdentifiers => {
  let contents: any = {
    __type: "PathToObjectIdentifiers",
    ObjectIdentifiers: undefined,
    Path: undefined
  };
  if (output.ObjectIdentifiers !== undefined) {
    contents.ObjectIdentifiers = deserializeAws_restJson1_1ObjectIdentifierList(
      output.ObjectIdentifiers,
      context
    );
  }
  if (output.Path !== undefined) {
    contents.Path = output.Path;
  }
  return contents;
};

const deserializeAws_restJson1_1PathToObjectIdentifiersList = (
  output: any,
  context: __SerdeContext
): Array<PathToObjectIdentifiers> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PathToObjectIdentifiers(entry, context)
  );
};

const deserializeAws_restJson1_1PolicyAttachment = (
  output: any,
  context: __SerdeContext
): PolicyAttachment => {
  let contents: any = {
    __type: "PolicyAttachment",
    ObjectIdentifier: undefined,
    PolicyId: undefined,
    PolicyType: undefined
  };
  if (output.ObjectIdentifier !== undefined) {
    contents.ObjectIdentifier = output.ObjectIdentifier;
  }
  if (output.PolicyId !== undefined) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.PolicyType !== undefined) {
    contents.PolicyType = output.PolicyType;
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyAttachmentList = (
  output: any,
  context: __SerdeContext
): Array<PolicyAttachment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PolicyAttachment(entry, context)
  );
};

const deserializeAws_restJson1_1PolicyToPath = (
  output: any,
  context: __SerdeContext
): PolicyToPath => {
  let contents: any = {
    __type: "PolicyToPath",
    Path: undefined,
    Policies: undefined
  };
  if (output.Path !== undefined) {
    contents.Path = output.Path;
  }
  if (output.Policies !== undefined) {
    contents.Policies = deserializeAws_restJson1_1PolicyAttachmentList(
      output.Policies,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyToPathList = (
  output: any,
  context: __SerdeContext
): Array<PolicyToPath> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PolicyToPath(entry, context)
  );
};

const deserializeAws_restJson1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  let contents: any = {
    __type: "Rule",
    Parameters: undefined,
    Type: undefined
  };
  if (output.Parameters !== undefined) {
    contents.Parameters = deserializeAws_restJson1_1RuleParameterMap(
      output.Parameters,
      context
    );
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1RuleMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Rule } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1Rule(output[key], context);
  });
  return mapParams;
};

const deserializeAws_restJson1_1RuleParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1SchemaFacet = (
  output: any,
  context: __SerdeContext
): SchemaFacet => {
  let contents: any = {
    __type: "SchemaFacet",
    FacetName: undefined,
    SchemaArn: undefined
  };
  if (output.FacetName !== undefined) {
    contents.FacetName = output.FacetName;
  }
  if (output.SchemaArn !== undefined) {
    contents.SchemaArn = output.SchemaArn;
  }
  return contents;
};

const deserializeAws_restJson1_1SchemaFacetList = (
  output: any,
  context: __SerdeContext
): Array<SchemaFacet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SchemaFacet(entry, context)
  );
};

const deserializeAws_restJson1_1Tag = (
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

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TypedAttributeValue = (
  output: any,
  context: __SerdeContext
): TypedAttributeValue => {
  let contents: any = {
    __type: "TypedAttributeValue",
    BinaryValue: undefined,
    BooleanValue: undefined,
    DatetimeValue: undefined,
    NumberValue: undefined,
    StringValue: undefined
  };
  if (output.BinaryValue !== undefined) {
    contents.BinaryValue = context.base64Decoder(output.BinaryValue);
  }
  if (output.BooleanValue !== undefined) {
    contents.BooleanValue = output.BooleanValue;
  }
  if (output.DatetimeValue !== undefined) {
    contents.DatetimeValue = new Date(
      output.DatetimeValue % 1 != 0
        ? Math.round(output.DatetimeValue * 1000)
        : output.DatetimeValue
    );
  }
  if (output.NumberValue !== undefined) {
    contents.NumberValue = output.NumberValue;
  }
  if (output.StringValue !== undefined) {
    contents.StringValue = output.StringValue;
  }
  return contents;
};

const deserializeAws_restJson1_1TypedLinkAttributeDefinition = (
  output: any,
  context: __SerdeContext
): TypedLinkAttributeDefinition => {
  let contents: any = {
    __type: "TypedLinkAttributeDefinition",
    DefaultValue: undefined,
    IsImmutable: undefined,
    Name: undefined,
    RequiredBehavior: undefined,
    Rules: undefined,
    Type: undefined
  };
  if (output.DefaultValue !== undefined) {
    contents.DefaultValue = deserializeAws_restJson1_1TypedAttributeValue(
      output.DefaultValue,
      context
    );
  }
  if (output.IsImmutable !== undefined) {
    contents.IsImmutable = output.IsImmutable;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.RequiredBehavior !== undefined) {
    contents.RequiredBehavior = output.RequiredBehavior;
  }
  if (output.Rules !== undefined) {
    contents.Rules = deserializeAws_restJson1_1RuleMap(output.Rules, context);
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1TypedLinkAttributeDefinitionList = (
  output: any,
  context: __SerdeContext
): Array<TypedLinkAttributeDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TypedLinkAttributeDefinition(entry, context)
  );
};

const deserializeAws_restJson1_1TypedLinkNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TypedLinkSchemaAndFacetName = (
  output: any,
  context: __SerdeContext
): TypedLinkSchemaAndFacetName => {
  let contents: any = {
    __type: "TypedLinkSchemaAndFacetName",
    SchemaArn: undefined,
    TypedLinkName: undefined
  };
  if (output.SchemaArn !== undefined) {
    contents.SchemaArn = output.SchemaArn;
  }
  if (output.TypedLinkName !== undefined) {
    contents.TypedLinkName = output.TypedLinkName;
  }
  return contents;
};

const deserializeAws_restJson1_1TypedLinkSpecifier = (
  output: any,
  context: __SerdeContext
): TypedLinkSpecifier => {
  let contents: any = {
    __type: "TypedLinkSpecifier",
    IdentityAttributeValues: undefined,
    SourceObjectReference: undefined,
    TargetObjectReference: undefined,
    TypedLinkFacet: undefined
  };
  if (output.IdentityAttributeValues !== undefined) {
    contents.IdentityAttributeValues = deserializeAws_restJson1_1AttributeNameAndValueList(
      output.IdentityAttributeValues,
      context
    );
  }
  if (output.SourceObjectReference !== undefined) {
    contents.SourceObjectReference = deserializeAws_restJson1_1ObjectReference(
      output.SourceObjectReference,
      context
    );
  }
  if (output.TargetObjectReference !== undefined) {
    contents.TargetObjectReference = deserializeAws_restJson1_1ObjectReference(
      output.TargetObjectReference,
      context
    );
  }
  if (output.TypedLinkFacet !== undefined) {
    contents.TypedLinkFacet = deserializeAws_restJson1_1TypedLinkSchemaAndFacetName(
      output.TypedLinkFacet,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TypedLinkSpecifierList = (
  output: any,
  context: __SerdeContext
): Array<TypedLinkSpecifier> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TypedLinkSpecifier(entry, context)
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