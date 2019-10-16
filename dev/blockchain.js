const sha256 = require('sha256');

function Blockchain(){
    this.chain = [];
    this.pendingTransaction = [];

    //Creating a Genesis block
    //Genesis block is the first block in blockchain
    this.createNewBlock(100,'0','0');
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

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    console.log("inside the prrofOfWork Method");
    console.log("test");
    let nonce = 0;
    const hash = this.hashBlock(previousBlockHash,currentBlockData, nonce);
    while(hash.substring(0,4)!=='0000'){
        nonce++;
        const hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }
    return nonce;
}

module.exports = Blockchain;