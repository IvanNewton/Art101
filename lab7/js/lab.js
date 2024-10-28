// index.js - Experiment with functions
// Author: Ivan Newton
// Date: 10/26/2024

// variables

//function
let sortName;
function sortUserName() {
   if (!sortName) {        //wesbot fix checks if user already recorded imput
        var userName = window.prompt("Hi, Please type in your full name so I can fix it.");
                console.log("username =", userName);
        //turn string into array
            var nameArray = userName.split('');
                console.log("nameArray =", nameArray);
        //sort array
            var nameArraySort = nameArray.sort();
                console.log("nameArraySort =", nameArraySort);
        //array back to string
           var nameSorted = nameArraySort.join();
                console.log("nameSorted =",nameSorted);
   }
        return nameSorted;
}


    //output
    document.writeln("I fixed your name: ", sortUserName(), "</br>")