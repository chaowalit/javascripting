function sumRecursive(num){
    if(typeof num !== 'number'){
        return false;
    }
    if(num === 0){
        return 0;
    }
    else if(num < 0){
        return false;
    }
    return num + sumRecursive((num - 1));
}

module.exports = sumRecursive;