'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var binance = require('./binance.js');
var binancecoinm$1 = require('../binancecoinm.js');

//  ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
class binancecoinm extends binance["default"] {
    describe() {
        // eslint-disable-next-line new-cap
        const restInstance = new binancecoinm$1["default"]();
        const restDescribe = restInstance.describe();
        const extended = this.deepExtend(super.describe(), restDescribe);
        return this.deepExtend(extended, {
            'id': 'binancecoinm',
            'name': 'Binance COIN-M',
            'options': {
                'defaultSubType': 'inverse',
                'fetchMarkets': {
                    'types': ['inverse'],
                },
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/117738721-668c8d80-b205-11eb-8c49-3fad84c4a07f.jpg',
                'doc': 'https://developers.binance.com/en',
            },
        });
    }
}

exports["default"] = binancecoinm;
