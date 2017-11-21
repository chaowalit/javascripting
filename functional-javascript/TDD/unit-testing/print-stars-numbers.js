const printStars = (num = 2) => {
    let result = '';
    for(let i = 1;i <= num; i++){
        for (let j = 0; j < i; j++){
            if(j == (i - 1)){
                if(num == (i)){
                    result = result + '*';
                }else{
                    result = result + '*\n';
                }
            }else{
                result = result + '*';
            }
        }
    }
    return result;
}

const printNumbers = (num = 3) => {
    let result = '';
    for(let i = 1;i <= num; i++){
        for (let j = 0; j < i; j++){
            if(j == (i - 1)){
                if(num == (i)){
                    result = result + i;
                }else{
                    result = result + i +'\n';
                }
            }else{
                result = result + i;
            }
        }
    }
    return result;
}

const maxPrinter = (printOutput, ...args) => {
    var max = args.reduce((a,b) => (Math.max(a, b)));
    return printOutput(max);
}

var res = {
    printStars: printStars,
    printNumbers: printNumbers,
    maxPrinter: maxPrinter
};
module.exports = res;