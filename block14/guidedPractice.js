/*
    - Create an array to include the following list items: Honda, Toyota, Ford, Subaru.

    - Using that array, use array methods to transform it to:
        ["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"].
*/

const cars = ["Honda", "Toyota", "Ford", "Subaru"];
    cars.pop();
    cars.push("Audi");
    cars.shift();
    cars.unshift("Hyundai");
    cars.splice(2,0, "Mercedes");
    console.log(cars);


 /*
    Using loops, count how many "e"s are in the following sentence:

      - "There once was a donkey named Eeyore."

*/

let sentence = "There once was a donkey named Eeyore";
let count = 0; 

for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === "e" || sentence[i] === "E") {
        count++;
    }
}

console.log(count);