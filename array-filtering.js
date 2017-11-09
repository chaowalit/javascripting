// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var result = [];
// var j = 0;
// for (var i = 0; i < numbers.length ; i++){
// 	if(numbers[i] % 2 === 0){
// 		result[j] = numbers[i];
// 		j++;
// 	}
// }
// console.log(result);

// var filtered = numbers.filter(function (number) {
//    	return number % 2 === 0;
//  });
// console.log(filtered);

var numbers = [1,2,4,5,6,7,8,9,10];
var j = 0;
var explan = [];
for (var i = 0; i < numbers.length; i++) {
	if(numbers[i] === 10){
		explan[j] = numbers[i];
		j++;
	}
}
console.log(explan);