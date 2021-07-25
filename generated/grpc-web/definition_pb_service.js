// package: stockscreener_public
// file: grpc-web/definition.proto

var grpc_web_definition_pb = require("../grpc-web/definition_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Symbol = (function () {
  function Symbol() {}
  Symbol.serviceName = "stockscreener_public.Symbol";
  return Symbol;
}());

Symbol.GetSymbol = {
  methodName: "GetSymbol",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.SymbolDetail
};

Symbol.GetSearchSuggestion = {
  methodName: "GetSearchSuggestion",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SearchQuery,
  responseType: grpc_web_definition_pb.SearchSuggestionResponse
};

Symbol.GetScreenerOptions = {
  methodName: "GetScreenerOptions",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.ScreenerOptsQuery,
  responseType: grpc_web_definition_pb.ScreenerOptions
};

Symbol.ScreenSymbols = {
  methodName: "ScreenSymbols",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.ScreenSymbolsQuery,
  responseType: grpc_web_definition_pb.ScreenSymbolResult
};

Symbol.GetWatchList = {
  methodName: "GetWatchList",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.WatchListQuery,
  responseType: grpc_web_definition_pb.WatchListResponse
};

Symbol.GetSymbolNews = {
  methodName: "GetSymbolNews",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolNewsQuery,
  responseType: grpc_web_definition_pb.SymbolNewsResult
};

Symbol.RemoveSymbol = {
  methodName: "RemoveSymbol",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.InfoResult
};

Symbol.Get52WeekLowHigh = {
  methodName: "Get52WeekLowHigh",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.TopLowHighQuery,
  responseType: grpc_web_definition_pb.TopLowHighResult
};

Symbol.GetAllSymbols = {
  methodName: "GetAllSymbols",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.Exchange,
  responseType: grpc_web_definition_pb.StockModels
};

Symbol.GetAllSymbolsWebsite = {
  methodName: "GetAllSymbolsWebsite",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.Exchange,
  responseType: grpc_web_definition_pb.StockModelsWebsite
};

Symbol.GetFinancialIdentity = {
  methodName: "GetFinancialIdentity",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.SymbolIdentity
};

Symbol.ScreenSymbolsMultipleExchanges = {
  methodName: "ScreenSymbolsMultipleExchanges",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.ScreenSymbolsMultipleExchangesQuery,
  responseType: grpc_web_definition_pb.ScreenSymbolResult
};

Symbol.GetListSectors = {
  methodName: "GetListSectors",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SectorQuery,
  responseType: grpc_web_definition_pb.ListSectors
};

Symbol.GetCountForType = {
  methodName: "GetCountForType",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.GetCountQuery,
  responseType: grpc_web_definition_pb.GetCountResult
};

Symbol.GetOptionDate = {
  methodName: "GetOptionDate",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolOptionDateQuery,
  responseType: grpc_web_definition_pb.SymbolOptionDateResponse
};

Symbol.GetOption = {
  methodName: "GetOption",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolOptionQuery,
  responseType: grpc_web_definition_pb.ListOptions
};

Symbol.GetOption2 = {
  methodName: "GetOption2",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolOptionQuery,
  responseType: grpc_web_definition_pb.ListOptions2
};

Symbol.GetPriceByOptionId = {
  methodName: "GetPriceByOptionId",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.OptionQuery,
  responseType: grpc_web_definition_pb.ListOptionPrices
};

Symbol.GetOHLCByOptionId = {
  methodName: "GetOHLCByOptionId",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.OptionQuery,
  responseType: grpc_web_definition_pb.ListEodOptionPrice
};

Symbol.GetChartOptionByOptionId = {
  methodName: "GetChartOptionByOptionId",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.OptionQuery,
  responseType: grpc_web_definition_pb.OptionChartResponse
};

Symbol.GetComments = {
  methodName: "GetComments",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolNewsQuery,
  responseType: grpc_web_definition_pb.CommentsResult
};

Symbol.DeleteExpiredOption = {
  methodName: "DeleteExpiredOption",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.DeleteQuery,
  responseType: grpc_web_definition_pb.Response
};

Symbol.GetOptionRatio = {
  methodName: "GetOptionRatio",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.StockRaw,
  responseType: grpc_web_definition_pb.ListCallPutRatioResponse
};

