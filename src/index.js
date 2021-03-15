module.exports = function check(str, bracketsConfig) {
    const newArr = [];
    const strArr = str.split(``)
    const arrBrackets = Object.fromEntries(bracketsConfig);
    
    for (const elem of strArr) {
        if (newArr[0] === elem) {
            newArr.shift();
        } else if (arrBrackets[elem]) {
            newArr.unshift(arrBrackets[elem]);
        } else {
            return false;
        }
    }

    return newArr.length === 0;
}
