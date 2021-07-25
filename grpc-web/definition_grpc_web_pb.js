/**
 * @fileoverview gRPC-Web generated client stub for stockscreener_public
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.stockscreener_public = require('./definition_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stockscreener_public.SymbolClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stockscreener_public.SymbolPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.SymbolDetail>}
 */
const methodDescriptor_Symbol_GetSymbol = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetSymbol',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.SymbolDetail,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolDetail.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.SymbolDetail>}
 */
const methodInfo_Symbol_GetSymbol = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.SymbolDetail,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolDetail.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.SymbolDetail)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.SymbolDetail>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getSymbol =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetSymbol',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetSymbol,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.SymbolDetail>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getSymbol =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetSymbol',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetSymbol);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SearchQuery,
 *   !proto.stockscreener_public.SearchSuggestionResponse>}
 */
const methodDescriptor_Symbol_GetSearchSuggestion = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetSearchSuggestion',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SearchQuery,
  proto.stockscreener_public.SearchSuggestionResponse,
  /**
   * @param {!proto.stockscreener_public.SearchQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SearchSuggestionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SearchQuery,
 *   !proto.stockscreener_public.SearchSuggestionResponse>}
 */
const methodInfo_Symbol_GetSearchSuggestion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.SearchSuggestionResponse,
  /**
   * @param {!proto.stockscreener_public.SearchQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SearchSuggestionResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SearchQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.SearchSuggestionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.SearchSuggestionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getSearchSuggestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetSearchSuggestion',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetSearchSuggestion,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SearchQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.SearchSuggestionResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getSearchSuggestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetSearchSuggestion',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetSearchSuggestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.ScreenerOptsQuery,
 *   !proto.stockscreener_public.ScreenerOptions>}
 */
const methodDescriptor_Symbol_GetScreenerOptions = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetScreenerOptions',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.ScreenerOptsQuery,
  proto.stockscreener_public.ScreenerOptions,
  /**
   * @param {!proto.stockscreener_public.ScreenerOptsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ScreenerOptions.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.ScreenerOptsQuery,
 *   !proto.stockscreener_public.ScreenerOptions>}
 */
const methodInfo_Symbol_GetScreenerOptions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ScreenerOptions,
  /**
   * @param {!proto.stockscreener_public.ScreenerOptsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ScreenerOptions.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.ScreenerOptsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ScreenerOptions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ScreenerOptions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getScreenerOptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetScreenerOptions',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetScreenerOptions,
      callback);
};


/**
 * @param {!proto.stockscreener_public.ScreenerOptsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ScreenerOptions>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getScreenerOptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetScreenerOptions',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetScreenerOptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.ScreenSymbolsQuery,
 *   !proto.stockscreener_public.ScreenSymbolResult>}
 */
const methodDescriptor_Symbol_ScreenSymbols = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/ScreenSymbols',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.ScreenSymbolsQuery,
  proto.stockscreener_public.ScreenSymbolResult,
  /**
   * @param {!proto.stockscreener_public.ScreenSymbolsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ScreenSymbolResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.ScreenSymbolsQuery,
 *   !proto.stockscreener_public.ScreenSymbolResult>}
 */
const methodInfo_Symbol_ScreenSymbols = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ScreenSymbolResult,
  /**
   * @param {!proto.stockscreener_public.ScreenSymbolsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ScreenSymbolResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.ScreenSymbolsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ScreenSymbolResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ScreenSymbolResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.screenSymbols =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/ScreenSymbols',
      request,
      metadata || {},
      methodDescriptor_Symbol_ScreenSymbols,
      callback);
};


/**
 * @param {!proto.stockscreener_public.ScreenSymbolsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ScreenSymbolResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.screenSymbols =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/ScreenSymbols',
      request,
      metadata || {},
      methodDescriptor_Symbol_ScreenSymbols);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.WatchListQuery,
 *   !proto.stockscreener_public.WatchListResponse>}
 */
const methodDescriptor_Symbol_GetWatchList = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetWatchList',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.WatchListQuery,
  proto.stockscreener_public.WatchListResponse,
  /**
   * @param {!proto.stockscreener_public.WatchListQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.WatchListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.WatchListQuery,
 *   !proto.stockscreener_public.WatchListResponse>}
 */
const methodInfo_Symbol_GetWatchList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.WatchListResponse,
  /**
   * @param {!proto.stockscreener_public.WatchListQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.WatchListResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.WatchListQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.WatchListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.WatchListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getWatchList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetWatchList',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetWatchList,
      callback);
};


/**
 * @param {!proto.stockscreener_public.WatchListQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.WatchListResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getWatchList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetWatchList',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetWatchList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolNewsQuery,
 *   !proto.stockscreener_public.SymbolNewsResult>}
 */
const methodDescriptor_Symbol_GetSymbolNews = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetSymbolNews',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolNewsQuery,
  proto.stockscreener_public.SymbolNewsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolNewsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolNewsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolNewsQuery,
 *   !proto.stockscreener_public.SymbolNewsResult>}
 */
