import Exchange from './abstract/coinbasepro.js';
import type { Int, OrderSide, OrderType, Trade, OHLCV, Order, Balances, Str, Transaction, Ticker, OrderBook, Tickers, Strings, Market, Currency, Num, Account } from './base/types.js';
/**
 * @class coinbasepro
 * @augments Exchange
 */
export default class coinbasepro extends Exchange {
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<any>;
    createDepositAddress(code: string, params?: {}): Promise<{
        address: any;
        currency: string;
        info: any;
        tag: string;
    }>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    deposit(code: string, amount: any, address: any, params?: {}): Promise<{
        id: any;
        info: any;
    }>;
    describe(): any;
    fetchAccounts(params?: {}): Promise<Account[]>;
    fetchBalance(params?: {}): Promise<Balances>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseAccount(account: any): {
        id: string;
        type: any;
        code: string;
        info: any;
    };
    parseBalance(response: any): Balances;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseTicker(ticker: any, market?: Market): Ticker;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTrade(trade: any, market?: Market): Trade;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    parseAccount(account: any): {
        code: string;
        id: string;
        currency: string;
        account: any;
        referenceAccount: any;
        referenceId: any;
        status: string;
        amount: number;
        before: number;
        after: number;
        fee: any;
        direction: any;
        timestamp: number;
        datetime: string;
        type: string;
        info: any;
    };
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDepositsWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransactionStatus(transaction: any): "ok" | "failed" | "canceled" | "pending";
    parseTransaction(transaction: any, currency?: Currency): Transaction;
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: string;
        info: any;
    }>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    request(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any, config?: {}): Promise<any>;
}
