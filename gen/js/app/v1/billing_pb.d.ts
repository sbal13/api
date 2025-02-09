// package: viam.app.v1
// file: app/v1/billing.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CurrentMonthUsageSummary extends jspb.Message {
  getCloudStorageUsage(): number;
  setCloudStorageUsage(value: number): void;

  getCloudStorageUsageCost(): number;
  setCloudStorageUsageCost(value: number): void;

  getDataUploadUsageCost(): number;
  setDataUploadUsageCost(value: number): void;

  getDataUploadUsageQuantity(): number;
  setDataUploadUsageQuantity(value: number): void;

  getDataEgresUsageCost(): number;
  setDataEgresUsageCost(value: number): void;

  getDataEgresUsageQuantity(): number;
  setDataEgresUsageQuantity(value: number): void;

  getStandardComputeUsageCost(): number;
  setStandardComputeUsageCost(value: number): void;

  getStandardComputeUsageQuantity(): number;
  setStandardComputeUsageQuantity(value: number): void;

  getTotalUsageQuantity(): number;
  setTotalUsageQuantity(value: number): void;

  getTotalUsageWithDiscount(): number;
  setTotalUsageWithDiscount(value: number): void;

  getTotalUsageWithoutDiscount(): number;
  setTotalUsageWithoutDiscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentMonthUsageSummary.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentMonthUsageSummary): CurrentMonthUsageSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentMonthUsageSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentMonthUsageSummary;
  static deserializeBinaryFromReader(message: CurrentMonthUsageSummary, reader: jspb.BinaryReader): CurrentMonthUsageSummary;
}

export namespace CurrentMonthUsageSummary {
  export type AsObject = {
    cloudStorageUsage: number,
    cloudStorageUsageCost: number,
    dataUploadUsageCost: number,
    dataUploadUsageQuantity: number,
    dataEgresUsageCost: number,
    dataEgresUsageQuantity: number,
    standardComputeUsageCost: number,
    standardComputeUsageQuantity: number,
    totalUsageQuantity: number,
    totalUsageWithDiscount: number,
    totalUsageWithoutDiscount: number,
  }
}

export class InvoiceSummary extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasInvoiceDate(): boolean;
  clearInvoiceDate(): void;
  getInvoiceDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvoiceDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInvoiceAmount(): number;
  setInvoiceAmount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasDueDate(): boolean;
  clearDueDate(): void;
  getDueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceSummary.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceSummary): InvoiceSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceSummary;
  static deserializeBinaryFromReader(message: InvoiceSummary, reader: jspb.BinaryReader): InvoiceSummary;
}

export namespace InvoiceSummary {
  export type AsObject = {
    id: string,
    invoiceDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    invoiceAmount: number,
    status: string,
    dueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BillableResourceEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getUsageQuantity(): number;
  setUsageQuantity(value: number): void;

  getUsageQuantityUnit(): string;
  setUsageQuantityUnit(value: string): void;

  getUsageCost(): string;
  setUsageCost(value: string): void;

  hasOccurredAt(): boolean;
  clearOccurredAt(): void;
  getOccurredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillableResourceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillableResourceEvent): BillableResourceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillableResourceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillableResourceEvent;
  static deserializeBinaryFromReader(message: BillableResourceEvent, reader: jspb.BinaryReader): BillableResourceEvent;
}

export namespace BillableResourceEvent {
  export type AsObject = {
    id: string,
    type: string,
    usageQuantity: number,
    usageQuantityUnit: string,
    usageCost: string,
    occurredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userName: string,
  }
}