const methodInfo_Symbol_GetSymbolNews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.SymbolNewsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolNewsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolNewsResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolNewsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.SymbolNewsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.SymbolNewsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getSymbolNews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetSymbolNews',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetSymbolNews,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolNewsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.SymbolNewsResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getSymbolNews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetSymbolNews',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetSymbolNews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.InfoResult>}
 */
const methodDescriptor_Symbol_RemoveSymbol = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/RemoveSymbol',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.InfoResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.InfoResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.InfoResult>}
 */
const methodInfo_Symbol_RemoveSymbol = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.InfoResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.InfoResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.InfoResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.InfoResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.removeSymbol =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/RemoveSymbol',
      request,
      metadata || {},
      methodDescriptor_Symbol_RemoveSymbol,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.InfoResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.removeSymbol =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/RemoveSymbol',
      request,
      metadata || {},
      methodDescriptor_Symbol_RemoveSymbol);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.TopLowHighQuery,
 *   !proto.stockscreener_public.TopLowHighResult>}
 */
const methodDescriptor_Symbol_Get52WeekLowHigh = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/Get52WeekLowHigh',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.TopLowHighQuery,
  proto.stockscreener_public.TopLowHighResult,
  /**
   * @param {!proto.stockscreener_public.TopLowHighQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.TopLowHighResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.TopLowHighQuery,
 *   !proto.stockscreener_public.TopLowHighResult>}
 */
const methodInfo_Symbol_Get52WeekLowHigh = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.TopLowHighResult,
  /**
   * @param {!proto.stockscreener_public.TopLowHighQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.TopLowHighResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.TopLowHighQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.TopLowHighResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.TopLowHighResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.get52WeekLowHigh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/Get52WeekLowHigh',
      request,
      metadata || {},
      methodDescriptor_Symbol_Get52WeekLowHigh,
      callback);
};


/**
 * @param {!proto.stockscreener_public.TopLowHighQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.TopLowHighResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.get52WeekLowHigh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/Get52WeekLowHigh',
      request,
      metadata || {},
      methodDescriptor_Symbol_Get52WeekLowHigh);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.Exchange,
 *   !proto.stockscreener_public.StockModels>}
 */
const methodDescriptor_Symbol_GetAllSymbols = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetAllSymbols',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.Exchange,
  proto.stockscreener_public.StockModels,
  /**
   * @param {!proto.stockscreener_public.Exchange} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.StockModels.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.Exchange,
 *   !proto.stockscreener_public.StockModels>}
 */
const methodInfo_Symbol_GetAllSymbols = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.StockModels,
  /**
   * @param {!proto.stockscreener_public.Exchange} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.StockModels.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.Exchange} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.StockModels)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.StockModels>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getAllSymbols =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetAllSymbols',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetAllSymbols,
      callback);
};


/**
 * @param {!proto.stockscreener_public.Exchange} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.StockModels>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getAllSymbols =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetAllSymbols',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetAllSymbols);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.Exchange,
 *   !proto.stockscreener_public.StockModelsWebsite>}
 */
const methodDescriptor_Symbol_GetAllSymbolsWebsite = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetAllSymbolsWebsite',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.Exchange,
  proto.stockscreener_public.StockModelsWebsite,
  /**
   * @param {!proto.stockscreener_public.Exchange} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.StockModelsWebsite.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.Exchange,
 *   !proto.stockscreener_public.StockModelsWebsite>}
 */
const methodInfo_Symbol_GetAllSymbolsWebsite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.StockModelsWebsite,
  /**
   * @param {!proto.stockscreener_public.Exchange} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.StockModelsWebsite.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.Exchange} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.StockModelsWebsite)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.StockModelsWebsite>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getAllSymbolsWebsite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetAllSymbolsWebsite',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetAllSymbolsWebsite,
      callback);
};


/**
 * @param {!proto.stockscreener_public.Exchange} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.StockModelsWebsite>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getAllSymbolsWebsite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetAllSymbolsWebsite',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetAllSymbolsWebsite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.SymbolIdentity>}
 */
const methodDescriptor_Symbol_GetFinancialIdentity = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetFinancialIdentity',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.SymbolIdentity,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolIdentity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.SymbolIdentity>}
 */
const methodInfo_Symbol_GetFinancialIdentity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.SymbolIdentity,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolIdentity.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.SymbolIdentity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.SymbolIdentity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getFinancialIdentity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFinancialIdentity',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFinancialIdentity,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.SymbolIdentity>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getFinancialIdentity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFinancialIdentity',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFinancialIdentity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.ScreenSymbolsMultipleExchangesQuery,
 *   !proto.stockscreener_public.ScreenSymbolResult>}
 */
const methodDescriptor_Symbol_ScreenSymbolsMultipleExchanges = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/ScreenSymbolsMultipleExchanges',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.ScreenSymbolsMultipleExchangesQuery,
  proto.stockscreener_public.ScreenSymbolResult,
  /**
   * @param {!proto.stockscreener_public.ScreenSymbolsMultipleExchangesQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ScreenSymbolResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.ScreenSymbolsMultipleExchangesQuery,
 *   !proto.stockscreener_public.ScreenSymbolResult>}
 */
