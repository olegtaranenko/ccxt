import Exchange from './abstract/bl3p.js';
import { Int, OrderSide } from './base/types.js';
export default class bl3p extends Exchange {
    describe(): any;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    parseBidAsk(bidask: any, priceKey?: number, amountKey?: number): any[];
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTradingFees(params?: {}): Promise<{}>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
}
