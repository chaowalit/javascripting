function sum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return false;
    }
    return a+b;
}
if(sum(1,2) === 3){
    console.log(true);
}else{
    console.log(false);
}

if(sum(2,4) === 6){
    console.log(true);
}else{
    console.log(false);
}

if(sum(-2,3) === 1){
    console.log(true);
}else{
    console.log(false);
}

if(sum(-1,-1) === -2){
    console.log(true);
}else{
    console.log(false);
}

if(sum('a') === false){
    console.log(true);
}else{
    console.log(false);
}

if(sum(1 ,'a') === false){
    console.log(true);
}else{
    console.log(false);
}

if(sum('false') === false){
    console.log(true);
}else{
    console.log(false);
}

if(sum(1, 2) !== '3'){
    console.log(true);
}else{
    console.log(false);
}

//console.log(sum('a'));