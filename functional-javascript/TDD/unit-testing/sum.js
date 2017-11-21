function sum(a, b){
    if(!(a && b)){
        return "invalid input";
    }
    return (a+b);
}

module.exports = sum;