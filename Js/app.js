/**
 * Created by ah901654 on 8/20/2015.
 */
function add(x, y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function divide(x,y){
    return x / y;
}

function multiply(x,y){
    if(Number(x) === null || Number(y) === null)
    return(x * y);
}

function modulus(x,y){
    var num = x;
    var divisor = y;

    while((x - y) > x ){
        x -= y;
    }
    return x;
}