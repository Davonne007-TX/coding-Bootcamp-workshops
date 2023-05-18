//Block 19: Javascript Review 

/*

   Exponentiate: 

   Write a function Exponentiate that accepts two arguments:

    base (number)
    power (number)

    Exponentiate should return the result of raising the base by
    the power. Assume that power will always be an integer greater
    than or equal to zero. Don't forget that any number raised to the 0th power is equal to 1!

*/

function exponentiate(base, power) {
    let product = 1;
    for(let i = 0; i < power; i++) {
        product *= base;
    } 
    return product;
   }

//

