/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ivan Newton
   Date: 11/11/2024
*/

//return Gryffindor, Ravenclaw, Slytherin, and Huflepuff
//depending on length mod 4

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

var myButton = document.getElementById("submit");
myButton.addEventListener("click", function(){
    var name = document.getElementById("imput").value;
    var house = sortingHat(name);
    newText = "<P>The Sorting Hat has Sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})