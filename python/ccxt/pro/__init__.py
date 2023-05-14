# -*- coding: utf-8 -*-

"""CCXT: CryptoCurrency eXchange Trading Library (Async)"""

# ----------------------------------------------------------------------------

__version__ = '3.0.102'

# ----------------------------------------------------------------------------

from ccxt.base.exchange import Exchange  # noqa: F401

# CCXT Pro exchanges (now this is mainly used for importing exchanges in WS tests)

from ccxt.pro.binance import binance                                      # noqa: F401
from ccxt.pro.okx import okx                                              # noqa: F401

exchanges = [
    'binance',
    'okx',
]
