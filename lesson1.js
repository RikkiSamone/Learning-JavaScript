/* FreeCodeCamp: Learning Javascript
Lesson 1: 
    - Variables: Declaring and Assigning
    - Data Types
    - Basic Math
    - Increment and Decrement
    - Augmented Math Operations
    - String Variables
    - Operators
    

console.log('Hello World')

// Uninitialized Variables: 

// Initialize these three variables: 
/* var a = 5;
var b = 10;
var c = 'I am a';

// Do not change code below this line. 

a = a + 1; // 6
b = b + 5; // 15
c = c + "String"; //'I am a String' */


// Incrementing Numbers (adding +1)

var myVar = 87;
// myVar = myVar + 1; 
myVar++
console.log(myVar)

//Decrement Numbers (subtract 1)
var myVar = 10;
myVar--;
console.log(myVar)


// Augmented Math Operations
var d = 3; 
var e = 17; 
var f = 12; 

//d = d + 12;
d += 12;  //means the same thing as d = d+12
//e = e + 9;
e += 9; //tells JS to add the number to the variable, and assign the result to that variable
//f = 7 + f;
f += 7;

console.log(d);
console.log(e);
console.log(f);

var a = 11; 
// a = a - 6;
a -= 6; 
console.log(a);

var b = 12; 
//b = b * 3; 
b *= 3; 
console.log(b);

var c = 33; 
// c = c/11
c /= 11; 
console.log(c);

// Declaring Strings: 
var firstName = 'Rikki' //single quotes
var lastName = `Gaddy` //backticks
var middleName = "Samone" //double quotes

console.log("Hello my name is", firstName, middleName, lastName); 

//Printing quotes inside of a string
var myStr = "I am a \"double quoted\" string inside \"double quotes\""; //Use backslash before the inside quotes so JS knows you're not ending the string. 
console.log(myStr); //can also start the string with single quotes ''

/*
Escape Sequences: 
Code Output: 
\' single quotes
\" double quotes
\\ backlash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
/*FirstLine
        \SecondLine
ThirdLine
*/

// Plus Operator: can concatenate strings

var ourStr = "I come first " + "I come second.";

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// can concatenate strings using += operator

var thisStr = "This is the first sentence. ";
thisStr += "This is the second sentence.";
console.log(thisStr);


// Append Variables to Strings: 

var anAdjective = "awesome!";
var theStr = "freecodecamp is ";
theStr += anAdjective;
console.log(theStr);

// Length of a String: 

var firstNamelength = 0;
var firstName = 'Ava';

firstNameLength = firstName.length; 
console.log(firstName.length, "characters in Ava");     //3 characters in Ava


// Bracket Notation: 
//declaring variables; 2 variables being the first letterofLastName and lastName. 
var firstletterofLastName = ""; // assigned the variable to be empty
var lastName = "Lovelace"; //assigned the last name as Lovelace

firstLetterofLastName = lastName[0]; // using LoveLace as the last name, what is the first leter of the last name. 0 tells JS that I'm looking for the first character
console.log(lastName[0]);// L; note that JS starts counting at zero. 
console.log(firstLetterofLastName)// can also print this to get L
firstLetterofLastName = lastName[5]; // 5 tells Js I'm looking for the fifth letter
console.log(lastName[5]); // a

// String Immutability; cannot be altered once created


// MadLibs Style Word Game by concatenating strings 

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
        result += "The " +  myAdjective + " " + myNoun + " " + myVerb + " to the store " + " " + myAdverb 
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "fast", "flew", "super fast"));


