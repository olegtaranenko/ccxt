'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
BigInt(1);
BigInt(2);
const u8a = (a) => a instanceof Uint8Array;
Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
// Caching slows it down 2-3x
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    if (hex.length % 2)
        throw new Error('hex string is invalid: unpadded ' + hex.length);
    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
            throw new Error('invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
const numberToBytesBE = (n, len) => hexToBytes(n.toString(16).padStart(len * 2, '0'));
const numberToBytesLE = (n, len) => numberToBytesBE(n, len).reverse();
// Copies several Uint8Arrays into one.
function concatBytes(...arrs) {
    const r = new Uint8Array(arrs.reduce((sum, a) => sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrs.forEach((a) => {
        if (!u8a(a))
            throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });

exports.concatBytes = concatBytes;
exports.hexToBytes = hexToBytes;
exports.numberToBytesBE = numberToBytesBE;
exports.numberToBytesLE = numberToBytesLE;
