var slice = Array.prototype.slice

function logger(namespace) {
    return function () {
        // console.log(arguments);
        // console.log(Array.prototype.slice.call(arguments));
        // console.log([namespace].concat(Array.prototype.slice.call(arguments)));
        console.log.apply(console, [namespace].concat(Array.prototype.slice.call(arguments)));
    }
}

module.exports = logger

// apply accespts agrument in array
