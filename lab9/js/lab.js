/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Ivan Newton
   Date: 11/4/2024
*/

// add button to challenge section


// add a click listener to the challenge button
$(document).ready(function() {
    $('#button-challenge').click(function() {
        // Apply the 'special' class when the button is clicked
        $('#button-challenge').addClass('special');
    });
});