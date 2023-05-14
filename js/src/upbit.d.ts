import Exchange from './abstract/upbit.js';
import { Int, OrderSide } from './base/types.js';
export default class upbit extends Exchange {
    describe(): any;
    fetchCurrency(code: string, params?: {}): Promise<{
        info: any;
        id: any;
        code: any;
        name: any;
        active: boolean;
        fee: any;
        precision: any;
        limits: {
            withdraw: {
                min: any;
                max: any;
            };
        };
    }>;
    fetchCurrencyById(id: string, params?: {}): Promise<{
        info: any;
        id: any;
        code: any;
        name: any;
        active: boolean;
        fee: any;
        precision: any;
        limits: {
            withdraw: {
                min: any;
                max: any;
            };
        };
    }>;
    fetchMarket(symbol: string, params?: {}): Promise<{
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
        taker: number;
        maker: number;
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
            info: any;
        };
    }>;
    fetchMarketById(id: string, params?: {}): Promise<{
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
        taker: number;
        maker: number;
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
            info: any;
        };
    }>;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseBalance(response: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchOrderBooks(symbols?: string[], limit?: Int, params?: {}): Promise<{}>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: string;
        maker: any;
        taker: any;
        percentage: boolean;
        tierBased: boolean;
    }>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<{
        info: any;
        id: any;
        clientOrderId: any;
        timestamp: any;
        datetime: any;
        lastTradeTimestamp: any;
        symbol: any;
        type: any;
        timeInForce: any;
        postOnly: any;
        side: any;
        price: any;
        stopPrice: any;
        triggerPrice: any;
        cost: any;
        average: any;
        amount: any;
        filled: any;
        remaining: any;
        status: any;
        fee: any;
        trades: any;
    }>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<{
        info: any;
        id: any;
        clientOrderId: any;
        timestamp: any;
        datetime: any;
        lastTradeTimestamp: any;
        symbol: any;
        type: any;
        timeInForce: any;
        postOnly: any;
        side: any;
        price: any;
        stopPrice: any;
        triggerPrice: any;
        cost: any;
        average: any;
        amount: any;
        filled: any;
        remaining: any;
        status: any;
        fee: any;
        trades: any;
    }>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransactionStatus(status: any): any;
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
        status: any;
        type: any;
        updated: any;
        txid: any;
        timestamp: any;
        datetime: any;
        fee: {
            currency: any;
            cost: any;
        };
    };
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): {
        info: any;
        id: any;
        clientOrderId: any;
        timestamp: any;
        datetime: any;
        lastTradeTimestamp: any;
        symbol: any;
        type: any;
        timeInForce: any;
        postOnly: any;
        side: any;
        price: any;
        stopPrice: any;
        triggerPrice: any;
        cost: any;
        average: any;
        amount: any;
        filled: any;
        remaining: any;
        status: any;
        fee: any;
        trades: any;
    };
    fetchOrdersByState(state: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchCanceledOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<{
        info: any;
        id: any;
        clientOrderId: any;
        timestamp: any;
        datetime: any;
        lastTradeTimestamp: any;
        symbol: any;
        type: any;
        timeInForce: any;
        postOnly: any;
        side: any;
        price: any;
        stopPrice: any;
        triggerPrice: any;
        cost: any;
        average: any;
        amount: any;
        filled: any;
        remaining: any;
        status: any;
        fee: any;
        trades: any;
    }>;
    fetchDepositAddresses(codes?: any, params?: {}): Promise<any>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: any;
        tag: any;
        network: any;
        info: any;
    };
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
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
        status: any;
        type: any;
        updated: any;
        txid: any;
        timestamp: any;
        datetime: any;
        fee: {
            currency: any;
            cost: any;
        };
    }>;
    nonce(): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
