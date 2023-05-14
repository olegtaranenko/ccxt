import Exchange from './abstract/gate.js';
import { Int, OrderSide } from './base/types.js';
export default class gate extends Exchange {
    describe(): any;
    setSandboxMode(enable: any): void;
    fetchMarkets(params?: {}): Promise<any>;
    fetchSpotMarkets(params?: {}): Promise<any[]>;
    fetchContractMarkets(params?: {}): Promise<any[]>;
    parseContractMarket(market: any, settleId: any): {
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
        linear: boolean;
        inverse: boolean;
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
    fetchOptionMarkets(params?: {}): Promise<any[]>;
    fetchOptionUnderlyings(): Promise<any[]>;
    prepareRequest(market?: any, type?: any, params?: {}): {}[];
    spotOrderPrepareRequest(market?: any, stop?: boolean, params?: {}): any[];
    multiOrderSpotPrepareRequest(market?: any, stop?: boolean, params?: {}): any[];
    getMarginMode(stop: any, params: any): any[];
    getSettlementCurrencies(type: any, method: any): any;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchFundingRate(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: any;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    }>;
    fetchFundingRates(symbols?: string[], params?: {}): Promise<any>;
    parseFundingRate(contract: any, market?: any): {
        info: any;
        symbol: any;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: any;
        datetime: any;
        fundingRate: any;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    };
    fetchNetworkDepositAddress(code: string, params?: {}): Promise<{}>;
    createDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        code: string;
        currency: string;
        address: any;
        tag: any;
        network: any;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        code: string;
        currency: string;
        address: any;
        tag: any;
        network: any;
    }>;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    }>;
    fetchTradingFees(params?: {}): Promise<{}>;
    parseTradingFees(response: any): {};
    parseTradingFee(info: any, market?: any): {
        info: any;
        symbol: any;
        maker: any;
        taker: any;
    };
    fetchTransactionFees(codes?: any, params?: {}): Promise<{}>;
    fetchDepositWithdrawFees(codes?: any, params?: {}): Promise<any>;
    parseDepositWithdrawFee(fee: any, currency?: any): {
        info: any;
        withdraw: {
            fee: any;
            percentage: boolean;
        };
        deposit: {
            fee: any;
            percentage: boolean;
        };
        networks: {};
    };
    fetchFundingHistory(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseFundingHistories(response: any, symbol: any, since: any, limit: any): any;
    parseFundingHistory(info: any, market?: any): {
        info: any;
        symbol: any;
        code: any;
        timestamp: any;
        datetime: any;
        id: any;
        amount: any;
    };
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    fetchTicker(symbol: string, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): any;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    parseBalanceHelper(entry: any): any;
    fetchBalance(params?: {}): Promise<any>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchFundingRateHistory(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseOHLCV(ohlcv: any, market?: any): any[];
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseTrade(trade: any, market?: any): any;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: any;
        txid: any;
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
        timestamp: any;
        datetime: any;
        updated: any;
        fee: {
            currency: any;
            cost: any;
        };
    }>;
    parseTransactionStatus(status: any): any;
    parseTransactionType(type: any): any;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        txid: any;
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
        timestamp: any;
        datetime: any;
        updated: any;
        fee: {
            currency: any;
            cost: any;
        };
    };
    createOrder(symbol: string, type: any, side: OrderSide, amount: any, price?: any, params?: {}): Promise<any>;
    editOrder(id: string, symbol: any, type: any, side: any, amount: any, price?: any, params?: {}): Promise<any>;
    parseOrderStatus(status: any): any;
    parseOrder(order: any, market?: any): any;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchOrdersByStatus(status: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
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
    setLeverage(leverage: any, symbol?: string, params?: {}): Promise<any>;
    parsePosition(position: any, market?: any): any;
    fetchPositions(symbols?: string[], params?: {}): Promise<any>;
    fetchLeverageTiers(symbols?: string[], params?: {}): Promise<any>;
    parseMarketLeverageTiers(info: any, market?: any): any[];
    repayMargin(code: string, amount: any, symbol?: string, params?: {}): Promise<{
        id: any;
        currency: any;
        amount: any;
        symbol: any;
        timestamp: any;
        datetime: any;
        info: any;
    }>;
    borrowMargin(code: string, amount: any, symbol?: string, params?: {}): Promise<{
        id: any;
        currency: any;
        amount: any;
        symbol: any;
        timestamp: any;
        datetime: any;
        info: any;
    }>;
    parseMarginLoan(info: any, currency?: any): {
        id: any;
        currency: any;
        amount: any;
        symbol: any;
        timestamp: any;
        datetime: any;
        info: any;
    };
    sign(path: any, api?: any[], method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    modifyMarginHelper(symbol: string, amount: any, params?: {}): Promise<{
        info: any;
        amount: any;
        code: any;
        symbol: any;
        total: any;
        status: string;
    }>;
    parseMarginModification(data: any, market?: any): {
        info: any;
        amount: any;
        code: any;
        symbol: any;
        total: any;
        status: string;
    };
    reduceMargin(symbol: string, amount: any, params?: {}): Promise<{
        info: any;
        amount: any;
        code: any;
        symbol: any;
        total: any;
        status: string;
    }>;
    addMargin(symbol: string, amount: any, params?: {}): Promise<{
        info: any;
        amount: any;
        code: any;
        symbol: any;
        total: any;
        status: string;
    }>;
    fetchOpenInterestHistory(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseOpenInterest(interest: any, market?: any): {
        symbol: any;
        openInterestAmount: any;
        openInterestValue: any;
        timestamp: any;
        datetime: any;
        info: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
