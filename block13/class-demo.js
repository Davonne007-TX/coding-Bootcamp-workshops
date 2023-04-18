// In class Demo 

/*

Tab One: Is Truthy
  - Create a variable, called value
  -If, value is truthy print true

  - If value is falsy,
    print "the boolean value false is falsy"

  - If the value is string,
    print true;

    - If value is null,
        print "the null value is falsy"

    - If value is undefined,
        print "undefined is falsy"
    
    - If the value is 0,
        print "The number  falsy, the only falsy number"
    
    - If the value is "",
        print "The empty string is falsy, the only false string"
 */


    let value = "";
    if (value) {
        console.log(true);
    } else {
         if (value === false) {
            console.log("The boolean value false is falsy");
        } else if (value === null) {
            console.log("The null value is falsy");
        } else if (value === undefined) {
            console.log("undefined is falsy");
        } else if (value === 0) {
            console.log("The number 0 is falsy, the only falsy number");
        } else if (value === "") {
            console.log("The empty string is falsy, the only falsy string");
        }
     }


/*
    Tab Two: Number Line

     - Declare variable num1 and num2
      - give them a value

     - take the sum of those two variables
     - complete a set of if statements testing the following

    - if sum is < -1000
        print sum is less than -1000

     -if sum < 0
        print sum is a negative number
    
     - if sum === 0
        print sum is equal to 0
    
     - if sum > 100
        print sum is greater than 100

     - if sum > 0
        print sum greater than 0
  
*/

let num1 = 99;
let num2 = -2;
let sum = num1 + num2;

if (sum < -1000) {
    console.log("sum is less than -1000");
} else if (sum < 0) {
    console.log("sum is a negative number");
} else if (sum === 0) {
    console.log("sum is equal to 0")
} else if (sum > 100) {
    console.log("sum is greater than 100");
} else if (sum > 0) {
    console.log("sum is greater than 0");
}


/*
    - Tab Three: Greater Than 5
        - Declaring variables number1, and number2, set them to equal 0
        - If num1 and num2 are >= 5
            print true
        -Else
            print false
*/

let number1 = 5;
let number2 = 6;

if (number1 >= 5 && number2 >= 5) {
    console.log(true);
} 

else {
    console.log(false);
}



/*
    - Tab Four: Pair and Compare
     - Set variables to param1, param2, param3, and param4

     - Compare the variables to each other using the strict equality operators
       using if/else if statements
*/

let param1 = "cat";
let param2 = "cat";
let param3 = 6;
let param4 = "6"; // true

if (param1 === param2) {
  console.log(true);
} else if (param1 === param3) {
  console.log(true);
} else if (param1 === param4) {
  console.log(true);
} else if (param2 === param3) {
  console.log(true);
} else if (param2 === param4) {
  console.log(true);
} else if (param3 === param4) {
  console.log(true);
} else {
  console.log(false);
}


// More examples I did
let param5A = "five";
let param5B = 5;

let param6A = "dog";
let param6B = "dawg";

if (param5A === param5B) {
    console.log(true);
} else {
    console.log(false);
}

if(param6A === param6B) {
    console.log(true);
} else {
    console.log(false);
}


//
let param7A = 0;
let param7B = false;

let param8A = "horse";
let param8B = "horse";

if (param7A === param7B) {
    console.log(true);
} else if (param8A === param8B) {
    console.log(true);
} else {
    console.log(false);
}






