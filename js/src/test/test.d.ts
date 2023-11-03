declare class baseMainTestClass {
    lang: string;
    staticTestsFailed: boolean;
    staticTests: boolean;
    info: boolean;
    verbose: boolean;
    debug: boolean;
    privateTest: boolean;
    privateTestOnly: boolean;
    sandbox: boolean;
    skippedMethods: {};
    checkedPublicTests: {};
    testFiles: {};
    publicTests: {};
}
export default class testMainClass extends baseMainTestClass {
    parseCliArgs(): void;
    init(exchangeId: any, symbol: any): Promise<void>;
    importFiles(exchange: any): Promise<void>;
    expandSettings(exchange: any, symbol: any): void;
    addPadding(message: any, size: any): string;
    testMethod(methodName: any, exchange: any, args: any, isPublic: any): Promise<void>;
    testSafe(methodName: any, exchange: any, args?: any[], isPublic?: boolean): Promise<boolean>;
    runPublicTests(exchange: any, symbol: any): Promise<void>;
    loadExchange(exchange: any): Promise<boolean>;
    getTestSymbol(exchange: any, isSpot: any, symbols: any): any;
    getExchangeCode(exchange: any, codes?: any): any;
    getMarketsFromExchange(exchange: any, spot?: boolean): {};
    getValidSymbol(exchange: any, spot?: boolean): any;
    testExchange(exchange: any, providedSymbol?: any): Promise<void>;
    runPrivateTests(exchange: any, symbol: any): Promise<void>;
    startTest(exchange: any, symbol: any): Promise<void>;
    assertStaticError(cond: boolean, message: string, calculatedOutput: any, storedOutput: any): void;
    loadMarketsFromFile(id: string): any;
    loadStaticData(): {};
    removeHostnamefromUrl(url: string): string;
    urlencodedToDict(url: string): {};
    assertNewAndStoredOutput(exchange: any, skipKeys: string[], newOutput: object, storedOutput: object): any;
    assertStaticOutput(exchange: any, type: string, skipKeys: string[], storedUrl: string, requestUrl: string, storedOutput: any, newOutput: any): void;
    testMethodStatically(exchange: any, method: string, data: object, type: string, skipKeys: string[]): Promise<void>;
    testExchangeStatically(exchangeName: string, exchangeData: object): Promise<void>;
    getNumberOfTestsFromExchange(exchange: any, exchangeData: object): number;
    runStaticTests(): Promise<void>;
}
export {};
