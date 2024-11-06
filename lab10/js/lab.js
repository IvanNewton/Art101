/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Ivan Newton
   Date: 11/7/2024
*/
function generateRandomText(){
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const newText = ""
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    //Get a random Starting index to slice the Lorem Ipsum Text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}
// click listener for button
// click listener for button make-convo, appends random length & starting Lorem Ipsum-like text to output div as a message,
$("#make-convo").click(function () {
    const newText = generateRandomText();
    $("#output").append('<div class="text left"><p>' + newText + "</p></div>");
});
// append a new div to our output div
// append a new div to our output div
$("#send-user-input").click(function () {
    // Get user's input
    const userInput = $("#user-input").val(); 
    // Append the user's text as a right-aligned message bubble
    $("#output").append('<div class="text right"><p>' + userInput + "</p></div>");
   // Clear the input field after sending
    $("#user-input").val(""); 
});