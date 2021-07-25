// package: stockscreener_public
// file: grpc-web/definition.proto

import * as jspb from "google-protobuf";

export class OptionAggregateResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<OptionAggregateModel>;
  setDataList(value: Array<OptionAggregateModel>): void;
  addData(value?: OptionAggregateModel, index?: number): OptionAggregateModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionAggregateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OptionAggregateResponse): OptionAggregateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionAggregateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionAggregateResponse;
  static deserializeBinaryFromReader(message: OptionAggregateResponse, reader: jspb.BinaryReader): OptionAggregateResponse;
}

export namespace OptionAggregateResponse {
  export type AsObject = {
    dataList: Array<OptionAggregateModel.AsObject>,
  }
}

export class OptionAggregateModel extends jspb.Message {
  getExpiration(): number;
  setExpiration(value: number): void;

  getCall(): number;
  setCall(value: number): void;

  getPut(): number;
  setPut(value: number): void;

  getSummarycall(): number;
  setSummarycall(value: number): void;

  getSummaryput(): number;
  setSummaryput(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionAggregateModel.AsObject;
  static toObject(includeInstance: boolean, msg: OptionAggregateModel): OptionAggregateModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionAggregateModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionAggregateModel;
  static deserializeBinaryFromReader(message: OptionAggregateModel, reader: jspb.BinaryReader): OptionAggregateModel;
}

export namespace OptionAggregateModel {
  export type AsObject = {
    expiration: number,
    call: number,
    put: number,
    summarycall: number,
    summaryput: number,
  }
}

export class IndustryParam extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndustryParam.AsObject;
  static toObject(includeInstance: boolean, msg: IndustryParam): IndustryParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndustryParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndustryParam;
  static deserializeBinaryFromReader(message: IndustryParam, reader: jspb.BinaryReader): IndustryParam;
}

export namespace IndustryParam {
  export type AsObject = {
    id: string,
  }
}

export class IndustryChartModel extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  getCap(): number;
  setCap(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndustryChartModel.AsObject;
  static toObject(includeInstance: boolean, msg: IndustryChartModel): IndustryChartModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndustryChartModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndustryChartModel;
  static deserializeBinaryFromReader(message: IndustryChartModel, reader: jspb.BinaryReader): IndustryChartModel;
}

export namespace IndustryChartModel {
  export type AsObject = {
    time: number,
    cap: number,
  }
}

export class IndustryChartResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<IndustryChartModel>;
  setDataList(value: Array<IndustryChartModel>): void;
  addData(value?: IndustryChartModel, index?: number): IndustryChartModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndustryChartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndustryChartResponse): IndustryChartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndustryChartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndustryChartResponse;
  static deserializeBinaryFromReader(message: IndustryChartResponse, reader: jspb.BinaryReader): IndustryChartResponse;
}

export namespace IndustryChartResponse {
  export type AsObject = {
    dataList: Array<IndustryChartModel.AsObject>,
  }
}

export class IndustryResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<IndustryModel>;
  setDataList(value: Array<IndustryModel>): void;
  addData(value?: IndustryModel, index?: number): IndustryModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndustryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndustryResponse): IndustryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndustryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndustryResponse;
  static deserializeBinaryFromReader(message: IndustryResponse, reader: jspb.BinaryReader): IndustryResponse;
}

export namespace IndustryResponse {
  export type AsObject = {
    dataList: Array<IndustryModel.AsObject>,
  }
}

export class IndustryModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCap(): number;
  setCap(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPopular(): string;
  setPopular(value: string): void;

  getVolume(): number;
  setVolume(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndustryModel.AsObject;
  static toObject(includeInstance: boolean, msg: IndustryModel): IndustryModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndustryModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndustryModel;
  static deserializeBinaryFromReader(message: IndustryModel, reader: jspb.BinaryReader): IndustryModel;
}

export namespace IndustryModel {
  export type AsObject = {
    id: string,
    cap: number,
    name: string,
    popular: string,
    volume: number,
  }
}

export class EarningQueryDate extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarningQueryDate.AsObject;
  static toObject(includeInstance: boolean, msg: EarningQueryDate): EarningQueryDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EarningQueryDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarningQueryDate;
  static deserializeBinaryFromReader(message: EarningQueryDate, reader: jspb.BinaryReader): EarningQueryDate;
}

export namespace EarningQueryDate {
  export type AsObject = {
    date: string,
    limit: number,
    offset: number,
  }
}

export class ListCallPutRatioResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<CallPutRatioResponse>;
  setDataList(value: Array<CallPutRatioResponse>): void;
  addData(value?: CallPutRatioResponse, index?: number): CallPutRatioResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallPutRatioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallPutRatioResponse): ListCallPutRatioResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCallPutRatioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallPutRatioResponse;
  static deserializeBinaryFromReader(message: ListCallPutRatioResponse, reader: jspb.BinaryReader): ListCallPutRatioResponse;
}

export namespace ListCallPutRatioResponse {
  export type AsObject = {
    dataList: Array<CallPutRatioResponse.AsObject>,
  }
}

export class CallPutRatioResponse extends jspb.Message {
  getCall(): number;
  setCall(value: number): void;

  getPut(): number;
  setPut(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallPutRatioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CallPutRatioResponse): CallPutRatioResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallPutRatioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallPutRatioResponse;
  static deserializeBinaryFromReader(message: CallPutRatioResponse, reader: jspb.BinaryReader): CallPutRatioResponse;
}

export namespace CallPutRatioResponse {
  export type AsObject = {
    call: number,
    put: number,
    time: number,
  }
}

export class EarningStockResponse extends jspb.Message {
  clearSymbolsList(): void;
  getSymbolsList(): Array<SymbolDetail>;
  setSymbolsList(value: Array<SymbolDetail>): void;
  addSymbols(value?: SymbolDetail, index?: number): SymbolDetail;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarningStockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EarningStockResponse): EarningStockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EarningStockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarningStockResponse;
  static deserializeBinaryFromReader(message: EarningStockResponse, reader: jspb.BinaryReader): EarningStockResponse;
}

export namespace EarningStockResponse {
  export type AsObject = {
    symbolsList: Array<SymbolDetail.AsObject>,
    total: number,
  }
}

export class EarningDateItem extends jspb.Message {
  getDay(): string;
  setDay(value: string): void;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarningDateItem.AsObject;
  static toObject(includeInstance: boolean, msg: EarningDateItem): EarningDateItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EarningDateItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarningDateItem;
  static deserializeBinaryFromReader(message: EarningDateItem, reader: jspb.BinaryReader): EarningDateItem;
}

export namespace EarningDateItem {
  export type AsObject = {
    day: string,
    length: number,
  }
}

export class StockRaw extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockRaw.AsObject;
  static toObject(includeInstance: boolean, msg: StockRaw): StockRaw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockRaw;
  static deserializeBinaryFromReader(message: StockRaw, reader: jspb.BinaryReader): StockRaw;
}

export namespace StockRaw {
  export type AsObject = {
    exchange: string,
    symbol: string,
  }
}

export class NextEarningDatesResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<EarningDateItem>;
  setItemsList(value: Array<EarningDateItem>): void;
  addItems(value?: EarningDateItem, index?: number): EarningDateItem;

  clearStocksList(): void;
  getStocksList(): Array<StockRaw>;
  setStocksList(value: Array<StockRaw>): void;
  addStocks(value?: StockRaw, index?: number): StockRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextEarningDatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NextEarningDatesResponse): NextEarningDatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NextEarningDatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextEarningDatesResponse;
  static deserializeBinaryFromReader(message: NextEarningDatesResponse, reader: jspb.BinaryReader): NextEarningDatesResponse;
}

export namespace NextEarningDatesResponse {
  export type AsObject = {
    itemsList: Array<EarningDateItem.AsObject>,
    stocksList: Array<StockRaw.AsObject>,
  }
}

export class IndividualSpecialResponse extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  getIsShow(): boolean;
  setIsShow(value: boolean): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getTabName(): string;
  setTabName(value: string): void;

  getParagraph(): string;
  setParagraph(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndividualSpecialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndividualSpecialResponse): IndividualSpecialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndividualSpecialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndividualSpecialResponse;
  static deserializeBinaryFromReader(message: IndividualSpecialResponse, reader: jspb.BinaryReader): IndividualSpecialResponse;
}

export namespace IndividualSpecialResponse {
  export type AsObject = {
    symbol: string,
    exchange: string,
    isShow: boolean,
    title: string,
    description: string,
    url: string,
    tabName: string,
    paragraph: string,
  }
}

export class HotListStockQuery extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotListStockQuery.AsObject;
  static toObject(includeInstance: boolean, msg: HotListStockQuery): HotListStockQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotListStockQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotListStockQuery;
  static deserializeBinaryFromReader(message: HotListStockQuery, reader: jspb.BinaryReader): HotListStockQuery;
}

