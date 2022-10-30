require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain smile hockey private other skin'; 
let testAccounts = [
"0xcba2874722f1f2bb7f0128efa2772e24979934be4745f293a08c48efbfb324de",
"0x223ddbb6f7544224df75bfbbe2cc2a0e3107724fa3d2ae933e115b2d69dcbcf8",
"0x18b52ebeab08f827c15a6214e9970ed2f6d4717c108176d11218d8775eafcae4",
"0x8ac13f1738fc6127d1114672ad41943f1919ccce6f6ef7e8e794a82e728c58b6",
"0x1938325e1afbb82646eb977ddfb9dd1cfbc1d5ee7af167302becbfaa754a7ef2",
"0x076c88792cf37f0ebbebb1933a70e7c0435bfe1e81453cbe8dd665dc2d02def0",
"0x7926e35e11665ca950b70d290c5574334d7458d49f169ff2e662517c970670af",
"0x7737e7204035f79c5836249a733e010b60b319c96cfce952e555fc2933749bf6",
"0x93d77a98b67ff1e48dba8e553d28c4ccf8056d80b236a9b0d24b6455ea1dff26",
"0x3b11bfbdfe0cfb4e825f6241ccad7efe656efc641778d14fccbfdf6c114fab73"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

