function doubleAll(numbers) {
	return numbers.map(getDoubleValue.bind(this, 2));
}

function getDoubleValue(res, num){
	return res * num;
}
module.exports = doubleAll