export namespace HotListStockQuery {
  export type AsObject = {
    url: string,
  }
}

export class HotListStockV2Query extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotListStockV2Query.AsObject;
  static toObject(includeInstance: boolean, msg: HotListStockV2Query): HotListStockV2Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotListStockV2Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotListStockV2Query;
  static deserializeBinaryFromReader(message: HotListStockV2Query, reader: jspb.BinaryReader): HotListStockV2Query;
}

export namespace HotListStockV2Query {
  export type AsObject = {
    url: string,
    limit: number,
    offset: number,
  }
}

export class HotListDetailStockV2Response extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getParagraph(): string;
  setParagraph(value: string): void;

  clearSymbolsList(): void;
  getSymbolsList(): Array<SymbolDetail>;
  setSymbolsList(value: Array<SymbolDetail>): void;
  addSymbols(value?: SymbolDetail, index?: number): SymbolDetail;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotListDetailStockV2Response.AsObject;
  static toObject(includeInstance: boolean, msg: HotListDetailStockV2Response): HotListDetailStockV2Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotListDetailStockV2Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotListDetailStockV2Response;
  static deserializeBinaryFromReader(message: HotListDetailStockV2Response, reader: jspb.BinaryReader): HotListDetailStockV2Response;
}

export namespace HotListDetailStockV2Response {
  export type AsObject = {
    title: string,
    description: string,
    paragraph: string,
    symbolsList: Array<SymbolDetail.AsObject>,
    total: number,
  }
}

export class HotListDetailStockResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getParagraph(): string;
  setParagraph(value: string): void;

  clearSymbolsList(): void;
  getSymbolsList(): Array<SymbolDetail>;
  setSymbolsList(value: Array<SymbolDetail>): void;
  addSymbols(value?: SymbolDetail, index?: number): SymbolDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotListDetailStockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HotListDetailStockResponse): HotListDetailStockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotListDetailStockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotListDetailStockResponse;
  static deserializeBinaryFromReader(message: HotListDetailStockResponse, reader: jspb.BinaryReader): HotListDetailStockResponse;
}

export namespace HotListDetailStockResponse {
  export type AsObject = {
    title: string,
    description: string,
    paragraph: string,
    symbolsList: Array<SymbolDetail.AsObject>,
  }
}

export class HotListStockResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<HotListStockItem>;
  setResultsList(value: Array<HotListStockItem>): void;
  addResults(value?: HotListStockItem, index?: number): HotListStockItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotListStockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HotListStockResponse): HotListStockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotListStockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotListStockResponse;
  static deserializeBinaryFromReader(message: HotListStockResponse, reader: jspb.BinaryReader): HotListStockResponse;
}

export namespace HotListStockResponse {
  export type AsObject = {
    resultsList: Array<HotListStockItem.AsObject>,
  }
}

export class HotListStockItem extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotListStockItem.AsObject;
  static toObject(includeInstance: boolean, msg: HotListStockItem): HotListStockItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotListStockItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotListStockItem;
  static deserializeBinaryFromReader(message: HotListStockItem, reader: jspb.BinaryReader): HotListStockItem;
}

export namespace HotListStockItem {
  export type AsObject = {
    title: string,
    description: string,
    url: string,
  }
}

export class ListEarningResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<EarningResponse>;
  setResultsList(value: Array<EarningResponse>): void;
  addResults(value?: EarningResponse, index?: number): EarningResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEarningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEarningResponse): ListEarningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEarningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEarningResponse;
  static deserializeBinaryFromReader(message: ListEarningResponse, reader: jspb.BinaryReader): ListEarningResponse;
}

export namespace ListEarningResponse {
  export type AsObject = {
    resultsList: Array<EarningResponse.AsObject>,
  }
}

export class EarningResponse extends jspb.Message {
  getEndDate(): number;
  setEndDate(value: number): void;

  getAvg(): number;
  setAvg(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EarningResponse): EarningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EarningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarningResponse;
  static deserializeBinaryFromReader(message: EarningResponse, reader: jspb.BinaryReader): EarningResponse;
}

export namespace EarningResponse {
  export type AsObject = {
    endDate: number,
    avg: number,
  }
}

export class ListTrendsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Trend>;
  setResultsList(value: Array<Trend>): void;
  addResults(value?: Trend, index?: number): Trend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrendsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrendsResponse): ListTrendsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTrendsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrendsResponse;
  static deserializeBinaryFromReader(message: ListTrendsResponse, reader: jspb.BinaryReader): ListTrendsResponse;
}

export namespace ListTrendsResponse {
  export type AsObject = {
    resultsList: Array<Trend.AsObject>,
  }
}

export class Trend extends jspb.Message {
  getPeriod(): string;
  setPeriod(value: string): void;

  getStrongBuy(): number;
  setStrongBuy(value: number): void;

  getBuy(): number;
  setBuy(value: number): void;

  getHold(): number;
  setHold(value: number): void;

  getSell(): number;
  setSell(value: number): void;

  getStrongSell(): number;
  setStrongSell(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trend.AsObject;
  static toObject(includeInstance: boolean, msg: Trend): Trend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trend;
  static deserializeBinaryFromReader(message: Trend, reader: jspb.BinaryReader): Trend;
}

export namespace Trend {
  export type AsObject = {
    period: string,
    strongBuy: number,
    buy: number,
    hold: number,
    sell: number,
    strongSell: number,
  }
}

export class ListUpgradeDowngradeResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<UpgradeDowngrade>;
  setResultsList(value: Array<UpgradeDowngrade>): void;
  addResults(value?: UpgradeDowngrade, index?: number): UpgradeDowngrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUpgradeDowngradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUpgradeDowngradeResponse): ListUpgradeDowngradeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUpgradeDowngradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUpgradeDowngradeResponse;
  static deserializeBinaryFromReader(message: ListUpgradeDowngradeResponse, reader: jspb.BinaryReader): ListUpgradeDowngradeResponse;
}

export namespace ListUpgradeDowngradeResponse {
  export type AsObject = {
    resultsList: Array<UpgradeDowngrade.AsObject>,
  }
}

export class UpgradeDowngrade extends jspb.Message {
  getRate(): string;
  setRate(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getResearch(): string;
  setResearch(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDate(): number;
  setDate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpgradeDowngrade.AsObject;
  static toObject(includeInstance: boolean, msg: UpgradeDowngrade): UpgradeDowngrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpgradeDowngrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpgradeDowngrade;
  static deserializeBinaryFromReader(message: UpgradeDowngrade, reader: jspb.BinaryReader): UpgradeDowngrade;
}

export namespace UpgradeDowngrade {
  export type AsObject = {
    rate: string,
    value: string,
    research: string,
    type: string,
    date: number,
  }
}

export class EarningHistoryResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<EarningHistoryData>;
  setResultsList(value: Array<EarningHistoryData>): void;
  addResults(value?: EarningHistoryData, index?: number): EarningHistoryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarningHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EarningHistoryResponse): EarningHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EarningHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarningHistoryResponse;
  static deserializeBinaryFromReader(message: EarningHistoryResponse, reader: jspb.BinaryReader): EarningHistoryResponse;
}

export namespace EarningHistoryResponse {
  export type AsObject = {
    resultsList: Array<EarningHistoryData.AsObject>,
  }
}

export class EarningHistoryData extends jspb.Message {
  getEarningDate(): number;
  setEarningDate(value: number): void;

  getEstimate(): number;
  setEstimate(value: number): void;

  getPeriodEarning(): string;
  setPeriodEarning(value: string): void;

  getReported(): number;
  setReported(value: number): void;

  getSurprise(): number;
  setSurprise(value: number): void;

  getSurprisePercent(): number;
  setSurprisePercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarningHistoryData.AsObject;
  static toObject(includeInstance: boolean, msg: EarningHistoryData): EarningHistoryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EarningHistoryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarningHistoryData;
  static deserializeBinaryFromReader(message: EarningHistoryData, reader: jspb.BinaryReader): EarningHistoryData;
}

export namespace EarningHistoryData {
  export type AsObject = {
    earningDate: number,
    estimate: number,
    periodEarning: string,
    reported: number,
    surprise: number,
    surprisePercent: number,
  }
}

export class EarningQuery extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getTo(): number;
  setTo(value: number): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EarningQuery.AsObject;
  static toObject(includeInstance: boolean, msg: EarningQuery): EarningQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EarningQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EarningQuery;
  static deserializeBinaryFromReader(message: EarningQuery, reader: jspb.BinaryReader): EarningQuery;
}

export namespace EarningQuery {
  export type AsObject = {
    from: number,
    to: number,
    symbol: string,
    exchangeSlug: string,
  }
}