const methodInfo_Symbol_ScreenSymbolsMultipleExchanges = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ScreenSymbolResult,
  /**
   * @param {!proto.stockscreener_public.ScreenSymbolsMultipleExchangesQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ScreenSymbolResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.ScreenSymbolsMultipleExchangesQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ScreenSymbolResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ScreenSymbolResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.screenSymbolsMultipleExchanges =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/ScreenSymbolsMultipleExchanges',
      request,
      metadata || {},
      methodDescriptor_Symbol_ScreenSymbolsMultipleExchanges,
      callback);
};


/**
 * @param {!proto.stockscreener_public.ScreenSymbolsMultipleExchangesQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ScreenSymbolResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.screenSymbolsMultipleExchanges =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/ScreenSymbolsMultipleExchanges',
      request,
      metadata || {},
      methodDescriptor_Symbol_ScreenSymbolsMultipleExchanges);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SectorQuery,
 *   !proto.stockscreener_public.ListSectors>}
 */
const methodDescriptor_Symbol_GetListSectors = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetListSectors',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SectorQuery,
  proto.stockscreener_public.ListSectors,
  /**
   * @param {!proto.stockscreener_public.SectorQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListSectors.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SectorQuery,
 *   !proto.stockscreener_public.ListSectors>}
 */
const methodInfo_Symbol_GetListSectors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListSectors,
  /**
   * @param {!proto.stockscreener_public.SectorQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListSectors.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SectorQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListSectors)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListSectors>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getListSectors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetListSectors',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetListSectors,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SectorQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListSectors>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getListSectors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetListSectors',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetListSectors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.GetCountQuery,
 *   !proto.stockscreener_public.GetCountResult>}
 */
const methodDescriptor_Symbol_GetCountForType = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetCountForType',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.GetCountQuery,
  proto.stockscreener_public.GetCountResult,
  /**
   * @param {!proto.stockscreener_public.GetCountQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.GetCountResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.GetCountQuery,
 *   !proto.stockscreener_public.GetCountResult>}
 */
const methodInfo_Symbol_GetCountForType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.GetCountResult,
  /**
   * @param {!proto.stockscreener_public.GetCountQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.GetCountResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.GetCountQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.GetCountResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.GetCountResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getCountForType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetCountForType',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetCountForType,
      callback);
};


/**
 * @param {!proto.stockscreener_public.GetCountQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.GetCountResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getCountForType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetCountForType',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetCountForType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolOptionDateQuery,
 *   !proto.stockscreener_public.SymbolOptionDateResponse>}
 */
const methodDescriptor_Symbol_GetOptionDate = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetOptionDate',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolOptionDateQuery,
  proto.stockscreener_public.SymbolOptionDateResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolOptionDateQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolOptionDateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolOptionDateQuery,
 *   !proto.stockscreener_public.SymbolOptionDateResponse>}
 */
const methodInfo_Symbol_GetOptionDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.SymbolOptionDateResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolOptionDateQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolOptionDateResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolOptionDateQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.SymbolOptionDateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.SymbolOptionDateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getOptionDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOptionDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOptionDate,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolOptionDateQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.SymbolOptionDateResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getOptionDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOptionDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOptionDate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolOptionQuery,
 *   !proto.stockscreener_public.ListOptions>}
 */
const methodDescriptor_Symbol_GetOption = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetOption',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolOptionQuery,
  proto.stockscreener_public.ListOptions,
  /**
   * @param {!proto.stockscreener_public.SymbolOptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListOptions.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolOptionQuery,
 *   !proto.stockscreener_public.ListOptions>}
 */
const methodInfo_Symbol_GetOption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListOptions,
  /**
   * @param {!proto.stockscreener_public.SymbolOptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListOptions.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolOptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListOptions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListOptions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOption',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOption,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolOptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListOptions>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOption',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.OptionQuery,
 *   !proto.stockscreener_public.ListOptionPrices>}
 */
const methodDescriptor_Symbol_GetPriceByOptionId = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetPriceByOptionId',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.OptionQuery,
  proto.stockscreener_public.ListOptionPrices,
  /**
   * @param {!proto.stockscreener_public.OptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListOptionPrices.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.OptionQuery,
 *   !proto.stockscreener_public.ListOptionPrices>}
 */
const methodInfo_Symbol_GetPriceByOptionId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListOptionPrices,
  /**
   * @param {!proto.stockscreener_public.OptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListOptionPrices.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.OptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListOptionPrices)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListOptionPrices>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getPriceByOptionId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetPriceByOptionId',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetPriceByOptionId,
      callback);
};


/**
 * @param {!proto.stockscreener_public.OptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListOptionPrices>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getPriceByOptionId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetPriceByOptionId',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetPriceByOptionId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.OptionQuery,
 *   !proto.stockscreener_public.ListEodOptionPrice>}
 */
