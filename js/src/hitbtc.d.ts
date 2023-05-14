import Exchange from './abstract/hitbtc.js';
import { Int, OrderSide } from './base/types.js';
export default class hitbtc extends Exchange {
    describe(): any;
    feeToPrecision(symbol: any, fee: any): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
        info: any;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
        info: any;
    };
    fetchCurrencies(params?: {}): Promise<{}>;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        maker: any;
        taker: any;
        percentage: boolean;
        tierBased: boolean;
    };
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: any;
        taker: any;
        percentage: boolean;
        tierBased: boolean;
    }>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTransactions(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        txid: any;
        type: any;
        currency: any;
        network: any;
        amount: any;
        status: any;
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
    parseTransactionType(type: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        info: any;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    convertCurrencyNetwork(code: string, amount: any, fromNetwork: any, toNetwork: any, params: any): Promise<{
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
        status: any;
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
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
