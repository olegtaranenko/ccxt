import Exchange from './abstract/bitmart.js';
import { Int, OrderSide } from './base/types.js';
export default class bitmart extends Exchange {
    describe(): any;
    fetchTime(params?: {}): Promise<any>;
    fetchStatus(params?: {}): Promise<{
        status: any;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchSpotMarkets(params?: {}): Promise<any[]>;
    fetchContractMarkets(params?: {}): Promise<any[]>;
    fetchMarkets(params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchTransactionFee(code: string, params?: {}): Promise<{
        info: any;
        withdraw: {};
        deposit: {};
    }>;
    parseDepositWithdrawFee(fee: any, currency?: any): {
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    };
    fetchDepositWithdrawFee(code: string, params?: {}): Promise<{
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    }>;
    parseTicker(ticker: any, market?: any): any;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBalance(response: any, marketType: any): any;
    parseBalanceHelper(entry: any): any;
    fetchBalance(params?: {}): Promise<any>;
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
    parseOrder(order: any, market?: any): any;
    parseOrderStatusByType(type: any, status: any): any;
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    fetchOrdersByStatus(status: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchCanceledOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: any;
        tag: any;
        network: any;
        info: any;
    }>;
    safeNetwork(networkId: any): any;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<any>;
    fetchTransactionsByType(type: any, code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDeposit(id: string, code?: string, params?: {}): Promise<{
        info: any;
        id: any;
        currency: any;
        amount: any;
        network: any;
        address: any;
        addressFrom: any;
        addressTo: any;
        tag: any;
        tagFrom: any;
        tagTo: any;
        status: any;
        type: any;
        updated: any;
        txid: any;
        timestamp: any;
        datetime: any;
        fee: any;
    }>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawal(id: string, code?: string, params?: {}): Promise<{
        info: any;
        id: any;
        currency: any;
        amount: any;
        network: any;
        address: any;
        addressFrom: any;
        addressTo: any;
        tag: any;
        tagFrom: any;
        tagTo: any;
        status: any;
        type: any;
        updated: any;
        txid: any;
        timestamp: any;
        datetime: any;
        fee: any;
    }>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTransactionStatus(status: any): any;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        currency: any;
        amount: any;
        network: any;
        address: any;
        addressFrom: any;
        addressTo: any;
        tag: any;
        tagFrom: any;
        tagTo: any;
        status: any;
        type: any;
        updated: any;
        txid: any;
        timestamp: any;
        datetime: any;
        fee: any;
    };
    repayMargin(code: string, amount: any, symbol?: string, params?: {}): Promise<any>;
    borrowMargin(code: string, amount: any, symbol?: string, params?: {}): Promise<any>;
    parseMarginLoan(info: any, currency?: any): {
        id: any;
        currency: any;
        amount: any;
        symbol: any;
        timestamp: any;
        datetime: any;
        info: any;
    };
    fetchBorrowRate(code: string, params?: {}): Promise<{
        currency: any;
        rate: any;
        period: number;
        timestamp: any;
        datetime: any;
        info: any;
    }>;
    parseBorrowRate(info: any, currency?: any): {
        currency: any;
        rate: any;
        period: number;
        timestamp: any;
        datetime: any;
        info: any;
    };
    fetchBorrowRates(params?: {}): Promise<any[]>;
    parseBorrowRates(info: any, codeKey: any): any[];
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<any>;
    parseTransferStatus(status: any): any;
    parseTransfer(transfer: any, currency?: any): {
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: any;
        toAccount: any;
        status: any;
    };
    fetchBorrowInterest(code?: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBorrowInterest(info: any, market?: any): {
        symbol: any;
        marginMode: string;
        currency: any;
        interest: any;
        interestRate: any;
        amountBorrowed: any;
        timestamp: any;
        datetime: any;
        info: any;
    };
    handleMarginModeAndParams(methodName: any, params?: {}, defaultValue?: any): any[];
    nonce(): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