const methodDescriptor_Symbol_GetOHLCByOptionId = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetOHLCByOptionId',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.OptionQuery,
  proto.stockscreener_public.ListEodOptionPrice,
  /**
   * @param {!proto.stockscreener_public.OptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListEodOptionPrice.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.OptionQuery,
 *   !proto.stockscreener_public.ListEodOptionPrice>}
 */
const methodInfo_Symbol_GetOHLCByOptionId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListEodOptionPrice,
  /**
   * @param {!proto.stockscreener_public.OptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListEodOptionPrice.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.OptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListEodOptionPrice)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListEodOptionPrice>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getOHLCByOptionId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOHLCByOptionId',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOHLCByOptionId,
      callback);
};


/**
 * @param {!proto.stockscreener_public.OptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListEodOptionPrice>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getOHLCByOptionId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOHLCByOptionId',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOHLCByOptionId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.OptionQuery,
 *   !proto.stockscreener_public.OptionChartResponse>}
 */
const methodDescriptor_Symbol_GetChartOptionByOptionId = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetChartOptionByOptionId',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.OptionQuery,
  proto.stockscreener_public.OptionChartResponse,
  /**
   * @param {!proto.stockscreener_public.OptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.OptionChartResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.OptionQuery,
 *   !proto.stockscreener_public.OptionChartResponse>}
 */
const methodInfo_Symbol_GetChartOptionByOptionId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.OptionChartResponse,
  /**
   * @param {!proto.stockscreener_public.OptionQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.OptionChartResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.OptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.OptionChartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.OptionChartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getChartOptionByOptionId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetChartOptionByOptionId',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetChartOptionByOptionId,
      callback);
};


/**
 * @param {!proto.stockscreener_public.OptionQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.OptionChartResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getChartOptionByOptionId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetChartOptionByOptionId',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetChartOptionByOptionId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolNewsQuery,
 *   !proto.stockscreener_public.CommentsResult>}
 */
const methodDescriptor_Symbol_GetComments = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetComments',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolNewsQuery,
  proto.stockscreener_public.CommentsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolNewsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.CommentsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolNewsQuery,
 *   !proto.stockscreener_public.CommentsResult>}
 */
const methodInfo_Symbol_GetComments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.CommentsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolNewsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.CommentsResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolNewsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.CommentsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.CommentsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getComments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetComments',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetComments,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolNewsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.CommentsResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getComments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetComments',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetComments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.DeleteQuery,
 *   !proto.stockscreener_public.Response>}
 */
const methodDescriptor_Symbol_DeleteExpiredOption = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/DeleteExpiredOption',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.DeleteQuery,
  proto.stockscreener_public.Response,
  /**
   * @param {!proto.stockscreener_public.DeleteQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.DeleteQuery,
 *   !proto.stockscreener_public.Response>}
 */
const methodInfo_Symbol_DeleteExpiredOption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.Response,
  /**
   * @param {!proto.stockscreener_public.DeleteQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.Response.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.DeleteQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.deleteExpiredOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/DeleteExpiredOption',
      request,
      metadata || {},
      methodDescriptor_Symbol_DeleteExpiredOption,
      callback);
};


/**
 * @param {!proto.stockscreener_public.DeleteQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.Response>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.deleteExpiredOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/DeleteExpiredOption',
      request,
      metadata || {},
      methodDescriptor_Symbol_DeleteExpiredOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.StockRaw,
 *   !proto.stockscreener_public.ListCallPutRatioResponse>}
 */
const methodDescriptor_Symbol_GetOptionRatio = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetOptionRatio',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.StockRaw,
  proto.stockscreener_public.ListCallPutRatioResponse,
  /**
   * @param {!proto.stockscreener_public.StockRaw} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListCallPutRatioResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.StockRaw,
 *   !proto.stockscreener_public.ListCallPutRatioResponse>}
 */
const methodInfo_Symbol_GetOptionRatio = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListCallPutRatioResponse,
  /**
   * @param {!proto.stockscreener_public.StockRaw} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListCallPutRatioResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.StockRaw} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListCallPutRatioResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListCallPutRatioResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getOptionRatio =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOptionRatio',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOptionRatio,
      callback);
};


/**
 * @param {!proto.stockscreener_public.StockRaw} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListCallPutRatioResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getOptionRatio =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOptionRatio',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOptionRatio);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodDescriptor_Symbol_GetEps = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetEps',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodInfo_Symbol_GetEps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.EpsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.EpsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getEps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetEps',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetEps,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.EpsResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getEps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetEps',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetEps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodDescriptor_Symbol_GetRevenue = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetRevenue',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodInfo_Symbol_GetRevenue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.EpsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.EpsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getRevenue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetRevenue',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetRevenue,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.EpsResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getRevenue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetRevenue',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetRevenue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodDescriptor_Symbol_GetNetIncome = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetNetIncome',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodInfo_Symbol_GetNetIncome = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.EpsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.EpsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getNetIncome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetNetIncome',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetNetIncome,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.EpsResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getNetIncome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetNetIncome',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetNetIncome);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodDescriptor_Symbol_GetFreeCashFlow = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetFreeCashFlow',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodInfo_Symbol_GetFreeCashFlow = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.EpsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.EpsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getFreeCashFlow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFreeCashFlow',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFreeCashFlow,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.EpsResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getFreeCashFlow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFreeCashFlow',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFreeCashFlow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodDescriptor_Symbol_GetDebt = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetDebt',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.EpsResult>}
 */
