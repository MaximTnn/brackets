module.exports = function check(str, bracketsConfig) {
    let chars = str.split(""),
        array = [],
        open = [],
        close = [],
        closeIndex,
        openIndex,
        lenStr = chars.length,
        matchCheck = false;


    
    for (let i = 0, l = bracketsConfig.length; i < l; i++) {  
        let charOpen = (bracketsConfig[i])[0],    
            charClose = (bracketsConfig[i])[1];
        open.push(charOpen);
        close.push(charClose);
    };

    for (let i = 0; i < lenStr; i++) {  

        openIndex = open.indexOf(chars[i]);
        closeIndex = close.indexOf(chars[i]);

        if (openIndex !== -1 && closeIndex !== -1) {
            if (matchCheck == false) {
                array.push(openIndex)
                matchCheck = true
            continue;
            } else {
                array.pop(closeIndex)
                matchCheck = false
                continue;
            };
        } else {

            if (openIndex !== -1) {
                array.push(openIndex)
                continue;
                };
        
            if (closeIndex !== -1) {
                openIndex = array.pop();
                if (closeIndex !== openIndex) {
                    return false;
                }
            };
        }
    }

    if (array.length !== 0) {
        return false;
    }
    
    return true;
}
