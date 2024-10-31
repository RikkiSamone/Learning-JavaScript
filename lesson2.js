/* FreeCodeCamp
 - Arrays
 - Modifying array Data
 - Global vs Local Scope 
 - Return Key
 - Assigning Returned Values
 - Stand In Line (Queue)
 - If Statements
 - Operators (Equality, Inequality, Greater/Less Than, And, Or)
 - Else Statements
 - Else If Statements
 - Golf Score Code Activity
 */

//  Store Multiple values with Arrays

var ourArray = ["John", 23]; //always sorrouned by brackets and searated by comma. 

var myArray = ["Rikki", 30];
console.log(myArray);

// Nested Arrays: an element is an array within an array

var nestArray = [["Bulls", 283], ["White Sox", 300]];
console.log(nestArray);

// Access Array Data

var dataArray = [50, 60, 70];
var ourData = dataArray[0]; // 50; asking JS to look in the dataArray and find  the first data point and assign that data point to the variable ourArray. 
                                            //Remember JS starts counting at 0.
console.log(ourData);

// Modify Arrays: 

var modArray = [18, 45, 99];
modArray[1] = 32; //modArray now equals [18, 32, 99] replacing the 45 with 32. 

console.log(modArray);


// Shopping List: 
    //an array of arrays 
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ['juice', 2], ["eggs", 4]];

//Reusable Functions

function ourReusableFunction() {    //ourReusableFunction is the name of the function
    console.log("Hiya, World");     //in between the curly braces is what i want the funciton to run when the function is being called
}
ourReusableFunction(); // calling the function by writing the function name; everytime this is invoked; the console log will print 'Hiya World'
ourReusableFunction();
ourReusableFunction();


// Passing Values to Functions with Arguments
    // parameters are variables that act as placeholder for the values that are to be input into a function when the function is called.


function functionWithArguments(a, b) {      //arguments are inside teh parenthesis (a, b)
    console.log(a - b);           //telling the function what to do with the arguments; in this case subtraction (a - b)
}
functionWithArguments(10, 5); //result is 5  (input values for a and b)

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(24, 32);

/* Global Scope */

//Declare your variable:

var myGlobal = 10; 

function fun1() {
     oopsGlobal = 5;  // if using a var keyword within a function the value would be scoped to the function and would NOT be global. 
    //in this example, it's global automatically and accessible throughout the program
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {       //function is saying: if typeof myGlobal does not equal undefined. which it wont because it's been dfined as 10. so it should output myGlobal: 10. 
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {     //would be undefined if we did var oopsGlobal = 5
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();


// Local Scope: variables declared within a function as well as within the function parameters

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();


//console.log(myVar); 
//result will be an error becuase myVar is not defined OUTSIDE of the function
     

// Return Statement/Key

function minusSeven(num) {
    return num - 7;
   
}

console.log(minusSeven(10));


// Assigning a Return Value to a Variable

var changed = 0 //initializes the variable 'changed'

function change(num) {  //naming the function change and asking it pass a number
    return (num + 5) / 3; //asking it to return a value using the mathematical expression (num + 5) / 3
}

changed = change(10); //calling the function and assigning the returned value to the variable 'changed'
console.log(changed); //prints the result which is 5/ 


var processed = 0;
function processArg(num) {
    return (num + 3) / 5; 
}

processed = processArg(7);
console.log(processed);


// Stand In Line

function nextInLine(arr, item) { // 2 variables or things we want passed (the array and the item (whatever will be pushed or shifted))
    arr.push(item); //add another item(6) to the end of the array and it should come after 5
    return arr.shift(); //return the first item on the list (1)
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr)); // shows what the array looks like before running the function [1, 2, 3, 4, 5]
console.log(nextInLine(testArr, 6)); // prints the shifted item which is 1
console.log("After: " + JSON.stringify(testArr)); //shows what the table looks like after the function is ran [2, 3, 4, 5, 6]


// Boolean Values: 2 values - true and false; think of on/off switch. on = true off = false

function welcomeToBooleans() {
    return true;
}
console.log(welcomeToBooleans(null)); //can insert any number, string, zero, NaN, null


//If Statements: used to make decisions in code. 'If' tells JS to execute code that meets certain conditions as defined in the parenthesis/

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));//true
console.log(trueOrFalse(1));//true
console.log(trueOrFalse(0));//false
console.log(trueOrFalse(" "));//true
console.log(trueOrFalse(false)); //false - note this will print as false because it is explicitly false (literally false)
console.log(trueOrFalse(NaN)); //false
console.log(trueOrFalse(null));//false
console.log(trueOrFalse(-6));//true
console.log(trueOrFalse(undefined));//false


// Equality Operators
function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, '10')) //Equal

function compareStrictEquality(a, b) {
    if (a === b) {
        return "Strictly Equal"
    }
    return "Not Strictly Equal"
}

console.log(compareStrictEquality(10, '10'));//Not strictly Equal
console.log(compareEquality((1 / 2), .5)); //Equal
console.log(compareStrictEquality((1 / 2), .5)); // Strictly Equal
console.log(compareEquality((7 / 10), .70));// Equal 


/* 
!= means does not equal
!= = means strictly not equal
<= means less than or equal to
>= greater than or equal to
&& means and
|| means or
*/

// And Operator
function testLogicalAnd(val) { 
    if (val <= 50 && val >= 25) { //asking to check if the value passed is less than or equal to 50 AND greater than or equal to 25
        return "Yes";                   //both expressions must be true to return Yes
    }
    return "No";
}

console.log(testLogicalAnd(10)); //No
console.log(testLogicalAnd(27)); //Yes


// Or Operator

function testLogicalOr(val){
    if (val < 10 || val > 20){      //only one of the expressions need to be true to return outside
    return "Outside"
    }
    return "Inside"
}
console.log(testLogicalOr(15)); //inside
console.log(testLogicalOr(25)); //outside
console.log(testLogicalOr(3)); // outside

// Chained If-Else statements Practice

/* 
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num< 20 - return "Large"
num >= 20 - return "Huge"
*/

function chainedIfElse(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }
 }

console.log(chainedIfElse(1)); //tiny
console.log(chainedIfElse(9)); //small
console.log(chainedIfElse(25)); //huge
console.log(chainedIfElse(-3)); //tiny
console.log(chainedIfElse(100)); // huge
console.log(chainedIfElse(17)); //large
console.log(chainedIfElse(12)); //medium
console.log(chainedIfElse(20)); //huge


// Golf Code
/* 
Strokes           Return
1                 Hole - in - one! 
<= par - 2        Eagle
par - 1           Birdie
par               Par
par + 1           Bogey
par + 2           Double Bogey
>= par + 3        "Go Home!"
*/

var names = ["Hole-in-One", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5]; 
    } else (strokes >= par + 3) 
        return names[6];
    }

console.log(golfScore(1, 1)); //hole-in-one
console.log(golfScore(3, 3)); //Par
console.log(golfScore(3, 1)); // Hole-in-one
console.log(golfScore(2, 3)); //Bogey
console.log(golfScore(6, 9)); //Go Home
