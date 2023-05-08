// Block 18 Workshop: Writing Test Specifications 

/* 
    Prompt 1 - A function called "multiplication" that returns
    the product of the two input numbers.

    UNIT TESTS:
    ==> Except a function to be an arrow function or with the key word function
    ==> Except the function to take two numbers as arguments, num1 and num2
    ==> Expect function to declare a variable that takes num1 and num2
     and multiplies them together
     ==> Expect function to return the variable that did the multiplication 
    ==> Expect to console.log the solution that invokes the function, and pass 
    the numbers 10 and 20
    ==> The value should be a number, should be 200
    ==> If value is not a number, do not run code
    ==> Expect to not run code if arguments are not numbers   
    ==> Expect to not run code if there is a syntax error
    ==> Expect to not run code if said declarations are not let, const or var


    Integration: 
    ==>If value is not a number, alert a message that says "Review your code"

*/



/* 
        Prompt 2: A function called "concatOdds" takes two arrays of integers as arguments.
        It should return a single array that only contains the odd numbers, in ascending order,
        from both of the arrays.

        UNIT TESTS: 
        ==> Expect an arrow function or a function with the keyword function
        ==> Except function to have two arrays as arguments (array1, array2)
        ==> Except to throw an error if there are no arguments 
        ==> Except function to declare a variable to combine the two arrays using concat
        ==> Except function to take that said variable, to filter out the even numbers, 
        using the filter method
        ==> Except to throw an error if, the filter does not contain, (num => num % 2 !== 0);
        ==> Expect to throw an error if there is incorrect syntax
        ==> Expect to declare another variable that take the filtered array and sorts it in ascending order,
        ((a, b) => a - b);
        ==> Except to throw an array if it is in descending order, ((a, b) => b - a);
        ==> Expect to return that the variable that sorted the array
        ==> Expect to declare the two sets of arrays, array1 = [1, 2, 3, 4, 5] array2 = [6, 7, 8, 9, 10]
        ==> Except to throw an error if arrays are not declared by let or const
        ==> Except to throw an error if arrays are not numbers, array1 = ["1", "2", "3", "4", "5"] array2 = ["6", "7", "8", "9"]
        ==> Except to declare a variable that calls the function concatOdds with the parameters array1 and array2
        ==> Except to throw an error, if the function contains strings, "array1", "array2"
        ==> Except to throw an error if the incorrect function is called, not concatOdds
        ==> Except to console log the variable that calls the function concatOdds

*/



/* 
      Prompt 3 - A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user.
      They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

      FUNCTIONAL TESTS:
      ==> User is able to order food by clicking button that says start order
      ==> User is taken to a page to enter their zip code to show closest store via text input     
      ==> User is directed to select carry out or delivery 
      ==> User submits button for current location 
      ==> User sees a pop up message and selects closest location from given zip code
      ==> Except to show a message if no store locations are located near you
      ==> Except to show locations that are closed
      ==> User is taken to page that shows stores menu
      ==> Except to show foods items that are unavailable 
      ==> User sees prices for the food
      ==> User selects their order for food via text, images and buttons 
      ==> User selects the button add to order 
      ==> User is able to click the button that says checkout, once order is complete 
      ==> User is directed to sign in, create an account, or sign in as guest via buttons
      ==> Expect page to prompt user to sign in if they have an account and then taken to check out menu
      ==> Except page to prompt user to create an account if button is selected, and when finished taken to check out menu
      ==> Expect page to prompt user to go to check out menu if continue as guest is selected
      ==> Except page to have user enter their credit card information 
      ==> User is able to enter in a promo code if they have one
      ==> User is able to review their order 
      ==> User is able to edit/delete their order
      ==> User is able to confirm stores location 
      ==> User is able to change locations 
      ==> User is able to submit order and run their transaction 
      ==> User is shown errors if credit card information does not go through 
      ==> User is prompt to correct credit card information 
      ==> User is shown a processing bar, showing their order being processed
      ==> User is directed to a screen that shows the time of pick up or when food will be delivered 
      ==> If user selected continue as guest, user is shown a screen that says create an account to gain points 

  */











