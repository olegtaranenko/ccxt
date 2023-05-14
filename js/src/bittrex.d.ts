import Exchange from './abstract/bittrex.js';
import { Int, OrderSide } from './base/types.js';
export default class bittrex extends Exchange {
    describe(): any;
    feeToPrecision(symbol: any, fee: any): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<{}>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    fetchBidsAsks(symbols?: string[], params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTime(params?: {}): Promise<any>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    }>;
    fetchTradingFees(params?: {}): Promise<{
        info: any;
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
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    fetchDeposit(id: string, code?: string, params?: {}): Promise<any>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchPendingDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawal(id: string, code?: string, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchPendingWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        currency: any;
        amount: any;
        network: any;
        address: any;
        addressTo: any;
        addressFrom: any;
        tag: any;
        tagTo: any;
        tagFrom: any;
        status: string;
        type: string;
        updated: any;
        txid: any;
        timestamp: any;
        datetime: any;
        fee: {
            currency: any;
            cost: any;
        };
    };
    parseTimeInForce(timeInForce: any): any;
    parseOrder(order: any, market?: any): any;
    parseOrders(orders: any, market?: any, since?: Int, limit?: Int, params?: {}): any;
    parseOrderStatus(status: any): any;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
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
        currency: any;
        amount: any;
        network: any;
        address: any;
        addressTo: any;
        addressFrom: any;
        tag: any;
        tagTo: any;
        tagFrom: any;
        status: string;
        type: string;
        updated: any;
        txid: any;
        timestamp: any;
        datetime: any;
        fee: {
            currency: any;
            cost: any;
        };
    }>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
