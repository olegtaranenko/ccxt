'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./_virtual/_commonjsHelpers.js');
require('./_virtual/formats.cjs.js');
require('./_virtual/index.cjs.js');
require('./_virtual/parse.cjs.js');
require('./_virtual/stringify.cjs.js');
require('./_virtual/utils.cjs.js');
var Exchange = require('./src/base/Exchange.js');
var Precise = require('./src/base/Precise.js');
var functions = require('./src/base/functions.js');
var errors = require('./src/base/errors.js');
var binance = require('./src/binance.js');
var okx = require('./src/okx.js');
var binance$1 = require('./src/pro/binance.js');
var okx$1 = require('./src/pro/okx.js');

//-----------------------------------------------------------------------------
// this is updated by vss.js when building
const version = '3.0.102';
Exchange["default"].ccxtVersion = version;
const exchanges = {
    'binance': binance,
    'okx': okx,
};
const pro = {
    'binance': binance$1,
    'okx': okx$1,
};
pro.exchanges = Object.keys(pro);
pro['Exchange'] = Exchange["default"]; // now the same for rest and ts
//-----------------------------------------------------------------------------
const ccxt = Object.assign({ version, Exchange: Exchange["default"], Precise: Precise["default"], 'exchanges': Object.keys(exchanges), 'pro': pro }, exchanges, functions, errors);
//-----------------------------------------------------------------------------

exports.Exchange = Exchange["default"];
exports.Precise = Precise["default"];
exports.functions = functions;
exports.AccountNotEnabled = errors.AccountNotEnabled;
exports.AccountSuspended = errors.AccountSuspended;
exports.AddressPending = errors.AddressPending;
exports.ArgumentsRequired = errors.ArgumentsRequired;
exports.AuthenticationError = errors.AuthenticationError;
exports.BadRequest = errors.BadRequest;
exports.BadResponse = errors.BadResponse;
exports.BadSymbol = errors.BadSymbol;
exports.BaseError = errors.BaseError;
exports.CancelPending = errors.CancelPending;
exports.DDoSProtection = errors.DDoSProtection;
exports.DuplicateOrderId = errors.DuplicateOrderId;
exports.ExchangeError = errors.ExchangeError;
exports.ExchangeNotAvailable = errors.ExchangeNotAvailable;
exports.InsufficientFunds = errors.InsufficientFunds;
exports.InvalidAddress = errors.InvalidAddress;
exports.InvalidNonce = errors.InvalidNonce;
exports.InvalidOrder = errors.InvalidOrder;
exports.MarginModeAlreadySet = errors.MarginModeAlreadySet;
exports.NetworkError = errors.NetworkError;
exports.NotSupported = errors.NotSupported;
exports.NullResponse = errors.NullResponse;
exports.OnMaintenance = errors.OnMaintenance;
exports.OrderImmediatelyFillable = errors.OrderImmediatelyFillable;
exports.OrderNotCached = errors.OrderNotCached;
exports.OrderNotFillable = errors.OrderNotFillable;
exports.OrderNotFound = errors.OrderNotFound;
exports.PermissionDenied = errors.PermissionDenied;
exports.RateLimitExceeded = errors.RateLimitExceeded;
exports.RequestTimeout = errors.RequestTimeout;
exports.errors = errors;
exports.binance = binance;
exports.okx = okx;
exports["default"] = ccxt;
exports.exchanges = exchanges;
exports.pro = pro;
exports.version = version;
