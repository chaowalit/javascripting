var sumRecursive = require('../sum-recursive');

test('sum recursive 10', function(){
    var result = sumRecursive(10);
    // console.log(result);
    expect(result).toBe(55);
});

test('sum recursive 1', function(){
    var result = sumRecursive(1);
    // console.log(result);
    expect(result).toBe(1);
});

test('sum recursive -2', function(){
    var result = sumRecursive(-2);
    // console.log(result);
    expect(result).toBe(false);
});

test('sum recursive a', function(){
    var result = sumRecursive('a');
    // console.log(result);
    expect(result).toBe(false);
});

test('sum recursive null', function(){
    var result = sumRecursive();
    // console.log(result);
    expect(result).toBe(false);
});