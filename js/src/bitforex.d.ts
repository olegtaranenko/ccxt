import Exchange from './abstract/bitforex.js';
import { Int, OHLCV, Order, OrderSide, OrderType } from './base/types.js';
/**
 * @class bitforex
 * @extends Exchange
 */
export default class bitforex extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    parseOHLCV(ohlcv: any, market?: any): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    parseOrderStatus(status: any): any;
    parseSide(sideId: any): "buy" | "sell";
    parseOrder(order: any, market?: any): Order;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<{
        info: any;
        success: any;
    }>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
