var express = require('express');
var app = express();

var conversions = require('./conversion');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response){
    response.send("Yup");
});

app.listen(app.get('port'), function(){
    console.log('Node app running on port: ', app.get('port'));
});

