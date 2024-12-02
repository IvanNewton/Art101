/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ivan Newton
   Date: 11/24/2024
*/


$(document).ready(function() {
    // Adding click event listener to the "Fetch Data" button
    $('#activate').click(function() {
        // Make AJAX call to an external API
        $.ajax({
            url: "https://api.chucknorris.io/jokes/random", // Example: Chuck Norris joke API
            type: "GET", // GET request
            dataType: "json", // Expecting JSON response

            // On success, display the response data in the #output div
            success: function(data) {
                console.log(data); // Log the data for debugging
                $('#output').html(data.value); // Display the joke in the output div
            },

            // On error, log the error to the console
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
                $('#output').html("Sorry, there was an error fetching the data.");
            }
        });
    });
});