const methodInfo_Symbol_GetDebt = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.EpsResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EpsResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.EpsResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.EpsResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getDebt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetDebt',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetDebt,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.EpsResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getDebt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetDebt',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetDebt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.InsideTradesResult>}
 */
const methodDescriptor_Symbol_GetInsideTrades = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetInsideTrades',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.InsideTradesResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.InsideTradesResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.InsideTradesResult>}
 */
const methodInfo_Symbol_GetInsideTrades = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.InsideTradesResult,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.InsideTradesResult.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.InsideTradesResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.InsideTradesResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getInsideTrades =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetInsideTrades',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetInsideTrades,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.InsideTradesResult>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getInsideTrades =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetInsideTrades',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetInsideTrades);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.Holders>}
 */
const methodDescriptor_Symbol_GetHolder = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetHolder',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.Holders,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.Holders.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.Holders>}
 */
const methodInfo_Symbol_GetHolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.Holders,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.Holders.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.Holders)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.Holders>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getHolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHolder,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.Holders>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getHolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.HolderQuery,
 *   !proto.stockscreener_public.SymbolHolders>}
 */
const methodDescriptor_Symbol_GetStocksByHolder = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetStocksByHolder',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.HolderQuery,
  proto.stockscreener_public.SymbolHolders,
  /**
   * @param {!proto.stockscreener_public.HolderQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolHolders.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.HolderQuery,
 *   !proto.stockscreener_public.SymbolHolders>}
 */
const methodInfo_Symbol_GetStocksByHolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.SymbolHolders,
  /**
   * @param {!proto.stockscreener_public.HolderQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolHolders.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.HolderQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.SymbolHolders)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.SymbolHolders>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getStocksByHolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetStocksByHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetStocksByHolder,
      callback);
};


/**
 * @param {!proto.stockscreener_public.HolderQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.SymbolHolders>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getStocksByHolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetStocksByHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetStocksByHolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.SymbolOptionDateResponse>}
 */
const methodDescriptor_Symbol_GetTopOptionDate = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetTopOptionDate',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.a,
  proto.stockscreener_public.SymbolOptionDateResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolOptionDateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.SymbolOptionDateResponse>}
 */
const methodInfo_Symbol_GetTopOptionDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.SymbolOptionDateResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.SymbolOptionDateResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.SymbolOptionDateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.SymbolOptionDateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getTopOptionDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetTopOptionDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetTopOptionDate,
      callback);
};


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.SymbolOptionDateResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getTopOptionDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetTopOptionDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetTopOptionDate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolHolderQuery,
 *   !proto.stockscreener_public.HoldersResponse>}
 */
const methodDescriptor_Symbol_GetHolderV2 = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetHolderV2',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolHolderQuery,
  proto.stockscreener_public.HoldersResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolHolderQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HoldersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolHolderQuery,
 *   !proto.stockscreener_public.HoldersResponse>}
 */
const methodInfo_Symbol_GetHolderV2 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.HoldersResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolHolderQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HoldersResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolHolderQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.HoldersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.HoldersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getHolderV2 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHolderV2',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHolderV2,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolHolderQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.HoldersResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getHolderV2 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHolderV2',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHolderV2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.FinancialResponse>}
 */
const methodDescriptor_Symbol_GetFinancials = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetFinancials',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.FinancialResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.FinancialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.FinancialResponse>}
 */
const methodInfo_Symbol_GetFinancials = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.FinancialResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.FinancialResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.FinancialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.FinancialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getFinancials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFinancials',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFinancials,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.FinancialResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getFinancials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFinancials',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFinancials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.OptionDateQuery,
 *   !proto.stockscreener_public.ListTopOptions>}
 */
const methodDescriptor_Symbol_GetTopOptionByDate = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetTopOptionByDate',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.OptionDateQuery,
  proto.stockscreener_public.ListTopOptions,
  /**
   * @param {!proto.stockscreener_public.OptionDateQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListTopOptions.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.OptionDateQuery,
 *   !proto.stockscreener_public.ListTopOptions>}
 */
