// Block 14 Workshop: Loops and Arrays



/*  Only Odds:

     - Write an algorithm that accepts an array of numbers and 
    returns a new array with only the odd numbers from the original array. 
    If there is only one odd number in the array, return an array with that single value.
    
*/

let oddNumbers = [];
let myNumbers = [2, 4, 6, 8, 11, 20, 15, 22];
for(let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] % 2 === 1) {
    oddNumbers.push(myNumbers[i]);
    }
}

console.log(oddNumbers);



// Next Set of Arrays in Only Odds

/*  
    - Declare an empty array, you will use later to console log the expected result
    - Declare a variable with the new set of array numbers
    - Do a for loop, starting at index  1, setting it to less than or equal to 9, and iterating by 2
    - Do an if statement if to catch all the odd numbers 
    - push the empty array to the declared variable with the iteration 
    - console.log the empty array
*/

let expectedResults = [];
let inputArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 1; i <= 9; i+= 2) {
    expectedResults.push(i);
}

console.log(expectedResults);



//Next Arrays 

/*
    - Declare a variable with the new set of array of numbers
    - Pop the last element of the array, (get rid of the last number)
    - Remove the first two elements of the array, use the splice method 
    - console log the declared variable to show the new array
*/

let newArrays = [70, 42, 55, 81, 21, 91, 34];
newArrays.pop();

newArrays.splice(0, 2);
console.log(newArrays);










