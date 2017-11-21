var func = require('../print-stars-numbers');
test('it work printStars(2)', ()=>{
    var result = func.printStars(2);
    // console.log(result);
    expect(result).toBe('*\n**');
});

test('it work printStars()', ()=>{
    var result = func.printStars();
    // console.log(result);
    expect(result).toBe('*\n**');
});

test('it work printNumbers(3)', ()=>{
    var result = func.printNumbers(3);
    // console.log(result);
    expect(result).toBe('1\n22\n333');
});

test('it work printNumbers()', ()=>{
    var result = func.printNumbers();
    // console.log(result);
    expect(result).toBe('1\n22\n333');
});

test('it work maxPrinter(printStars, 1, 3, 0)', ()=>{
    var result = func.maxPrinter(func.printStars, 1, 3, 0);
    // console.log(result);
    expect(result).toBe('*\n**\n***');
});

test('it work maxPrinter(printNumbers, 1, 4, 2)', ()=>{
    var result = func.maxPrinter(func.printNumbers, 1, 4, 2);
    // console.log(result);
    expect(result).toBe('1\n22\n333\n4444');
});

//.toHaveBeenCalled() # and .toHaveBeenCalledWith() #
//http://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled
// Reference for callbacks: http://www.dummies.com/web-design-development/javascript/what-are-callbacks-in-javascript-coding/