Symbol.GetEps = {
  methodName: "GetEps",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.EpsResult
};

Symbol.GetRevenue = {
  methodName: "GetRevenue",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.EpsResult
};

Symbol.GetNetIncome = {
  methodName: "GetNetIncome",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.EpsResult
};

Symbol.GetFreeCashFlow = {
  methodName: "GetFreeCashFlow",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.EpsResult
};

Symbol.GetDebt = {
  methodName: "GetDebt",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.EpsResult
};

Symbol.GetInsideTrades = {
  methodName: "GetInsideTrades",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.InsideTradesResult
};

Symbol.GetHolder = {
  methodName: "GetHolder",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.Holders
};

Symbol.GetStocksByHolder = {
  methodName: "GetStocksByHolder",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.HolderQuery,
  responseType: grpc_web_definition_pb.SymbolHolders
};

Symbol.GetTopOptionDate = {
  methodName: "GetTopOptionDate",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.a,
  responseType: grpc_web_definition_pb.SymbolOptionDateResponse
};

Symbol.GetHolderV2 = {
  methodName: "GetHolderV2",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolHolderQuery,
  responseType: grpc_web_definition_pb.HoldersResponse
};

Symbol.GetFinancials = {
  methodName: "GetFinancials",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.FinancialResponse
};

Symbol.GetTopOptionByDate = {
  methodName: "GetTopOptionByDate",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.OptionDateQuery,
  responseType: grpc_web_definition_pb.ListTopOptions
};

Symbol.GetFinancialFormLink = {
  methodName: "GetFinancialFormLink",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.FinancialFormLink
};

Symbol.GetHolderV3 = {
  methodName: "GetHolderV3",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.CusipQuery,
  responseType: grpc_web_definition_pb.HoldersResponse
};

Symbol.GetAllHolder = {
  methodName: "GetAllHolder",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.a,
  responseType: grpc_web_definition_pb.AllHolders
};

Symbol.GetListHolder = {
  methodName: "GetListHolder",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.HolderFilter,
  responseType: grpc_web_definition_pb.HolderResponse
};

Symbol.GetStocksOnHolder = {
  methodName: "GetStocksOnHolder",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.HolderParam,
  responseType: grpc_web_definition_pb.HolderStockResponse
};

Symbol.GetEarningHistory = {
  methodName: "GetEarningHistory",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.EarningQuery,
  responseType: grpc_web_definition_pb.EarningHistoryResponse
};

Symbol.GetUpgradeAndDowngrade = {
  methodName: "GetUpgradeAndDowngrade",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.ListUpgradeDowngradeResponse
};

Symbol.GetTrends = {
  methodName: "GetTrends",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.ListTrendsResponse
};

Symbol.GetNextEarning = {
  methodName: "GetNextEarning",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.ListEarningResponse
};

Symbol.GetHotListStock = {
  methodName: "GetHotListStock",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.a,
  responseType: grpc_web_definition_pb.HotListStockResponse
};

Symbol.GetDetailListHotStock = {
  methodName: "GetDetailListHotStock",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.HotListStockQuery,
  responseType: grpc_web_definition_pb.HotListDetailStockResponse
};

Symbol.GetDetailListHotStockV2 = {
  methodName: "GetDetailListHotStockV2",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.HotListStockV2Query,
  responseType: grpc_web_definition_pb.HotListDetailStockV2Response
};

Symbol.GetIndividualSpecial = {
  methodName: "GetIndividualSpecial",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.IndividualSpecialResponse
};

Symbol.GetNextEarningDate = {
  methodName: "GetNextEarningDate",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.a,
  responseType: grpc_web_definition_pb.NextEarningDatesResponse
};

Symbol.GetStocksForEarningDate = {
  methodName: "GetStocksForEarningDate",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.EarningQueryDate,
  responseType: grpc_web_definition_pb.EarningStockResponse
};

Symbol.GetListIndustry = {
  methodName: "GetListIndustry",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.a,
  responseType: grpc_web_definition_pb.IndustryResponse
};

Symbol.GetIndustryChart = {
  methodName: "GetIndustryChart",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.IndustryParam,
  responseType: grpc_web_definition_pb.IndustryChartResponse
};

