import Exchange from './abstract/timex.js';
import { Int, OrderSide } from './base/types.js';
export default class timex extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<any>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    getCurrencyByAddress(address: any): any;
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
        status: string;
        updated: any;
        fee: any;
    };
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelOrders(ids: any, symbol?: string, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    };
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    }>;
    parseMarket(market: any): {
        id: any;
        symbol: string;
        base: any;
        quote: any;
        settle: any;
        baseId: any;
        quoteId: any;
        settleId: any;
        type: string;
        spot: boolean;
        margin: boolean;
        swap: boolean;
        future: boolean;
        option: boolean;
        active: boolean;
        contract: boolean;
        linear: any;
        inverse: any;
        taker: any;
        maker: any;
        contractSize: any;
        expiry: any;
        expiryDatetime: any;
        strike: any;
        optionType: any;
        precision: {
            amount: any;
            price: any;
        };
        limits: {
            leverage: {
                min: any;
                max: any;
            };
            amount: {
                min: any;
                max: any;
            };
            price: {
                min: any;
                max: any;
            };
            cost: {
                min: any;
                max: any;
            };
        };
        info: any;
    };
    parseCurrency(currency: any): {
        id: any;
        code: any;
        info: any;
        type: any;
        name: any;
        active: any;
        deposit: any;
        withdraw: any;
        fee: any;
        precision: any;
        limits: {
            withdraw: {
                min: any;
                max: any;
            };
            amount: {
                min: any;
                max: any;
            };
        };
        networks: {};
    };
    parseTicker(ticker: any, market?: any): any;
    parseTrade(trade: any, market?: any): {
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        symbol: any;
        order: any;
        type: any;
        side: any;
        price: any;
        amount: any;
        cost: any;
        takerOrMaker: any;
        fee: any;
    };
    parseOHLCV(ohlcv: any, market?: any): any[];
    parseOrder(order: any, market?: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(statusCode: any, statusText: any, url: any, method: any, responseHeaders: any, responseBody: any, response: any, requestHeaders: any, requestBody: any): any;
}
