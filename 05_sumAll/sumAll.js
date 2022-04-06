const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};


// Do not edit below this line
module.exports = sumAll;
