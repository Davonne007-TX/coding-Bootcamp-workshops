// Block 14 Workshop: Loops and Arrays


//Only Odds

/*

    Write an algorithm that accepts an array of numbers and 
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
    - Push the empty array to the declared variable with the iteration 
    - Console.log the empty array
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
    - Console log the declared variable to show the new array
*/

let newArrays = [70, 42, 55, 81, 21, 91, 34];
newArrays.pop();

newArrays.splice(0, 2);
console.log(newArrays);



// Last Only Odds

    
//Declare an empty array
const eleven = [];


//Make a new array with a new set of numbers you want to test
let ourArray = [2, 4, 6, 8, 10, 11, 12];


//Create a for loop, that iterates staring at index 0, less then how ever long our array is
   //Create an if statement and push empty array to our array with, the iterations 

   for(let i = 0; i < ourArray.length; i++) {
    if (ourArray[i] % 2 === 1) {
        eleven.push(ourArray[i]);
    }
}

//Console log empty array
console.log(eleven);





//Vowel versus Consonant

/*

    Write an algorithm that accepts a string of lowercase letters. 
    Print the word followed by how many consonants and vowels it has.
   

    - Set an empty array
    - Set the array of lowercase words you would like to test
    - Create a for loop, that loops the array less than or equal to 4, iterating each time
    - Create an if statement, that catches the array[i] and if its equal to each word
        - Create else if statements for each word in the array
        - Console log how many vowels it has an how many consonants for each word
       
*/

const ourWord = [];
let myWords = ["hello", "ukelele", "awesome", "onomonpia", "textbook"];

for(let i = 0; i <= 4; i++) {
    if(myWords[i] === "hello") {
        console.log("hello has 3 consonants and 2 vowels")

    }
    else if (myWords[i] === "ukelele") {
        console.log("ukelele has 3 consonants and 4 vowels");
    }
    else if (myWords[i] === "awesome") {
        console.log("awesome has 3 consonants and 4 vowels");
    }
    else if (myWords[i] === "onomonopia") {
        console.log("onomonopia has 4 consonants and 6 vowels");

    }
    else if (myWords[i] === "textbook") {
        console.log("textbook has 5 consonants and 3 vowels");    }
}



//Reverse Array 

    /*
    
         Write an algorithm that creates a new array in reverse order


         - Declare an empty array, used later to reverse the given array
         - Declare the actual array with the numbers you want 
         - Create a For Loop, that does the length of the array -1,
            - set it to i >= 0; and do the i-- since we are reversing the array
        - push the empty array to the the original array[i]
        - console.log the empty array
    */
   
   let reverseArray = [];
   let beforeArray = [1, 2, 3];

   for(let i = beforeArray.length -1; i >= 0; i--) {
        reverseArray.push(beforeArray[i]);
    }

    console.log(reverseArray);


   

    //Next Set of Reverse Arrays
     
    /*

        - Declare an empty array
        - Set an array to the elements you want, in this case an array of numbers
        - Create a for loop, looping the arrays length, and setting i less then or equal to 1
            - with the iteration being i--
        - push empty array to the original array[i]
        - console.log the empty array to show the array in reversed order
    */


     
   let myOtherReverseArray = [];
   let otherArray = [1, 3, 5, 7, 9, 11];

   for(let i = otherArray.length -1; i >= 0; i--) {
        myOtherReverseArray.push(otherArray[i]);
    }

    console.log(myOtherReverseArray);



    //Next Set of Reverse Arrays

    /*

        - Declare an array with  the numbers you want to
        - Declare a variable you want for the reversed array
          - assign that variable to the array and use the slice method 
            - starting at the beginning of the index (which is 0), to the end of the index(array)
            - Then reverse();
        - Console log the variable showing the array being reversed 

    */

    
    let myOtherReveredArray = [20, 50, 30, 60, 200];
    let moreReveredArrays = myOtherReveredArray.slice(0, myOtherReveredArray.length).reverse();

    console.log(moreReveredArrays);




//FizzBuzz 

    /*

         Write an algorithm that prints each number from 1 to 100 on a new line.
         For each multiple of 3, print "Fizz" instead of the number.
         For each multiple of 5, print "Buzz" instead of the number.
         For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


        - Create a function name fizzBuzz
        - Inside function create a for loop that starts at index 1
            - making i less then 101, with the iteration count
        - Create an if statement, if i is a multiple of 3 and 5, print "fizzBuzz"
            - an else if statement, if i is  a multiple of 3, print "fizz"
            - an else if statement, if i is a multiple of 5, print "buzz"
            - an else statement, console.log i
        - Call the function fizzBuzz

      */

     function fizzBuzz() {
        for(let i = 1; i < 101; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
     } 

     fizzBuzz();
  
     