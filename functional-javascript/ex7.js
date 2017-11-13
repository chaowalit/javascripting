function countWithRecursion(index, arr, fn, initial){
    if(index > arr.length-1){
        return initial;
    }

    initial = fn(initial, arr[index], index, arr);
    return countWithRecursion((index + 1), arr, fn, initial);
}

function reduce(arr, fn, initial) {
    var startIndex = 0;
    return countWithRecursion(startIndex, arr, fn, initial);
}

module.exports = reduce