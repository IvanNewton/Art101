// index.js - Experiment with JS arrays and objects
// Author: Ivan Newton
// Date: 10/22/2024

// variables
myTransport = ["toyota Prius C ", "bus ", "rides from friends ", "feet."]

//object for main ride
myMainRide = {
  make: "toyota",
  model: "Prius C",
  color: "white",
  year: 2015,
  //fuction for age
  age: function(){
      return 2022 - this.year;
  }

}
//output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>")
//allows us to write an object into the document
document.writeln("My main ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "<pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
