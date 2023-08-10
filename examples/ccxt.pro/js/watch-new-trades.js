'use strict';

const ccxt = require ('ccxt');

(async () => {

    const streams = {
        'binanceusdm': 'TLM/USDT',
        // 'kraken': 'BTC/USDT'
    };

    await Promise.all (Object.keys (streams).map (exchangeId =>

        (async () => {

             const exchange = new ccxt.pro[exchangeId] ({
                enableRateLimit: true,
                options: {
                    tradesLimit: 100, // lower = better, 1000 by default
                },
            })
            const symbol = streams[exchangeId]
            let lastId = ''
            while (true) {
                // console.log ('---')
                try {
                    const trades = await exchange.watchTrades (symbol)
                    for (let i = 0; i < trades.length; i++) {
                        const trade = trades[i]
                        if (trade) {
                            console.log (exchange.iso8601 (exchange.milliseconds ()), exchange.id, trade['symbol'], trade['id'], trade['datetime'], trade['price'], trade['amount'])
                            lastId = trade['id']
                        } else {
                            // console.log (exchange.iso8601 (exchange.milliseconds ()), exchange.id, trade['symbol'], trade['id'], trade['datetime'], trade['price'], trade['amount'])
                            // console.log(`lastId: ${lastId}, tradeId: ${trade['id']}`)
                        }
                    }
                } catch (e) {
                    console.log (symbol, e)
                }
            }

        }) ())
    )
}) ()
