function MapByFn(fn, output, value, index, arr){
    output.push(fn.call(this, value));
    return output;
}

module.exports = function arrayMap(arr, fn) {
    return arr.reduce(MapByFn.bind(this, fn), []);
}