const methodInfo_Symbol_GetTopOptionByDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListTopOptions,
  /**
   * @param {!proto.stockscreener_public.OptionDateQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListTopOptions.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.OptionDateQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListTopOptions)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListTopOptions>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getTopOptionByDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetTopOptionByDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetTopOptionByDate,
      callback);
};


/**
 * @param {!proto.stockscreener_public.OptionDateQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListTopOptions>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getTopOptionByDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetTopOptionByDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetTopOptionByDate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.FinancialFormLink>}
 */
const methodDescriptor_Symbol_GetFinancialFormLink = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetFinancialFormLink',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.FinancialFormLink,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.FinancialFormLink.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.FinancialFormLink>}
 */
const methodInfo_Symbol_GetFinancialFormLink = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.FinancialFormLink,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.FinancialFormLink.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.FinancialFormLink)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.FinancialFormLink>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getFinancialFormLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFinancialFormLink',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFinancialFormLink,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.FinancialFormLink>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getFinancialFormLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetFinancialFormLink',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetFinancialFormLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.CusipQuery,
 *   !proto.stockscreener_public.HoldersResponse>}
 */
const methodDescriptor_Symbol_GetHolderV3 = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetHolderV3',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.CusipQuery,
  proto.stockscreener_public.HoldersResponse,
  /**
   * @param {!proto.stockscreener_public.CusipQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HoldersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.CusipQuery,
 *   !proto.stockscreener_public.HoldersResponse>}
 */
const methodInfo_Symbol_GetHolderV3 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.HoldersResponse,
  /**
   * @param {!proto.stockscreener_public.CusipQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HoldersResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.CusipQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.HoldersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.HoldersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getHolderV3 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHolderV3',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHolderV3,
      callback);
};


/**
 * @param {!proto.stockscreener_public.CusipQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.HoldersResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getHolderV3 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHolderV3',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHolderV3);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.AllHolders>}
 */
const methodDescriptor_Symbol_GetAllHolder = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetAllHolder',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.a,
  proto.stockscreener_public.AllHolders,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.AllHolders.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.AllHolders>}
 */
const methodInfo_Symbol_GetAllHolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.AllHolders,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.AllHolders.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.AllHolders)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.AllHolders>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getAllHolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetAllHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetAllHolder,
      callback);
};


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.AllHolders>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getAllHolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetAllHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetAllHolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.HolderFilter,
 *   !proto.stockscreener_public.HolderResponse>}
 */
const methodDescriptor_Symbol_GetListHolder = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetListHolder',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.HolderFilter,
  proto.stockscreener_public.HolderResponse,
  /**
   * @param {!proto.stockscreener_public.HolderFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HolderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.HolderFilter,
 *   !proto.stockscreener_public.HolderResponse>}
 */
const methodInfo_Symbol_GetListHolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.HolderResponse,
  /**
   * @param {!proto.stockscreener_public.HolderFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HolderResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.HolderFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.HolderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.HolderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getListHolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetListHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetListHolder,
      callback);
};


/**
 * @param {!proto.stockscreener_public.HolderFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.HolderResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getListHolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetListHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetListHolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.HolderParam,
 *   !proto.stockscreener_public.HolderStockResponse>}
 */
const methodDescriptor_Symbol_GetStocksOnHolder = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetStocksOnHolder',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.HolderParam,
  proto.stockscreener_public.HolderStockResponse,
  /**
   * @param {!proto.stockscreener_public.HolderParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HolderStockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.HolderParam,
 *   !proto.stockscreener_public.HolderStockResponse>}
 */
const methodInfo_Symbol_GetStocksOnHolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.HolderStockResponse,
  /**
   * @param {!proto.stockscreener_public.HolderParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HolderStockResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.HolderParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.HolderStockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.HolderStockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getStocksOnHolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetStocksOnHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetStocksOnHolder,
      callback);
};


/**
 * @param {!proto.stockscreener_public.HolderParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.HolderStockResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getStocksOnHolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetStocksOnHolder',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetStocksOnHolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.EarningQuery,
 *   !proto.stockscreener_public.EarningHistoryResponse>}
 */
const methodDescriptor_Symbol_GetEarningHistory = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetEarningHistory',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.EarningQuery,
  proto.stockscreener_public.EarningHistoryResponse,
  /**
   * @param {!proto.stockscreener_public.EarningQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EarningHistoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.EarningQuery,
 *   !proto.stockscreener_public.EarningHistoryResponse>}
 */
const methodInfo_Symbol_GetEarningHistory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.EarningHistoryResponse,
  /**
   * @param {!proto.stockscreener_public.EarningQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EarningHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.EarningQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.EarningHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.EarningHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getEarningHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetEarningHistory',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetEarningHistory,
      callback);
};


/**
 * @param {!proto.stockscreener_public.EarningQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.EarningHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getEarningHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetEarningHistory',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetEarningHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.ListUpgradeDowngradeResponse>}
 */
const methodDescriptor_Symbol_GetUpgradeAndDowngrade = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetUpgradeAndDowngrade',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.ListUpgradeDowngradeResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListUpgradeDowngradeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.ListUpgradeDowngradeResponse>}
 */
