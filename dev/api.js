var express = require('express')
var app = express();
const bodyparser = require('body-parser');
const blockchain = require('./blockchain');
const uuid = require('uuid/v1');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new blockchain();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/blockchain', function(req,res){
    res.send(bitcoin);
})

app.post('/transaction', function(req,res){
    // console.log(req.body)
    // res.send(`The amount of transaction is ${req.body.amount} bitcoins`);
    
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.`})
})

//It will create a new block
app.get('/mine', function(req,res){
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transaction: bitcoin.pendingTransaction,
        index: lastBlock['index'] + 1
    }

    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    bitcoin.createNewTransaction(12.5,"00", nodeAddress);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({
        note: "New block mined successfully",
        block: newBlock
    })
})

app.listen(3000, function(){
    console.log('Listening on port 3000 ....');
})