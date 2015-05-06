var usdChange = require('./usd');
var minMax = require('./minmax');

var randomMoney = function(){
    return usdChange.toUSD(minMax.randomNumber(100, 1000000));
};

var accountBalance = function(){
    return "Account Balance: \n";
};

module.exports.accountBalance = accountBalance;
module.exports.randomMoney = randomMoney;