export class HolderParam extends jspb.Message {
  getCik(): string;
  setCik(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolderParam.AsObject;
  static toObject(includeInstance: boolean, msg: HolderParam): HolderParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolderParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolderParam;
  static deserializeBinaryFromReader(message: HolderParam, reader: jspb.BinaryReader): HolderParam;
}

export namespace HolderParam {
  export type AsObject = {
    cik: string,
    limit: number,
    offset: number,
  }
}

export class HolderStockItem extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  getShare(): number;
  setShare(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getLastUpdated(): number;
  setLastUpdated(value: number): void;

  getLink(): string;
  setLink(value: string): void;

  getShortName(): string;
  setShortName(value: string): void;

  getPreviousShare(): number;
  setPreviousShare(value: number): void;

  getPreviousShare2(): number;
  setPreviousShare2(value: number): void;

  getPreviousShare3(): number;
  setPreviousShare3(value: number): void;

  getPreviousShare4(): number;
  setPreviousShare4(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolderStockItem.AsObject;
  static toObject(includeInstance: boolean, msg: HolderStockItem): HolderStockItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolderStockItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolderStockItem;
  static deserializeBinaryFromReader(message: HolderStockItem, reader: jspb.BinaryReader): HolderStockItem;
}

export namespace HolderStockItem {
  export type AsObject = {
    symbol: string,
    exchangeSlug: string,
    share: number,
    price: number,
    lastUpdated: number,
    link: string,
    shortName: string,
    previousShare: number,
    previousShare2: number,
    previousShare3: number,
    previousShare4: number,
  }
}

export class HolderStockResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getTotalValue(): number;
  setTotalValue(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<HolderStockItem>;
  setItemsList(value: Array<HolderStockItem>): void;
  addItems(value?: HolderStockItem, index?: number): HolderStockItem;

  getWebsite(): string;
  setWebsite(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLastUpdated(): number;
  setLastUpdated(value: number): void;

  getPhone(): string;
  setPhone(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolderStockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HolderStockResponse): HolderStockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolderStockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolderStockResponse;
  static deserializeBinaryFromReader(message: HolderStockResponse, reader: jspb.BinaryReader): HolderStockResponse;
}

export namespace HolderStockResponse {
  export type AsObject = {
    total: number,
    totalValue: number,
    itemsList: Array<HolderStockItem.AsObject>,
    website: string,
    name: string,
    lastUpdated: number,
    phone: string,
    address: string,
  }
}

export class HolderFilter extends jspb.Message {
  getSortBy(): string;
  setSortBy(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolderFilter.AsObject;
  static toObject(includeInstance: boolean, msg: HolderFilter): HolderFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolderFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolderFilter;
  static deserializeBinaryFromReader(message: HolderFilter, reader: jspb.BinaryReader): HolderFilter;
}

export namespace HolderFilter {
  export type AsObject = {
    sortBy: string,
    limit: number,
    offset: number,
  }
}

export class HolderResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<HolderData>;
  setDataList(value: Array<HolderData>): void;
  addData(value?: HolderData, index?: number): HolderData;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HolderResponse): HolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolderResponse;
  static deserializeBinaryFromReader(message: HolderResponse, reader: jspb.BinaryReader): HolderResponse;
}

export namespace HolderResponse {
  export type AsObject = {
    dataList: Array<HolderData.AsObject>,
    count: number,
  }
}

export class HolderData extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getCik(): string;
  setCik(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolderData.AsObject;
  static toObject(includeInstance: boolean, msg: HolderData): HolderData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolderData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolderData;
  static deserializeBinaryFromReader(message: HolderData, reader: jspb.BinaryReader): HolderData;
}

export namespace HolderData {
  export type AsObject = {
    title: string,
    cik: string,
    value: number,
    address: string,
    website: string,
    phone: string,
  }
}

export class CusipQuery extends jspb.Message {
  getCusip(): string;
  setCusip(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CusipQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CusipQuery): CusipQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CusipQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CusipQuery;
  static deserializeBinaryFromReader(message: CusipQuery, reader: jspb.BinaryReader): CusipQuery;
}

export namespace CusipQuery {
  export type AsObject = {
    cusip: string,
    limit: number,
    offset: number,
  }
}

export class AllHolders extends jspb.Message {
  clearOwnerNameList(): void;
  getOwnerNameList(): Array<string>;
  setOwnerNameList(value: Array<string>): void;
  addOwnerName(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllHolders.AsObject;
  static toObject(includeInstance: boolean, msg: AllHolders): AllHolders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllHolders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllHolders;
  static deserializeBinaryFromReader(message: AllHolders, reader: jspb.BinaryReader): AllHolders;
}

export namespace AllHolders {
  export type AsObject = {
    ownerNameList: Array<string>,
  }
}

export class SymbolIdentity extends jspb.Message {
  getCik(): string;
  setCik(value: string): void;

  getBloomberg(): string;
  setBloomberg(value: string): void;

  getSic(): string;
  setSic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolIdentity): SymbolIdentity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolIdentity;
  static deserializeBinaryFromReader(message: SymbolIdentity, reader: jspb.BinaryReader): SymbolIdentity;
}

export namespace SymbolIdentity {
  export type AsObject = {
    cik: string,
    bloomberg: string,
    sic: string,
  }
}

export class HolderQuery extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HolderQuery.AsObject;
  static toObject(includeInstance: boolean, msg: HolderQuery): HolderQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HolderQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HolderQuery;
  static deserializeBinaryFromReader(message: HolderQuery, reader: jspb.BinaryReader): HolderQuery;
}

export namespace HolderQuery {
  export type AsObject = {
    name: string,
  }
}

export class SymbolHolderQuery extends jspb.Message {
  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getSite(): string;
  setSite(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolHolderQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolHolderQuery): SymbolHolderQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolHolderQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolHolderQuery;
  static deserializeBinaryFromReader(message: SymbolHolderQuery, reader: jspb.BinaryReader): SymbolHolderQuery;
}

export namespace SymbolHolderQuery {
  export type AsObject = {
    exchangeSlug: string,
    symbol: string,
    site: string,
    limit: number,
    offset: number,
  }
}

export class HoldersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearResultList(): void;
  getResultList(): Array<Holder>;
  setResultList(value: Array<Holder>): void;
  addResult(value?: Holder, index?: number): Holder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HoldersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HoldersResponse): HoldersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HoldersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HoldersResponse;
  static deserializeBinaryFromReader(message: HoldersResponse, reader: jspb.BinaryReader): HoldersResponse;
}

export namespace HoldersResponse {
  export type AsObject = {
    total: number,
    resultList: Array<Holder.AsObject>,
  }
}

export class a extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): a.AsObject;
  static toObject(includeInstance: boolean, msg: a): a.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: a, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): a;
  static deserializeBinaryFromReader(message: a, reader: jspb.BinaryReader): a;
}

export namespace a {
  export type AsObject = {
  }
}

export class FinancialResponse extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<FinancialData>;
  setResultList(value: Array<FinancialData>): void;
  addResult(value?: FinancialData, index?: number): FinancialData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialResponse): FinancialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinancialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialResponse;
  static deserializeBinaryFromReader(message: FinancialResponse, reader: jspb.BinaryReader): FinancialResponse;
}

export namespace FinancialResponse {
  export type AsObject = {
    resultList: Array<FinancialData.AsObject>,
  }
}

export class FinancialData extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearResultList(): void;
  getResultList(): Array<Eps>;
  setResultList(value: Array<Eps>): void;
  addResult(value?: Eps, index?: number): Eps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialData.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialData): FinancialData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinancialData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialData;
  static deserializeBinaryFromReader(message: FinancialData, reader: jspb.BinaryReader): FinancialData;
}

export namespace FinancialData {
  export type AsObject = {
    name: string,
    resultList: Array<Eps.AsObject>,
  }
}

export class TopOptionDateResponse extends jspb.Message {
  clearDateList(): void;
  getDateList(): Array<number>;
  setDateList(value: Array<number>): void;
  addDate(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopOptionDateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TopOptionDateResponse): TopOptionDateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopOptionDateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopOptionDateResponse;
  static deserializeBinaryFromReader(message: TopOptionDateResponse, reader: jspb.BinaryReader): TopOptionDateResponse;
}

export namespace TopOptionDateResponse {
  export type AsObject = {
    dateList: Array<number>,
  }
}

export class OptionDateQuery extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionDateQuery.AsObject;
  static toObject(includeInstance: boolean, msg: OptionDateQuery): OptionDateQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionDateQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionDateQuery;
  static deserializeBinaryFromReader(message: OptionDateQuery, reader: jspb.BinaryReader): OptionDateQuery;
}

export namespace OptionDateQuery {
  export type AsObject = {
    date: string,
    limit: number,
    offset: number,
  }
}

export class SymbolHolder extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getSharesHeld(): number;
  setSharesHeld(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolHolder.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolHolder): SymbolHolder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolHolder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolHolder;
  static deserializeBinaryFromReader(message: SymbolHolder, reader: jspb.BinaryReader): SymbolHolder;
}

export namespace SymbolHolder {
  export type AsObject = {
    symbol: string,
    date: string,
    sharesHeld: number,
  }
}

