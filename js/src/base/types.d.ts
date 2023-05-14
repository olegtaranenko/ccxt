export interface Dictionary<T> {
    [key: string]: T;
}
/** Request parameters */
export interface MinMax {
    max: number | undefined;
    min: number | undefined;
}
export interface Fee {
    cost: number;
    currency: string;
    rate?: number;
    type?: 'taker' | 'maker' | string;
}
export interface Market {
    active?: boolean | undefined;
    base: string;
    baseId: string;
    contract?: boolean;
    contractSize?: number | undefined;
    expiry?: number | undefined;
    expiryDatetime?: string | undefined;
    feeSide?: string | undefined;
    future?: boolean;
    id: string;
    info: any;
    inverse?: boolean | undefined;
    limits: {
        amount?: MinMax;
        cost?: MinMax;
        leverage?: MinMax;
        price?: MinMax;
    };
    linear?: boolean | undefined;
    maker?: number | undefined;
    margin?: boolean;
    option?: boolean;
    optionType?: string | undefined;
    percentage?: boolean | undefined;
    precision: {
        amount: number | undefined;
        price: number | undefined;
    };
    quote: string;
    quoteId: string;
    settle?: string | undefined;
    settleId?: string | undefined;
    spot?: boolean;
    strike?: number | undefined;
    swap?: boolean;
    symbol: string;
    taker?: number | undefined;
    tierBased?: boolean | undefined;
    type?: string;
}
export interface Trade {
    amount: number;
    cost: number;
    datetime: string;
    fee: Fee;
    id: string;
    info: any;
    order?: string;
    price: number;
    side: 'buy' | 'sell' | string;
    symbol: string;
    takerOrMaker: 'taker' | 'maker' | string;
    timestamp: number;
    type?: string;
}
export interface Order {
    amount: number;
    average?: number;
    clientOrderId: string;
    cost: number;
    datetime: string;
    fee: Fee;
    filled: number;
    id: string;
    info: any;
    lastTradeTimestamp: number;
    price: number;
    remaining: number;
    side: 'buy' | 'sell' | string;
    status: 'open' | 'closed' | 'canceled' | string;
    symbol: string;
    timeInForce?: string;
    timestamp: number;
    trades: Trade[];
    type: string;
}
export interface OrderBook {
    asks: [number, number][];
    bids: [number, number][];
    datetime: string;
    nonce: number;
    timestamp: number;
}
export interface Ticker {
    ask: number;
    askVolume?: number;
    average?: number;
    baseVolume?: number;
    bid: number;
    bidVolume?: number;
    change?: number;
    close?: number;
    datetime: string;
    high: number;
    info: any;
    last?: number;
    low: number;
    open?: number;
    percentage?: number;
    previousClose?: number;
    quoteVolume?: number;
    symbol: string;
    timestamp: number;
    vwap?: number;
}
export interface Transaction {
    address: string;
    amount: number;
    currency: string;
    datetime: string;
    fee: Fee;
    id: string;
    info: any;
    status: 'pending' | 'ok' | string;
    timestamp: number;
    txid?: string;
    type: 'deposit' | 'withdrawal' | string;
    updated: number;
}
export interface Tickers extends Dictionary<Ticker> {
    info: any;
}
export interface Currency {
    code: string;
    id: string;
    numericId?: number;
    precision: number;
}
export interface Balance {
    free: number | string;
    total: number | string;
    used: number | string;
}
export interface PartialBalances extends Dictionary<number> {
}
export interface Balances extends Dictionary<Balance> {
    info: any;
}
export interface DepositAddress {
    address: string;
    currency: string;
    info: any;
    status: string;
}
export interface WithdrawalResponse {
    id: string;
    info: any;
}
export interface DepositAddressResponse {
    address: string;
    currency: string;
    info: any;
    tag?: string;
}
/** [ timestamp, open, high, low, close, volume ] */
export declare type OHLCV = [number, number, number, number, number, number];
/** [ timestamp, open, high, low, close, volume, count ] */
export declare type OHLCVC = [number, number, number, number, number, number, number];
export declare type implicitReturnType = any;
export declare type IndexType = number | string;
export declare type Int = number;
export declare type OrderSide = 'buy' | 'sell' | string;
export declare type OrderType = 'limit' | 'market' | string;
