function sumOfArray(list){
    if(!Array.isArray(list)){
        return false;
    }
    // for (var i = 0 ; i < list.length ; i++){
    //     if(){

    //     }
    // }
    return list.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
}

module.exports = sumOfArray;