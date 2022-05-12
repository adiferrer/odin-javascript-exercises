const palindromes = function (str) {
    str = str.toLowerCase()
             .split('')
             .filter(c => c >= 'a' && c <= 'z')
             .reverse()
             .join(''); 
    const reversed = str.toLowerCase()
                        .split('')
                        .filter(c => c >= 'a' && c <= 'z')
                        .reverse()
                        .join('');
    return reversed == str;
};

// Do not edit below this line
module.exports = palindromes;