export class Invoice extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasInvoiceDate(): boolean;
  clearInvoiceDate(): void;
  getInvoiceDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvoiceDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInvoiceAmount(): number;
  setInvoiceAmount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasDueDate(): boolean;
  clearDueDate(): void;
  getDueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearItemsList(): void;
  getItemsList(): Array<BillableResourceEvent>;
  setItemsList(value: Array<BillableResourceEvent>): void;
  addItems(value?: BillableResourceEvent, index?: number): BillableResourceEvent;

  getEmailedTo(): string;
  setEmailedTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    id: string,
    invoiceDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    invoiceAmount: number,
    status: string,
    dueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    itemsList: Array<BillableResourceEvent.AsObject>,
    emailedTo: string,
  }
}

export class GetCurrentMonthUsageSummaryRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentMonthUsageSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentMonthUsageSummaryRequest): GetCurrentMonthUsageSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentMonthUsageSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentMonthUsageSummaryRequest;
  static deserializeBinaryFromReader(message: GetCurrentMonthUsageSummaryRequest, reader: jspb.BinaryReader): GetCurrentMonthUsageSummaryRequest;
}

export namespace GetCurrentMonthUsageSummaryRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetCurrentMonthUsageSummaryResponse extends jspb.Message {
  getCloudStorageUsage(): number;
  setCloudStorageUsage(value: number): void;

  getCloudStorageUsageCost(): number;
  setCloudStorageUsageCost(value: number): void;

  getDataUploadUsageCost(): number;
  setDataUploadUsageCost(value: number): void;

  getDataUploadUsageQuantity(): number;
  setDataUploadUsageQuantity(value: number): void;

  getDataEgresUsageCost(): number;
  setDataEgresUsageCost(value: number): void;

  getDataEgresUsageQuantity(): number;
  setDataEgresUsageQuantity(value: number): void;

  getStandardComputeUsageCost(): number;
  setStandardComputeUsageCost(value: number): void;

  getStandardComputeUsageQuantity(): number;
  setStandardComputeUsageQuantity(value: number): void;

  getTotalUsageQuantity(): number;
  setTotalUsageQuantity(value: number): void;

  getTotalUsageWithDiscount(): number;
  setTotalUsageWithDiscount(value: number): void;

  getTotalUsageWithoutDiscount(): number;
  setTotalUsageWithoutDiscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentMonthUsageSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentMonthUsageSummaryResponse): GetCurrentMonthUsageSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentMonthUsageSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentMonthUsageSummaryResponse;
  static deserializeBinaryFromReader(message: GetCurrentMonthUsageSummaryResponse, reader: jspb.BinaryReader): GetCurrentMonthUsageSummaryResponse;
}

export namespace GetCurrentMonthUsageSummaryResponse {
  export type AsObject = {
    cloudStorageUsage: number,
    cloudStorageUsageCost: number,
    dataUploadUsageCost: number,
    dataUploadUsageQuantity: number,
    dataEgresUsageCost: number,
    dataEgresUsageQuantity: number,
    standardComputeUsageCost: number,
    standardComputeUsageQuantity: number,
    totalUsageQuantity: number,
    totalUsageWithDiscount: number,
    totalUsageWithoutDiscount: number,
  }
}

export class GetUnpaidBalanceRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnpaidBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnpaidBalanceRequest): GetUnpaidBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnpaidBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnpaidBalanceRequest;
  static deserializeBinaryFromReader(message: GetUnpaidBalanceRequest, reader: jspb.BinaryReader): GetUnpaidBalanceRequest;
}

export namespace GetUnpaidBalanceRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetUnpaidBalanceResponse extends jspb.Message {
  getUnpaidBalance(): number;
  setUnpaidBalance(value: number): void;

  hasUnpaidBalanceDueDate(): boolean;
  clearUnpaidBalanceDueDate(): void;
  getUnpaidBalanceDueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUnpaidBalanceDueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnpaidBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnpaidBalanceResponse): GetUnpaidBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnpaidBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnpaidBalanceResponse;
  static deserializeBinaryFromReader(message: GetUnpaidBalanceResponse, reader: jspb.BinaryReader): GetUnpaidBalanceResponse;
}

