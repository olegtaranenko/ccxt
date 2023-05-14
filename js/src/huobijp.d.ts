import Exchange from './abstract/huobijp.js';
import { Int, OrderSide } from './base/types.js';
export default class huobijp extends Exchange {
    describe(): any;
    fetchTime(params?: {}): Promise<any>;
    fetchTradingLimits(symbols?: string[], params?: {}): Promise<{}>;
    fetchTradingLimitsById(id: string, params?: {}): Promise<{
        info: any;
        limits: {
            amount: {
                min: any;
                max: any;
            };
        };
    }>;
    parseTradingLimits(limits: any, symbol?: string, params?: {}): {
        info: any;
        limits: {
            amount: {
                min: any;
                max: any;
            };
        };
    };
    costToPrecision(symbol: any, cost: any): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseTicker(ticker: any, market?: any): any;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): {
        id: any;
        info: any;
        order: any;
        timestamp: any;
        datetime: any;
        symbol: any;
        type: any;
        side: any;
        takerOrMaker: any;
        price: any;
        amount: any;
        cost: any;
        fee: any;
    };
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTrades(symbol: string, since?: Int, limit?: number, params?: {}): Promise<any>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: number, params?: {}): Promise<any>;
    fetchAccounts(params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<{}>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchOrdersByStates(states: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrdersV1(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrdersV2(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<{
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        lastTradeTimestamp: any;
        status: any;
        symbol: string;
        type: any;
        side: string;
        price: any;
        amount: any;
        filled: any;
        remaining: any;
        cost: any;
        trades: any;
        fee: any;
        clientOrderId: any;
        average: any;
    }>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelOrders(ids: any, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    currencyToPrecision(code: any, fee: any, networkCode?: any): any;
    safeNetwork(networkId: any): any;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: any;
        tag: any;
        network: any;
        info: any;
    };
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
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
        fee: {
            currency: any;
            cost: any;
            rate: any;
        };
    };
    parseTransactionStatus(status: any): any;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
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
        fee: {
            currency: any;
            cost: any;
            rate: any;
        };
    }>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
