const assert = require('assert');
const Blockchain = require('./blockchain.js');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(1231, 'sdasdadadsads', 'adasdad');
bitcoin.createNewTransaction(1, 'A', 'B');
bitcoin.createNewBlock(2817, 'kdkhkahwn', 'dkjahdkhw');
bitcoin.createNewTransaction(27191, 'A', 'B');
bitcoin.createNewTransaction(2981, 'B', 'C');
bitcoin.createNewTransaction(1817231273, 'ja', 'jkk');
bitcoin.createNewBlock(2817, 'kdkhkahwn', 'dkjahdkhw');
console.log(bitcoin);
