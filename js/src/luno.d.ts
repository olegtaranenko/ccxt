import Exchange from './abstract/luno.js';
import { Int, OrderSide } from './base/types.js';
export default class luno extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchAccounts(params?: {}): Promise<any[]>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOrdersByState(state?: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: string;
        maker: any;
        taker: any;
    }>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchLedgerByEntries(code?: string, entry?: any, limit?: any, params?: {}): Promise<any>;
    fetchLedger(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseLedgerComment(comment: any): {
        type: any;
        referenceId: any;
    };
    parseLedgerEntry(entry: any, currency?: any): {
        id: any;
        direction: any;
        account: any;
        referenceId: any;
        referenceAccount: any;
        type: any;
        currency: any;
        amount: any;
        timestamp: any;
        datetime: any;
        before: any;
        after: any;
        status: any;
        fee: any;
        info: any;
    };
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
