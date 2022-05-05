const repeatString = function(string, num) {
    let finalString = "";
    if (num >= 0) {
        for(let i = 0; i < num; i++) {
            // using the addition concatenation
            // finalString += string;
            
            // using the concat method
            finalString = finalString.concat(string);
        }
        return finalString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
