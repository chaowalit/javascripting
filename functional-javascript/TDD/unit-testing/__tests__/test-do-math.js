var doMath = require('../do-math');
test('it work ["add",2,1,4]', ()=>{
    var result = doMath('add',2,1,4);
    // console.log(result);
    expect(result).toBe(7);
});

test('it work ["mul",2,1,4]', ()=>{
    var result = doMath('mul',2,1,4);
    // console.log(result);
    expect(result).toBe(8);
});

test('it work ["xxx",2,1,4]', ()=>{
    var result = doMath('xxx',2,1,4);
    // console.log(result);
    expect(result).toBe(false);
});