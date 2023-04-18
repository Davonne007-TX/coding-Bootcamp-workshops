//In class Demo 


//Tab One: Is Truthy
  //Create a variable, called value
  //If, value is truthy print true
  //If value is falsy, check the following conditions
     //print "the boolean value false is falsy"

//If value is null
  // print "the null value is falsy"

let value = "Davonne";
if(value) {
    console.log(true);
} else {
    if (value === false) {
        console.log("The boolean value is false");
} else if (value === null) {
    console.log("The null value is falsy")
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("The number 0 is falsy and is the only falsy number");
} else if (value === "") {
    console.log("The empty string is falsy (the only falsy string");
}
}


//Tab Two: Number Line

/* 
    -1 find the given num1 and sum2
    -2 take the sum 
      - if sum > -1000
        print sum is less than -1000
    - if sum < 0
        print sum is a negative number 
    - if sum === 0
        print sum is equal than 0
    - if sum > 100
        -print sum is greater than 100

    -3 return the result of 2
*/
  
let num1 = 50;
let num2 = 51;

let sum = num1 + num2;
if (sum < -1000) {
    console.log("sum is less than -1000");
} else if (sum < 0) {
    console.log("sum is a negative number");
} else if (sum === 0) {
    console.log("sum is equal to 0");
} else if (sum > 100) {
    console.log()
}