export class SymbolHolders extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<SymbolHolder>;
  setResultList(value: Array<SymbolHolder>): void;
  addResult(value?: SymbolHolder, index?: number): SymbolHolder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolHolders.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolHolders): SymbolHolders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolHolders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolHolders;
  static deserializeBinaryFromReader(message: SymbolHolders, reader: jspb.BinaryReader): SymbolHolders;
}

export namespace SymbolHolders {
  export type AsObject = {
    resultList: Array<SymbolHolder.AsObject>,
  }
}

export class Holders extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<Holder>;
  setResultList(value: Array<Holder>): void;
  addResult(value?: Holder, index?: number): Holder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Holders.AsObject;
  static toObject(includeInstance: boolean, msg: Holders): Holders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Holders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Holders;
  static deserializeBinaryFromReader(message: Holders, reader: jspb.BinaryReader): Holders;
}

export namespace Holders {
  export type AsObject = {
    resultList: Array<Holder.AsObject>,
  }
}

export class Holder extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getOwnerName(): string;
  setOwnerName(value: string): void;

  getSharesHeld(): number;
  setSharesHeld(value: number): void;

  getLink(): string;
  setLink(value: string): void;

  getCik(): string;
  setCik(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Holder.AsObject;
  static toObject(includeInstance: boolean, msg: Holder): Holder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Holder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Holder;
  static deserializeBinaryFromReader(message: Holder, reader: jspb.BinaryReader): Holder;
}

export namespace Holder {
  export type AsObject = {
    date: string,
    ownerName: string,
    sharesHeld: number,
    link: string,
    cik: string,
  }
}

export class InsideTradesResult extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<InsideTrade>;
  setResultList(value: Array<InsideTrade>): void;
  addResult(value?: InsideTrade, index?: number): InsideTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsideTradesResult.AsObject;
  static toObject(includeInstance: boolean, msg: InsideTradesResult): InsideTradesResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsideTradesResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsideTradesResult;
  static deserializeBinaryFromReader(message: InsideTradesResult, reader: jspb.BinaryReader): InsideTradesResult;
}

export namespace InsideTradesResult {
  export type AsObject = {
    resultList: Array<InsideTrade.AsObject>,
  }
}

export class InsideTrade extends jspb.Message {
  getInsideTrading(): string;
  setInsideTrading(value: string): void;

  getRelationship(): string;
  setRelationship(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getTransaction(): string;
  setTransaction(value: string): void;

  getCosts(): number;
  setCosts(value: number): void;

  getShare(): number;
  setShare(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  getShareTotal(): number;
  setShareTotal(value: number): void;

  getSecForm(): string;
  setSecForm(value: string): void;

  getLinkSec(): string;
  setLinkSec(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsideTrade.AsObject;
  static toObject(includeInstance: boolean, msg: InsideTrade): InsideTrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsideTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsideTrade;
  static deserializeBinaryFromReader(message: InsideTrade, reader: jspb.BinaryReader): InsideTrade;
}

export namespace InsideTrade {
  export type AsObject = {
    insideTrading: string,
    relationship: string,
    date: string,
    transaction: string,
    costs: number,
    share: number,
    value: number,
    shareTotal: number,
    secForm: string,
    linkSec: string,
  }
}

export class DeleteQuery extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuery): DeleteQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuery;
  static deserializeBinaryFromReader(message: DeleteQuery, reader: jspb.BinaryReader): DeleteQuery;
}

export namespace DeleteQuery {
  export type AsObject = {
    symbol: string,
    date: string,
  }
}

export class EpsResult extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<Eps>;
  setResultList(value: Array<Eps>): void;
  addResult(value?: Eps, index?: number): Eps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpsResult.AsObject;
  static toObject(includeInstance: boolean, msg: EpsResult): EpsResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpsResult;
  static deserializeBinaryFromReader(message: EpsResult, reader: jspb.BinaryReader): EpsResult;
}

export namespace EpsResult {
  export type AsObject = {
    resultList: Array<Eps.AsObject>,
  }
}

export class Eps extends jspb.Message {
  getTime(): string;
  setTime(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Eps.AsObject;
  static toObject(includeInstance: boolean, msg: Eps): Eps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Eps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Eps;
  static deserializeBinaryFromReader(message: Eps, reader: jspb.BinaryReader): Eps;
}

export namespace Eps {
  export type AsObject = {
    time: string,
    value: number,
  }
}

export class Response extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    status: string,
  }
}

export class SymbolOptionDateQuery extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolOptionDateQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolOptionDateQuery): SymbolOptionDateQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolOptionDateQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolOptionDateQuery;
  static deserializeBinaryFromReader(message: SymbolOptionDateQuery, reader: jspb.BinaryReader): SymbolOptionDateQuery;
}

export namespace SymbolOptionDateQuery {
  export type AsObject = {
    symbol: string,
  }
}

export class SymbolOptionDateResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<string>;
  setResultsList(value: Array<string>): void;
  addResults(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolOptionDateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolOptionDateResponse): SymbolOptionDateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolOptionDateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolOptionDateResponse;
  static deserializeBinaryFromReader(message: SymbolOptionDateResponse, reader: jspb.BinaryReader): SymbolOptionDateResponse;
}

export namespace SymbolOptionDateResponse {
  export type AsObject = {
    resultsList: Array<string>,
  }
}

export class SymbolOptionQuery extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolOptionQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolOptionQuery): SymbolOptionQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolOptionQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolOptionQuery;
  static deserializeBinaryFromReader(message: SymbolOptionQuery, reader: jspb.BinaryReader): SymbolOptionQuery;
}

export namespace SymbolOptionQuery {
  export type AsObject = {
    symbol: string,
    date: string,
  }
}

export class OptionQuery extends jspb.Message {
  getOptionId(): string;
  setOptionId(value: string): void;

  getExpiration(): string;
  setExpiration(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionQuery.AsObject;
  static toObject(includeInstance: boolean, msg: OptionQuery): OptionQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionQuery;
  static deserializeBinaryFromReader(message: OptionQuery, reader: jspb.BinaryReader): OptionQuery;
}

export namespace OptionQuery {
  export type AsObject = {
    optionId: string,
    expiration: string,
    symbol: string,
  }
}

export class ListOptionPrices extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<OptionPrice>;
  setResultsList(value: Array<OptionPrice>): void;
  addResults(value?: OptionPrice, index?: number): OptionPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOptionPrices.AsObject;
  static toObject(includeInstance: boolean, msg: ListOptionPrices): ListOptionPrices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOptionPrices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOptionPrices;
  static deserializeBinaryFromReader(message: ListOptionPrices, reader: jspb.BinaryReader): ListOptionPrices;
}

export namespace ListOptionPrices {
  export type AsObject = {
    resultsList: Array<OptionPrice.AsObject>,
  }
}

export class ListEodOptionPrice extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<EodOptionprice>;
  setResultsList(value: Array<EodOptionprice>): void;
  addResults(value?: EodOptionprice, index?: number): EodOptionprice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEodOptionPrice.AsObject;
  static toObject(includeInstance: boolean, msg: ListEodOptionPrice): ListEodOptionPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEodOptionPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEodOptionPrice;
  static deserializeBinaryFromReader(message: ListEodOptionPrice, reader: jspb.BinaryReader): ListEodOptionPrice;
}

export namespace ListEodOptionPrice {
  export type AsObject = {
    resultsList: Array<EodOptionprice.AsObject>,
  }
}

export class EodOptionprice extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  getVol(): number;
  setVol(value: number): void;

  getOpen(): number;
  setOpen(value: number): void;

  getHigh(): number;
  setHigh(value: number): void;

  getLow(): number;
  setLow(value: number): void;

  getClose(): number;
  setClose(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EodOptionprice.AsObject;
  static toObject(includeInstance: boolean, msg: EodOptionprice): EodOptionprice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EodOptionprice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EodOptionprice;
  static deserializeBinaryFromReader(message: EodOptionprice, reader: jspb.BinaryReader): EodOptionprice;
}

export namespace EodOptionprice {
  export type AsObject = {
    price: number,
    vol: number,
    open: number,
    high: number,
    low: number,
    close: number,
    time: number,
  }
}

export class OptionPrice extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  getVol(): number;
  setVol(value: number): void;

  getTime(): string;
  setTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionPrice.AsObject;
  static toObject(includeInstance: boolean, msg: OptionPrice): OptionPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionPrice;
  static deserializeBinaryFromReader(message: OptionPrice, reader: jspb.BinaryReader): OptionPrice;
}

export namespace OptionPrice {
  export type AsObject = {
    price: number,
    vol: number,
    time: string,
  }
}

export class GetCountQuery extends jspb.Message {
  getSite(): string;
  setSite(value: string): void;

  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountQuery): GetCountQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCountQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountQuery;
  static deserializeBinaryFromReader(message: GetCountQuery, reader: jspb.BinaryReader): GetCountQuery;
}

export namespace GetCountQuery {
  export type AsObject = {
    site: string,
    type: string,
    name: string,
  }
}

