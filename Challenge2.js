var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

//passed moonWalkers as parameter to the function alphabetizer
function alphabetizer(name) {
    // Your code goes here!

   var alpha = [];
    //created an array

   for (var i=0; i<name.length; i++)    //used for loop to format all the strings in the parameter name
    {
    n = name[i].trim().split(" ");
    // used trim to remove spaces between firstname and lastname
    // used split method to create array of substrings - firstname and lastname
    // saved new array into variable 'n'

    n[1] = n[1].slice(0,1).toUpperCase() + n[1].slice(1).toLowerCase();
    // change first letter of lastname into uppercase and remaining name into lower case by using slice method

    n[0] = n[0].slice(0,1).toUpperCase() + n[0].slice(1).toLowerCase();
    // change first letter of firstname into uppercase and remaining name into lower case by using slice method

    var x = n[1] + ", " + n[0];
    // added formatted firstname and lastname into a string

    alpha.push(x);
    //pushed formated name array 'alpha'
    }
    
  
   return alpha.sort();
   // used sort method to sort formatted names alphabetically
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));

