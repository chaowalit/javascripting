

var generatePattern = require('../generate-pattern');
test('it work [2,1,4]', ()=>{
    var result = generatePattern([2,1,4]);
    // console.log(result);
    expect(result).toBe('**2' + '\n' + '*1' + '\n' + '****4');
});

test('it work a', () => {
    var result = generatePattern('a');
    // console.log(result);
    expect(result).toBe(false);
});


test('it work 2', function(){
    var result = generatePattern('a');
    // console.log(result);
    expect(result).toBe(false);
});

test('it work 3', function(){
    var result = generatePattern({a: '3'});
    // console.log(result);
    expect(result).toBe(false);
});

test('it work 4', function(){
    var result = generatePattern(3);
    // console.log(result);
    expect(result).toBe(false);
});

test('it work [1, "a", 4]', function(){
    var result = generatePattern([1, "a", 4]);
    // console.log(result);
    expect(result).toBe('*1\n-\n****4');
});