export class GetCountResult extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountResult): GetCountResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCountResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountResult;
  static deserializeBinaryFromReader(message: GetCountResult, reader: jspb.BinaryReader): GetCountResult;
}

export namespace GetCountResult {
  export type AsObject = {
    count: number,
    name: string,
  }
}

export class Exchange extends jspb.Message {
  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exchange.AsObject;
  static toObject(includeInstance: boolean, msg: Exchange): Exchange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Exchange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exchange;
  static deserializeBinaryFromReader(message: Exchange, reader: jspb.BinaryReader): Exchange;
}

export namespace Exchange {
  export type AsObject = {
    exchangeSlug: string,
  }
}

export class SectorQuery extends jspb.Message {
  getSite(): string;
  setSite(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectorQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SectorQuery): SectorQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectorQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectorQuery;
  static deserializeBinaryFromReader(message: SectorQuery, reader: jspb.BinaryReader): SectorQuery;
}

export namespace SectorQuery {
  export type AsObject = {
    site: string,
    size: number,
    page: number,
  }
}

export class StockModel extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getShortName(): string;
  setShortName(value: string): void;

  getYfSymbol(): string;
  setYfSymbol(value: string): void;

  getCik(): string;
  setCik(value: string): void;

  getCusip(): string;
  setCusip(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockModel.AsObject;
  static toObject(includeInstance: boolean, msg: StockModel): StockModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockModel;
  static deserializeBinaryFromReader(message: StockModel, reader: jspb.BinaryReader): StockModel;
}

export namespace StockModel {
  export type AsObject = {
    symbol: string,
    shortName: string,
    yfSymbol: string,
    cik: string,
    cusip: string,
  }
}

export class StockModelWebsite extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getShortName(): string;
  setShortName(value: string): void;

  getYfSymbol(): string;
  setYfSymbol(value: string): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getCik(): string;
  setCik(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockModelWebsite.AsObject;
  static toObject(includeInstance: boolean, msg: StockModelWebsite): StockModelWebsite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockModelWebsite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockModelWebsite;
  static deserializeBinaryFromReader(message: StockModelWebsite, reader: jspb.BinaryReader): StockModelWebsite;
}

export namespace StockModelWebsite {
  export type AsObject = {
    symbol: string,
    shortName: string,
    yfSymbol: string,
    website: string,
    cik: string,
  }
}

export class StockModelsWebsite extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<StockModelWebsite>;
  setResultsList(value: Array<StockModelWebsite>): void;
  addResults(value?: StockModelWebsite, index?: number): StockModelWebsite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockModelsWebsite.AsObject;
  static toObject(includeInstance: boolean, msg: StockModelsWebsite): StockModelsWebsite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockModelsWebsite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockModelsWebsite;
  static deserializeBinaryFromReader(message: StockModelsWebsite, reader: jspb.BinaryReader): StockModelsWebsite;
}

export namespace StockModelsWebsite {
  export type AsObject = {
    resultsList: Array<StockModelWebsite.AsObject>,
  }
}

export class ListSectors extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Sector>;
  setResultsList(value: Array<Sector>): void;
  addResults(value?: Sector, index?: number): Sector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSectors.AsObject;
  static toObject(includeInstance: boolean, msg: ListSectors): ListSectors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSectors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSectors;
  static deserializeBinaryFromReader(message: ListSectors, reader: jspb.BinaryReader): ListSectors;
}

export namespace ListSectors {
  export type AsObject = {
    resultsList: Array<Sector.AsObject>,
  }
}

export class Sector extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sector.AsObject;
  static toObject(includeInstance: boolean, msg: Sector): Sector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sector;
  static deserializeBinaryFromReader(message: Sector, reader: jspb.BinaryReader): Sector;
}

export namespace Sector {
  export type AsObject = {
    name: string,
    count: number,
  }
}

export class ListTopOptions extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearResultList(): void;
  getResultList(): Array<Option>;
  setResultList(value: Array<Option>): void;
  addResult(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopOptions): ListTopOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTopOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopOptions;
  static deserializeBinaryFromReader(message: ListTopOptions, reader: jspb.BinaryReader): ListTopOptions;
}

export namespace ListTopOptions {
  export type AsObject = {
    total: number,
    resultList: Array<Option.AsObject>,
  }
}

export class ListOptions extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Option>;
  setResultsList(value: Array<Option>): void;
  addResults(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ListOptions): ListOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOptions;
  static deserializeBinaryFromReader(message: ListOptions, reader: jspb.BinaryReader): ListOptions;
}

export namespace ListOptions {
  export type AsObject = {
    resultsList: Array<Option.AsObject>,
  }
}

export class ListOptions2 extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Option2>;
  setResultsList(value: Array<Option2>): void;
  addResults(value?: Option2, index?: number): Option2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOptions2.AsObject;
  static toObject(includeInstance: boolean, msg: ListOptions2): ListOptions2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOptions2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOptions2;
  static deserializeBinaryFromReader(message: ListOptions2, reader: jspb.BinaryReader): ListOptions2;
}

export namespace ListOptions2 {
  export type AsObject = {
    resultsList: Array<Option2.AsObject>,
  }
}

export class Option2 extends jspb.Message {
  getOptionId(): string;
  setOptionId(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getExpiration(): string;
  setExpiration(value: string): void;

  getLastPrice(): number;
  setLastPrice(value: number): void;

  getStrike(): number;
  setStrike(value: number): void;

  getOpenInterest(): number;
  setOpenInterest(value: number): void;

  getType(): string;
  setType(value: string): void;

  getChange(): number;
  setChange(value: number): void;

  getChangePercent(): number;
  setChangePercent(value: number): void;

  getVol(): number;
  setVol(value: number): void;

  getLastUpdate(): number;
  setLastUpdate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option2.AsObject;
  static toObject(includeInstance: boolean, msg: Option2): Option2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Option2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option2;
  static deserializeBinaryFromReader(message: Option2, reader: jspb.BinaryReader): Option2;
}

export namespace Option2 {
  export type AsObject = {
    optionId: string,
    symbol: string,
    expiration: string,
    lastPrice: number,
    strike: number,
    openInterest: number,
    type: string,
    change: number,
    changePercent: number,
    vol: number,
    lastUpdate: number,
  }
}

export class Option extends jspb.Message {
  getOptionId(): string;
  setOptionId(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getExpiration(): string;
  setExpiration(value: string): void;

  getLastPrice(): number;
  setLastPrice(value: number): void;

  getStrike(): number;
  setStrike(value: number): void;

  getOpenInterest(): number;
  setOpenInterest(value: number): void;

  getType(): string;
  setType(value: string): void;

  getChange(): number;
  setChange(value: number): void;

  getChangePercent(): number;
  setChangePercent(value: number): void;

  getVol(): number;
  setVol(value: number): void;

  getLastUpdate(): number;
  setLastUpdate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option.AsObject;
  static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
  export type AsObject = {
    optionId: string,
    symbol: string,
    expiration: string,
    lastPrice: number,
    strike: number,
    openInterest: number,
    type: string,
    change: number,
    changePercent: number,
    vol: number,
    lastUpdate: number,
  }
}

export class StockModels extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<StockModel>;
  setResultsList(value: Array<StockModel>): void;
  addResults(value?: StockModel, index?: number): StockModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockModels.AsObject;
  static toObject(includeInstance: boolean, msg: StockModels): StockModels.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockModels, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockModels;
  static deserializeBinaryFromReader(message: StockModels, reader: jspb.BinaryReader): StockModels;
}

export namespace StockModels {
  export type AsObject = {
    resultsList: Array<StockModel.AsObject>,
  }
}

export class SymbolQuery extends jspb.Message {
  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getSite(): string;
  setSite(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolQuery): SymbolQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolQuery;
  static deserializeBinaryFromReader(message: SymbolQuery, reader: jspb.BinaryReader): SymbolQuery;
}

export namespace SymbolQuery {
  export type AsObject = {
    exchangeSlug: string,
    symbol: string,
    site: string,
  }
}

export class SymbolDetail extends jspb.Message {
  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getLastPrice(): number;
  setLastPrice(value: number): void;

  getPercentChange(): number;
  setPercentChange(value: number): void;

  getAbsoluteChange(): number;
  setAbsoluteChange(value: number): void;

  getVolume1d(): number;
  setVolume1d(value: number): void;

  getLow1Day(): number;
  setLow1Day(value: number): void;

  getHigh1Day(): number;
  setHigh1Day(value: number): void;

  getLow52Weeks(): number;
  setLow52Weeks(value: number): void;

  getHigh52Weeks(): number;
  setHigh52Weeks(value: number): void;

  getMarketCap(): number;
  setMarketCap(value: number): void;

