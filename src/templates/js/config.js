var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 8,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Kredits
    txCoinbaseMinConfirms: 30, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Kredits
    coinSymbol: 'XKR',
    openAliasPrefix: "xkr",
    coinName: 'Kredits',
    coinUriPrefix: 'kredits:',
    addressPrefix: 0x2d2f37,
    integratedAddressPrefix: 0x312f37,
    subAddressPrefix: 0x35af37,
    addressPrefixTestnet: 0x38f0b7,
    integratedAddressPrefixTestnet: 0x3cf0b7,
    subAddressPrefixTestnet: 0x13137,
    addressPrefixStagenet: 0x1bb0b7,
    integratedAddressPrefixStagenet: 0x1fb0b7,
    subAddressPrefixStagenet: 0x2470b7,
    feePerKB: new JSBigInt('20000'),//20^1000 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('2000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 9, // minimum mixin for hardfork v5
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
