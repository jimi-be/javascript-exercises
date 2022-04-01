const reverseString = function(input) {
    let reversed ='';

    for (let i = 1; i < input.length; i++) {
        reversed[i-1] = input.charAt(input.length-1);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