  getPreviousClose(): number;
  setPreviousClose(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getZip(): string;
  setZip(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getSector(): string;
  setSector(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getNoOfEmployees(): number;
  setNoOfEmployees(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPercentChange1m(): number;
  setPercentChange1m(value: number): void;

  getPercentChange6m(): number;
  setPercentChange6m(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getPercentChange1w(): number;
  setPercentChange1w(value: number): void;

  getPrehour(): number;
  setPrehour(value: number): void;

  getAfterhour(): number;
  setAfterhour(value: number): void;

  getCik(): string;
  setCik(value: string): void;

  getTwitter(): string;
  setTwitter(value: string): void;

  getCusip(): string;
  setCusip(value: string): void;

  getNextEarningDate(): string;
  setNextEarningDate(value: string): void;

  getTargetHighPrice(): number;
  setTargetHighPrice(value: number): void;

  getTargetLowPrice(): number;
  setTargetLowPrice(value: number): void;

  getTargetMeanPrice(): number;
  setTargetMeanPrice(value: number): void;

  getTargetMedianPrice(): number;
  setTargetMedianPrice(value: number): void;

  getPercentChange1y(): number;
  setPercentChange1y(value: number): void;

  getPercentChange5y(): number;
  setPercentChange5y(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolDetail.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolDetail): SymbolDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolDetail;
  static deserializeBinaryFromReader(message: SymbolDetail, reader: jspb.BinaryReader): SymbolDetail;
}

export namespace SymbolDetail {
  export type AsObject = {
    exchangeSlug: string,
    symbol: string,
    lastPrice: number,
    percentChange: number,
    absoluteChange: number,
    volume1d: number,
    low1Day: number,
    high1Day: number,
    low52Weeks: number,
    high52Weeks: number,
    marketCap: number,
    previousClose: number,
    address: string,
    city: string,
    zip: string,
    country: string,
    phone: string,
    website: string,
    sector: string,
    industry: string,
    noOfEmployees: number,
    description: string,
    percentChange1m: number,
    percentChange6m: number,
    company: string,
    percentChange1w: number,
    prehour: number,
    afterhour: number,
    cik: string,
    twitter: string,
    cusip: string,
    nextEarningDate: string,
    targetHighPrice: number,
    targetLowPrice: number,
    targetMeanPrice: number,
    targetMedianPrice: number,
    percentChange1y: number,
    percentChange5y: number,
  }
}

export class SearchQuery extends jspb.Message {
  getSite(): string;
  setSite(value: string): void;

  getKeyword(): string;
  setKeyword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuery): SearchQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuery;
  static deserializeBinaryFromReader(message: SearchQuery, reader: jspb.BinaryReader): SearchQuery;
}

export namespace SearchQuery {
  export type AsObject = {
    site: string,
    keyword: string,
  }
}

export class SearchSuggestionResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<SearchSuggestion>;
  setResultsList(value: Array<SearchSuggestion>): void;
  addResults(value?: SearchSuggestion, index?: number): SearchSuggestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSuggestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSuggestionResponse): SearchSuggestionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchSuggestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSuggestionResponse;
  static deserializeBinaryFromReader(message: SearchSuggestionResponse, reader: jspb.BinaryReader): SearchSuggestionResponse;
}

export namespace SearchSuggestionResponse {
  export type AsObject = {
    resultsList: Array<SearchSuggestion.AsObject>,
  }
}

export class SearchSuggestion extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  getIsStock(): boolean;
  setIsStock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSuggestion.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSuggestion): SearchSuggestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchSuggestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSuggestion;
  static deserializeBinaryFromReader(message: SearchSuggestion, reader: jspb.BinaryReader): SearchSuggestion;
}

export namespace SearchSuggestion {
  export type AsObject = {
    symbol: string,
    company: string,
    exchange: string,
    isStock: boolean,
  }
}

export class ScreenerOptions extends jspb.Message {
  clearSectorsList(): void;
  getSectorsList(): Array<string>;
  setSectorsList(value: Array<string>): void;
  addSectors(value: string, index?: number): string;

  clearIndustriesList(): void;
  getIndustriesList(): Array<string>;
  setIndustriesList(value: Array<string>): void;
  addIndustries(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenerOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenerOptions): ScreenerOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenerOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenerOptions;
  static deserializeBinaryFromReader(message: ScreenerOptions, reader: jspb.BinaryReader): ScreenerOptions;
}

export namespace ScreenerOptions {
  export type AsObject = {
    sectorsList: Array<string>,
    industriesList: Array<string>,
  }
}

export class ScreenerOptsQuery extends jspb.Message {
  getSite(): string;
  setSite(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenerOptsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenerOptsQuery): ScreenerOptsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenerOptsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenerOptsQuery;
  static deserializeBinaryFromReader(message: ScreenerOptsQuery, reader: jspb.BinaryReader): ScreenerOptsQuery;
}

export namespace ScreenerOptsQuery {
  export type AsObject = {
    site: string,
  }
}

export class ScreenSymbolsQuery extends jspb.Message {
  getSite(): string;
  setSite(value: string): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): ScreenerQuery | undefined;
  setQuery(value?: ScreenerQuery): void;

  getSortBy(): SortByMap[keyof SortByMap];
  setSortBy(value: SortByMap[keyof SortByMap]): void;

  getSortDesc(): boolean;
  setSortDesc(value: boolean): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenSymbolsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenSymbolsQuery): ScreenSymbolsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenSymbolsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenSymbolsQuery;
  static deserializeBinaryFromReader(message: ScreenSymbolsQuery, reader: jspb.BinaryReader): ScreenSymbolsQuery;
}

export namespace ScreenSymbolsQuery {
  export type AsObject = {
    site: string,
    query?: ScreenerQuery.AsObject,
    sortBy: SortByMap[keyof SortByMap],
    sortDesc: boolean,
    pageSize: number,
    offset: number,
  }
}

export class ScreenSymbolsMultipleExchangesQuery extends jspb.Message {
  getSite(): string;
  setSite(value: string): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): ScreenerQueryMultipleExchanges | undefined;
  setQuery(value?: ScreenerQueryMultipleExchanges): void;

  getSortBy(): SortByMap[keyof SortByMap];
  setSortBy(value: SortByMap[keyof SortByMap]): void;

  getSortDesc(): boolean;
  setSortDesc(value: boolean): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenSymbolsMultipleExchangesQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenSymbolsMultipleExchangesQuery): ScreenSymbolsMultipleExchangesQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenSymbolsMultipleExchangesQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenSymbolsMultipleExchangesQuery;
  static deserializeBinaryFromReader(message: ScreenSymbolsMultipleExchangesQuery, reader: jspb.BinaryReader): ScreenSymbolsMultipleExchangesQuery;
}

export namespace ScreenSymbolsMultipleExchangesQuery {
  export type AsObject = {
    site: string,
    query?: ScreenerQueryMultipleExchanges.AsObject,
    sortBy: SortByMap[keyof SortByMap],
    sortDesc: boolean,
    pageSize: number,
    offset: number,
  }
}

export class ScreenerQueryMultipleExchanges extends jspb.Message {
  hasMarketCap(): boolean;
  clearMarketCap(): void;
  getMarketCap(): RangeQuery | undefined;
  setMarketCap(value?: RangeQuery): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): RangeQuery | undefined;
  setPrice(value?: RangeQuery): void;

  hasCurrentVolume(): boolean;
  clearCurrentVolume(): void;
  getCurrentVolume(): RangeQuery | undefined;
  setCurrentVolume(value?: RangeQuery): void;

  hasPercentChange(): boolean;
  clearPercentChange(): void;
  getPercentChange(): RangeQuery | undefined;
  setPercentChange(value?: RangeQuery): void;

  getSector(): string;
  setSector(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  hasPercentChange1m(): boolean;
  clearPercentChange1m(): void;
  getPercentChange1m(): RangeQuery | undefined;
  setPercentChange1m(value?: RangeQuery): void;

  hasPercentChange6m(): boolean;
  clearPercentChange6m(): void;
  getPercentChange6m(): RangeQuery | undefined;
  setPercentChange6m(value?: RangeQuery): void;

  clearExchangesList(): void;
  getExchangesList(): Array<string>;
  setExchangesList(value: Array<string>): void;
  addExchanges(value: string, index?: number): string;

  hasPercentChange1w(): boolean;
  clearPercentChange1w(): void;
  getPercentChange1w(): RangeQuery | undefined;
  setPercentChange1w(value?: RangeQuery): void;

  hasSma50Sma200Ratio(): boolean;
  clearSma50Sma200Ratio(): void;
  getSma50Sma200Ratio(): RangeQuery | undefined;
  setSma50Sma200Ratio(value?: RangeQuery): void;

  hasRsi14(): boolean;
  clearRsi14(): void;
  getRsi14(): RangeQuery | undefined;
  setRsi14(value?: RangeQuery): void;

  hasSma20PriceRatio(): boolean;
  clearSma20PriceRatio(): void;
  getSma20PriceRatio(): RangeQuery | undefined;
  setSma20PriceRatio(value?: RangeQuery): void;

  hasSma50PriceRatio(): boolean;
  clearSma50PriceRatio(): void;
  getSma50PriceRatio(): RangeQuery | undefined;
  setSma50PriceRatio(value?: RangeQuery): void;

  hasSma200PriceRatio(): boolean;
  clearSma200PriceRatio(): void;
  getSma200PriceRatio(): RangeQuery | undefined;
  setSma200PriceRatio(value?: RangeQuery): void;

  hasPercentPreHour(): boolean;
  clearPercentPreHour(): void;
  getPercentPreHour(): RangeQuery | undefined;
  setPercentPreHour(value?: RangeQuery): void;

  hasPercentAfterHour(): boolean;
  clearPercentAfterHour(): void;
  getPercentAfterHour(): RangeQuery | undefined;
  setPercentAfterHour(value?: RangeQuery): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenerQueryMultipleExchanges.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenerQueryMultipleExchanges): ScreenerQueryMultipleExchanges.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenerQueryMultipleExchanges, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenerQueryMultipleExchanges;
  static deserializeBinaryFromReader(message: ScreenerQueryMultipleExchanges, reader: jspb.BinaryReader): ScreenerQueryMultipleExchanges;
}