const methodInfo_Symbol_GetUpgradeAndDowngrade = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListUpgradeDowngradeResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListUpgradeDowngradeResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListUpgradeDowngradeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListUpgradeDowngradeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getUpgradeAndDowngrade =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetUpgradeAndDowngrade',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetUpgradeAndDowngrade,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListUpgradeDowngradeResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getUpgradeAndDowngrade =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetUpgradeAndDowngrade',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetUpgradeAndDowngrade);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.ListTrendsResponse>}
 */
const methodDescriptor_Symbol_GetTrends = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetTrends',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.ListTrendsResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListTrendsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.ListTrendsResponse>}
 */
const methodInfo_Symbol_GetTrends = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListTrendsResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListTrendsResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListTrendsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListTrendsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getTrends =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetTrends',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetTrends,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListTrendsResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getTrends =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetTrends',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetTrends);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.ListEarningResponse>}
 */
const methodDescriptor_Symbol_GetNextEarning = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetNextEarning',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.ListEarningResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListEarningResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.ListEarningResponse>}
 */
const methodInfo_Symbol_GetNextEarning = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.ListEarningResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.ListEarningResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.ListEarningResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.ListEarningResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getNextEarning =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetNextEarning',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetNextEarning,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.ListEarningResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getNextEarning =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetNextEarning',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetNextEarning);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.HotListStockResponse>}
 */
const methodDescriptor_Symbol_GetHotListStock = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetHotListStock',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.a,
  proto.stockscreener_public.HotListStockResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HotListStockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.HotListStockResponse>}
 */
const methodInfo_Symbol_GetHotListStock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.HotListStockResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HotListStockResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.HotListStockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.HotListStockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getHotListStock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHotListStock',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHotListStock,
      callback);
};


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.HotListStockResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getHotListStock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetHotListStock',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetHotListStock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.HotListStockQuery,
 *   !proto.stockscreener_public.HotListDetailStockResponse>}
 */
const methodDescriptor_Symbol_GetDetailListHotStock = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetDetailListHotStock',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.HotListStockQuery,
  proto.stockscreener_public.HotListDetailStockResponse,
  /**
   * @param {!proto.stockscreener_public.HotListStockQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HotListDetailStockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.HotListStockQuery,
 *   !proto.stockscreener_public.HotListDetailStockResponse>}
 */
const methodInfo_Symbol_GetDetailListHotStock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.HotListDetailStockResponse,
  /**
   * @param {!proto.stockscreener_public.HotListStockQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HotListDetailStockResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.HotListStockQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.HotListDetailStockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.HotListDetailStockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getDetailListHotStock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetDetailListHotStock',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetDetailListHotStock,
      callback);
};


/**
 * @param {!proto.stockscreener_public.HotListStockQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.HotListDetailStockResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getDetailListHotStock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetDetailListHotStock',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetDetailListHotStock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.HotListStockV2Query,
 *   !proto.stockscreener_public.HotListDetailStockV2Response>}
 */
const methodDescriptor_Symbol_GetDetailListHotStockV2 = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetDetailListHotStockV2',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.HotListStockV2Query,
  proto.stockscreener_public.HotListDetailStockV2Response,
  /**
   * @param {!proto.stockscreener_public.HotListStockV2Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HotListDetailStockV2Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.HotListStockV2Query,
 *   !proto.stockscreener_public.HotListDetailStockV2Response>}
 */
const methodInfo_Symbol_GetDetailListHotStockV2 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.HotListDetailStockV2Response,
  /**
   * @param {!proto.stockscreener_public.HotListStockV2Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.HotListDetailStockV2Response.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.HotListStockV2Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.HotListDetailStockV2Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.HotListDetailStockV2Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getDetailListHotStockV2 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetDetailListHotStockV2',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetDetailListHotStockV2,
      callback);
};


/**
 * @param {!proto.stockscreener_public.HotListStockV2Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.HotListDetailStockV2Response>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getDetailListHotStockV2 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetDetailListHotStockV2',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetDetailListHotStockV2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.IndividualSpecialResponse>}
 */
const methodDescriptor_Symbol_GetIndividualSpecial = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetIndividualSpecial',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.IndividualSpecialResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.IndividualSpecialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.IndividualSpecialResponse>}
 */
const methodInfo_Symbol_GetIndividualSpecial = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.IndividualSpecialResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.IndividualSpecialResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.IndividualSpecialResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.IndividualSpecialResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getIndividualSpecial =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetIndividualSpecial',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetIndividualSpecial,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.IndividualSpecialResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getIndividualSpecial =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetIndividualSpecial',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetIndividualSpecial);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.NextEarningDatesResponse>}
 */
const methodDescriptor_Symbol_GetNextEarningDate = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetNextEarningDate',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.a,
  proto.stockscreener_public.NextEarningDatesResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.NextEarningDatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.NextEarningDatesResponse>}
 */
