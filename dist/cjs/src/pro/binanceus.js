'use strict';

var binance = require('./binance.js');
var binanceus$1 = require('../binanceus.js');

//  ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
class binanceus extends binance {
    describe() {
        // eslint-disable-next-line new-cap
        const restInstance = new binanceus$1();
        const restDescribe = restInstance.describe();
        const parentWsDescribe = super.describeData();
        const extended = this.deepExtend(restDescribe, parentWsDescribe);
        return this.deepExtend(extended, {
            'certified': false,
            'countries': ['US'],
            'fees': {
                'trading': {
                    'maker': 0.0,
                    'percentage': true,
                    'taker': 0.0,
                    'tierBased': false,
                },
            },
            'id': 'binanceus',
            'name': 'Binance US',
            'options': {
                'defaultType': 'spot',
                'fetchCurrencies': false,
                'fetchMarkets': ['spot'],
                'quoteOrderQty': false,
            },
            'urls': {
                'api': {
                    'private': 'https://api.binance.us/api/v3',
                    'public': 'https://api.binance.us/api/v1',
                    'sapi': 'https://api.binance.us/sapi/v1',
                    'v1': 'https://api.binance.us/api/v1',
                    'v3': 'https://api.binance.us/api/v3',
                    'wapi': 'https://api.binance.us/wapi/v3',
                    'web': 'https://www.binance.us',
                    'ws': {
                        'spot': 'wss://stream.binance.us:9443/ws',
                    },
                },
                'doc': 'https://github.com/binance-us/binance-official-api-docs',
                'fees': 'https://www.binance.us/en/fee/schedule',
                'logo': 'https://user-images.githubusercontent.com/1294454/65177307-217b7c80-da5f-11e9-876e-0b748ba0a358.jpg',
                'referral': 'https://www.binance.us/?ref=35005074',
                'www': 'https://www.binance.us',
            },
        });
    }
}

module.exports = binanceus;