export namespace ScreenerQueryMultipleExchanges {
  export type AsObject = {
    marketCap?: RangeQuery.AsObject,
    price?: RangeQuery.AsObject,
    currentVolume?: RangeQuery.AsObject,
    percentChange?: RangeQuery.AsObject,
    sector: string,
    industry: string,
    percentChange1m?: RangeQuery.AsObject,
    percentChange6m?: RangeQuery.AsObject,
    exchangesList: Array<string>,
    percentChange1w?: RangeQuery.AsObject,
    sma50Sma200Ratio?: RangeQuery.AsObject,
    rsi14?: RangeQuery.AsObject,
    sma20PriceRatio?: RangeQuery.AsObject,
    sma50PriceRatio?: RangeQuery.AsObject,
    sma200PriceRatio?: RangeQuery.AsObject,
    percentPreHour?: RangeQuery.AsObject,
    percentAfterHour?: RangeQuery.AsObject,
  }
}

export class ScreenerQuery extends jspb.Message {
  hasMarketCap(): boolean;
  clearMarketCap(): void;
  getMarketCap(): RangeQuery | undefined;
  setMarketCap(value?: RangeQuery): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): RangeQuery | undefined;
  setPrice(value?: RangeQuery): void;

  hasCurrentVolume(): boolean;
  clearCurrentVolume(): void;
  getCurrentVolume(): RangeQuery | undefined;
  setCurrentVolume(value?: RangeQuery): void;

  hasPercentChange(): boolean;
  clearPercentChange(): void;
  getPercentChange(): RangeQuery | undefined;
  setPercentChange(value?: RangeQuery): void;

  getSector(): string;
  setSector(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  hasPercentChange1m(): boolean;
  clearPercentChange1m(): void;
  getPercentChange1m(): RangeQuery | undefined;
  setPercentChange1m(value?: RangeQuery): void;

  hasPercentChange6m(): boolean;
  clearPercentChange6m(): void;
  getPercentChange6m(): RangeQuery | undefined;
  setPercentChange6m(value?: RangeQuery): void;

  getExchange(): string;
  setExchange(value: string): void;

  hasSma50Sma200Ratio(): boolean;
  clearSma50Sma200Ratio(): void;
  getSma50Sma200Ratio(): RangeQuery | undefined;
  setSma50Sma200Ratio(value?: RangeQuery): void;

  hasRsi14(): boolean;
  clearRsi14(): void;
  getRsi14(): RangeQuery | undefined;
  setRsi14(value?: RangeQuery): void;

  hasSma20PriceRatio(): boolean;
  clearSma20PriceRatio(): void;
  getSma20PriceRatio(): RangeQuery | undefined;
  setSma20PriceRatio(value?: RangeQuery): void;

  hasSma50PriceRatio(): boolean;
  clearSma50PriceRatio(): void;
  getSma50PriceRatio(): RangeQuery | undefined;
  setSma50PriceRatio(value?: RangeQuery): void;

  hasSma200PriceRatio(): boolean;
  clearSma200PriceRatio(): void;
  getSma200PriceRatio(): RangeQuery | undefined;
  setSma200PriceRatio(value?: RangeQuery): void;

  hasPercentPreHour(): boolean;
  clearPercentPreHour(): void;
  getPercentPreHour(): RangeQuery | undefined;
  setPercentPreHour(value?: RangeQuery): void;

  hasPercentAfterHour(): boolean;
  clearPercentAfterHour(): void;
  getPercentAfterHour(): RangeQuery | undefined;
  setPercentAfterHour(value?: RangeQuery): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenerQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenerQuery): ScreenerQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenerQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenerQuery;
  static deserializeBinaryFromReader(message: ScreenerQuery, reader: jspb.BinaryReader): ScreenerQuery;
}

export namespace ScreenerQuery {
  export type AsObject = {
    marketCap?: RangeQuery.AsObject,
    price?: RangeQuery.AsObject,
    currentVolume?: RangeQuery.AsObject,
    percentChange?: RangeQuery.AsObject,
    sector: string,
    industry: string,
    percentChange1m?: RangeQuery.AsObject,
    percentChange6m?: RangeQuery.AsObject,
    exchange: string,
    sma50Sma200Ratio?: RangeQuery.AsObject,
    rsi14?: RangeQuery.AsObject,
    sma20PriceRatio?: RangeQuery.AsObject,
    sma50PriceRatio?: RangeQuery.AsObject,
    sma200PriceRatio?: RangeQuery.AsObject,
    percentPreHour?: RangeQuery.AsObject,
    percentAfterHour?: RangeQuery.AsObject,
  }
}

export class RangeQuery extends jspb.Message {
  getGte(): number;
  setGte(value: number): void;

  getGt(): number;
  setGt(value: number): void;

  getLte(): number;
  setLte(value: number): void;

  getLt(): number;
  setLt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: RangeQuery): RangeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeQuery;
  static deserializeBinaryFromReader(message: RangeQuery, reader: jspb.BinaryReader): RangeQuery;
}

export namespace RangeQuery {
  export type AsObject = {
    gte: number,
    gt: number,
    lte: number,
    lt: number,
  }
}

export class ScreenSymbolResult extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<ScreenResultItem>;
  setResultsList(value: Array<ScreenResultItem>): void;
  addResults(value?: ScreenResultItem, index?: number): ScreenResultItem;

  getTotal(): number;
  setTotal(value: number): void;

  getCurrentOffset(): number;
  setCurrentOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenSymbolResult.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenSymbolResult): ScreenSymbolResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenSymbolResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenSymbolResult;
  static deserializeBinaryFromReader(message: ScreenSymbolResult, reader: jspb.BinaryReader): ScreenSymbolResult;
}

export namespace ScreenSymbolResult {
  export type AsObject = {
    resultsList: Array<ScreenResultItem.AsObject>,
    total: number,
    currentOffset: number,
  }
}

export class ScreenResultItem extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getCurrentVolume(): number;
  setCurrentVolume(value: number): void;

  getMarketCap(): number;
  setMarketCap(value: number): void;

  getPercentChange(): number;
  setPercentChange(value: number): void;

  getSector(): string;
  setSector(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getPercentChange1m(): number;
  setPercentChange1m(value: number): void;

  getPercentChange6m(): number;
  setPercentChange6m(value: number): void;

  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  getPercentChange1w(): number;
  setPercentChange1w(value: number): void;

  getPercentChange1y(): number;
  setPercentChange1y(value: number): void;

  getPercentChange5y(): number;
  setPercentChange5y(value: number): void;

  getPercentPreHour(): number;
  setPercentPreHour(value: number): void;

  getPercentAfterHour(): number;
  setPercentAfterHour(value: number): void;

  getPreviousClose(): number;
  setPreviousClose(value: number): void;

  getNextEarningDate(): string;
  setNextEarningDate(value: string): void;

  getSma50Sma200Ratio(): number;
  setSma50Sma200Ratio(value: number): void;

  getRsi14(): number;
  setRsi14(value: number): void;

  getSma20PriceRatio(): number;
  setSma20PriceRatio(value: number): void;

  getSma50PriceRatio(): number;
  setSma50PriceRatio(value: number): void;

  getSma200PriceRatio(): number;
  setSma200PriceRatio(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenResultItem.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenResultItem): ScreenResultItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScreenResultItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenResultItem;
  static deserializeBinaryFromReader(message: ScreenResultItem, reader: jspb.BinaryReader): ScreenResultItem;
}

export namespace ScreenResultItem {
  export type AsObject = {
    symbol: string,
    company: string,
    price: number,
    currentVolume: number,
    marketCap: number,
    percentChange: number,
    sector: string,
    industry: string,
    percentChange1m: number,
    percentChange6m: number,
    exchangeSlug: string,
    percentChange1w: number,
    percentChange1y: number,
    percentChange5y: number,
    percentPreHour: number,
    percentAfterHour: number,
    previousClose: number,
    nextEarningDate: string,
    sma50Sma200Ratio: number,
    rsi14: number,
    sma20PriceRatio: number,
    sma50PriceRatio: number,
    sma200PriceRatio: number,
  }
}