Symbol.GetOptionAggregate = {
  methodName: "GetOptionAggregate",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.SymbolQuery,
  responseType: grpc_web_definition_pb.OptionAggregateResponse
};

Symbol.Test = {
  methodName: "Test",
  service: Symbol,
  requestStream: false,
  responseStream: false,
  requestType: grpc_web_definition_pb.a,
  responseType: grpc_web_definition_pb.OptionAggregateResponse
};

exports.Symbol = Symbol;

function SymbolClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SymbolClient.prototype.getSymbol = function getSymbol(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetSymbol, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getSearchSuggestion = function getSearchSuggestion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetSearchSuggestion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getScreenerOptions = function getScreenerOptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetScreenerOptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.screenSymbols = function screenSymbols(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.ScreenSymbols, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getWatchList = function getWatchList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetWatchList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getSymbolNews = function getSymbolNews(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetSymbolNews, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.removeSymbol = function removeSymbol(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.RemoveSymbol, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.get52WeekLowHigh = function get52WeekLowHigh(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.Get52WeekLowHigh, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getAllSymbols = function getAllSymbols(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetAllSymbols, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getAllSymbolsWebsite = function getAllSymbolsWebsite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetAllSymbolsWebsite, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getFinancialIdentity = function getFinancialIdentity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetFinancialIdentity, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.screenSymbolsMultipleExchanges = function screenSymbolsMultipleExchanges(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.ScreenSymbolsMultipleExchanges, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getListSectors = function getListSectors(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetListSectors, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getCountForType = function getCountForType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetCountForType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getOptionDate = function getOptionDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetOptionDate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getOption = function getOption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetOption, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getOption2 = function getOption2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetOption2, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getPriceByOptionId = function getPriceByOptionId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetPriceByOptionId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getOHLCByOptionId = function getOHLCByOptionId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetOHLCByOptionId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getChartOptionByOptionId = function getChartOptionByOptionId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetChartOptionByOptionId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getComments = function getComments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetComments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.deleteExpiredOption = function deleteExpiredOption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.DeleteExpiredOption, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getOptionRatio = function getOptionRatio(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetOptionRatio, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getEps = function getEps(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetEps, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getRevenue = function getRevenue(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetRevenue, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getNetIncome = function getNetIncome(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetNetIncome, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getFreeCashFlow = function getFreeCashFlow(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetFreeCashFlow, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getDebt = function getDebt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetDebt, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getInsideTrades = function getInsideTrades(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetInsideTrades, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getHolder = function getHolder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetHolder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getStocksByHolder = function getStocksByHolder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetStocksByHolder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getTopOptionDate = function getTopOptionDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetTopOptionDate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getHolderV2 = function getHolderV2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetHolderV2, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getFinancials = function getFinancials(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetFinancials, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getTopOptionByDate = function getTopOptionByDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetTopOptionByDate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getFinancialFormLink = function getFinancialFormLink(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetFinancialFormLink, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getHolderV3 = function getHolderV3(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetHolderV3, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getAllHolder = function getAllHolder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetAllHolder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getListHolder = function getListHolder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetListHolder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getStocksOnHolder = function getStocksOnHolder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetStocksOnHolder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getEarningHistory = function getEarningHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetEarningHistory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getUpgradeAndDowngrade = function getUpgradeAndDowngrade(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetUpgradeAndDowngrade, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getTrends = function getTrends(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetTrends, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getNextEarning = function getNextEarning(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetNextEarning, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getHotListStock = function getHotListStock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetHotListStock, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getDetailListHotStock = function getDetailListHotStock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetDetailListHotStock, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getDetailListHotStockV2 = function getDetailListHotStockV2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetDetailListHotStockV2, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getIndividualSpecial = function getIndividualSpecial(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetIndividualSpecial, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getNextEarningDate = function getNextEarningDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetNextEarningDate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getStocksForEarningDate = function getStocksForEarningDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetStocksForEarningDate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getListIndustry = function getListIndustry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetListIndustry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getIndustryChart = function getIndustryChart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetIndustryChart, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.getOptionAggregate = function getOptionAggregate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.GetOptionAggregate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SymbolClient.prototype.test = function test(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Symbol.Test, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SymbolClient = SymbolClient;

