function factorial(x) {
    if(x <= 1){
        return x;
    }
    return x*factorial(x-1);
}
    
console.log(factorial(5));

//5*factorial(4)
//4*factorial(3)
//3*factorial(2)
//2*factorial(1)
//1
/*
function factorial2(x, result = 1){
    if(x <= 1){
        return result;
    }
    result = result * x;
    return factorial2(--x, result);
}

console.log(factorial2(5));
*/