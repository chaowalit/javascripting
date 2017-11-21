const doMath = (...args) => {
    const [first, ...num] = args;
    //console.log(num);
    if(first === 'add'){
        return num.reduce((acc, value, index) => (acc + value), 0);
    }else if(first === 'mul'){
        return num.reduce((acc, value, index) => (acc * value), 1);
    }else{
        return false;
    }

}
//doMath('add', 1, 2, 3);
module.exports = doMath;