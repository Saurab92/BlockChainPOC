var express = require('express')
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/blockchain', function(req,res){
    
})

app.post('/transaction', function(req,res){
    console.log(req.body)
    res.send(`The amount of transaction is ${req.body.amount} bitcoins`);
})

//It will create a new block
app.get('/mine', function(req,res){
    
})

app.listen(3000, function(){
    console.log('Listening on port 3000 ....');
})