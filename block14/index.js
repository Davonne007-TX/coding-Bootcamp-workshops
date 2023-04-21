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


//


