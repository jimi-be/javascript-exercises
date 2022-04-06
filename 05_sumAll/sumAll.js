const sumAll = function(num1, num2) {
    let sum = 0;
    let start = num1;
    let end = num2;
    //Error checks
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    // make sure start is less than end
    if (num1 > num2) {
        start = num2;
        end = num1;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
