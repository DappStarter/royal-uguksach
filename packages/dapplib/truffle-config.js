require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success struggle recipe stick hover gesture brave army gate'; 
let testAccounts = [
"0x39bd2ff407fc1b897c1dd8670687ee1e1906c0df7aa4c1748b1671ed9706ed00",
"0xda9a645acefba86302bc6af21577ee7d8e1cfee3a3a9f94439f4461c24756677",
"0x9aad6a6467486431a5b0bc367d1331dfeccab8d96fb3a3a29a5b343ccddf0e1c",
"0x7276f5bdcc3d7dfe168a037061833c3122868093dc21fa6097c7a8fe6ed644a6",
"0x89c387837936ef8f8a049e944fd4313d150478ee9c5b29a966afca548891dbec",
"0x097c7db959b59a3c1906320e93b8f625af1230225d57f516a0eba6dd86fd8633",
"0xff3c8f3c3058b4c38631432611f7155a7c746df533e8f3e161c229c12f3e8f86",
"0xd4e9a17ae3c7ee60731205e0bbb196558287d6691e78bbda20024a4002999420",
"0xb6c030bf99ebf0dd454e540905955855182933f68fdd62a4c3c4875cc058b2d4",
"0x479408688d3232bcc22e584f2f25f492d74218f82c4ec0b562cb595415907d2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
