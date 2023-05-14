import Exchange from './abstract/bitstamp.js';
import { Int, OrderSide } from './base/types.js';
export default class bitstamp extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    constructCurrencyObject(id: any, code: any, name: any, precision: any, minCost: any, originalPayload: any): {
        id: any;
        code: any;
        info: any;
        type: string;
        name: any;
        active: boolean;
        deposit: any;
        withdraw: any;
        fee: any;
        precision: any;
        limits: {
            amount: {
                min: any;
                max: any;
            };
            price: {
                min: any;
                max: any;
            };
            cost: {
                min: any;
                max: any;
            };
            withdraw: {
                min: any;
                max: any;
            };
        };
        networks: {};
    };
    fetchMarketsFromCache(params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    getCurrencyIdFromTransaction(transaction: any): any;
    getMarketFromTrade(trade: any): any;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    }>;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    };
    parseTradingFees(fees: any): {
        info: any;
    };
    fetchTradingFees(params?: {}): Promise<{
        info: any;
    }>;
    fetchTransactionFees(codes?: any, params?: {}): Promise<{}>;
    parseTransactionFees(response: any, codes?: any): {};
    fetchDepositWithdrawFees(codes?: any, params?: {}): Promise<{}>;
    parseDepositWithdrawFees(response: any, codes?: any, currencyIdKey?: any): {};
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    fetchOrderStatus(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTransactions(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        txid: any;
        type: any;
        currency: any;
        network: any;
        amount: any;
        status: string;
        timestamp: any;
        datetime: any;
        address: any;
        addressFrom: any;
        addressTo: any;
        tag: any;
        tagFrom: any;
        tagTo: any;
        updated: any;
        comment: any;
        fee: {
            currency: any;
            cost: any;
            rate: any;
        };
    };
    parseTransactionStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    parseLedgerEntryType(type: any): any;
    parseLedgerEntry(item: any, currency?: any): {
        id: any;
        info: any;
        timestamp: any;
        datetime: any;
        direction: string;
        account: any;
        referenceId: any;
        referenceAccount: any;
        type: any;
        currency: any;
        amount: any;
        before: any;
        after: any;
        status: string;
        fee: any;
    } | {
        id: any;
        info: any;
        timestamp: any;
        datetime: any;
        direction: any;
        account: any;
        referenceId: any;
        referenceAccount: any;
        type: any;
        currency: any;
        amount: any;
        before: any;
        after: any;
        status: string;
        fee: {
            currency: any;
            cost: any;
            rate: any;
        };
    };
    fetchLedger(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    getCurrencyName(code: any): any;
    isFiat(code: any): boolean;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: any;
        txid: any;
        type: any;
        currency: any;
        network: any;
        amount: any;
        status: string;
        timestamp: any;
        datetime: any;
        address: any;
        addressFrom: any;
        addressTo: any;
        tag: any;
        tagFrom: any;
        tagTo: any;
        updated: any;
        comment: any;
        fee: {
            currency: any;
            cost: any;
            rate: any;
        };
    }>;
    nonce(): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
