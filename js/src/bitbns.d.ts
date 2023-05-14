import Exchange from './abstract/bitbns.js';
import { Int, OrderSide } from './base/types.js';
export default class bitbns extends Exchange {
    describe(): any;
    fetchStatus(params?: {}): Promise<{
        status: any;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransactionStatusByType(status: any, type?: any): any;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        txid: any;
        timestamp: any;
        datetime: any;
        network: any;
        address: any;
        addressTo: any;
        addressFrom: any;
        tag: any;
        tagTo: any;
        tagFrom: any;
        type: any;
        amount: any;
        currency: any;
        status: any;
        updated: any;
        internal: any;
        fee: any;
    };
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
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
