//Declare an object name dinner
const dinner = {
    cheeseBurger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    unlimitedSoupAndSalad: 16
 }

//Create an array of the different foods that were eaten
 console.log(Object.keys(dinner));


 //Create an array of the prices of the meals 
 console.log(Object.values(dinner));

 
 //Add the values of the dinner object,
   // to calculate the total cost of the meal
let prices = Object.values(dinner);
let totalCost = 0;

for(let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
}

console.log(totalCost);