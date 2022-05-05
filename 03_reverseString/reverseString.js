const reverseString = function(str) {
    const stringCharacters = str.split("");
    let reversedString = "";
    for (let i = stringCharacters.length - 1; i >=0; i--) {
        reversedString += stringCharacters[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
