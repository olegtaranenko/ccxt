'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Cast array to view
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
if (!isLE)
    throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
function utf8ToBytes(str) {
    if (typeof str !== 'string') {
        throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    }
    return new TextEncoder().encode(str);
}
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    if (!(data instanceof Uint8Array))
        throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
function wrapConstructor(hashConstructor) {
    const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
    const tmp = hashConstructor();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashConstructor();
    return hashC;
}

exports.Hash = Hash;
exports.createView = createView;
exports.isLE = isLE;
exports.rotr = rotr;
exports.toBytes = toBytes;
exports.utf8ToBytes = utf8ToBytes;
exports.wrapConstructor = wrapConstructor;
