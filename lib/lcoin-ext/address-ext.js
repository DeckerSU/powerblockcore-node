'use strict';

var Address = require('lcoin').address;

/**
 * For Litecoin
 */

/**
 * Convert the Address to a string.
 * @param {(Network|NetworkType)?} network
 * @returns {Base58Address}
 */

Address.Formats = {
    PUBKEYHASH: 'pubkeyhash',
    SCRIPTHASH: 'scripthash',
    SCRIPTHASH2: 'scripthash2',
    BECH32: 'bech32',
};

Address.prototype.getAllStringFormats = function getAllStringFormats(network) {
    let results = {};
    if (this.version !== -1) { // same as Address.prototype.toString
        results.BECH32 = this.toBech32(network);
        return results;
    }
    
    switch (this.type) {
        case Address.types.PUBKEYHASH:
        results.PUBKEYHASH = this.toBase58(network);
        return results;
        case Address.types.SCRIPTHASH:
        case Address.types.SCRIPTHASH2:
        let addr1 = new Address(this);
        let addr2 = new Address(this);
        addr1.type = Address.types.SCRIPTHASH;
        addr2.type = Address.types.SCRIPTHASH2;
        results.SCRIPTHASH = addr1.toBase58(network);
        results.SCRIPTHASH2 = addr2.toBase58(network);
        return results;
    }
    
    return results;
};

Address.prototype.getStringOfFormat = function getStringOfFormat(format, network) {
    let allStringFormats = this.getAllStringFormats(network);
    
    return allStringFormats.format;
};

Address.prototype.convertFromSCRIPTHASH2ToSCRIPTHASH = function convertFromSCRIPTHASH2ToSCRIPTHASH() {
    var converted = false;
    if (this.type === Address.types.SCRIPTHASH2) {
        this.type = Address.types.SCRIPTHASH;
        converted = true;
    }
    return converted;
}

module.exports = Address;