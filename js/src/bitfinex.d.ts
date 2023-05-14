import Exchange from './abstract/bitfinex.js';
import { Int, OrderSide } from './base/types.js';
export default class bitfinex extends Exchange {
    describe(): any;
    fetchTransactionFees(codes?: any, params?: {}): Promise<{}>;
    fetchDepositWithdrawFees(codes?: any, params?: {}): Promise<any>;
    parseDepositWithdrawFee(fee: any, currency?: any): {
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
        info: any;
    };
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchMarkets(params?: {}): Promise<any[]>;
    amountToPrecision(symbol: any, amount: any): any;
    priceToPrecision(symbol: any, price: any): any;
    fetchBalance(params?: {}): Promise<any>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<any>;
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
    convertDerivativesId(currencyId: any, type: any): any;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: number, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    parseOrder(order: any, market?: any): any;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    getCurrencyName(code: any): any;
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
    fetchPositions(symbols?: string[], params?: {}): Promise<any>;
    nonce(): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
