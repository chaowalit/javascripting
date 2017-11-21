var argumentObj = {
    0: 'Adam',
    1: 'Eve',
    2: {},
    3: 100,
    4: true
};

var a = [];
function getValues(argument) {
    if(typeof argument !== 'object'){
        return [];
    }
   
    return Object.values(argument).map(function(num){
        return num;
    });
    //return Object.values(argument);
}

console.log(getValues(argumentObj));