const methodInfo_Symbol_GetNextEarningDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.NextEarningDatesResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.NextEarningDatesResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.NextEarningDatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.NextEarningDatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getNextEarningDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetNextEarningDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetNextEarningDate,
      callback);
};


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.NextEarningDatesResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getNextEarningDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetNextEarningDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetNextEarningDate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.EarningQueryDate,
 *   !proto.stockscreener_public.EarningStockResponse>}
 */
const methodDescriptor_Symbol_GetStocksForEarningDate = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetStocksForEarningDate',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.EarningQueryDate,
  proto.stockscreener_public.EarningStockResponse,
  /**
   * @param {!proto.stockscreener_public.EarningQueryDate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EarningStockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.EarningQueryDate,
 *   !proto.stockscreener_public.EarningStockResponse>}
 */
const methodInfo_Symbol_GetStocksForEarningDate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.EarningStockResponse,
  /**
   * @param {!proto.stockscreener_public.EarningQueryDate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.EarningStockResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.EarningQueryDate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.EarningStockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.EarningStockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getStocksForEarningDate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetStocksForEarningDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetStocksForEarningDate,
      callback);
};


/**
 * @param {!proto.stockscreener_public.EarningQueryDate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.EarningStockResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getStocksForEarningDate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetStocksForEarningDate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetStocksForEarningDate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.IndustryResponse>}
 */
const methodDescriptor_Symbol_GetListIndustry = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetListIndustry',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.a,
  proto.stockscreener_public.IndustryResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.IndustryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.IndustryResponse>}
 */
const methodInfo_Symbol_GetListIndustry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.IndustryResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.IndustryResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.IndustryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.IndustryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getListIndustry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetListIndustry',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetListIndustry,
      callback);
};


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.IndustryResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getListIndustry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetListIndustry',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetListIndustry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.IndustryParam,
 *   !proto.stockscreener_public.IndustryChartResponse>}
 */
const methodDescriptor_Symbol_GetIndustryChart = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetIndustryChart',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.IndustryParam,
  proto.stockscreener_public.IndustryChartResponse,
  /**
   * @param {!proto.stockscreener_public.IndustryParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.IndustryChartResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.IndustryParam,
 *   !proto.stockscreener_public.IndustryChartResponse>}
 */
const methodInfo_Symbol_GetIndustryChart = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.IndustryChartResponse,
  /**
   * @param {!proto.stockscreener_public.IndustryParam} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.IndustryChartResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.IndustryParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.IndustryChartResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.IndustryChartResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getIndustryChart =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetIndustryChart',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetIndustryChart,
      callback);
};


/**
 * @param {!proto.stockscreener_public.IndustryParam} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.IndustryChartResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getIndustryChart =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetIndustryChart',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetIndustryChart);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.OptionAggregateResponse>}
 */
const methodDescriptor_Symbol_GetOptionAggregate = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/GetOptionAggregate',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.SymbolQuery,
  proto.stockscreener_public.OptionAggregateResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.OptionAggregateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.SymbolQuery,
 *   !proto.stockscreener_public.OptionAggregateResponse>}
 */
const methodInfo_Symbol_GetOptionAggregate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.OptionAggregateResponse,
  /**
   * @param {!proto.stockscreener_public.SymbolQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.OptionAggregateResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.OptionAggregateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.OptionAggregateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.getOptionAggregate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOptionAggregate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOptionAggregate,
      callback);
};


/**
 * @param {!proto.stockscreener_public.SymbolQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.OptionAggregateResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.getOptionAggregate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/GetOptionAggregate',
      request,
      metadata || {},
      methodDescriptor_Symbol_GetOptionAggregate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.OptionAggregateResponse>}
 */
const methodDescriptor_Symbol_Test = new grpc.web.MethodDescriptor(
  '/stockscreener_public.Symbol/Test',
  grpc.web.MethodType.UNARY,
  proto.stockscreener_public.a,
  proto.stockscreener_public.OptionAggregateResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.OptionAggregateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stockscreener_public.a,
 *   !proto.stockscreener_public.OptionAggregateResponse>}
 */
const methodInfo_Symbol_Test = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stockscreener_public.OptionAggregateResponse,
  /**
   * @param {!proto.stockscreener_public.a} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stockscreener_public.OptionAggregateResponse.deserializeBinary
);


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stockscreener_public.OptionAggregateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stockscreener_public.OptionAggregateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stockscreener_public.SymbolClient.prototype.test =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stockscreener_public.Symbol/Test',
      request,
      metadata || {},
      methodDescriptor_Symbol_Test,
      callback);
};


/**
 * @param {!proto.stockscreener_public.a} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stockscreener_public.OptionAggregateResponse>}
 *     Promise that resolves to the response
 */
proto.stockscreener_public.SymbolPromiseClient.prototype.test =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stockscreener_public.Symbol/Test',
      request,
      metadata || {},
      methodDescriptor_Symbol_Test);
};


module.exports = proto.stockscreener_public;

