
//  ---------------------------------------------------------------------------

import binance from './binance.js';

//  ---------------------------------------------------------------------------

export default class binancecoinm extends binance {
    describe () {
        return this.deepExtend (super.describe (), {
            'has': {
                'CORS': undefined,
                'createStopMarketOrder': true,
                'future': true,
                'margin': false,
                'option': undefined,
                'spot': false,
                'swap': true,
            },
            'id': 'binancecoinm',
            'name': 'Binance COIN-M',
            'options': {
                'defaultSubType': 'inverse',
                'fetchMarkets': [ 'inverse' ],
                'leverageBrackets': undefined,
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/117738721-668c8d80-b205-11eb-8c49-3fad84c4a07f.jpg',
                'doc': [
                    'https://binance-docs.github.io/apidocs/delivery/en/',
                    'https://binance-docs.github.io/apidocs/spot/en',
                    'https://developers.binance.com/en',
                ],
            },
        });
    }

    async transferIn (code: string, amount, params = {}) {
        // transfer from spot wallet to coinm futures wallet
        return await this.futuresTransfer (code, amount, 3, params);
    }

    async transferOut (code: string, amount, params = {}) {
        // transfer from coinm futures wallet to spot wallet
        return await this.futuresTransfer (code, amount, 4, params);
    }
}
