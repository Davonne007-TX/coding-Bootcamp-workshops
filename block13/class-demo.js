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
  






















