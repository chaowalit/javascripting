function foo(){
    var bar;
    quux = 2;
    function zip(){
        var quux;
        bar = true;
    }
    return zip;
}


var stack = (function(){
    var a = [];
    var pushFn = function(value){
        a.push(value);
    }
    var popFn = function(){
        return a.pop();
    }
    var getValue = function(){
        return a.shift();
    }
    return {
        pushFn: pushFn,
        popFn: popFn,
        getValue: getValue
    }
})();