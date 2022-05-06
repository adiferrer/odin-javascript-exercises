const sumAll = function(a, b) {
    let min = (a < b) ? a : b;
    const max = (a > b) ? a : b;
    let sum = 0;
    
    if (a >= 0 && b >= 0 && typeof a == "number" && typeof b == "number") {
        for (min; min <= max; min++) {
            sum += min;
        }
        return sum;
    }

    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
