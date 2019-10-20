const Blockchain = require('./blockchain');

 const bitcoin = new Blockchain();

// // bitcoin.createNewBlock(8923239, 'DSJ7HDJD73373','G74FG47F3DY8');

// bitcoin.createNewBlock(8923239, 'SAURHDJD73373','GARIG47F3DY8');

// bitcoin.createNewTransaction(100,'BARRA','KANPUR');

//  bitcoin.createNewBlock(8933239, 'RAH7HDJD73373','PARFG47F3DY8');

//  bitcoin.createNewTransaction(300,'BARRA1','KANPUR1');
//  bitcoin.createNewTransaction(200,'BARRA2','KANPUR2');
//  bitcoin.createNewTransaction(500,'BARRA3','KANPUR3');

//  bitcoin.createNewBlock(8933230, 'RA27HDJD73373','PA2FG47F3DY8');
// console.log(bitcoin.chain[2]);

const previousBlockHash = 'HDSJD83R8HDEUHD';
const currentBlockData = [
    {
        amount:10,
        sender: 'DISDU83REJFDEIRE',
        recipient:'JSIDER8E9REFEIFEI'
    },
    {
        amount:20,
        sender: 'DHJ83REJFDEIRE',
        recipient:'IKKDER8E9REFEIFEI'
    },
    {
        amount:30,
        sender: 'KDJDU83REJFDEIRE',
        recipient:'LLLLER8E9REFEI'
    }
];
// const nonce = 100;

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin);

// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));