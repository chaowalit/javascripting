var sum = require('../subtract');
test('it work', function(){
    var result = sum(2,1);
    // console.log(result);
    expect(result).toBe(3);
});

test('another test', function(){
    var result = sum(400, 100);
    // console.log(result);
    expect(result).not.toBe(3);
});

test('test will fail', function(){
    var result = sum(100);
    // console.log(result);
    expect(result).toBe('invalid input');
});