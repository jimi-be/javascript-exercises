const removeFromArray = function(arr, ...args) {
    //console.log(typeof args);
    // console.log(args);
    //arr.forEach(element => console.log(element));
    for (let i = 0;i < arr.length;i++) {
        if (arr[i] === args[0]) {
            arr.splice(i,1);
        }
    }
    return arr;

    //delete an element
    //array.splice(element, number of elements)
};

// removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
