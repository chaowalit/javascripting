var response = [
    {
        status: 'success',
        data: 'yes'
    },
    {
        status: 'success',
        data: 'hello',
        code: 200
    },
    {
        status: 'error',
        error: 'no'
    }
];

function groupByKey(response, key){
    var result = {};
    for(var i = 0 ; i < response.length ; i++){
        if (result[response[i][key]] === undefined) {
            result[response[i][key]] = [];
        }
        result[response[i][key]].push(response[i]);
    }
    return result;
}
console.log(groupByKey(response, 'status'));