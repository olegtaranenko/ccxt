import Exchange from './abstract/lbank2.js';
import { Int, OrderSide } from './base/types.js';
export default class lbank2 extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseTicker(ticker: any, market?: any): any;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    parseTradingFee(fee: any, market?: any): {
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    };
    fetchTradingFee(symbol: string, params?: {}): Promise<{}>;
    fetchTradingFees(params?: {}): Promise<{}>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOrderSupplement(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOrderDefault(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    getNetworkCodeForCurrency(currencyCode: any, params: any): any;
    fetchDepositAddress(code: string, params?: {}): Promise<any>;
    fetchDepositAddressDefault(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    fetchDepositAddressSupplement(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: any;
    }>;
    parseTransactionStatus(status: any, type: any): any;
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
        comment: any;
        internal: boolean;
        fee: any;
    };
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTransactionFees(codes?: any, params?: {}): Promise<any>;
    fetchPrivateTransactionFees(params?: {}): Promise<{
        withdraw: {};
        deposit: {};
        info: any;
    }>;
    fetchPublicTransactionFees(params?: {}): Promise<{
        withdraw: {};
        deposit: {};
        info: any;
    }>;
    fetchDepositWithdrawFees(codes?: any, params?: {}): Promise<any>;
    fetchPrivateDepositWithdrawFees(codes?: any, params?: {}): Promise<any>;
    fetchPublicDepositWithdrawFees(codes?: any, params?: {}): Promise<{}>;
    parsePublicDepositWithdrawFees(response: any, codes?: any): {};
    parseDepositWithdrawFee(fee: any, currency?: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    convertSecretToPem(secret: any): string;
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
