/*
FreeCodeCamp JS Curriculum
- Build Objects
- Dot Notation
- Bracket Notation
- Variables
- Object Properties
- Nested Objects
- Nested Arrays
- Record Collection Exercise
*/

// Objects 

var myDog = {
    "name": "Angelica",
    "legs": 4,
    "tails": 1,
    "friends": "None",
};
console.log(myDog);

//Dot Notation
var nameValue = myDog.name; //tells me the 'name' property of the object
var legsValue = myDog.legs; //tells me the 'leg' property of the object
console.log(myDog.name);

myDog.friends = "Everyone"; //updating object properties
myDog.bark - "bow-wow"; //adding a property (bark)
delete myDog.legs //deletes the leg Vproperty

//Bracket Notation to access a property
var tailsValue = myDog["tails"];

// Record Collection
