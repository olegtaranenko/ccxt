'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var JSEncrypt = require('../../static_dependencies/jsencrypt/JSEncrypt.js');
var index = require('../../static_dependencies/scure-base/index.js');
require('./encode.js');
require('./crypto.js');

function rsa(request, secret, hash) {
    const RSA = new JSEncrypt.JSEncrypt();
    const digester = (input) => index.base16.encode(hash(input));
    RSA.setPrivateKey(secret);
    const name = (hash.create()).constructor.name.toLowerCase();
    return RSA.sign(request, digester, name);
}

exports.rsa = rsa;