export namespace GetUnpaidBalanceResponse {
  export type AsObject = {
    unpaidBalance: number,
    unpaidBalanceDueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetInvoiceHistoryRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceHistoryRequest): GetInvoiceHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceHistoryRequest;
  static deserializeBinaryFromReader(message: GetInvoiceHistoryRequest, reader: jspb.BinaryReader): GetInvoiceHistoryRequest;
}

export namespace GetInvoiceHistoryRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetInvoiceHistoryResponse extends jspb.Message {
  clearInvoicesList(): void;
  getInvoicesList(): Array<InvoiceSummary>;
  setInvoicesList(value: Array<InvoiceSummary>): void;
  addInvoices(value?: InvoiceSummary, index?: number): InvoiceSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoiceHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoiceHistoryResponse): GetInvoiceHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoiceHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoiceHistoryResponse;
  static deserializeBinaryFromReader(message: GetInvoiceHistoryResponse, reader: jspb.BinaryReader): GetInvoiceHistoryResponse;
}

export namespace GetInvoiceHistoryResponse {
  export type AsObject = {
    invoicesList: Array<InvoiceSummary.AsObject>,
  }
}

export class GetItemizedInvoiceRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemizedInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemizedInvoiceRequest): GetItemizedInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetItemizedInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemizedInvoiceRequest;
  static deserializeBinaryFromReader(message: GetItemizedInvoiceRequest, reader: jspb.BinaryReader): GetItemizedInvoiceRequest;
}

export namespace GetItemizedInvoiceRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetItemizedInvoiceResponse extends jspb.Message {
  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): Invoice | undefined;
  setInvoice(value?: Invoice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemizedInvoiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemizedInvoiceResponse): GetItemizedInvoiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetItemizedInvoiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemizedInvoiceResponse;
  static deserializeBinaryFromReader(message: GetItemizedInvoiceResponse, reader: jspb.BinaryReader): GetItemizedInvoiceResponse;
}

export namespace GetItemizedInvoiceResponse {
  export type AsObject = {
    invoice?: Invoice.AsObject,
  }
}

export class GetBillingSummaryRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSummaryRequest): GetBillingSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSummaryRequest;
  static deserializeBinaryFromReader(message: GetBillingSummaryRequest, reader: jspb.BinaryReader): GetBillingSummaryRequest;
}

export namespace GetBillingSummaryRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetBillingSummaryResponse extends jspb.Message {
  hasUsageSummary(): boolean;
  clearUsageSummary(): void;
  getUsageSummary(): CurrentMonthUsageSummary | undefined;
  setUsageSummary(value?: CurrentMonthUsageSummary): void;

  clearInvoicesList(): void;
  getInvoicesList(): Array<InvoiceSummary>;
  setInvoicesList(value: Array<InvoiceSummary>): void;
  addInvoices(value?: InvoiceSummary, index?: number): InvoiceSummary;

  getStatementBalance(): number;
  setStatementBalance(value: number): void;

  getCurrentBalance(): number;
  setCurrentBalance(value: number): void;

  getCurrentMonthBalance(): number;
  setCurrentMonthBalance(value: number): void;

  hasCurrentMonthDueDate(): boolean;
  clearCurrentMonthDueDate(): void;
  getCurrentMonthDueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCurrentMonthDueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInvoiceEmail(): string;
  setInvoiceEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSummaryResponse): GetBillingSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBillingSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSummaryResponse;
  static deserializeBinaryFromReader(message: GetBillingSummaryResponse, reader: jspb.BinaryReader): GetBillingSummaryResponse;
}

export namespace GetBillingSummaryResponse {
  export type AsObject = {
    usageSummary?: CurrentMonthUsageSummary.AsObject,
    invoicesList: Array<InvoiceSummary.AsObject>,
    statementBalance: number,
    currentBalance: number,
    currentMonthBalance: number,
    currentMonthDueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    invoiceEmail: string,
  }
}

