// package: stockscreener_public
// file: grpc-web/definition.proto

import * as grpc_web_definition_pb from "../grpc-web/definition_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SymbolGetSymbol = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.SymbolDetail;
};

type SymbolGetSearchSuggestion = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SearchQuery;
  readonly responseType: typeof grpc_web_definition_pb.SearchSuggestionResponse;
};

type SymbolGetScreenerOptions = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.ScreenerOptsQuery;
  readonly responseType: typeof grpc_web_definition_pb.ScreenerOptions;
};

type SymbolScreenSymbols = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.ScreenSymbolsQuery;
  readonly responseType: typeof grpc_web_definition_pb.ScreenSymbolResult;
};

type SymbolGetWatchList = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.WatchListQuery;
  readonly responseType: typeof grpc_web_definition_pb.WatchListResponse;
};

type SymbolGetSymbolNews = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolNewsQuery;
  readonly responseType: typeof grpc_web_definition_pb.SymbolNewsResult;
};

type SymbolRemoveSymbol = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.InfoResult;
};

type SymbolGet52WeekLowHigh = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.TopLowHighQuery;
  readonly responseType: typeof grpc_web_definition_pb.TopLowHighResult;
};

type SymbolGetAllSymbols = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.Exchange;
  readonly responseType: typeof grpc_web_definition_pb.StockModels;
};

type SymbolGetAllSymbolsWebsite = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.Exchange;
  readonly responseType: typeof grpc_web_definition_pb.StockModelsWebsite;
};

type SymbolGetFinancialIdentity = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.SymbolIdentity;
};

type SymbolScreenSymbolsMultipleExchanges = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.ScreenSymbolsMultipleExchangesQuery;
  readonly responseType: typeof grpc_web_definition_pb.ScreenSymbolResult;
};

type SymbolGetListSectors = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SectorQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListSectors;
};

type SymbolGetCountForType = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.GetCountQuery;
  readonly responseType: typeof grpc_web_definition_pb.GetCountResult;
};

type SymbolGetOptionDate = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolOptionDateQuery;
  readonly responseType: typeof grpc_web_definition_pb.SymbolOptionDateResponse;
};

type SymbolGetOption = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolOptionQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListOptions;
};

type SymbolGetOption2 = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolOptionQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListOptions2;
};

type SymbolGetPriceByOptionId = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.OptionQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListOptionPrices;
};

type SymbolGetOHLCByOptionId = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.OptionQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListEodOptionPrice;
};

type SymbolGetChartOptionByOptionId = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.OptionQuery;
  readonly responseType: typeof grpc_web_definition_pb.OptionChartResponse;
};

type SymbolGetComments = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolNewsQuery;
  readonly responseType: typeof grpc_web_definition_pb.CommentsResult;
};

type SymbolDeleteExpiredOption = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.DeleteQuery;
  readonly responseType: typeof grpc_web_definition_pb.Response;
};

type SymbolGetOptionRatio = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.StockRaw;
  readonly responseType: typeof grpc_web_definition_pb.ListCallPutRatioResponse;
};

type SymbolGetEps = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.EpsResult;
};

type SymbolGetRevenue = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.EpsResult;
};

type SymbolGetNetIncome = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.EpsResult;
};

type SymbolGetFreeCashFlow = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.EpsResult;
};

type SymbolGetDebt = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.EpsResult;
};

type SymbolGetInsideTrades = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.InsideTradesResult;
};

type SymbolGetHolder = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.Holders;
};

type SymbolGetStocksByHolder = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.HolderQuery;
  readonly responseType: typeof grpc_web_definition_pb.SymbolHolders;
};

type SymbolGetTopOptionDate = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.a;
  readonly responseType: typeof grpc_web_definition_pb.SymbolOptionDateResponse;
};

type SymbolGetHolderV2 = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolHolderQuery;
  readonly responseType: typeof grpc_web_definition_pb.HoldersResponse;
};

type SymbolGetFinancials = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.FinancialResponse;
};

type SymbolGetTopOptionByDate = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.OptionDateQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListTopOptions;
};

type SymbolGetFinancialFormLink = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.FinancialFormLink;
};

