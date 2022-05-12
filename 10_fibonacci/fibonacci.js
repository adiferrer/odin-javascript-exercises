const fibonacci = function(n) {
    n = Number(n);
    if (n === 1 || n === 2) return 1;
    else if (n <= 0) return 'OOPS';

    let firstTerm = 1;
    let secondTerm = 1;
    let fibo = 0;
    for (let i = 3; i <= n; i++) {
        fibo = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = fibo;
    }
    return fibo;
};
// Do not edit below this line
module.exports = fibonacci;
