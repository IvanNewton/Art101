/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ivan Newton
   Date: 11/18/2024
*/

function fizzbuzz(){
    //makes a loop
    for (let i = 1; i <= 200; i++) {
        let output = ' ';
        //if the number is a multiple of 3 outputs fizz
        if (i % 3 === 0) output += "Fizz!";
        //if number is a multiple of 5 output buzz
        if (i % 5 === 0) output += "Buzz!";
        //if number is a multiple of 7 output boom
        if (i % 7 === 0) output += "Boom!";

        $("#output").append('<p>' + (output || i) + '</p>');
    }
}

fizzbuzz();