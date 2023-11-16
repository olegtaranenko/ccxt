export declare type Bool = boolean | undefined;
export declare type Currency = CurrencyInterface | undefined;
export declare type Int = number | undefined;
export declare type Market = MarketInterface | undefined;
export declare type Num = number | undefined;
export declare type Str = string | undefined;
export declare type Strings = string[] | undefined;
export interface Dictionary<T> {
    [key: string]: T;
}
/** Request parameters */
export interface MinMax {
    max: Num;
    min: Num;
}
export interface Fee {
    type?: 'taker' | 'maker' | string;
    currency: string;
    rate?: number;
    cost: number;
}
export interface MarketInterface {
    active: Bool;
    base: string;
    baseId: string;
    contract: boolean;
    contractSize: Num;
    created: Int;
    expiry: Int;
    expiryDatetime: Str;
    feeSide?: string | undefined;
    future: boolean;
    id: string;
    info: any;
    inverse: Bool;
    limits: {
        amount?: MinMax;
        cost?: MinMax;
        leverage?: MinMax;
        price?: MinMax;
    };
    linear: Bool;
    lowercaseId?: string;
    maker?: Num;
    margin: boolean;
    option: boolean;
    optionType: Str;
    percentage?: boolean | undefined;
    precision: {
        amount: Num;
        price: Num;
    };
    quanto?: boolean;
    quote?: string;
    quoteId: string;
    settle: Str;
    settleId: Str;
    spot: boolean;
    strike: Num;
    swap: boolean;
    symbol: string;
    taker?: Num;
    tierBased?: boolean | undefined;
    type: string;
    uppercaseId?: string;
}
export interface Trade {
    amount: Num;
    cost: Num;
    datetime: Str;
    fee: Fee;
    id: Str;
    info: any;
    order: Str;
    price: number;
    side: 'buy' | 'sell' | string;
    symbol: Str;
    takerOrMaker: 'taker' | 'maker' | string;
    timestamp: Int;
    type: Str;
}
export interface Order {
    amount: number;
    average?: number;
    clientOrderId: string;
    cost: number;
    datetime: string;
    filled: number;
    id: string;
    info: any;
    lastTradeTimestamp: number;
    lastUpdateTimestamp?: number;
    price: number;
    remaining: number;
    side: 'buy' | 'sell' | string;
    status: 'open' | 'closed' | 'canceled' | string;
    stopLossPrice?: number;
    stopPrice?: number;
    symbol: string;
    takeProfitPrice?: number;
    timeInForce?: string;
    timestamp: number;
    trades: Trade[];
    type: string;
}
export interface OrderBook {
    asks: [Num, Num][];
    bids: [Num, Num][];
    datetime: Str;
    timestamp: Int;
    nonce: Int;
}
export interface Ticker {
    ask: Int;
    askVolume: Int;
    average: Int;
    baseVolume: Int;
    bid: Int;
    bidVolume: Int;
    change: Int;
    close: Int;
    datetime: Str;
    high: Int;
    info: any;
    last: Int;
    low: Int;
    open: Int;
    percentage: Int;
    previousClose: Int;
    quoteVolume: Int;
    symbol: string;
    timestamp: Int;
    vwap: Int;
}
export interface Transaction {
    address: Str;
    addressFrom: Str;
    addressTo: Str;
    amount: Num;
    comment: Str;
    currency: Str;
    datetime: Str;
    fee: Fee;
    id: Str;
    info: any;
    internal: Bool;
    network: Str;
    status: 'pending' | 'ok' | string;
    tag: Str;
    tagFrom: Str;
    tagTo: Str;
    timestamp: Int;
    txid: Str;
    type: 'deposit' | 'withdrawal' | string;
    updated: Int;
}
export interface Tickers extends Dictionary<Ticker> {
}
export interface CurrencyInterface {
    code?: string;
    id: string;
    numericId?: number;
    precision: number;
}
export interface Balance {
    free: number | string;
    used: number | string;
    total: number | string;
}
export interface PartialBalances extends Dictionary<number> {
}
export interface Balances extends Dictionary<Balance> {
    datetime?: any;
    info: any;
    timestamp?: any;
}
export interface DepositAddress {
    currency: string;
    address: string;
    status: string;
    info: any;
}
export interface WithdrawalResponse {
    info: any;
    id: string;
}
export interface DepositAddressResponse {
    currency: string;
    address: string;
    info: any;
    tag?: string;
}
export interface Position {
    symbol: string;
    id: string;
    timestamp?: number;
    datetime: string;
    contracts?: number;
    contractSize?: number;
    side: string;
    notional?: number;
    leverage?: number;
    unrealizedPnl?: number;
    realizedPnl?: number;
    collateral?: number;
    entryPrice?: number;
    markPrice?: number;
    liquidationPrice?: number;
    hedged?: boolean;
    maintenanceMargin?: number;
    maintenanceMarginPercentage?: number;
    initialMargin?: number;
    initialMarginPercentage?: number;
    marginMode: string;
    marginRatio?: number;
    lastUpdateTimestamp?: number;
    lastPrice?: number;
    percentage?: number;
    stopLossPrice?: number;
    takeProfitPrice?: number;
    info: any;
}
export interface FundingRateHistory {
    datetime?: string;
    fundingRate: number;
    info: any;
    symbol: string;
    timestamp?: number;
}
export interface OpenInterest {
    baseVolume?: number;
    datetime?: string;
    info: any;
    openInterestAmount?: number;
    openInterestValue?: number;
    quoteVolume?: number;
    symbol: string;
    timestamp?: number;
}
export interface Liquidation {
    baseValue?: number;
    datetime?: string;
    info: any;
    price: number;
    quoteValue?: number;
    symbol: string;
    timestamp?: number;
}
export interface OrderRequest {
    amount?: number;
    params?: any;
    price?: number | undefined;
    side: string;
    symbol: string;
    type: string;
}
export interface FundingHistory {
    amount: number;
    code: string;
    datetime?: string;
    id: string;
    info: any;
    symbol: string;
    timestamp?: number;
}
export interface MarginMode {
    infp: any;
    marginMode: 'isolated' | 'cross' | string;
    symbol: string;
}
export interface Greeks {
    askImpliedVolatility: number;
    askPrice: number;
    askSize: number;
    bidImpliedVolatility: number;
    bidPrice: number;
    bidSize: number;
    datetime?: string;
    delta: number;
    gamma: number;
    info: any;
    lastPrice: number;
    markImpliedVolatility: number;
    markPrice: number;
    rho: number;
    symbol: string;
    theta: number;
    timestamp?: number;
    underlyingPrice: number;
    vega: number;
}
/** [ timestamp, open, high, low, close, volume ] */
export declare type OHLCV = [Num, Num, Num, Num, Num, Num];
/** [ timestamp, open, high, low, close, volume, count ] */
export declare type OHLCVC = [Num, Num, Num, Num, Num, Num, Num];
export declare type implicitReturnType = any;
export declare type IndexType = number | string;
export declare type OrderSide = 'buy' | 'sell' | string;
export declare type OrderType = 'limit' | 'market' | string;
