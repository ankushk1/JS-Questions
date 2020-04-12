//A map is a built-in function of Arrays in javascript which helps us iterate over each individual element of the array and returns a brand new array.

var arr = [1,2,3];
var squarednums = arr.map(function(val, index, array) {
    console.log('val :', val, 'index :', index, 'array :', array);
    return (val * 3);
});

console.log(squarednums);
console.log(arr);



