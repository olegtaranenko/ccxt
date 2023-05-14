import Exchange from './abstract/bit2c.js';
import { Int, OrderSide } from './base/types.js';
export default class bit2c extends Exchange {
    describe(): any;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTradingFees(params?: {}): Promise<{}>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    parseOrder(order: any, market?: any): any;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    removeCommaFromValue(str: any): string;
    parseTrade(trade: any, market?: any): any;
    isFiat(code: any): boolean;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
        network: any;
        address: any;
        tag: any;
        info: any;
    }>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        network: any;
        address: any;
        tag: any;
        info: any;
    };
    nonce(): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
