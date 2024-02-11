import binance from './binance.js';
export default class binanceusdm extends binance {
    describe(): any;
    transferIn(code: string, amount: any, params?: {}): Promise<{
        amount: number;
        currency: string;
        datetime: string;
        fromAccount: any;
        id: string;
        info: any;
        status: string;
        timestamp: number;
        toAccount: any;
    }>;
    transferOut(code: string, amount: any, params?: {}): Promise<{
        amount: number;
        currency: string;
        datetime: string;
        fromAccount: any;
        id: string;
        info: any;
        status: string;
        timestamp: number;
        toAccount: any;
    }>;
}
