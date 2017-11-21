function add3(one, two, three) {
    return one + two + three;
}

function curryN(fn, n) {
    n = n || fn.length;

    return (function resole(){
        var memory = Array.prototype.slice.call(arguments);
        return function(){
            var local = memory.slice(), next;
            Array.prototype.push.apply(local, arguments);
            next = local.length >= n? fn:resole;
            return next.apply(this, local);
        };
    });
}

module.exports = curryN


/*

function curryN(fn, n) {
   n = n || fn.length;
   
   return function x(arg){
       console.log(n,'sss');
       console.log(arg,'aaa');
       if(n <= 1) return fn(arg);
       return curryN(fn.bind(this,arg),n-1);
   };
}
 module.exports = curryN

*/