type SymbolGetHolderV3 = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.CusipQuery;
  readonly responseType: typeof grpc_web_definition_pb.HoldersResponse;
};

type SymbolGetAllHolder = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.a;
  readonly responseType: typeof grpc_web_definition_pb.AllHolders;
};

type SymbolGetListHolder = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.HolderFilter;
  readonly responseType: typeof grpc_web_definition_pb.HolderResponse;
};

type SymbolGetStocksOnHolder = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.HolderParam;
  readonly responseType: typeof grpc_web_definition_pb.HolderStockResponse;
};

type SymbolGetEarningHistory = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.EarningQuery;
  readonly responseType: typeof grpc_web_definition_pb.EarningHistoryResponse;
};

type SymbolGetUpgradeAndDowngrade = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListUpgradeDowngradeResponse;
};

type SymbolGetTrends = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListTrendsResponse;
};

type SymbolGetNextEarning = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.ListEarningResponse;
};

type SymbolGetHotListStock = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.a;
  readonly responseType: typeof grpc_web_definition_pb.HotListStockResponse;
};

type SymbolGetDetailListHotStock = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.HotListStockQuery;
  readonly responseType: typeof grpc_web_definition_pb.HotListDetailStockResponse;
};

type SymbolGetDetailListHotStockV2 = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.HotListStockV2Query;
  readonly responseType: typeof grpc_web_definition_pb.HotListDetailStockV2Response;
};

type SymbolGetIndividualSpecial = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.IndividualSpecialResponse;
};

type SymbolGetNextEarningDate = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.a;
  readonly responseType: typeof grpc_web_definition_pb.NextEarningDatesResponse;
};

type SymbolGetStocksForEarningDate = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.EarningQueryDate;
  readonly responseType: typeof grpc_web_definition_pb.EarningStockResponse;
};

type SymbolGetListIndustry = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.a;
  readonly responseType: typeof grpc_web_definition_pb.IndustryResponse;
};

type SymbolGetIndustryChart = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.IndustryParam;
  readonly responseType: typeof grpc_web_definition_pb.IndustryChartResponse;
};

type SymbolGetOptionAggregate = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.SymbolQuery;
  readonly responseType: typeof grpc_web_definition_pb.OptionAggregateResponse;
};

type SymbolTest = {
  readonly methodName: string;
  readonly service: typeof Symbol;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_web_definition_pb.a;
  readonly responseType: typeof grpc_web_definition_pb.OptionAggregateResponse;
};

