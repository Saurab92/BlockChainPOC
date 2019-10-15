const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock();

console.log(bitcoin);