export class WatchListQuery extends jspb.Message {
  clearSymbolsList(): void;
  getSymbolsList(): Array<SymbolQuery>;
  setSymbolsList(value: Array<SymbolQuery>): void;
  addSymbols(value?: SymbolQuery, index?: number): SymbolQuery;

  getFullInfo(): boolean;
  setFullInfo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchListQuery.AsObject;
  static toObject(includeInstance: boolean, msg: WatchListQuery): WatchListQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchListQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchListQuery;
  static deserializeBinaryFromReader(message: WatchListQuery, reader: jspb.BinaryReader): WatchListQuery;
}

export namespace WatchListQuery {
  export type AsObject = {
    symbolsList: Array<SymbolQuery.AsObject>,
    fullInfo: boolean,
  }
}

export class WatchListResponse extends jspb.Message {
  clearSymbolsList(): void;
  getSymbolsList(): Array<SymbolDetail>;
  setSymbolsList(value: Array<SymbolDetail>): void;
  addSymbols(value?: SymbolDetail, index?: number): SymbolDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchListResponse): WatchListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchListResponse;
  static deserializeBinaryFromReader(message: WatchListResponse, reader: jspb.BinaryReader): WatchListResponse;
}

export namespace WatchListResponse {
  export type AsObject = {
    symbolsList: Array<SymbolDetail.AsObject>,
  }
}

export class SymbolNewsQuery extends jspb.Message {
  getExchangeSlug(): string;
  setExchangeSlug(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolNewsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolNewsQuery): SymbolNewsQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolNewsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolNewsQuery;
  static deserializeBinaryFromReader(message: SymbolNewsQuery, reader: jspb.BinaryReader): SymbolNewsQuery;
}

export namespace SymbolNewsQuery {
  export type AsObject = {
    exchangeSlug: string,
    symbol: string,
    from: string,
    limit: number,
    fieldsList: Array<string>,
  }
}

export class SymbolNewsResult extends jspb.Message {
  clearNewsList(): void;
  getNewsList(): Array<SymbolNews>;
  setNewsList(value: Array<SymbolNews>): void;
  addNews(value?: SymbolNews, index?: number): SymbolNews;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolNewsResult.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolNewsResult): SymbolNewsResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolNewsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolNewsResult;
  static deserializeBinaryFromReader(message: SymbolNewsResult, reader: jspb.BinaryReader): SymbolNewsResult;
}

export namespace SymbolNewsResult {
  export type AsObject = {
    newsList: Array<SymbolNews.AsObject>,
  }
}

export class CommentsResult extends jspb.Message {
  clearNewsList(): void;
  getNewsList(): Array<CommentNews>;
  setNewsList(value: Array<CommentNews>): void;
  addNews(value?: CommentNews, index?: number): CommentNews;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentsResult.AsObject;
  static toObject(includeInstance: boolean, msg: CommentsResult): CommentsResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommentsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentsResult;
  static deserializeBinaryFromReader(message: CommentsResult, reader: jspb.BinaryReader): CommentsResult;
}

export namespace CommentsResult {
  export type AsObject = {
    newsList: Array<CommentNews.AsObject>,
  }
}

export class SymbolNews extends jspb.Message {
  getPublishedAt(): number;
  setPublishedAt(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getLink(): string;
  setLink(value: string): void;

  getPublisher(): string;
  setPublisher(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolNews.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolNews): SymbolNews.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolNews, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolNews;
  static deserializeBinaryFromReader(message: SymbolNews, reader: jspb.BinaryReader): SymbolNews;
}

export namespace SymbolNews {
  export type AsObject = {
    publishedAt: number,
    title: string,
    link: string,
    publisher: string,
  }
}

export class CommentNews extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getAuthoravatar(): string;
  setAuthoravatar(value: string): void;

  getReplies(): number;
  setReplies(value: number): void;

  getUpvote(): number;
  setUpvote(value: number): void;

  getDownvote(): number;
  setDownvote(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentNews.AsObject;
  static toObject(includeInstance: boolean, msg: CommentNews): CommentNews.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommentNews, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentNews;
  static deserializeBinaryFromReader(message: CommentNews, reader: jspb.BinaryReader): CommentNews;
}

export namespace CommentNews {
  export type AsObject = {
    text: string,
    content: string,
    author: string,
    time: number,
    authoravatar: string,
    replies: number,
    upvote: number,
    downvote: number,
  }
}

export class InfoResult extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoResult.AsObject;
  static toObject(includeInstance: boolean, msg: InfoResult): InfoResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoResult;
  static deserializeBinaryFromReader(message: InfoResult, reader: jspb.BinaryReader): InfoResult;
}

export namespace InfoResult {
  export type AsObject = {
    message: string,
  }
}

export class TopLowHighQuery extends jspb.Message {
  getSite(): string;
  setSite(value: string): void;

  getIsGetHigh(): boolean;
  setIsGetHigh(value: boolean): void;

  getSortBy(): SortByMap[keyof SortByMap];
  setSortBy(value: SortByMap[keyof SortByMap]): void;

  getSortDesc(): boolean;
  setSortDesc(value: boolean): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopLowHighQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TopLowHighQuery): TopLowHighQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopLowHighQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopLowHighQuery;
  static deserializeBinaryFromReader(message: TopLowHighQuery, reader: jspb.BinaryReader): TopLowHighQuery;
}

export namespace TopLowHighQuery {
  export type AsObject = {
    site: string,
    isGetHigh: boolean,
    sortBy: SortByMap[keyof SortByMap],
    sortDesc: boolean,
    pageSize: number,
    offset: number,
  }
}

export class TopLowHighResult extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<TopLowHighItem>;
  setResultsList(value: Array<TopLowHighItem>): void;
  addResults(value?: TopLowHighItem, index?: number): TopLowHighItem;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopLowHighResult.AsObject;
  static toObject(includeInstance: boolean, msg: TopLowHighResult): TopLowHighResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopLowHighResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopLowHighResult;
  static deserializeBinaryFromReader(message: TopLowHighResult, reader: jspb.BinaryReader): TopLowHighResult;
}

export namespace TopLowHighResult {
  export type AsObject = {
    resultsList: Array<TopLowHighItem.AsObject>,
    total: number,
  }
}

export class TopLowHighItem extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getPercentChange(): number;
  setPercentChange(value: number): void;

  getCurrentVolume(): number;
  setCurrentVolume(value: number): void;

  getMarketCap(): number;
  setMarketCap(value: number): void;

  getLow1d(): number;
  setLow1d(value: number): void;

  getHigh1d(): number;
  setHigh1d(value: number): void;

  getLow52w(): number;
  setLow52w(value: number): void;

  getHigh52w(): number;
  setHigh52w(value: number): void;

  getLowHigh(): number;
  setLowHigh(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopLowHighItem.AsObject;
  static toObject(includeInstance: boolean, msg: TopLowHighItem): TopLowHighItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopLowHighItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopLowHighItem;
  static deserializeBinaryFromReader(message: TopLowHighItem, reader: jspb.BinaryReader): TopLowHighItem;
}

export namespace TopLowHighItem {
  export type AsObject = {
    exchange: string,
    symbol: string,
    company: string,
    price: number,
    percentChange: number,
    currentVolume: number,
    marketCap: number,
    low1d: number,
    high1d: number,
    low52w: number,
    high52w: number,
    lowHigh: number,
  }
}

export class OptionChartResponse extends jspb.Message {
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionChartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OptionChartResponse): OptionChartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionChartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionChartResponse;
  static deserializeBinaryFromReader(message: OptionChartResponse, reader: jspb.BinaryReader): OptionChartResponse;
}

export namespace OptionChartResponse {
  export type AsObject = {
    image: Uint8Array | string,
  }
}

export class FinancialFormLink extends jspb.Message {
  getLink(): string;
  setLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialFormLink.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialFormLink): FinancialFormLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinancialFormLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialFormLink;
  static deserializeBinaryFromReader(message: FinancialFormLink, reader: jspb.BinaryReader): FinancialFormLink;
}

export namespace FinancialFormLink {
  export type AsObject = {
    link: string,
  }
}

export interface SortByMap {
  SYMBOL: 0;
  COMPANY: 1;
  SECTOR: 2;
  INDUSTRY: 3;
  MARKET_CAP: 4;
  PRICE: 5;
  PERCENT_CHANGE: 6;
  CURRENT_VOLUME: 7;
  PERCENT_CHANGE_1M: 8;
  PERCENT_CHANGE_6M: 9;
  LOW_1D: 10;
  HIGH_1D: 11;
  PERCENT_AFTER_HOUR: 12;
  PERCENT_PRE_HOUR: 13;
  PERCENT_CHANGE_1W: 14;
}

export const SortBy: SortByMap;

