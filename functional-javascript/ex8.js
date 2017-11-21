function duckCount() {
    var input =  Array.prototype.slice.call(arguments);
    return input.filter(isQuack).length;
}

function isQuack(item) {
    return Object.prototype.hasOwnProperty.call(item, 'quack');
}
module.exports = duckCount  