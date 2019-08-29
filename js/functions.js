var exports = module.exports = {}

exports.add = function (x, y){
    this.undefinedCheck([x,y]);
    return this.nullCheck(x) + this.nullCheck(y);
}

exports.subtract = function (x ,y ){
    this.undefinedCheck([x,y]);
    return this.nullCheck(x) - this.nullCheck(y);
}

exports.divide = function (x,y){
    this.undefinedCheck([x,y]);
    return this.nullCheck(x) / this.nullCheck(y);
}

exports.multiply = function (x,y){
    this.undefinedCheck([x,y]);
    return this.nullCheck(x) * this.nullCheck(y);
}

exports.modulus = function (x,y){
    this.undefinedCheck([x,y]);
    var num = this.nullCheck(x);
    var divisor = this.nullCheck(y);

    if((num / divisor) == divisor)
        return 0;

    while(num >= divisor ){
        num = this.subtract(num,divisor);
    }
    return num
}

exports.nullCheck = function(x){
    if(x === null)
        return 1;
    else
        return Number(x);
}

exports.undefinedCheck = function(x){
    for(var i = 0; i < x.length; i++){
        if(x[i] === undefined){
            throw new Error("Sorry this function doesn't take undefined values :(");
        }
    }
}
