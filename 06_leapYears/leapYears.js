const leapYears = function(year) {
    //my original solution
    // if (year % 4 == 0) {
    //     if (year % 100 == 0 && year % 400 != 0) {
    //         return false;
    //     }
    //     return true;
    // }
    // return false;
    // ----------
    // simpler to return the result of the if tests directly
    return year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0);
};

// Do not edit below this line
module.exports = leapYears;
