var sumOfArray = require('../sum-of-array');

test('sum of array [1,3,4]', function(){
    var result = sumOfArray([1,3,4]);
    // console.log(result);
    expect(result).toBe(8);
});

test('sum of array string', function(){
    var result = sumOfArray('aa');
    // console.log(result);
    expect(result).toBe(false);
});

test('sum of array json', function(){
    var result = sumOfArray({a: 1, b: 2});
    // console.log(result);
    expect(result).toBe(false);
});