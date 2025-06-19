import { Future } from './Future.js';
import { Dictionary, Str } from '../types.js';
/**
 * Truncates a string body for verbose logging purposes.
 * @param body - The string body to be truncated.
 * @param verboseTruncate - A flag indicating whether to truncate the body.
 * @returns The truncated body if `verboseTruncate` is true and `body` is not empty.
 *          If `verboseTruncate` is false or `body` is empty, the original `body` is returned.
 *          If `body` is longer than `TRUNCATE_LENGTH`, it is truncated to half of `TRUNCATE_LENGTH`
 *          on both sides, with an ellipsis in the middle.
 */
export declare function getBodyTruncated(body?: string, verboseTruncate?: boolean): string;
export default class Client {
    connected: Promise<any>;
    disconnected: ReturnType<typeof Future>;
    futures: Dictionary<any>;
    rejections: Dictionary<any>;
    keepAlive: number;
    connection: any;
    connectionTimeout: any;
    connectionTimer: any;
    lastPong: any;
    maxPingPongMisses: any;
    pingInterval: any;
    connectionEstablished: any;
    gunzip: any;
    error: any;
    inflate: any;
    url: string;
    isConnected: any;
    onConnectedCallback: any;
    onMessageCallback: any;
    onErrorCallback: any;
    onCloseCallback: any;
    ping: any;
    subscriptions: Dictionary<any>;
    throttle: any;
    verbose: boolean;
    verboseTruncate: boolean;
    verboseLogVeto: any;
    constructor(url: string, onMessageCallback: Function | undefined, onErrorCallback: Function | undefined, onCloseCallback: Function | undefined, onConnectedCallback: Function | undefined, config?: {});
    future(messageHash: string): any;
    resolve(result: any, messageHash: Str): any;
    reject(result: any, messageHash?: Str): any;
    log(...args: any[]): void;
    connect(backoffDelay?: number): void;
    isOpen(): boolean;
    reset(error: any): void;
    onConnectionTimeout(): void;
    setConnectionTimeout(): void;
    clearConnectionTimeout(): void;
    setPingInterval(): void;
    clearPingInterval(): void;
    onPingInterval(): void;
    onOpen(): void;
    onPing(): void;
    onPong(): void;
    onError(error: any): void;
    onClose(event: any): void;
    onUpgrade(message: any): void;
    send(message: any): Promise<any>;
    close(): void;
    onMessage(messageEvent: any): void;
}
