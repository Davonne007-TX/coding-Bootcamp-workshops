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
