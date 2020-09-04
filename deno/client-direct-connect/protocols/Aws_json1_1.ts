import {
  AcceptDirectConnectGatewayAssociationProposalCommandInput,
  AcceptDirectConnectGatewayAssociationProposalCommandOutput,
} from "../commands/AcceptDirectConnectGatewayAssociationProposalCommand.ts";
import {
  AllocateConnectionOnInterconnectCommandInput,
  AllocateConnectionOnInterconnectCommandOutput,
} from "../commands/AllocateConnectionOnInterconnectCommand.ts";
import {
  AllocateHostedConnectionCommandInput,
  AllocateHostedConnectionCommandOutput,
} from "../commands/AllocateHostedConnectionCommand.ts";
import {
  AllocatePrivateVirtualInterfaceCommandInput,
  AllocatePrivateVirtualInterfaceCommandOutput,
} from "../commands/AllocatePrivateVirtualInterfaceCommand.ts";
import {
  AllocatePublicVirtualInterfaceCommandInput,
  AllocatePublicVirtualInterfaceCommandOutput,
} from "../commands/AllocatePublicVirtualInterfaceCommand.ts";
import {
  AllocateTransitVirtualInterfaceCommandInput,
  AllocateTransitVirtualInterfaceCommandOutput,
} from "../commands/AllocateTransitVirtualInterfaceCommand.ts";
import {
  AssociateConnectionWithLagCommandInput,
  AssociateConnectionWithLagCommandOutput,
} from "../commands/AssociateConnectionWithLagCommand.ts";
import {
  AssociateHostedConnectionCommandInput,
  AssociateHostedConnectionCommandOutput,
} from "../commands/AssociateHostedConnectionCommand.ts";
import {
  AssociateVirtualInterfaceCommandInput,
  AssociateVirtualInterfaceCommandOutput,
} from "../commands/AssociateVirtualInterfaceCommand.ts";
import { ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput } from "../commands/ConfirmConnectionCommand.ts";
import {
  ConfirmPrivateVirtualInterfaceCommandInput,
  ConfirmPrivateVirtualInterfaceCommandOutput,
} from "../commands/ConfirmPrivateVirtualInterfaceCommand.ts";
import {
  ConfirmPublicVirtualInterfaceCommandInput,
  ConfirmPublicVirtualInterfaceCommandOutput,
} from "../commands/ConfirmPublicVirtualInterfaceCommand.ts";
import {
  ConfirmTransitVirtualInterfaceCommandInput,
  ConfirmTransitVirtualInterfaceCommandOutput,
} from "../commands/ConfirmTransitVirtualInterfaceCommand.ts";
import { CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput } from "../commands/CreateBGPPeerCommand.ts";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand.ts";
import {
  CreateDirectConnectGatewayAssociationCommandInput,
  CreateDirectConnectGatewayAssociationCommandOutput,
} from "../commands/CreateDirectConnectGatewayAssociationCommand.ts";
import {
  CreateDirectConnectGatewayAssociationProposalCommandInput,
  CreateDirectConnectGatewayAssociationProposalCommandOutput,
} from "../commands/CreateDirectConnectGatewayAssociationProposalCommand.ts";
import {
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
} from "../commands/CreateDirectConnectGatewayCommand.ts";
import {
  CreateInterconnectCommandInput,
  CreateInterconnectCommandOutput,
} from "../commands/CreateInterconnectCommand.ts";
import { CreateLagCommandInput, CreateLagCommandOutput } from "../commands/CreateLagCommand.ts";
import {
  CreatePrivateVirtualInterfaceCommandInput,
  CreatePrivateVirtualInterfaceCommandOutput,
} from "../commands/CreatePrivateVirtualInterfaceCommand.ts";
import {
  CreatePublicVirtualInterfaceCommandInput,
  CreatePublicVirtualInterfaceCommandOutput,
} from "../commands/CreatePublicVirtualInterfaceCommand.ts";
import {
  CreateTransitVirtualInterfaceCommandInput,
  CreateTransitVirtualInterfaceCommandOutput,
} from "../commands/CreateTransitVirtualInterfaceCommand.ts";
import { DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput } from "../commands/DeleteBGPPeerCommand.ts";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand.ts";
import {
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
} from "../commands/DeleteDirectConnectGatewayAssociationCommand.ts";
import {
  DeleteDirectConnectGatewayAssociationProposalCommandInput,
  DeleteDirectConnectGatewayAssociationProposalCommandOutput,
} from "../commands/DeleteDirectConnectGatewayAssociationProposalCommand.ts";
import {
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
} from "../commands/DeleteDirectConnectGatewayCommand.ts";
import {
  DeleteInterconnectCommandInput,
  DeleteInterconnectCommandOutput,
} from "../commands/DeleteInterconnectCommand.ts";
import { DeleteLagCommandInput, DeleteLagCommandOutput } from "../commands/DeleteLagCommand.ts";
import {
  DeleteVirtualInterfaceCommandInput,
  DeleteVirtualInterfaceCommandOutput,
} from "../commands/DeleteVirtualInterfaceCommand.ts";
import {
  DescribeConnectionLoaCommandInput,
  DescribeConnectionLoaCommandOutput,
} from "../commands/DescribeConnectionLoaCommand.ts";
import {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "../commands/DescribeConnectionsCommand.ts";
import {
  DescribeConnectionsOnInterconnectCommandInput,
  DescribeConnectionsOnInterconnectCommandOutput,
} from "../commands/DescribeConnectionsOnInterconnectCommand.ts";
import {
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
} from "../commands/DescribeDirectConnectGatewayAssociationProposalsCommand.ts";
import {
  DescribeDirectConnectGatewayAssociationsCommandInput,
  DescribeDirectConnectGatewayAssociationsCommandOutput,
} from "../commands/DescribeDirectConnectGatewayAssociationsCommand.ts";
import {
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
} from "../commands/DescribeDirectConnectGatewayAttachmentsCommand.ts";
import {
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
} from "../commands/DescribeDirectConnectGatewaysCommand.ts";
import {
  DescribeHostedConnectionsCommandInput,
  DescribeHostedConnectionsCommandOutput,
} from "../commands/DescribeHostedConnectionsCommand.ts";
import {
  DescribeInterconnectLoaCommandInput,
  DescribeInterconnectLoaCommandOutput,
} from "../commands/DescribeInterconnectLoaCommand.ts";
import {
  DescribeInterconnectsCommandInput,
  DescribeInterconnectsCommandOutput,
} from "../commands/DescribeInterconnectsCommand.ts";
import { DescribeLagsCommandInput, DescribeLagsCommandOutput } from "../commands/DescribeLagsCommand.ts";
import { DescribeLoaCommandInput, DescribeLoaCommandOutput } from "../commands/DescribeLoaCommand.ts";
import { DescribeLocationsCommandInput, DescribeLocationsCommandOutput } from "../commands/DescribeLocationsCommand.ts";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand.ts";
import {
  DescribeVirtualGatewaysCommandInput,
  DescribeVirtualGatewaysCommandOutput,
} from "../commands/DescribeVirtualGatewaysCommand.ts";
import {
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
} from "../commands/DescribeVirtualInterfacesCommand.ts";
import {
  DisassociateConnectionFromLagCommandInput,
  DisassociateConnectionFromLagCommandOutput,
} from "../commands/DisassociateConnectionFromLagCommand.ts";
import {
  ListVirtualInterfaceTestHistoryCommandInput,
  ListVirtualInterfaceTestHistoryCommandOutput,
} from "../commands/ListVirtualInterfaceTestHistoryCommand.ts";
import {
  StartBgpFailoverTestCommandInput,
  StartBgpFailoverTestCommandOutput,
} from "../commands/StartBgpFailoverTestCommand.ts";
import {
  StopBgpFailoverTestCommandInput,
  StopBgpFailoverTestCommandOutput,
} from "../commands/StopBgpFailoverTestCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand.ts";
import {
  UpdateDirectConnectGatewayAssociationCommandInput,
  UpdateDirectConnectGatewayAssociationCommandOutput,
} from "../commands/UpdateDirectConnectGatewayAssociationCommand.ts";
import { UpdateLagCommandInput, UpdateLagCommandOutput } from "../commands/UpdateLagCommand.ts";
import {
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
} from "../commands/UpdateVirtualInterfaceAttributesCommand.ts";
import {
  AcceptDirectConnectGatewayAssociationProposalRequest,
  AcceptDirectConnectGatewayAssociationProposalResult,
  AllocateConnectionOnInterconnectRequest,
  AllocateHostedConnectionRequest,
  AllocatePrivateVirtualInterfaceRequest,
  AllocatePublicVirtualInterfaceRequest,
  AllocateTransitVirtualInterfaceRequest,
  AllocateTransitVirtualInterfaceResult,
  AssociateConnectionWithLagRequest,
  AssociateHostedConnectionRequest,
  AssociateVirtualInterfaceRequest,
  AssociatedGateway,
  BGPPeer,
  ConfirmConnectionRequest,
  ConfirmConnectionResponse,
  ConfirmPrivateVirtualInterfaceRequest,
  ConfirmPrivateVirtualInterfaceResponse,
  ConfirmPublicVirtualInterfaceRequest,
  ConfirmPublicVirtualInterfaceResponse,
  ConfirmTransitVirtualInterfaceRequest,
  ConfirmTransitVirtualInterfaceResponse,
  Connection,
  Connections,
  CreateBGPPeerRequest,
  CreateBGPPeerResponse,
  CreateConnectionRequest,
  CreateDirectConnectGatewayAssociationProposalRequest,
  CreateDirectConnectGatewayAssociationProposalResult,
  CreateDirectConnectGatewayAssociationRequest,
  CreateDirectConnectGatewayAssociationResult,
  CreateDirectConnectGatewayRequest,
  CreateDirectConnectGatewayResult,
  CreateInterconnectRequest,
  CreateLagRequest,
  CreatePrivateVirtualInterfaceRequest,
  CreatePublicVirtualInterfaceRequest,
  CreateTransitVirtualInterfaceRequest,
  CreateTransitVirtualInterfaceResult,
  DeleteBGPPeerRequest,
  DeleteBGPPeerResponse,
  DeleteConnectionRequest,
  DeleteDirectConnectGatewayAssociationProposalRequest,
  DeleteDirectConnectGatewayAssociationProposalResult,
  DeleteDirectConnectGatewayAssociationRequest,
  DeleteDirectConnectGatewayAssociationResult,
  DeleteDirectConnectGatewayRequest,
  DeleteDirectConnectGatewayResult,
  DeleteInterconnectRequest,
  DeleteInterconnectResponse,
  DeleteLagRequest,
  DeleteVirtualInterfaceRequest,
  DeleteVirtualInterfaceResponse,
  DescribeConnectionLoaRequest,
  DescribeConnectionLoaResponse,
  DescribeConnectionsOnInterconnectRequest,
  DescribeConnectionsRequest,
  DescribeDirectConnectGatewayAssociationProposalsRequest,
  DescribeDirectConnectGatewayAssociationProposalsResult,
  DescribeDirectConnectGatewayAssociationsRequest,
  DescribeDirectConnectGatewayAssociationsResult,
  DescribeDirectConnectGatewayAttachmentsRequest,
  DescribeDirectConnectGatewayAttachmentsResult,
  DescribeDirectConnectGatewaysRequest,
  DescribeDirectConnectGatewaysResult,
  DescribeHostedConnectionsRequest,
  DescribeInterconnectLoaRequest,
  DescribeInterconnectLoaResponse,
  DescribeInterconnectsRequest,
  DescribeLagsRequest,
  DescribeLoaRequest,
  DescribeTagsRequest,
  DescribeTagsResponse,
  DescribeVirtualInterfacesRequest,
  DirectConnectClientException,
  DirectConnectGateway,
  DirectConnectGatewayAssociation,
  DirectConnectGatewayAssociationProposal,
  DirectConnectGatewayAttachment,
  DirectConnectServerException,
  DisassociateConnectionFromLagRequest,
  DuplicateTagKeysException,
  Interconnect,
  Interconnects,
  Lag,
  Lags,
  ListVirtualInterfaceTestHistoryRequest,
  ListVirtualInterfaceTestHistoryResponse,
  Loa,
  Location,
  Locations,
  NewBGPPeer,
  NewPrivateVirtualInterface,
  NewPrivateVirtualInterfaceAllocation,
  NewPublicVirtualInterface,
  NewPublicVirtualInterfaceAllocation,
  NewTransitVirtualInterface,
  NewTransitVirtualInterfaceAllocation,
  ResourceTag,
  RouteFilterPrefix,
  StartBgpFailoverTestRequest,
  StartBgpFailoverTestResponse,
  StopBgpFailoverTestRequest,
  StopBgpFailoverTestResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDirectConnectGatewayAssociationRequest,
  UpdateDirectConnectGatewayAssociationResult,
  UpdateLagRequest,
  UpdateVirtualInterfaceAttributesRequest,
  VirtualGateway,
  VirtualGateways,
  VirtualInterface,
  VirtualInterfaceTestHistory,
  VirtualInterfaces,
} from "../models/index.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { SmithyException as __SmithyException } from "../../smithy-client/mod.ts";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export const serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = async (
  input: AcceptDirectConnectGatewayAssociationProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AcceptDirectConnectGatewayAssociationProposal",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AllocateConnectionOnInterconnectCommand = async (
  input: AllocateConnectionOnInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AllocateConnectionOnInterconnect",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllocateConnectionOnInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AllocateHostedConnectionCommand = async (
  input: AllocateHostedConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AllocateHostedConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllocateHostedConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = async (
  input: AllocatePrivateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AllocatePrivateVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AllocatePublicVirtualInterfaceCommand = async (
  input: AllocatePublicVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AllocatePublicVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllocatePublicVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AllocateTransitVirtualInterfaceCommand = async (
  input: AllocateTransitVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AllocateTransitVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllocateTransitVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateConnectionWithLagCommand = async (
  input: AssociateConnectionWithLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AssociateConnectionWithLag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateConnectionWithLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateHostedConnectionCommand = async (
  input: AssociateHostedConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AssociateHostedConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateHostedConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateVirtualInterfaceCommand = async (
  input: AssociateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.AssociateVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ConfirmConnectionCommand = async (
  input: ConfirmConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.ConfirmConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ConfirmConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = async (
  input: ConfirmPrivateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.ConfirmPrivateVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = async (
  input: ConfirmPublicVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.ConfirmPublicVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = async (
  input: ConfirmTransitVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.ConfirmTransitVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBGPPeerCommand = async (
  input: CreateBGPPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateBGPPeer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBGPPeerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDirectConnectGatewayCommand = async (
  input: CreateDirectConnectGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateDirectConnectGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = async (
  input: CreateDirectConnectGatewayAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateDirectConnectGatewayAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = async (
  input: CreateDirectConnectGatewayAssociationProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateDirectConnectGatewayAssociationProposal",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInterconnectCommand = async (
  input: CreateInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateInterconnect",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLagCommand = async (
  input: CreateLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateLag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePrivateVirtualInterfaceCommand = async (
  input: CreatePrivateVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreatePrivateVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePrivateVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePublicVirtualInterfaceCommand = async (
  input: CreatePublicVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreatePublicVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePublicVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTransitVirtualInterfaceCommand = async (
  input: CreateTransitVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.CreateTransitVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTransitVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBGPPeerCommand = async (
  input: DeleteBGPPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteBGPPeer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBGPPeerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDirectConnectGatewayCommand = async (
  input: DeleteDirectConnectGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteDirectConnectGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = async (
  input: DeleteDirectConnectGatewayAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteDirectConnectGatewayAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = async (
  input: DeleteDirectConnectGatewayAssociationProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteDirectConnectGatewayAssociationProposal",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInterconnectCommand = async (
  input: DeleteInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteInterconnect",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLagCommand = async (
  input: DeleteLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteLag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVirtualInterfaceCommand = async (
  input: DeleteVirtualInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DeleteVirtualInterface",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVirtualInterfaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectionLoaCommand = async (
  input: DescribeConnectionLoaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeConnectionLoa",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectionLoaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectionsCommand = async (
  input: DescribeConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectionsOnInterconnectCommand = async (
  input: DescribeConnectionsOnInterconnectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeConnectionsOnInterconnect",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectionsOnInterconnectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = async (
  input: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeDirectConnectGatewayAssociationProposals",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = async (
  input: DescribeDirectConnectGatewayAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeDirectConnectGatewayAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = async (
  input: DescribeDirectConnectGatewayAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeDirectConnectGatewayAttachments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDirectConnectGatewaysCommand = async (
  input: DescribeDirectConnectGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeDirectConnectGateways",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHostedConnectionsCommand = async (
  input: DescribeHostedConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeHostedConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeHostedConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInterconnectLoaCommand = async (
  input: DescribeInterconnectLoaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeInterconnectLoa",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInterconnectLoaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInterconnectsCommand = async (
  input: DescribeInterconnectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeInterconnects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInterconnectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLagsCommand = async (
  input: DescribeLagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeLags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLoaCommand = async (
  input: DescribeLoaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeLoa",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLoaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLocationsCommand = async (
  input: DescribeLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeLocations",
  };
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
};

export const serializeAws_json1_1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVirtualGatewaysCommand = async (
  input: DescribeVirtualGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeVirtualGateways",
  };
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
};

export const serializeAws_json1_1DescribeVirtualInterfacesCommand = async (
  input: DescribeVirtualInterfacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DescribeVirtualInterfaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeVirtualInterfacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateConnectionFromLagCommand = async (
  input: DisassociateConnectionFromLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.DisassociateConnectionFromLag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateConnectionFromLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = async (
  input: ListVirtualInterfaceTestHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.ListVirtualInterfaceTestHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVirtualInterfaceTestHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartBgpFailoverTestCommand = async (
  input: StartBgpFailoverTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.StartBgpFailoverTest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartBgpFailoverTestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopBgpFailoverTestCommand = async (
  input: StopBgpFailoverTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.StopBgpFailoverTest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopBgpFailoverTestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = async (
  input: UpdateDirectConnectGatewayAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.UpdateDirectConnectGatewayAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLagCommand = async (
  input: UpdateLagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.UpdateLag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = async (
  input: UpdateVirtualInterfaceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "OvertureService.UpdateVirtualInterfaceAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult(data, context);
  const response: AcceptDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptDirectConnectGatewayAssociationProposalResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AllocateConnectionOnInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateConnectionOnInterconnectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connection(data, context);
  const response: AllocateConnectionOnInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connection",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateConnectionOnInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AllocateHostedConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateHostedConnectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AllocateHostedConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connection(data, context);
  const response: AllocateHostedConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connection",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllocateHostedConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateHostedConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePrivateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualInterface(data, context);
  const response: AllocatePrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualInterface",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePrivateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePublicVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualInterface(data, context);
  const response: AllocatePublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualInterface",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocatePublicVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateTransitVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AllocateTransitVirtualInterfaceResult(data, context);
  const response: AllocateTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AllocateTransitVirtualInterfaceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateTransitVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateConnectionWithLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionWithLagCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateConnectionWithLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connection(data, context);
  const response: AssociateConnectionWithLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connection",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateConnectionWithLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectionWithLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateHostedConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHostedConnectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateHostedConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connection(data, context);
  const response: AssociateHostedConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connection",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateHostedConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHostedConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualInterface(data, context);
  const response: AssociateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualInterface",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ConfirmConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmConnectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ConfirmConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConfirmConnectionResponse(data, context);
  const response: ConfirmConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfirmConnectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ConfirmConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPrivateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse(data, context);
  const response: ConfirmPrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfirmPrivateVirtualInterfaceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPrivateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPublicVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse(data, context);
  const response: ConfirmPublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfirmPublicVirtualInterfaceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmPublicVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmTransitVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse(data, context);
  const response: ConfirmTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfirmTransitVirtualInterfaceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmTransitVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateBGPPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBGPPeerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateBGPPeerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBGPPeerResponse(data, context);
  const response: CreateBGPPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBGPPeerResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBGPPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBGPPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connection(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connection",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDirectConnectGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDirectConnectGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDirectConnectGatewayResult(data, context);
  const response: CreateDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDirectConnectGatewayResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDirectConnectGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult(data, context);
  const response: CreateDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDirectConnectGatewayAssociationResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult(data, context);
  const response: CreateDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDirectConnectGatewayAssociationProposalResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInterconnectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Interconnect(data, context);
  const response: CreateInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Interconnect",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLagCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Lag(data, context);
  const response: CreateLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Lag",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualInterface(data, context);
  const response: CreatePrivateVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualInterface",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreatePublicVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualInterface(data, context);
  const response: CreatePublicVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualInterface",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateTransitVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTransitVirtualInterfaceResult(data, context);
  const response: CreateTransitVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTransitVirtualInterfaceResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteBGPPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBGPPeerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBGPPeerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBGPPeerResponse(data, context);
  const response: DeleteBGPPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBGPPeerResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBGPPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBGPPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connection(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connection",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDirectConnectGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDirectConnectGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDirectConnectGatewayResult(data, context);
  const response: DeleteDirectConnectGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDirectConnectGatewayResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDirectConnectGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult(data, context);
  const response: DeleteDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDirectConnectGatewayAssociationResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult(data, context);
  const response: DeleteDirectConnectGatewayAssociationProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDirectConnectGatewayAssociationProposalResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInterconnectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInterconnectResponse(data, context);
  const response: DeleteInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInterconnectResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLagCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Lag(data, context);
  const response: DeleteLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Lag",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteVirtualInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualInterfaceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVirtualInterfaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVirtualInterfaceResponse(data, context);
  const response: DeleteVirtualInterfaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVirtualInterfaceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVirtualInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeConnectionLoaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionLoaCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeConnectionLoaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConnectionLoaResponse(data, context);
  const response: DescribeConnectionLoaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConnectionLoaResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectionLoaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionLoaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connections(data, context);
  const response: DescribeConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connections",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsOnInterconnectCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connections(data, context);
  const response: DescribeConnectionsOnInterconnectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connections",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionsOnInterconnectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult(data, context);
  const response: DescribeDirectConnectGatewayAssociationProposalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDirectConnectGatewayAssociationProposalsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult(data, context);
  const response: DescribeDirectConnectGatewayAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDirectConnectGatewayAssociationsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult(data, context);
  const response: DescribeDirectConnectGatewayAttachmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDirectConnectGatewayAttachmentsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewayAttachmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDirectConnectGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewaysCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectConnectGatewaysResult(data, context);
  const response: DescribeDirectConnectGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDirectConnectGatewaysResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectConnectGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeHostedConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostedConnectionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHostedConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connections(data, context);
  const response: DescribeHostedConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connections",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHostedConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostedConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeInterconnectLoaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectLoaCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeInterconnectLoaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInterconnectLoaResponse(data, context);
  const response: DescribeInterconnectLoaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInterconnectLoaResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInterconnectLoaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectLoaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeInterconnectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeInterconnectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Interconnects(data, context);
  const response: DescribeInterconnectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Interconnects",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInterconnectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInterconnectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeLagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Lags(data, context);
  const response: DescribeLagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Lags",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeLoaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoaCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLoaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Loa(data, context);
  const response: DescribeLoaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Loa",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLoaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Locations(data, context);
  const response: DescribeLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Locations",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeVirtualGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewaysCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeVirtualGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualGateways(data, context);
  const response: DescribeVirtualGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualGateways",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVirtualGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeVirtualInterfacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualInterfacesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeVirtualInterfacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualInterfaces(data, context);
  const response: DescribeVirtualInterfacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualInterfaces",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVirtualInterfacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualInterfacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateConnectionFromLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionFromLagCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateConnectionFromLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Connection(data, context);
  const response: DisassociateConnectionFromLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Connection",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateConnectionFromLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectionFromLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualInterfaceTestHistoryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse(data, context);
  const response: ListVirtualInterfaceTestHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualInterfaceTestHistoryResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualInterfaceTestHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartBgpFailoverTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBgpFailoverTestCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartBgpFailoverTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartBgpFailoverTestResponse(data, context);
  const response: StartBgpFailoverTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartBgpFailoverTestResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartBgpFailoverTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBgpFailoverTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopBgpFailoverTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBgpFailoverTestCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopBgpFailoverTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopBgpFailoverTestResponse(data, context);
  const response: StopBgpFailoverTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopBgpFailoverTestResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopBgpFailoverTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBgpFailoverTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateTagKeysException":
    case "com.amazonaws.directconnect#DuplicateTagKeysException":
      response = {
        ...(await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.directconnect#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectConnectGatewayAssociationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult(data, context);
  const response: UpdateDirectConnectGatewayAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDirectConnectGatewayAssociationResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectConnectGatewayAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateLagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLagCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateLagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1Lag(data, context);
  const response: UpdateLagCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Lag",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualInterfaceAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VirtualInterface(data, context);
  const response: UpdateVirtualInterfaceAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VirtualInterface",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualInterfaceAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectConnectClientException":
    case "com.amazonaws.directconnect#DirectConnectClientException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectConnectServerException":
    case "com.amazonaws.directconnect#DirectConnectServerException":
      response = {
        ...(await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1DirectConnectClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectConnectClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectConnectClientException(body, context);
  const contents: DirectConnectClientException = {
    name: "DirectConnectClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectConnectServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectConnectServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectConnectServerException(body, context);
  const contents: DirectConnectServerException = {
    name: "DirectConnectServerException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DuplicateTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateTagKeysException(body, context);
  const contents: DuplicateTagKeysException = {
    name: "DuplicateTagKeysException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest = (
  input: AcceptDirectConnectGatewayAssociationProposalRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedGatewayOwnerAccount !== undefined && {
      associatedGatewayOwnerAccount: input.associatedGatewayOwnerAccount,
    }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.overrideAllowedPrefixesToDirectConnectGateway !== undefined && {
      overrideAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(
        input.overrideAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.proposalId !== undefined && { proposalId: input.proposalId }),
  };
};

const serializeAws_json1_1AllocateConnectionOnInterconnectRequest = (
  input: AllocateConnectionOnInterconnectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bandwidth !== undefined && { bandwidth: input.bandwidth }),
    ...(input.connectionName !== undefined && { connectionName: input.connectionName }),
    ...(input.interconnectId !== undefined && { interconnectId: input.interconnectId }),
    ...(input.ownerAccount !== undefined && { ownerAccount: input.ownerAccount }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1AllocateHostedConnectionRequest = (
  input: AllocateHostedConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bandwidth !== undefined && { bandwidth: input.bandwidth }),
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.connectionName !== undefined && { connectionName: input.connectionName }),
    ...(input.ownerAccount !== undefined && { ownerAccount: input.ownerAccount }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest = (
  input: AllocatePrivateVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.newPrivateVirtualInterfaceAllocation !== undefined && {
      newPrivateVirtualInterfaceAllocation: serializeAws_json1_1NewPrivateVirtualInterfaceAllocation(
        input.newPrivateVirtualInterfaceAllocation,
        context
      ),
    }),
    ...(input.ownerAccount !== undefined && { ownerAccount: input.ownerAccount }),
  };
};

const serializeAws_json1_1AllocatePublicVirtualInterfaceRequest = (
  input: AllocatePublicVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.newPublicVirtualInterfaceAllocation !== undefined && {
      newPublicVirtualInterfaceAllocation: serializeAws_json1_1NewPublicVirtualInterfaceAllocation(
        input.newPublicVirtualInterfaceAllocation,
        context
      ),
    }),
    ...(input.ownerAccount !== undefined && { ownerAccount: input.ownerAccount }),
  };
};

const serializeAws_json1_1AllocateTransitVirtualInterfaceRequest = (
  input: AllocateTransitVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.newTransitVirtualInterfaceAllocation !== undefined && {
      newTransitVirtualInterfaceAllocation: serializeAws_json1_1NewTransitVirtualInterfaceAllocation(
        input.newTransitVirtualInterfaceAllocation,
        context
      ),
    }),
    ...(input.ownerAccount !== undefined && { ownerAccount: input.ownerAccount }),
  };
};

const serializeAws_json1_1AssociateConnectionWithLagRequest = (
  input: AssociateConnectionWithLagRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.lagId !== undefined && { lagId: input.lagId }),
  };
};

const serializeAws_json1_1AssociateHostedConnectionRequest = (
  input: AssociateHostedConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.parentConnectionId !== undefined && { parentConnectionId: input.parentConnectionId }),
  };
};

const serializeAws_json1_1AssociateVirtualInterfaceRequest = (
  input: AssociateVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1BGPPeerIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ConfirmConnectionRequest = (
  input: ConfirmConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
  };
};

const serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest = (
  input: ConfirmPrivateVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.virtualGatewayId !== undefined && { virtualGatewayId: input.virtualGatewayId }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest = (
  input: ConfirmPublicVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest = (
  input: ConfirmTransitVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1CreateBGPPeerRequest = (input: CreateBGPPeerRequest, context: __SerdeContext): any => {
  return {
    ...(input.newBGPPeer !== undefined && { newBGPPeer: serializeAws_json1_1NewBGPPeer(input.newBGPPeer, context) }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.bandwidth !== undefined && { bandwidth: input.bandwidth }),
    ...(input.connectionName !== undefined && { connectionName: input.connectionName }),
    ...(input.lagId !== undefined && { lagId: input.lagId }),
    ...(input.location !== undefined && { location: input.location }),
    ...(input.providerName !== undefined && { providerName: input.providerName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest = (
  input: CreateDirectConnectGatewayAssociationProposalRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addAllowedPrefixesToDirectConnectGateway !== undefined && {
      addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(
        input.addAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.directConnectGatewayOwnerAccount !== undefined && {
      directConnectGatewayOwnerAccount: input.directConnectGatewayOwnerAccount,
    }),
    ...(input.gatewayId !== undefined && { gatewayId: input.gatewayId }),
    ...(input.removeAllowedPrefixesToDirectConnectGateway !== undefined && {
      removeAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(
        input.removeAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest = (
  input: CreateDirectConnectGatewayAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addAllowedPrefixesToDirectConnectGateway !== undefined && {
      addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(
        input.addAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.gatewayId !== undefined && { gatewayId: input.gatewayId }),
    ...(input.virtualGatewayId !== undefined && { virtualGatewayId: input.virtualGatewayId }),
  };
};

const serializeAws_json1_1CreateDirectConnectGatewayRequest = (
  input: CreateDirectConnectGatewayRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.amazonSideAsn !== undefined && { amazonSideAsn: input.amazonSideAsn }),
    ...(input.directConnectGatewayName !== undefined && { directConnectGatewayName: input.directConnectGatewayName }),
  };
};

const serializeAws_json1_1CreateInterconnectRequest = (
  input: CreateInterconnectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bandwidth !== undefined && { bandwidth: input.bandwidth }),
    ...(input.interconnectName !== undefined && { interconnectName: input.interconnectName }),
    ...(input.lagId !== undefined && { lagId: input.lagId }),
    ...(input.location !== undefined && { location: input.location }),
    ...(input.providerName !== undefined && { providerName: input.providerName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateLagRequest = (input: CreateLagRequest, context: __SerdeContext): any => {
  return {
    ...(input.childConnectionTags !== undefined && {
      childConnectionTags: serializeAws_json1_1TagList(input.childConnectionTags, context),
    }),
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.connectionsBandwidth !== undefined && { connectionsBandwidth: input.connectionsBandwidth }),
    ...(input.lagName !== undefined && { lagName: input.lagName }),
    ...(input.location !== undefined && { location: input.location }),
    ...(input.numberOfConnections !== undefined && { numberOfConnections: input.numberOfConnections }),
    ...(input.providerName !== undefined && { providerName: input.providerName }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreatePrivateVirtualInterfaceRequest = (
  input: CreatePrivateVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.newPrivateVirtualInterface !== undefined && {
      newPrivateVirtualInterface: serializeAws_json1_1NewPrivateVirtualInterface(
        input.newPrivateVirtualInterface,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreatePublicVirtualInterfaceRequest = (
  input: CreatePublicVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.newPublicVirtualInterface !== undefined && {
      newPublicVirtualInterface: serializeAws_json1_1NewPublicVirtualInterface(
        input.newPublicVirtualInterface,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreateTransitVirtualInterfaceRequest = (
  input: CreateTransitVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.newTransitVirtualInterface !== undefined && {
      newTransitVirtualInterface: serializeAws_json1_1NewTransitVirtualInterface(
        input.newTransitVirtualInterface,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DeleteBGPPeerRequest = (input: DeleteBGPPeerRequest, context: __SerdeContext): any => {
  return {
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.bgpPeerId !== undefined && { bgpPeerId: input.bgpPeerId }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
  };
};

const serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest = (
  input: DeleteDirectConnectGatewayAssociationProposalRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.proposalId !== undefined && { proposalId: input.proposalId }),
  };
};

const serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest = (
  input: DeleteDirectConnectGatewayAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associationId !== undefined && { associationId: input.associationId }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.virtualGatewayId !== undefined && { virtualGatewayId: input.virtualGatewayId }),
  };
};

const serializeAws_json1_1DeleteDirectConnectGatewayRequest = (
  input: DeleteDirectConnectGatewayRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
  };
};

const serializeAws_json1_1DeleteInterconnectRequest = (
  input: DeleteInterconnectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.interconnectId !== undefined && { interconnectId: input.interconnectId }),
  };
};

const serializeAws_json1_1DeleteLagRequest = (input: DeleteLagRequest, context: __SerdeContext): any => {
  return {
    ...(input.lagId !== undefined && { lagId: input.lagId }),
  };
};

const serializeAws_json1_1DeleteVirtualInterfaceRequest = (
  input: DeleteVirtualInterfaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1DescribeConnectionLoaRequest = (
  input: DescribeConnectionLoaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.loaContentType !== undefined && { loaContentType: input.loaContentType }),
    ...(input.providerName !== undefined && { providerName: input.providerName }),
  };
};

const serializeAws_json1_1DescribeConnectionsOnInterconnectRequest = (
  input: DescribeConnectionsOnInterconnectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.interconnectId !== undefined && { interconnectId: input.interconnectId }),
  };
};

const serializeAws_json1_1DescribeConnectionsRequest = (
  input: DescribeConnectionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
  };
};

const serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest = (
  input: DescribeDirectConnectGatewayAssociationProposalsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedGatewayId !== undefined && { associatedGatewayId: input.associatedGatewayId }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.proposalId !== undefined && { proposalId: input.proposalId }),
  };
};

const serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest = (
  input: DescribeDirectConnectGatewayAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedGatewayId !== undefined && { associatedGatewayId: input.associatedGatewayId }),
    ...(input.associationId !== undefined && { associationId: input.associationId }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.virtualGatewayId !== undefined && { virtualGatewayId: input.virtualGatewayId }),
  };
};

const serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest = (
  input: DescribeDirectConnectGatewayAttachmentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1DescribeDirectConnectGatewaysRequest = (
  input: DescribeDirectConnectGatewaysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeHostedConnectionsRequest = (
  input: DescribeHostedConnectionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
  };
};

const serializeAws_json1_1DescribeInterconnectLoaRequest = (
  input: DescribeInterconnectLoaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.interconnectId !== undefined && { interconnectId: input.interconnectId }),
    ...(input.loaContentType !== undefined && { loaContentType: input.loaContentType }),
    ...(input.providerName !== undefined && { providerName: input.providerName }),
  };
};

const serializeAws_json1_1DescribeInterconnectsRequest = (
  input: DescribeInterconnectsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.interconnectId !== undefined && { interconnectId: input.interconnectId }),
  };
};

const serializeAws_json1_1DescribeLagsRequest = (input: DescribeLagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.lagId !== undefined && { lagId: input.lagId }),
  };
};

const serializeAws_json1_1DescribeLoaRequest = (input: DescribeLoaRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.loaContentType !== undefined && { loaContentType: input.loaContentType }),
    ...(input.providerName !== undefined && { providerName: input.providerName }),
  };
};

const serializeAws_json1_1DescribeTagsRequest = (input: DescribeTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArns !== undefined && {
      resourceArns: serializeAws_json1_1ResourceArnList(input.resourceArns, context),
    }),
  };
};

const serializeAws_json1_1DescribeVirtualInterfacesRequest = (
  input: DescribeVirtualInterfacesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1DisassociateConnectionFromLagRequest = (
  input: DisassociateConnectionFromLagRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectionId !== undefined && { connectionId: input.connectionId }),
    ...(input.lagId !== undefined && { lagId: input.lagId }),
  };
};

const serializeAws_json1_1ListVirtualInterfaceTestHistoryRequest = (
  input: ListVirtualInterfaceTestHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bgpPeers !== undefined && { bgpPeers: serializeAws_json1_1BGPPeerIdList(input.bgpPeers, context) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.testId !== undefined && { testId: input.testId }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1NewBGPPeer = (input: NewBGPPeer, context: __SerdeContext): any => {
  return {
    ...(input.addressFamily !== undefined && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress !== undefined && { amazonAddress: input.amazonAddress }),
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.authKey !== undefined && { authKey: input.authKey }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
  };
};

const serializeAws_json1_1NewPrivateVirtualInterface = (
  input: NewPrivateVirtualInterface,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily !== undefined && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress !== undefined && { amazonAddress: input.amazonAddress }),
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.authKey !== undefined && { authKey: input.authKey }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.mtu !== undefined && { mtu: input.mtu }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.virtualGatewayId !== undefined && { virtualGatewayId: input.virtualGatewayId }),
    ...(input.virtualInterfaceName !== undefined && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1NewPrivateVirtualInterfaceAllocation = (
  input: NewPrivateVirtualInterfaceAllocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily !== undefined && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress !== undefined && { amazonAddress: input.amazonAddress }),
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.authKey !== undefined && { authKey: input.authKey }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
    ...(input.mtu !== undefined && { mtu: input.mtu }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.virtualInterfaceName !== undefined && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1NewPublicVirtualInterface = (
  input: NewPublicVirtualInterface,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily !== undefined && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress !== undefined && { amazonAddress: input.amazonAddress }),
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.authKey !== undefined && { authKey: input.authKey }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
    ...(input.routeFilterPrefixes !== undefined && {
      routeFilterPrefixes: serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context),
    }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.virtualInterfaceName !== undefined && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1NewPublicVirtualInterfaceAllocation = (
  input: NewPublicVirtualInterfaceAllocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily !== undefined && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress !== undefined && { amazonAddress: input.amazonAddress }),
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.authKey !== undefined && { authKey: input.authKey }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
    ...(input.routeFilterPrefixes !== undefined && {
      routeFilterPrefixes: serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context),
    }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.virtualInterfaceName !== undefined && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1NewTransitVirtualInterface = (
  input: NewTransitVirtualInterface,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily !== undefined && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress !== undefined && { amazonAddress: input.amazonAddress }),
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.authKey !== undefined && { authKey: input.authKey }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
    ...(input.directConnectGatewayId !== undefined && { directConnectGatewayId: input.directConnectGatewayId }),
    ...(input.mtu !== undefined && { mtu: input.mtu }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.virtualInterfaceName !== undefined && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1NewTransitVirtualInterfaceAllocation = (
  input: NewTransitVirtualInterfaceAllocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.addressFamily !== undefined && { addressFamily: input.addressFamily }),
    ...(input.amazonAddress !== undefined && { amazonAddress: input.amazonAddress }),
    ...(input.asn !== undefined && { asn: input.asn }),
    ...(input.authKey !== undefined && { authKey: input.authKey }),
    ...(input.customerAddress !== undefined && { customerAddress: input.customerAddress }),
    ...(input.mtu !== undefined && { mtu: input.mtu }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.virtualInterfaceName !== undefined && { virtualInterfaceName: input.virtualInterfaceName }),
    ...(input.vlan !== undefined && { vlan: input.vlan }),
  };
};

const serializeAws_json1_1ResourceArnList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1RouteFilterPrefix = (input: RouteFilterPrefix, context: __SerdeContext): any => {
  return {
    ...(input.cidr !== undefined && { cidr: input.cidr }),
  };
};

const serializeAws_json1_1RouteFilterPrefixList = (input: RouteFilterPrefix[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1RouteFilterPrefix(entry, context));
};

const serializeAws_json1_1StartBgpFailoverTestRequest = (
  input: StartBgpFailoverTestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bgpPeers !== undefined && { bgpPeers: serializeAws_json1_1BGPPeerIdList(input.bgpPeers, context) }),
    ...(input.testDurationInMinutes !== undefined && { testDurationInMinutes: input.testDurationInMinutes }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1StopBgpFailoverTestRequest = (
  input: StopBgpFailoverTestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest = (
  input: UpdateDirectConnectGatewayAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addAllowedPrefixesToDirectConnectGateway !== undefined && {
      addAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(
        input.addAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
    ...(input.associationId !== undefined && { associationId: input.associationId }),
    ...(input.removeAllowedPrefixesToDirectConnectGateway !== undefined && {
      removeAllowedPrefixesToDirectConnectGateway: serializeAws_json1_1RouteFilterPrefixList(
        input.removeAllowedPrefixesToDirectConnectGateway,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateLagRequest = (input: UpdateLagRequest, context: __SerdeContext): any => {
  return {
    ...(input.lagId !== undefined && { lagId: input.lagId }),
    ...(input.lagName !== undefined && { lagName: input.lagName }),
    ...(input.minimumLinks !== undefined && { minimumLinks: input.minimumLinks }),
  };
};

const serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest = (
  input: UpdateVirtualInterfaceAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.mtu !== undefined && { mtu: input.mtu }),
    ...(input.virtualInterfaceId !== undefined && { virtualInterfaceId: input.virtualInterfaceId }),
  };
};

const deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult = (
  output: any,
  context: __SerdeContext
): AcceptDirectConnectGatewayAssociationProposalResult => {
  return {
    __type: "AcceptDirectConnectGatewayAssociationProposalResult",
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AllocateTransitVirtualInterfaceResult = (
  output: any,
  context: __SerdeContext
): AllocateTransitVirtualInterfaceResult => {
  return {
    __type: "AllocateTransitVirtualInterfaceResult",
    virtualInterface:
      output.virtualInterface !== undefined && output.virtualInterface !== null
        ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociatedGateway = (output: any, context: __SerdeContext): AssociatedGateway => {
  return {
    __type: "AssociatedGateway",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1AvailablePortSpeeds = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1BGPPeer = (output: any, context: __SerdeContext): BGPPeer => {
  return {
    __type: "BGPPeer",
    addressFamily:
      output.addressFamily !== undefined && output.addressFamily !== null ? output.addressFamily : undefined,
    amazonAddress:
      output.amazonAddress !== undefined && output.amazonAddress !== null ? output.amazonAddress : undefined,
    asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
    authKey: output.authKey !== undefined && output.authKey !== null ? output.authKey : undefined,
    awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
    bgpPeerId: output.bgpPeerId !== undefined && output.bgpPeerId !== null ? output.bgpPeerId : undefined,
    bgpPeerState: output.bgpPeerState !== undefined && output.bgpPeerState !== null ? output.bgpPeerState : undefined,
    bgpStatus: output.bgpStatus !== undefined && output.bgpStatus !== null ? output.bgpStatus : undefined,
    customerAddress:
      output.customerAddress !== undefined && output.customerAddress !== null ? output.customerAddress : undefined,
  } as any;
};

const deserializeAws_json1_1BGPPeerIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1BGPPeerList = (output: any, context: __SerdeContext): BGPPeer[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1BGPPeer(entry, context));
};

const deserializeAws_json1_1ConfirmConnectionResponse = (
  output: any,
  context: __SerdeContext
): ConfirmConnectionResponse => {
  return {
    __type: "ConfirmConnectionResponse",
    connectionState:
      output.connectionState !== undefined && output.connectionState !== null ? output.connectionState : undefined,
  } as any;
};

const deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse = (
  output: any,
  context: __SerdeContext
): ConfirmPrivateVirtualInterfaceResponse => {
  return {
    __type: "ConfirmPrivateVirtualInterfaceResponse",
    virtualInterfaceState:
      output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
        ? output.virtualInterfaceState
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse = (
  output: any,
  context: __SerdeContext
): ConfirmPublicVirtualInterfaceResponse => {
  return {
    __type: "ConfirmPublicVirtualInterfaceResponse",
    virtualInterfaceState:
      output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
        ? output.virtualInterfaceState
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse = (
  output: any,
  context: __SerdeContext
): ConfirmTransitVirtualInterfaceResponse => {
  return {
    __type: "ConfirmTransitVirtualInterfaceResponse",
    virtualInterfaceState:
      output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
        ? output.virtualInterfaceState
        : undefined,
  } as any;
};

const deserializeAws_json1_1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    __type: "Connection",
    awsDevice: output.awsDevice !== undefined && output.awsDevice !== null ? output.awsDevice : undefined,
    awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
    bandwidth: output.bandwidth !== undefined && output.bandwidth !== null ? output.bandwidth : undefined,
    connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
    connectionName:
      output.connectionName !== undefined && output.connectionName !== null ? output.connectionName : undefined,
    connectionState:
      output.connectionState !== undefined && output.connectionState !== null ? output.connectionState : undefined,
    hasLogicalRedundancy:
      output.hasLogicalRedundancy !== undefined && output.hasLogicalRedundancy !== null
        ? output.hasLogicalRedundancy
        : undefined,
    jumboFrameCapable:
      output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
        ? output.jumboFrameCapable
        : undefined,
    lagId: output.lagId !== undefined && output.lagId !== null ? output.lagId : undefined,
    loaIssueTime:
      output.loaIssueTime !== undefined && output.loaIssueTime !== null
        ? new Date(Math.round(output.loaIssueTime * 1000))
        : undefined,
    location: output.location !== undefined && output.location !== null ? output.location : undefined,
    ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
    partnerName: output.partnerName !== undefined && output.partnerName !== null ? output.partnerName : undefined,
    providerName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
    vlan: output.vlan !== undefined && output.vlan !== null ? output.vlan : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Connection(entry, context));
};

const deserializeAws_json1_1Connections = (output: any, context: __SerdeContext): Connections => {
  return {
    __type: "Connections",
    connections:
      output.connections !== undefined && output.connections !== null
        ? deserializeAws_json1_1ConnectionList(output.connections, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateBGPPeerResponse = (output: any, context: __SerdeContext): CreateBGPPeerResponse => {
  return {
    __type: "CreateBGPPeerResponse",
    virtualInterface:
      output.virtualInterface !== undefined && output.virtualInterface !== null
        ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult = (
  output: any,
  context: __SerdeContext
): CreateDirectConnectGatewayAssociationProposalResult => {
  return {
    __type: "CreateDirectConnectGatewayAssociationProposalResult",
    directConnectGatewayAssociationProposal:
      output.directConnectGatewayAssociationProposal !== undefined &&
      output.directConnectGatewayAssociationProposal !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociationProposal(
            output.directConnectGatewayAssociationProposal,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult = (
  output: any,
  context: __SerdeContext
): CreateDirectConnectGatewayAssociationResult => {
  return {
    __type: "CreateDirectConnectGatewayAssociationResult",
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDirectConnectGatewayResult = (
  output: any,
  context: __SerdeContext
): CreateDirectConnectGatewayResult => {
  return {
    __type: "CreateDirectConnectGatewayResult",
    directConnectGateway:
      output.directConnectGateway !== undefined && output.directConnectGateway !== null
        ? deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTransitVirtualInterfaceResult = (
  output: any,
  context: __SerdeContext
): CreateTransitVirtualInterfaceResult => {
  return {
    __type: "CreateTransitVirtualInterfaceResult",
    virtualInterface:
      output.virtualInterface !== undefined && output.virtualInterface !== null
        ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBGPPeerResponse = (output: any, context: __SerdeContext): DeleteBGPPeerResponse => {
  return {
    __type: "DeleteBGPPeerResponse",
    virtualInterface:
      output.virtualInterface !== undefined && output.virtualInterface !== null
        ? deserializeAws_json1_1VirtualInterface(output.virtualInterface, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectConnectGatewayAssociationProposalResult => {
  return {
    __type: "DeleteDirectConnectGatewayAssociationProposalResult",
    directConnectGatewayAssociationProposal:
      output.directConnectGatewayAssociationProposal !== undefined &&
      output.directConnectGatewayAssociationProposal !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociationProposal(
            output.directConnectGatewayAssociationProposal,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectConnectGatewayAssociationResult => {
  return {
    __type: "DeleteDirectConnectGatewayAssociationResult",
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDirectConnectGatewayResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectConnectGatewayResult => {
  return {
    __type: "DeleteDirectConnectGatewayResult",
    directConnectGateway:
      output.directConnectGateway !== undefined && output.directConnectGateway !== null
        ? deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteInterconnectResponse = (
  output: any,
  context: __SerdeContext
): DeleteInterconnectResponse => {
  return {
    __type: "DeleteInterconnectResponse",
    interconnectState:
      output.interconnectState !== undefined && output.interconnectState !== null
        ? output.interconnectState
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteVirtualInterfaceResponse = (
  output: any,
  context: __SerdeContext
): DeleteVirtualInterfaceResponse => {
  return {
    __type: "DeleteVirtualInterfaceResponse",
    virtualInterfaceState:
      output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
        ? output.virtualInterfaceState
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConnectionLoaResponse = (
  output: any,
  context: __SerdeContext
): DescribeConnectionLoaResponse => {
  return {
    __type: "DescribeConnectionLoaResponse",
    loa: output.loa !== undefined && output.loa !== null ? deserializeAws_json1_1Loa(output.loa, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewayAssociationProposalsResult => {
  return {
    __type: "DescribeDirectConnectGatewayAssociationProposalsResult",
    directConnectGatewayAssociationProposals:
      output.directConnectGatewayAssociationProposals !== undefined &&
      output.directConnectGatewayAssociationProposals !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociationProposalList(
            output.directConnectGatewayAssociationProposals,
            context
          )
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewayAssociationsResult => {
  return {
    __type: "DescribeDirectConnectGatewayAssociationsResult",
    directConnectGatewayAssociations:
      output.directConnectGatewayAssociations !== undefined && output.directConnectGatewayAssociations !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociationList(output.directConnectGatewayAssociations, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewayAttachmentsResult => {
  return {
    __type: "DescribeDirectConnectGatewayAttachmentsResult",
    directConnectGatewayAttachments:
      output.directConnectGatewayAttachments !== undefined && output.directConnectGatewayAttachments !== null
        ? deserializeAws_json1_1DirectConnectGatewayAttachmentList(output.directConnectGatewayAttachments, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDirectConnectGatewaysResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectConnectGatewaysResult => {
  return {
    __type: "DescribeDirectConnectGatewaysResult",
    directConnectGateways:
      output.directConnectGateways !== undefined && output.directConnectGateways !== null
        ? deserializeAws_json1_1DirectConnectGatewayList(output.directConnectGateways, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeInterconnectLoaResponse = (
  output: any,
  context: __SerdeContext
): DescribeInterconnectLoaResponse => {
  return {
    __type: "DescribeInterconnectLoaResponse",
    loa: output.loa !== undefined && output.loa !== null ? deserializeAws_json1_1Loa(output.loa, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTagsResponse = (output: any, context: __SerdeContext): DescribeTagsResponse => {
  return {
    __type: "DescribeTagsResponse",
    resourceTags:
      output.resourceTags !== undefined && output.resourceTags !== null
        ? deserializeAws_json1_1ResourceTagList(output.resourceTags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectConnectClientException = (
  output: any,
  context: __SerdeContext
): DirectConnectClientException => {
  return {
    __type: "DirectConnectClientException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1DirectConnectGateway = (output: any, context: __SerdeContext): DirectConnectGateway => {
  return {
    __type: "DirectConnectGateway",
    amazonSideAsn:
      output.amazonSideAsn !== undefined && output.amazonSideAsn !== null ? output.amazonSideAsn : undefined,
    directConnectGatewayId:
      output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
        ? output.directConnectGatewayId
        : undefined,
    directConnectGatewayName:
      output.directConnectGatewayName !== undefined && output.directConnectGatewayName !== null
        ? output.directConnectGatewayName
        : undefined,
    directConnectGatewayState:
      output.directConnectGatewayState !== undefined && output.directConnectGatewayState !== null
        ? output.directConnectGatewayState
        : undefined,
    ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
    stateChangeError:
      output.stateChangeError !== undefined && output.stateChangeError !== null ? output.stateChangeError : undefined,
  } as any;
};

const deserializeAws_json1_1DirectConnectGatewayAssociation = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAssociation => {
  return {
    __type: "DirectConnectGatewayAssociation",
    allowedPrefixesToDirectConnectGateway:
      output.allowedPrefixesToDirectConnectGateway !== undefined &&
      output.allowedPrefixesToDirectConnectGateway !== null
        ? deserializeAws_json1_1RouteFilterPrefixList(output.allowedPrefixesToDirectConnectGateway, context)
        : undefined,
    associatedGateway:
      output.associatedGateway !== undefined && output.associatedGateway !== null
        ? deserializeAws_json1_1AssociatedGateway(output.associatedGateway, context)
        : undefined,
    associationId:
      output.associationId !== undefined && output.associationId !== null ? output.associationId : undefined,
    associationState:
      output.associationState !== undefined && output.associationState !== null ? output.associationState : undefined,
    directConnectGatewayId:
      output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
        ? output.directConnectGatewayId
        : undefined,
    directConnectGatewayOwnerAccount:
      output.directConnectGatewayOwnerAccount !== undefined && output.directConnectGatewayOwnerAccount !== null
        ? output.directConnectGatewayOwnerAccount
        : undefined,
    stateChangeError:
      output.stateChangeError !== undefined && output.stateChangeError !== null ? output.stateChangeError : undefined,
    virtualGatewayId:
      output.virtualGatewayId !== undefined && output.virtualGatewayId !== null ? output.virtualGatewayId : undefined,
    virtualGatewayOwnerAccount:
      output.virtualGatewayOwnerAccount !== undefined && output.virtualGatewayOwnerAccount !== null
        ? output.virtualGatewayOwnerAccount
        : undefined,
    virtualGatewayRegion:
      output.virtualGatewayRegion !== undefined && output.virtualGatewayRegion !== null
        ? output.virtualGatewayRegion
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectConnectGatewayAssociationList = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAssociation[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DirectConnectGatewayAssociation(entry, context));
};

const deserializeAws_json1_1DirectConnectGatewayAssociationProposal = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAssociationProposal => {
  return {
    __type: "DirectConnectGatewayAssociationProposal",
    associatedGateway:
      output.associatedGateway !== undefined && output.associatedGateway !== null
        ? deserializeAws_json1_1AssociatedGateway(output.associatedGateway, context)
        : undefined,
    directConnectGatewayId:
      output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
        ? output.directConnectGatewayId
        : undefined,
    directConnectGatewayOwnerAccount:
      output.directConnectGatewayOwnerAccount !== undefined && output.directConnectGatewayOwnerAccount !== null
        ? output.directConnectGatewayOwnerAccount
        : undefined,
    existingAllowedPrefixesToDirectConnectGateway:
      output.existingAllowedPrefixesToDirectConnectGateway !== undefined &&
      output.existingAllowedPrefixesToDirectConnectGateway !== null
        ? deserializeAws_json1_1RouteFilterPrefixList(output.existingAllowedPrefixesToDirectConnectGateway, context)
        : undefined,
    proposalId: output.proposalId !== undefined && output.proposalId !== null ? output.proposalId : undefined,
    proposalState:
      output.proposalState !== undefined && output.proposalState !== null ? output.proposalState : undefined,
    requestedAllowedPrefixesToDirectConnectGateway:
      output.requestedAllowedPrefixesToDirectConnectGateway !== undefined &&
      output.requestedAllowedPrefixesToDirectConnectGateway !== null
        ? deserializeAws_json1_1RouteFilterPrefixList(output.requestedAllowedPrefixesToDirectConnectGateway, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectConnectGatewayAssociationProposalList = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAssociationProposal[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DirectConnectGatewayAssociationProposal(entry, context)
  );
};

const deserializeAws_json1_1DirectConnectGatewayAttachment = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAttachment => {
  return {
    __type: "DirectConnectGatewayAttachment",
    attachmentState:
      output.attachmentState !== undefined && output.attachmentState !== null ? output.attachmentState : undefined,
    attachmentType:
      output.attachmentType !== undefined && output.attachmentType !== null ? output.attachmentType : undefined,
    directConnectGatewayId:
      output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
        ? output.directConnectGatewayId
        : undefined,
    stateChangeError:
      output.stateChangeError !== undefined && output.stateChangeError !== null ? output.stateChangeError : undefined,
    virtualInterfaceId:
      output.virtualInterfaceId !== undefined && output.virtualInterfaceId !== null
        ? output.virtualInterfaceId
        : undefined,
    virtualInterfaceOwnerAccount:
      output.virtualInterfaceOwnerAccount !== undefined && output.virtualInterfaceOwnerAccount !== null
        ? output.virtualInterfaceOwnerAccount
        : undefined,
    virtualInterfaceRegion:
      output.virtualInterfaceRegion !== undefined && output.virtualInterfaceRegion !== null
        ? output.virtualInterfaceRegion
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectConnectGatewayAttachmentList = (
  output: any,
  context: __SerdeContext
): DirectConnectGatewayAttachment[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DirectConnectGatewayAttachment(entry, context));
};

const deserializeAws_json1_1DirectConnectGatewayList = (
  output: any,
  context: __SerdeContext
): DirectConnectGateway[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DirectConnectGateway(entry, context));
};

const deserializeAws_json1_1DirectConnectServerException = (
  output: any,
  context: __SerdeContext
): DirectConnectServerException => {
  return {
    __type: "DirectConnectServerException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1DuplicateTagKeysException = (
  output: any,
  context: __SerdeContext
): DuplicateTagKeysException => {
  return {
    __type: "DuplicateTagKeysException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Interconnect = (output: any, context: __SerdeContext): Interconnect => {
  return {
    __type: "Interconnect",
    awsDevice: output.awsDevice !== undefined && output.awsDevice !== null ? output.awsDevice : undefined,
    awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
    bandwidth: output.bandwidth !== undefined && output.bandwidth !== null ? output.bandwidth : undefined,
    hasLogicalRedundancy:
      output.hasLogicalRedundancy !== undefined && output.hasLogicalRedundancy !== null
        ? output.hasLogicalRedundancy
        : undefined,
    interconnectId:
      output.interconnectId !== undefined && output.interconnectId !== null ? output.interconnectId : undefined,
    interconnectName:
      output.interconnectName !== undefined && output.interconnectName !== null ? output.interconnectName : undefined,
    interconnectState:
      output.interconnectState !== undefined && output.interconnectState !== null
        ? output.interconnectState
        : undefined,
    jumboFrameCapable:
      output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
        ? output.jumboFrameCapable
        : undefined,
    lagId: output.lagId !== undefined && output.lagId !== null ? output.lagId : undefined,
    loaIssueTime:
      output.loaIssueTime !== undefined && output.loaIssueTime !== null
        ? new Date(Math.round(output.loaIssueTime * 1000))
        : undefined,
    location: output.location !== undefined && output.location !== null ? output.location : undefined,
    providerName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InterconnectList = (output: any, context: __SerdeContext): Interconnect[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Interconnect(entry, context));
};

const deserializeAws_json1_1Interconnects = (output: any, context: __SerdeContext): Interconnects => {
  return {
    __type: "Interconnects",
    interconnects:
      output.interconnects !== undefined && output.interconnects !== null
        ? deserializeAws_json1_1InterconnectList(output.interconnects, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Lag = (output: any, context: __SerdeContext): Lag => {
  return {
    __type: "Lag",
    allowsHostedConnections:
      output.allowsHostedConnections !== undefined && output.allowsHostedConnections !== null
        ? output.allowsHostedConnections
        : undefined,
    awsDevice: output.awsDevice !== undefined && output.awsDevice !== null ? output.awsDevice : undefined,
    awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
    connections:
      output.connections !== undefined && output.connections !== null
        ? deserializeAws_json1_1ConnectionList(output.connections, context)
        : undefined,
    connectionsBandwidth:
      output.connectionsBandwidth !== undefined && output.connectionsBandwidth !== null
        ? output.connectionsBandwidth
        : undefined,
    hasLogicalRedundancy:
      output.hasLogicalRedundancy !== undefined && output.hasLogicalRedundancy !== null
        ? output.hasLogicalRedundancy
        : undefined,
    jumboFrameCapable:
      output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
        ? output.jumboFrameCapable
        : undefined,
    lagId: output.lagId !== undefined && output.lagId !== null ? output.lagId : undefined,
    lagName: output.lagName !== undefined && output.lagName !== null ? output.lagName : undefined,
    lagState: output.lagState !== undefined && output.lagState !== null ? output.lagState : undefined,
    location: output.location !== undefined && output.location !== null ? output.location : undefined,
    minimumLinks: output.minimumLinks !== undefined && output.minimumLinks !== null ? output.minimumLinks : undefined,
    numberOfConnections:
      output.numberOfConnections !== undefined && output.numberOfConnections !== null
        ? output.numberOfConnections
        : undefined,
    ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
    providerName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LagList = (output: any, context: __SerdeContext): Lag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Lag(entry, context));
};

const deserializeAws_json1_1Lags = (output: any, context: __SerdeContext): Lags => {
  return {
    __type: "Lags",
    lags:
      output.lags !== undefined && output.lags !== null
        ? deserializeAws_json1_1LagList(output.lags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVirtualInterfaceTestHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListVirtualInterfaceTestHistoryResponse => {
  return {
    __type: "ListVirtualInterfaceTestHistoryResponse",
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    virtualInterfaceTestHistory:
      output.virtualInterfaceTestHistory !== undefined && output.virtualInterfaceTestHistory !== null
        ? deserializeAws_json1_1VirtualInterfaceTestHistoryList(output.virtualInterfaceTestHistory, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Loa = (output: any, context: __SerdeContext): Loa => {
  return {
    __type: "Loa",
    loaContent:
      output.loaContent !== undefined && output.loaContent !== null
        ? context.base64Decoder(output.loaContent)
        : undefined,
    loaContentType:
      output.loaContentType !== undefined && output.loaContentType !== null ? output.loaContentType : undefined,
  } as any;
};

const deserializeAws_json1_1Location = (output: any, context: __SerdeContext): Location => {
  return {
    __type: "Location",
    availablePortSpeeds:
      output.availablePortSpeeds !== undefined && output.availablePortSpeeds !== null
        ? deserializeAws_json1_1AvailablePortSpeeds(output.availablePortSpeeds, context)
        : undefined,
    availableProviders:
      output.availableProviders !== undefined && output.availableProviders !== null
        ? deserializeAws_json1_1ProviderList(output.availableProviders, context)
        : undefined,
    locationCode: output.locationCode !== undefined && output.locationCode !== null ? output.locationCode : undefined,
    locationName: output.locationName !== undefined && output.locationName !== null ? output.locationName : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
  } as any;
};

const deserializeAws_json1_1LocationList = (output: any, context: __SerdeContext): Location[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Location(entry, context));
};

const deserializeAws_json1_1Locations = (output: any, context: __SerdeContext): Locations => {
  return {
    __type: "Locations",
    locations:
      output.locations !== undefined && output.locations !== null
        ? deserializeAws_json1_1LocationList(output.locations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProviderList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    __type: "ResourceTag",
    resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ResourceTag(entry, context));
};

const deserializeAws_json1_1RouteFilterPrefix = (output: any, context: __SerdeContext): RouteFilterPrefix => {
  return {
    __type: "RouteFilterPrefix",
    cidr: output.cidr !== undefined && output.cidr !== null ? output.cidr : undefined,
  } as any;
};

const deserializeAws_json1_1RouteFilterPrefixList = (output: any, context: __SerdeContext): RouteFilterPrefix[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1RouteFilterPrefix(entry, context));
};

const deserializeAws_json1_1StartBgpFailoverTestResponse = (
  output: any,
  context: __SerdeContext
): StartBgpFailoverTestResponse => {
  return {
    __type: "StartBgpFailoverTestResponse",
    virtualInterfaceTest:
      output.virtualInterfaceTest !== undefined && output.virtualInterfaceTest !== null
        ? deserializeAws_json1_1VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopBgpFailoverTestResponse = (
  output: any,
  context: __SerdeContext
): StopBgpFailoverTestResponse => {
  return {
    __type: "StopBgpFailoverTestResponse",
    virtualInterfaceTest:
      output.virtualInterfaceTest !== undefined && output.virtualInterfaceTest !== null
        ? deserializeAws_json1_1VirtualInterfaceTestHistory(output.virtualInterfaceTest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    __type: "Tag",
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    __type: "TagResourceResponse",
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    __type: "TooManyTagsException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse",
  } as any;
};

const deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult = (
  output: any,
  context: __SerdeContext
): UpdateDirectConnectGatewayAssociationResult => {
  return {
    __type: "UpdateDirectConnectGatewayAssociationResult",
    directConnectGatewayAssociation:
      output.directConnectGatewayAssociation !== undefined && output.directConnectGatewayAssociation !== null
        ? deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1VirtualGateway = (output: any, context: __SerdeContext): VirtualGateway => {
  return {
    __type: "VirtualGateway",
    virtualGatewayId:
      output.virtualGatewayId !== undefined && output.virtualGatewayId !== null ? output.virtualGatewayId : undefined,
    virtualGatewayState:
      output.virtualGatewayState !== undefined && output.virtualGatewayState !== null
        ? output.virtualGatewayState
        : undefined,
  } as any;
};

const deserializeAws_json1_1VirtualGatewayList = (output: any, context: __SerdeContext): VirtualGateway[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1VirtualGateway(entry, context));
};

const deserializeAws_json1_1VirtualGateways = (output: any, context: __SerdeContext): VirtualGateways => {
  return {
    __type: "VirtualGateways",
    virtualGateways:
      output.virtualGateways !== undefined && output.virtualGateways !== null
        ? deserializeAws_json1_1VirtualGatewayList(output.virtualGateways, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1VirtualInterface = (output: any, context: __SerdeContext): VirtualInterface => {
  return {
    __type: "VirtualInterface",
    addressFamily:
      output.addressFamily !== undefined && output.addressFamily !== null ? output.addressFamily : undefined,
    amazonAddress:
      output.amazonAddress !== undefined && output.amazonAddress !== null ? output.amazonAddress : undefined,
    amazonSideAsn:
      output.amazonSideAsn !== undefined && output.amazonSideAsn !== null ? output.amazonSideAsn : undefined,
    asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
    authKey: output.authKey !== undefined && output.authKey !== null ? output.authKey : undefined,
    awsDeviceV2: output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null ? output.awsDeviceV2 : undefined,
    bgpPeers:
      output.bgpPeers !== undefined && output.bgpPeers !== null
        ? deserializeAws_json1_1BGPPeerList(output.bgpPeers, context)
        : undefined,
    connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
    customerAddress:
      output.customerAddress !== undefined && output.customerAddress !== null ? output.customerAddress : undefined,
    customerRouterConfig:
      output.customerRouterConfig !== undefined && output.customerRouterConfig !== null
        ? output.customerRouterConfig
        : undefined,
    directConnectGatewayId:
      output.directConnectGatewayId !== undefined && output.directConnectGatewayId !== null
        ? output.directConnectGatewayId
        : undefined,
    jumboFrameCapable:
      output.jumboFrameCapable !== undefined && output.jumboFrameCapable !== null
        ? output.jumboFrameCapable
        : undefined,
    location: output.location !== undefined && output.location !== null ? output.location : undefined,
    mtu: output.mtu !== undefined && output.mtu !== null ? output.mtu : undefined,
    ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    routeFilterPrefixes:
      output.routeFilterPrefixes !== undefined && output.routeFilterPrefixes !== null
        ? deserializeAws_json1_1RouteFilterPrefixList(output.routeFilterPrefixes, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
    virtualGatewayId:
      output.virtualGatewayId !== undefined && output.virtualGatewayId !== null ? output.virtualGatewayId : undefined,
    virtualInterfaceId:
      output.virtualInterfaceId !== undefined && output.virtualInterfaceId !== null
        ? output.virtualInterfaceId
        : undefined,
    virtualInterfaceName:
      output.virtualInterfaceName !== undefined && output.virtualInterfaceName !== null
        ? output.virtualInterfaceName
        : undefined,
    virtualInterfaceState:
      output.virtualInterfaceState !== undefined && output.virtualInterfaceState !== null
        ? output.virtualInterfaceState
        : undefined,
    virtualInterfaceType:
      output.virtualInterfaceType !== undefined && output.virtualInterfaceType !== null
        ? output.virtualInterfaceType
        : undefined,
    vlan: output.vlan !== undefined && output.vlan !== null ? output.vlan : undefined,
  } as any;
};

const deserializeAws_json1_1VirtualInterfaceList = (output: any, context: __SerdeContext): VirtualInterface[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1VirtualInterface(entry, context));
};

const deserializeAws_json1_1VirtualInterfaces = (output: any, context: __SerdeContext): VirtualInterfaces => {
  return {
    __type: "VirtualInterfaces",
    virtualInterfaces:
      output.virtualInterfaces !== undefined && output.virtualInterfaces !== null
        ? deserializeAws_json1_1VirtualInterfaceList(output.virtualInterfaces, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1VirtualInterfaceTestHistory = (
  output: any,
  context: __SerdeContext
): VirtualInterfaceTestHistory => {
  return {
    __type: "VirtualInterfaceTestHistory",
    bgpPeers:
      output.bgpPeers !== undefined && output.bgpPeers !== null
        ? deserializeAws_json1_1BGPPeerIdList(output.bgpPeers, context)
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    ownerAccount: output.ownerAccount !== undefined && output.ownerAccount !== null ? output.ownerAccount : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    testDurationInMinutes:
      output.testDurationInMinutes !== undefined && output.testDurationInMinutes !== null
        ? output.testDurationInMinutes
        : undefined,
    testId: output.testId !== undefined && output.testId !== null ? output.testId : undefined,
    virtualInterfaceId:
      output.virtualInterfaceId !== undefined && output.virtualInterfaceId !== null
        ? output.virtualInterfaceId
        : undefined,
  } as any;
};

const deserializeAws_json1_1VirtualInterfaceTestHistoryList = (
  output: any,
  context: __SerdeContext
): VirtualInterfaceTestHistory[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1VirtualInterfaceTestHistory(entry, context));
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
