

var printPattern = require('../print-pattern');
test('it work 1', function(){
    var result = printPattern('a');
    // console.log(result);
    expect(result).toBe('*' + '\n' + '**' + '\n' + '*a*' + '\n' + '****');
});

test('it work 2', function(){
    var result = printPattern(['3']);
    // console.log(result);
    expect(result).toBe(false);
});

test('it work 3', function(){
    var result = printPattern({a: '3'});
    // console.log(result);
    expect(result).toBe(false);
});

test('it work 4', function(){
    var result = printPattern(3);
    // console.log(result);
    expect(result).toBe(false);
});