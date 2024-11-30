/* Free Code Camp
- Switch Statments
- Returning Boolean Values 
- Return Early Patterns
 -Counting Cards
 */

//  Switch Statement

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1)); //alpha
console.log(caseInSwitch(2)); //beta
console.log(caseInSwitch(4)); //delta

// Default Statement: think of it like "else" in an else-if statement

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break; 
    }
    return answer;
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff("1")); // when there's no default - returns an empty string because answer is set to an empty string and hasn't  been overrided with "a, b, or c"
console.log(switchOfStuff("")); //returns the default answer (stuff) whenever we pass anything other than a, b, or c. 



// Multiple Identical Options in Switch Statements: a switch statement where multiple inouts give the same output.

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "medium";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high"
            break;
    }
    return answer;

}
console.log(sequentialSizes(1)); //low
console.log(sequentialSizes(3)); //low
console.log(sequentialSizes(6)); //medium
console.log(sequentialSizes(8)); //high
console.log(sequentialSizes(4)); //medium


//Counting Cards
 
/*
low cards - count goes up
high cards - count goes down
middle cards - count doesn't change

if the count is positive - player should bet high
if the count is zero or negative - player should bet low 
*/

//Using a switch statement to figure out what card has been passed and what to do. 

var count = 0; //global count variable

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        /*case 7: 
        case 8: 
        case 9:*/  //don't need 7,8,9 since the number won't change
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
            
    }

    var holdbet = "Hold" //defining whether we should hold or bet based on the count
    if (count > 0) {        //count is global since it's being used in multipule fucctions
        holdbet = "Bet"
    }
    return count + " " + holdbet;  //return count value and whether the player should hold or bet
}

console.log(cc(2)); //1 Bet
console.log(cc("K")); //0 Hold
console.log(cc("A")); // -1 Hold
console.log(cc(8)); // -1 Hold
console.log(cc(4)); //0 Hold
console.log(cc(3)); // 1 Bet
console.log(cc(2)); //2 Bet