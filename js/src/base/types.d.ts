export declare type Bool = boolean | undefined;
export declare type IndexType = number | string;
export declare type Int = number | undefined;
export declare type MarketType = 'spot' | 'margin' | 'swap' | 'future' | 'option';
export declare type Num = number | undefined;
export declare type OrderSide = 'buy' | 'sell' | string;
export declare type OrderType = 'limit' | 'market' | string;
export declare type Str = string | undefined;
export declare type Strings = string[] | undefined;
export declare type SubType = 'linear' | 'inverse' | undefined;
export interface Dictionary<T> {
    [key: string]: T;
}
export declare type Dict = Dictionary<any> | undefined;
export declare type List = Array<any> | undefined;
/** Request parameters */
export interface MinMax {
    max: Num;
    min: Num;
}
export interface FeeInterface {
    currency: Str;
    cost: Num;
    rate?: Num;
}
export declare type Fee = FeeInterface | undefined;
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
    numericId?: Num;
    option: boolean;
    optionType: Str;
    percentage?: boolean | undefined;
    precision: {
        amount: Num;
        price: Num;
        cost?: Num;
    };
    quanto?: boolean;
    quote?: string;
    quoteId: string;
    settle: Str;
    settleId: Str;
    spot: boolean;
    strike: Num;
    subType?: SubType;
    swap: boolean;
    symbol: string;
    taker?: Num;
    tierBased?: boolean | undefined;
    type: MarketType;
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
    triggerPrice?: number;
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
    debt?: Num;
    free: Num;
    total: Num;
    used: Num;
}
export interface Account {
    free: Str;
    total: Str;
    used: Str;
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
export interface FundingRate {
    symbol: string;
    info: any;
    timestamp?: number;
    fundingRate?: number;
    datetime?: string;
    markPrice?: number;
    indexPrice?: number;
    interestRate?: number;
    estimatedSettlePrice?: number;
    fundingTimestamp?: number;
    fundingDatetime?: string;
    nextFundingTimestamp?: number;
    nextFundingDatetime?: string;
    nextFundingRate?: number;
    previousFundingTimestamp?: number;
    previousFundingDatetime?: string;
    previousFundingRate?: number;
}
export interface Position {
    collateral?: number;
    contracts?: number;
    contractSize?: number;
    datetime?: string;
    entryPrice?: number;
    hedged?: boolean;
    id?: string;
    info: any;
    initialMargin?: number;
    initialMarginPercentage?: number;
    lastPrice?: number;
    lastUpdateTimestamp?: number;
    leverage?: number;
    liquidationPrice?: number;
    maintenanceMarginPercentage?: number;
    maintenenceMargin?: number;
    marginMode?: string;
    marginRatio?: number;
    markPrice?: number;
    notional?: number;
    percentage?: number;
    realizedPnl?: number;
    side: string;
    stopLossPrice?: number;
    symbol: string;
    takeProfitPrice?: number;
    timestamp?: number;
    unrealizedPnl?: number;
}
export interface BorrowInterest {
    account?: string;
    currency?: string;
    interest?: number;
    interestRate?: number;
    amountBorrowed?: number;
    marginMode?: string;
    timestamp?: number;
    datetime?: string;
    info: any;
}
export interface LeverageTier {
    tier?: number;
    currency?: string;
    minNotional?: number;
    maxNotional?: number;
    maintenanceMarginRate?: number;
    maxLeverage?: number;
    info: any;
}
export interface LedgerEntry {
    id?: string;
    info: any;
    timestamp?: number;
    datetime?: string;
    direction?: string;
    account?: string;
    referenceId?: string;
    referenceAccount?: string;
    type?: string;
    currency?: string;
    amount?: number;
    before?: number;
    after?: number;
    status?: string;
    fee?: Fee;
}
export interface DepositWithdrawFeeNetwork {
    fee?: number;
    percentage?: boolean;
}
export interface DepositWithdrawFee {
    info: any;
    withdraw?: DepositWithdrawFeeNetwork;
    deposit?: DepositWithdrawFeeNetwork;
    networks?: Dictionary<DepositWithdrawFeeNetwork>;
}
export interface TransferEntry {
    info?: any;
    id?: string;
    timestamp?: number;
    datetime?: string;
    currency?: string;
    amount?: number;
    fromAccount?: string;
    toAccount?: string;
    status?: string;
}
export interface BorrowRate {
    currency?: string;
    rate?: number;
    period?: number;
    timestamp?: number;
    datetime?: string;
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
    info: any;
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
export interface Leverage {
    info: any;
    symbol: string;
    marginMode: 'isolated' | 'cross' | string;
    longLeverage: number;
    shortLeverage: number;
}
export interface Leverages extends Dictionary<Leverage> {
}
export interface MarginModes extends Dictionary<MarginMode> {
}
/** [ timestamp, open, high, low, close, volume ] */
export declare type OHLCV = [Num, Num, Num, Num, Num, Num];
/** [ timestamp, open, high, low, close, volume, count ] */
export declare type OHLCVC = [Num, Num, Num, Num, Num, Num, Num];
export declare type implicitReturnType = any;
export declare type Market = MarketInterface | undefined;
export declare type Currency = CurrencyInterface | undefined;
