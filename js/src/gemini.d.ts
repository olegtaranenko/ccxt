import Exchange from './abstract/gemini.js';
import { Int, OrderSide } from './base/types.js';
export default class gemini extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any>;
    fetchMarketsFromWeb(params?: {}): Promise<any[]>;
    parseMarketActive(status: any): any;
    fetchUSDTMarkets(params?: {}): Promise<any[]>;
    fetchMarketsFromAPI(params?: {}): Promise<any>;
    parseMarket(response: any): {
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
        active: any;
        contract: boolean;
        linear: any;
        inverse: any;
        contractSize: any;
        expiry: any;
        expiryDatetime: any;
        strike: any;
        optionType: any;
        precision: {
            price: any;
            amount: any;
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
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    fetchTickerV1(symbol: string, params?: {}): Promise<any>;
    fetchTickerV2(symbol: string, params?: {}): Promise<any>;
    fetchTickerV1AndV2(symbol: string, params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBalance(response: any): any;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchBalance(params?: {}): Promise<any>;
    parseOrder(order: any, market?: any): any;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
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
        fee: any;
    }>;
    nonce(): any;
    fetchTransactions(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
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
        fee: any;
    };
    parseTransactionStatus(status: any): any;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        network: any;
        address: any;
        tag: any;
        info: any;
    };
    fetchDepositAddressesByNetwork(code: string, params?: {}): Promise<any>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        info: any;
    }>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
}
