// Block 15 Workshop: Froyo Survey


/*

   - Create an object name customer with a set of keys:value pairs
    - Console.log object to check work and console.table

   - Modify the following properties:
      - email, phone, zip code, and favorite flavors 
      - console.log to check your modifications 

    - Delete the following properties from the customer object
      - zipCode and favoriteStore
      - console.log customer object to check it deleted 
   
    - Using the dot notation, add the following key:values to the customer object
      - toppings, futureFlavors, todaysPurchaseCost
      - console.log and console.table, customer object to check work

    - In an array, print the keys in your survey 
*/


let customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
}

console.log(Object.entries(customer));
console.table(customer);

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["strawberry", "matcha"];

console.log(customer);

delete customer["zipCode"];
delete customer ["favoriteStore"];
console.log(customer);

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(customer);
console.table(customer);

console.log(Object.keys(customer));