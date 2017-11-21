const generatePattern = (arr) => {
    if(!Array.isArray(arr)){
        return false;
    }
    let result = '';
    arr.forEach((num,i)=>{
        if(typeof num !== 'number'){
            result = `${result}-
`;
        }else{
            for(let i=0 ; i<num ; ++i){
                result = `${result}*`;
            }
            if(i === arr.length - 1){
                result = `${result}${num}`;
            }
            else{
                result = `${result}${num}
`;
            }
        }
    });

    // for(let i = 0 ; i < arr.length ; i++){
    //     for(let j = 0 ; j < arr[i] ; j++){
    //         result = result+'*';
    //         if(j == (arr[i] - 1)){
    //             if(i == (arr.length - 1)){
    //                 result = result+arr[i];
    //             }else{
    //                 result = result+arr[i]+'\n';
    //             }
    //         }
    //     }
    // }
    return result;
}

module.exports = generatePattern;