export class Symbol {
  static readonly serviceName: string;
  static readonly GetSymbol: SymbolGetSymbol;
  static readonly GetSearchSuggestion: SymbolGetSearchSuggestion;
  static readonly GetScreenerOptions: SymbolGetScreenerOptions;
  static readonly ScreenSymbols: SymbolScreenSymbols;
  static readonly GetWatchList: SymbolGetWatchList;
  static readonly GetSymbolNews: SymbolGetSymbolNews;
  static readonly RemoveSymbol: SymbolRemoveSymbol;
  static readonly Get52WeekLowHigh: SymbolGet52WeekLowHigh;
  static readonly GetAllSymbols: SymbolGetAllSymbols;
  static readonly GetAllSymbolsWebsite: SymbolGetAllSymbolsWebsite;
  static readonly GetFinancialIdentity: SymbolGetFinancialIdentity;
  static readonly ScreenSymbolsMultipleExchanges: SymbolScreenSymbolsMultipleExchanges;
  static readonly GetListSectors: SymbolGetListSectors;
  static readonly GetCountForType: SymbolGetCountForType;
  static readonly GetOptionDate: SymbolGetOptionDate;
  static readonly GetOption: SymbolGetOption;
  static readonly GetOption2: SymbolGetOption2;
  static readonly GetPriceByOptionId: SymbolGetPriceByOptionId;
  static readonly GetOHLCByOptionId: SymbolGetOHLCByOptionId;
  static readonly GetChartOptionByOptionId: SymbolGetChartOptionByOptionId;
  static readonly GetComments: SymbolGetComments;
  static readonly DeleteExpiredOption: SymbolDeleteExpiredOption;
  static readonly GetOptionRatio: SymbolGetOptionRatio;
  static readonly GetEps: SymbolGetEps;
  static readonly GetRevenue: SymbolGetRevenue;
  static readonly GetNetIncome: SymbolGetNetIncome;
  static readonly GetFreeCashFlow: SymbolGetFreeCashFlow;
  static readonly GetDebt: SymbolGetDebt;
  static readonly GetInsideTrades: SymbolGetInsideTrades;
  static readonly GetHolder: SymbolGetHolder;
  static readonly GetStocksByHolder: SymbolGetStocksByHolder;
  static readonly GetTopOptionDate: SymbolGetTopOptionDate;
  static readonly GetHolderV2: SymbolGetHolderV2;
  static readonly GetFinancials: SymbolGetFinancials;
  static readonly GetTopOptionByDate: SymbolGetTopOptionByDate;
  static readonly GetFinancialFormLink: SymbolGetFinancialFormLink;
  static readonly GetHolderV3: SymbolGetHolderV3;
  static readonly GetAllHolder: SymbolGetAllHolder;
  static readonly GetListHolder: SymbolGetListHolder;
  static readonly GetStocksOnHolder: SymbolGetStocksOnHolder;
  static readonly GetEarningHistory: SymbolGetEarningHistory;
  static readonly GetUpgradeAndDowngrade: SymbolGetUpgradeAndDowngrade;
  static readonly GetTrends: SymbolGetTrends;
  static readonly GetNextEarning: SymbolGetNextEarning;
  static readonly GetHotListStock: SymbolGetHotListStock;
  static readonly GetDetailListHotStock: SymbolGetDetailListHotStock;
  static readonly GetDetailListHotStockV2: SymbolGetDetailListHotStockV2;
  static readonly GetIndividualSpecial: SymbolGetIndividualSpecial;
  static readonly GetNextEarningDate: SymbolGetNextEarningDate;
  static readonly GetStocksForEarningDate: SymbolGetStocksForEarningDate;
  static readonly GetListIndustry: SymbolGetListIndustry;
  static readonly GetIndustryChart: SymbolGetIndustryChart;
  static readonly GetOptionAggregate: SymbolGetOptionAggregate;
  static readonly Test: SymbolTest;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class SymbolClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSymbol(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolDetail|null) => void
  ): UnaryResponse;
  getSymbol(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolDetail|null) => void
  ): UnaryResponse;
  getSearchSuggestion(
    requestMessage: grpc_web_definition_pb.SearchQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SearchSuggestionResponse|null) => void
  ): UnaryResponse;
  getSearchSuggestion(
    requestMessage: grpc_web_definition_pb.SearchQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SearchSuggestionResponse|null) => void
  ): UnaryResponse;
  getScreenerOptions(
    requestMessage: grpc_web_definition_pb.ScreenerOptsQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ScreenerOptions|null) => void
  ): UnaryResponse;
  getScreenerOptions(
    requestMessage: grpc_web_definition_pb.ScreenerOptsQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ScreenerOptions|null) => void
  ): UnaryResponse;
  screenSymbols(
    requestMessage: grpc_web_definition_pb.ScreenSymbolsQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ScreenSymbolResult|null) => void
  ): UnaryResponse;
  screenSymbols(
    requestMessage: grpc_web_definition_pb.ScreenSymbolsQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ScreenSymbolResult|null) => void
  ): UnaryResponse;
  getWatchList(
    requestMessage: grpc_web_definition_pb.WatchListQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.WatchListResponse|null) => void
  ): UnaryResponse;
  getWatchList(
    requestMessage: grpc_web_definition_pb.WatchListQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.WatchListResponse|null) => void
  ): UnaryResponse;
  getSymbolNews(
    requestMessage: grpc_web_definition_pb.SymbolNewsQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolNewsResult|null) => void
  ): UnaryResponse;
  getSymbolNews(
    requestMessage: grpc_web_definition_pb.SymbolNewsQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolNewsResult|null) => void
  ): UnaryResponse;
  removeSymbol(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.InfoResult|null) => void
  ): UnaryResponse;
  removeSymbol(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.InfoResult|null) => void
  ): UnaryResponse;
  get52WeekLowHigh(
    requestMessage: grpc_web_definition_pb.TopLowHighQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.TopLowHighResult|null) => void
  ): UnaryResponse;
  get52WeekLowHigh(
    requestMessage: grpc_web_definition_pb.TopLowHighQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.TopLowHighResult|null) => void
  ): UnaryResponse;
  getAllSymbols(
    requestMessage: grpc_web_definition_pb.Exchange,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.StockModels|null) => void
  ): UnaryResponse;
  getAllSymbols(
    requestMessage: grpc_web_definition_pb.Exchange,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.StockModels|null) => void
  ): UnaryResponse;
  getAllSymbolsWebsite(
    requestMessage: grpc_web_definition_pb.Exchange,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.StockModelsWebsite|null) => void
  ): UnaryResponse;
  getAllSymbolsWebsite(
    requestMessage: grpc_web_definition_pb.Exchange,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.StockModelsWebsite|null) => void
  ): UnaryResponse;
  getFinancialIdentity(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolIdentity|null) => void
  ): UnaryResponse;
  getFinancialIdentity(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolIdentity|null) => void
  ): UnaryResponse;
  screenSymbolsMultipleExchanges(
    requestMessage: grpc_web_definition_pb.ScreenSymbolsMultipleExchangesQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ScreenSymbolResult|null) => void
  ): UnaryResponse;
  screenSymbolsMultipleExchanges(
    requestMessage: grpc_web_definition_pb.ScreenSymbolsMultipleExchangesQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ScreenSymbolResult|null) => void
  ): UnaryResponse;
  getListSectors(
    requestMessage: grpc_web_definition_pb.SectorQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListSectors|null) => void
  ): UnaryResponse;
  getListSectors(
    requestMessage: grpc_web_definition_pb.SectorQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListSectors|null) => void
  ): UnaryResponse;
  getCountForType(
    requestMessage: grpc_web_definition_pb.GetCountQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.GetCountResult|null) => void
  ): UnaryResponse;
  getCountForType(
    requestMessage: grpc_web_definition_pb.GetCountQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.GetCountResult|null) => void
  ): UnaryResponse;
  getOptionDate(
    requestMessage: grpc_web_definition_pb.SymbolOptionDateQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolOptionDateResponse|null) => void
  ): UnaryResponse;
  getOptionDate(
    requestMessage: grpc_web_definition_pb.SymbolOptionDateQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolOptionDateResponse|null) => void
  ): UnaryResponse;
  getOption(
    requestMessage: grpc_web_definition_pb.SymbolOptionQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListOptions|null) => void
  ): UnaryResponse;
  getOption(
    requestMessage: grpc_web_definition_pb.SymbolOptionQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListOptions|null) => void
  ): UnaryResponse;
  getOption2(
    requestMessage: grpc_web_definition_pb.SymbolOptionQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListOptions2|null) => void
  ): UnaryResponse;
  getOption2(
    requestMessage: grpc_web_definition_pb.SymbolOptionQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListOptions2|null) => void
  ): UnaryResponse;
  getPriceByOptionId(
    requestMessage: grpc_web_definition_pb.OptionQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListOptionPrices|null) => void
  ): UnaryResponse;
  getPriceByOptionId(
    requestMessage: grpc_web_definition_pb.OptionQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListOptionPrices|null) => void
  ): UnaryResponse;
  getOHLCByOptionId(
    requestMessage: grpc_web_definition_pb.OptionQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListEodOptionPrice|null) => void
  ): UnaryResponse;
  getOHLCByOptionId(
    requestMessage: grpc_web_definition_pb.OptionQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListEodOptionPrice|null) => void
  ): UnaryResponse;
  getChartOptionByOptionId(
    requestMessage: grpc_web_definition_pb.OptionQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.OptionChartResponse|null) => void
  ): UnaryResponse;
  getChartOptionByOptionId(
    requestMessage: grpc_web_definition_pb.OptionQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.OptionChartResponse|null) => void
  ): UnaryResponse;
  getComments(
    requestMessage: grpc_web_definition_pb.SymbolNewsQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.CommentsResult|null) => void
  ): UnaryResponse;
  getComments(
    requestMessage: grpc_web_definition_pb.SymbolNewsQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.CommentsResult|null) => void
  ): UnaryResponse;
  deleteExpiredOption(
    requestMessage: grpc_web_definition_pb.DeleteQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.Response|null) => void
  ): UnaryResponse;
  deleteExpiredOption(
    requestMessage: grpc_web_definition_pb.DeleteQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.Response|null) => void
  ): UnaryResponse;
  getOptionRatio(
    requestMessage: grpc_web_definition_pb.StockRaw,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListCallPutRatioResponse|null) => void
  ): UnaryResponse;
  getOptionRatio(
    requestMessage: grpc_web_definition_pb.StockRaw,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListCallPutRatioResponse|null) => void
  ): UnaryResponse;
  getEps(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getEps(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getRevenue(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getRevenue(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getNetIncome(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getNetIncome(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getFreeCashFlow(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getFreeCashFlow(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getDebt(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getDebt(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EpsResult|null) => void
  ): UnaryResponse;
  getInsideTrades(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.InsideTradesResult|null) => void
  ): UnaryResponse;
  getInsideTrades(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.InsideTradesResult|null) => void
  ): UnaryResponse;
  getHolder(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.Holders|null) => void
  ): UnaryResponse;
  getHolder(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.Holders|null) => void
  ): UnaryResponse;
  getStocksByHolder(
    requestMessage: grpc_web_definition_pb.HolderQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolHolders|null) => void
  ): UnaryResponse;
  getStocksByHolder(
    requestMessage: grpc_web_definition_pb.HolderQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolHolders|null) => void
  ): UnaryResponse;
  getTopOptionDate(
    requestMessage: grpc_web_definition_pb.a,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolOptionDateResponse|null) => void
  ): UnaryResponse;
  getTopOptionDate(
    requestMessage: grpc_web_definition_pb.a,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.SymbolOptionDateResponse|null) => void
  ): UnaryResponse;
  getHolderV2(
    requestMessage: grpc_web_definition_pb.SymbolHolderQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HoldersResponse|null) => void
  ): UnaryResponse;
  getHolderV2(
    requestMessage: grpc_web_definition_pb.SymbolHolderQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HoldersResponse|null) => void
  ): UnaryResponse;
  getFinancials(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.FinancialResponse|null) => void
  ): UnaryResponse;
  getFinancials(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.FinancialResponse|null) => void
  ): UnaryResponse;
  getTopOptionByDate(
    requestMessage: grpc_web_definition_pb.OptionDateQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListTopOptions|null) => void
  ): UnaryResponse;
  getTopOptionByDate(
    requestMessage: grpc_web_definition_pb.OptionDateQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListTopOptions|null) => void
  ): UnaryResponse;
  getFinancialFormLink(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.FinancialFormLink|null) => void
  ): UnaryResponse;
  getFinancialFormLink(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.FinancialFormLink|null) => void
  ): UnaryResponse;
  getHolderV3(
    requestMessage: grpc_web_definition_pb.CusipQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HoldersResponse|null) => void
  ): UnaryResponse;
  getHolderV3(
    requestMessage: grpc_web_definition_pb.CusipQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HoldersResponse|null) => void
  ): UnaryResponse;
  getAllHolder(
    requestMessage: grpc_web_definition_pb.a,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.AllHolders|null) => void
  ): UnaryResponse;
  getAllHolder(
    requestMessage: grpc_web_definition_pb.a,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.AllHolders|null) => void
  ): UnaryResponse;
  getListHolder(
    requestMessage: grpc_web_definition_pb.HolderFilter,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HolderResponse|null) => void
  ): UnaryResponse;
  getListHolder(
    requestMessage: grpc_web_definition_pb.HolderFilter,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HolderResponse|null) => void
  ): UnaryResponse;
  getStocksOnHolder(
    requestMessage: grpc_web_definition_pb.HolderParam,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HolderStockResponse|null) => void
  ): UnaryResponse;
  getStocksOnHolder(
    requestMessage: grpc_web_definition_pb.HolderParam,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HolderStockResponse|null) => void
  ): UnaryResponse;
  getEarningHistory(
    requestMessage: grpc_web_definition_pb.EarningQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EarningHistoryResponse|null) => void
  ): UnaryResponse;
  getEarningHistory(
    requestMessage: grpc_web_definition_pb.EarningQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EarningHistoryResponse|null) => void
  ): UnaryResponse;
  getUpgradeAndDowngrade(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListUpgradeDowngradeResponse|null) => void
  ): UnaryResponse;
  getUpgradeAndDowngrade(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListUpgradeDowngradeResponse|null) => void
  ): UnaryResponse;
  getTrends(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListTrendsResponse|null) => void
  ): UnaryResponse;
  getTrends(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListTrendsResponse|null) => void
  ): UnaryResponse;
  getNextEarning(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListEarningResponse|null) => void
  ): UnaryResponse;
  getNextEarning(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.ListEarningResponse|null) => void
  ): UnaryResponse;
  getHotListStock(
    requestMessage: grpc_web_definition_pb.a,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HotListStockResponse|null) => void
  ): UnaryResponse;
  getHotListStock(
    requestMessage: grpc_web_definition_pb.a,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HotListStockResponse|null) => void
  ): UnaryResponse;
  getDetailListHotStock(
    requestMessage: grpc_web_definition_pb.HotListStockQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HotListDetailStockResponse|null) => void
  ): UnaryResponse;
  getDetailListHotStock(
    requestMessage: grpc_web_definition_pb.HotListStockQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HotListDetailStockResponse|null) => void
  ): UnaryResponse;
  getDetailListHotStockV2(
    requestMessage: grpc_web_definition_pb.HotListStockV2Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HotListDetailStockV2Response|null) => void
  ): UnaryResponse;
  getDetailListHotStockV2(
    requestMessage: grpc_web_definition_pb.HotListStockV2Query,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.HotListDetailStockV2Response|null) => void
  ): UnaryResponse;
  getIndividualSpecial(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.IndividualSpecialResponse|null) => void
  ): UnaryResponse;
  getIndividualSpecial(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.IndividualSpecialResponse|null) => void
  ): UnaryResponse;
  getNextEarningDate(
    requestMessage: grpc_web_definition_pb.a,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.NextEarningDatesResponse|null) => void
  ): UnaryResponse;
  getNextEarningDate(
    requestMessage: grpc_web_definition_pb.a,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.NextEarningDatesResponse|null) => void
  ): UnaryResponse;
  getStocksForEarningDate(
    requestMessage: grpc_web_definition_pb.EarningQueryDate,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EarningStockResponse|null) => void
  ): UnaryResponse;
  getStocksForEarningDate(
    requestMessage: grpc_web_definition_pb.EarningQueryDate,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.EarningStockResponse|null) => void
  ): UnaryResponse;
  getListIndustry(
    requestMessage: grpc_web_definition_pb.a,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.IndustryResponse|null) => void
  ): UnaryResponse;
  getListIndustry(
    requestMessage: grpc_web_definition_pb.a,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.IndustryResponse|null) => void
  ): UnaryResponse;
  getIndustryChart(
    requestMessage: grpc_web_definition_pb.IndustryParam,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.IndustryChartResponse|null) => void
  ): UnaryResponse;
  getIndustryChart(
    requestMessage: grpc_web_definition_pb.IndustryParam,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.IndustryChartResponse|null) => void
  ): UnaryResponse;
  getOptionAggregate(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.OptionAggregateResponse|null) => void
  ): UnaryResponse;
  getOptionAggregate(
    requestMessage: grpc_web_definition_pb.SymbolQuery,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.OptionAggregateResponse|null) => void
  ): UnaryResponse;
  test(
    requestMessage: grpc_web_definition_pb.a,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.OptionAggregateResponse|null) => void
  ): UnaryResponse;
  test(
    requestMessage: grpc_web_definition_pb.a,
    callback: (error: ServiceError|null, responseMessage: grpc_web_definition_pb.OptionAggregateResponse|null) => void
  ): UnaryResponse;
}

