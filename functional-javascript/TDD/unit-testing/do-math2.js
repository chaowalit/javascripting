const doMath = (first = 'add', ...args) => {
    //console.log(num);
    if(first === 'add'){
        return args.reduce((acc, value, index) => (acc + value), 0);
    }else if(first === 'mul'){
        return args.reduce((acc, value, index) => (acc * value), 1);
    }else{
        return false;
    }

}
//doMath('add', 1, 2, 3);
module.exports = doMath;