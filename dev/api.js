var express = require('express')
var app = express()

app.get('/blockchain', function(req,res){
    res.send('Hello world')
})

app.post('/transaction', function(req,res){

})

//It will create a new block
app.get('/mine', function(req,res){
    
})

app.listen(3000, function(){
    console.log('Listening on port 3000 ....');
})