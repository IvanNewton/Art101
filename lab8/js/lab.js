// index.js - Experiment with anon functions and callbacks
// Author: Ivan Newton
// Date: 10/30/2024

// Array of numbers


// Named function to calculate the square root of a number
function isEven(x){
    return (x % 2 ==0);
}
//test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My Array", array);

var results = array.map(isEven);
console.log("Test of evenness of array:", results);

var results = array.map(function(x){
    return x ** 0.5
})
// Example usage: Apply the function to the array
console.log("Squareroot of array:", results);

// Your map results data
var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);
