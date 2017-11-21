var numbers = [10,22,1,23,4,7,9,10];

function sortedNumbers(numbers){
    return numbers.sort(function(a, b) {
        return a - b;
    });
}

function searchMe (sortedNumbers, numberToSearch) {
    return sortedNumbers.indexOf(numberToSearch);
}

console.log(searchMe(sortedNumbers(numbers), 7));