function countWords(inputWords) {
    var result = inputWords.reduce(function(accumulator, currentValue, currentIndex, array){
        if(accumulator[currentValue] === undefined){
            accumulator[currentValue] = 1;
        }else{
            accumulator[currentValue] = accumulator[currentValue] + 1;
        }
        return accumulator;
    }, {});
    return result;
}

module.exports = countWords