import Exchange from './abstract/kuna.js';
import { Int, OrderSide } from './base/types.js';
export default class kuna extends Exchange {
    describe(): any;
    fetchTime(params?: {}): Promise<number>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    fetchL3OrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any[]>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    nonce(): any;
    encodeParams(params: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
