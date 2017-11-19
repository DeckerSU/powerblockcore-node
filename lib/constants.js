'use strict';


module.exports = {
  BITCOIN_GENESIS_HASH: {
    livenet: '12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2',
    regtest: '530827f38f93b43ed12af0b3ad25a288dc02ed74d6d7857862df51fc56c416f9',
    testnet: '4966625a4b2851d9fdee139e56211a0d88575f59ed816ff5e6a63deb4e3e29a0', //this is testnet3
    testnet5: '4966625a4b2851d9fdee139e56211a0d88575f59ed816ff5e6a63deb4e3e29a0' //this is testnet5
  },
  DB_PREFIX: new Buffer('ffff', 'hex')
};

