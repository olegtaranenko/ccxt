import Exchange from './abstract/kuna.js';
import { Int, Order, OrderSide, OrderType } from './base/types.js';
/**
 * @class kuna
 * @extends Exchange
 * @description Use the public-key as your apiKey
 */
export default class kuna extends Exchange {
    describe(): any;
    fetchTime(params?: {}): Promise<number>;
    fetchCurrencies(params?: {}): Promise<{}>;
    parseCurrencies(currencies: any, params?: {}): {};
    parseCurrency(currency: any): {
        info: any;
        id: string;
        code: any;
        type: any;
        margin: any;
        name: string;
        active: any;
        deposit: any;
        withdraw: any;
        fee: any;
        precision: any;
        limits: {
            amount: {
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
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTickers(symbols?: string[], params?: {}): Promise<import("./base/types.js").Dictionary<import("./base/types.js").Ticker>>;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchL3OrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    cancelOrders(ids: string[], symbol?: string, params?: {}): Promise<Order[]>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): Order;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrdersByStatus(status: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        currency: any;
        timestamp: number;
        datetime: string;
        network: string;
        addressFrom: any;
        address: string;
        addressTo: string;
        amount: number;
        type: string;
        status: string;
        updated: number;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: string;
        fee: {
            cost: string;
            currency: any;
        };
    }>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawal(id: string, code?: string, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        currency: any;
        timestamp: number;
        datetime: string;
        network: string;
        addressFrom: any;
        address: string;
        addressTo: string;
        amount: number;
        type: string;
        status: string;
        updated: number;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: string;
        fee: {
            cost: string;
            currency: any;
        };
    }>;
    createDepositAddress(code: string, params?: {}): Promise<{
        info: string;
        currency: any;
        network: any;
        address: string;
        tag: any;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        info: string;
        currency: any;
        network: any;
        address: string;
        tag: any;
    }>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        info: string;
        currency: any;
        network: any;
        address: string;
        tag: any;
    };
    parseTransactionStatus(status: any): string;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDeposit(id: string, code?: string, params?: {}): Promise<{
        info: any;
        id: string;
        txid: string;
        currency: any;
        timestamp: number;
        datetime: string;
        network: string;
        addressFrom: any;
        address: string;
        addressTo: string;
        amount: number;
        type: string;
        status: string;
        updated: number;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: string;
        fee: {
            cost: string;
            currency: any;
        };
    }>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        txid: string;
        currency: any;
        timestamp: number;
        datetime: string;
        network: string;
        addressFrom: any;
        address: string;
        addressTo: string;
        amount: number;
        type: string;
        status: string;
        updated: number;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: string;
        fee: {
            cost: string;
            currency: any;
        };
    };
    nonce(): number;
    encodeParams(params: any): string;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
