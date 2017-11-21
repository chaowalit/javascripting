var doMath2 = require('../do-math2');
test('it work ["add",2,1,4]', ()=>{
    var result = doMath2('add',2,1,4);
    // console.log(result);
    expect(result).toBe(7);
});

test('it work ["mul",2,1,4]', ()=>{
    var result = doMath2('mul',2,1,4);
    // console.log(result);
    expect(result).toBe(8);
});

test('it work ["xxx",2,1,4]', ()=>{
    var result = doMath2('xxx',2,1,4);
    // console.log(result);
    expect(result).toBe(false);
});

test('it work [,2,1,4]', ()=>{
    var result = doMath2(undefined,2,3,4);
    // console.log(result);
    expect(result).toBe(9);
});