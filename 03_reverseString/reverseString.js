const reverseString = function(input) {
    let reversed ='';

    let inpLength = input.length;
    for (let i = 1; i <= inpLength; i++) {
        reversed += input.charAt(inpLength-i);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
