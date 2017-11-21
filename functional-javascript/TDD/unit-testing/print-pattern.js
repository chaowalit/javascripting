var printPattern = (str) => {
    if(typeof str !== 'string'){
        return false;
    }
    return `*
**
*${str}*
****`;
}

// function printPattern (char) {
//     if(typeof char !== 'string'){
//         return false;
//     }
//     return `*
// **
// *${char}*
// ****`;
// }

module.exports = printPattern;