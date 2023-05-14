import { Exchange } from './src/base/Exchange.js';
import { Precise } from './src/base/Precise.js';
import * as functions from './src/base/functions.js';
import * as errors from './src/base/errors.js';
import { Market, Trade, Fee, Ticker, OrderBook, Order, Transaction, Tickers, Currency, Balance, DepositAddress, WithdrawalResponse, DepositAddressResponse, OHLCV, Balances, PartialBalances, Dictionary, MinMax } from './src/base/types.js';
import { BaseError, ExchangeError, PermissionDenied, AccountNotEnabled, AccountSuspended, ArgumentsRequired, BadRequest, BadSymbol, MarginModeAlreadySet, BadResponse, NullResponse, InsufficientFunds, InvalidAddress, InvalidOrder, OrderNotFound, OrderNotCached, CancelPending, OrderImmediatelyFillable, OrderNotFillable, DuplicateOrderId, NotSupported, NetworkError, DDoSProtection, RateLimitExceeded, ExchangeNotAvailable, OnMaintenance, InvalidNonce, RequestTimeout, AuthenticationError, AddressPending } from './src/base/errors.js';
declare const version = "3.0.102";
import binance from './src/binance.js';
import okx from './src/okx.js';
import binancePro from './src/pro/binance.js';
import okxPro from './src/pro/okx.js';
declare const exchanges: {
    binance: typeof binance;
    okx: typeof okx;
};
declare const pro: {
    binance: typeof binancePro;
    okx: typeof okxPro;
};
declare const ccxt: {
    version: string;
    Exchange: typeof Exchange;
    Precise: typeof Precise;
    exchanges: string[];
    pro: {
        binance: typeof binancePro;
        okx: typeof okxPro;
    };
} & {
    binance: typeof binance;
    okx: typeof okx;
} & typeof functions & typeof errors;
export { version, Exchange, exchanges, pro, Precise, functions, errors, BaseError, ExchangeError, PermissionDenied, AccountNotEnabled, AccountSuspended, ArgumentsRequired, BadRequest, BadSymbol, MarginModeAlreadySet, BadResponse, NullResponse, InsufficientFunds, InvalidAddress, InvalidOrder, OrderNotFound, OrderNotCached, CancelPending, OrderImmediatelyFillable, OrderNotFillable, DuplicateOrderId, NotSupported, NetworkError, DDoSProtection, RateLimitExceeded, ExchangeNotAvailable, OnMaintenance, InvalidNonce, RequestTimeout, AuthenticationError, AddressPending, Market, Trade, Fee, Ticker, OrderBook, Order, Transaction, Tickers, Currency, Balance, DepositAddress, WithdrawalResponse, DepositAddressResponse, OHLCV, Balances, PartialBalances, Dictionary, MinMax, binance, okx, };
export default ccxt;
