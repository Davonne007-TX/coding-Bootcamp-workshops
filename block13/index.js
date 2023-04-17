// Tab One: Is Truthy
    //Given a value
        let truthy = "I am a string";

    //if the value is truthy, print true
        if(truthy === "I am a string") {
            console.log(true);
        }

    //else print false
        else {
            console.log(false);
        }

    

//Tab Two: Number Line
    //Given two numbers, set them to variables 
        let num1 = 99;
        let num2 = -2;

    //set the sum of those variables to another variable named sum
        let sum = num1 + num2;

    //do an if statement if sum is greater than 0, console log "97 is greater than 0"
        if(sum >= 0) {
            console.log(sum + " is greater than 0");
        }

    //else print "sorry your wrong"
        else {
            console.log("Sorry, your wrong");
         }




//Tab Three: Greater Than 5
    //Given two numbers, set them to variables
        const number1 = 5;
        const number2 = 6;

    //if both parameters are greater than or equal to 5, print true
         if (number1 && number2 >= 5) {
            console.log(true);
         }

    //else console.log false
        else {
            console.log(false);
        }


        
/*
//Tab Four: Pair and Compare
    //Given two values
        let param1A = "five";
        let param1B = 5;

    //Compare the two values using an if statement
        //print true if values are truthy
            if (param1A === param1B) {
                console.log(true);
            } 
    //else print false
        else {
            console.log(false);
        } 
    */



//Tab Four: Pair and Compare Continued.... 
    //Wasn't too sure if this is the way I was supposed to do it, or the above code, so I did both 

    //Given two sets of two values
        let param1A = "five";
        let param1B = "5";

        let param2A = "dog";
        let param2B = "dawg";
    
    //Compare the two sets and two values using an if statement 
        //print true if at least one pair is truthy
        if (param1A && param1B === param2A && param2B) {
            console.log(true);
        }

        //else print false
        else {
            console.log(false);
        } 
        


      