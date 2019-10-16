const sha256 = require('sha256');

function Blockchain(){
    this.chain = [];
    this.pendingTransaction = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length+1,
        timeStamp:Date.now(),
        transaction:this.pendingTransaction,
        nonce:nonce,
        hash: hash,
        previousBlockHash:previousBlockHash
    };
    this.pendingTransaction = [];
    this.chain.push(newBlock);

    return newBlock;
}


Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
        const newTransaction = {
            amount: amount,
            sender:sender,
            recipient:recipient
        };

        this.pendingTransaction.push(newTransaction);

        return this.getLastBlock()['index'] + 1;
}

// this method will return hash of the data

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        const hash = sha256(dataAsString);
        return hash;
}

module.exports = Blockchain;