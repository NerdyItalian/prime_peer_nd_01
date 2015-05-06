

var randomNumber = function(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
};

// might need to add () if this doesn't work
module.exports = randomNumber;