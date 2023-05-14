import Exchange from './abstract/paymium.js';
import { Int, OrderSide } from './base/types.js';
export default class paymium extends Exchange {
    describe(): any;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        currency: any;
        address: any;
        tag: any;
        network: any;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        currency: any;
        address: any;
        tag: any;
        network: any;
    }>;
    fetchDepositAddresses(codes?: any, params?: {}): Promise<any>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        info: any;
        currency: any;
        address: any;
        tag: any;
        network: any;
    };
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
    };
    parseTransferStatus(status: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
