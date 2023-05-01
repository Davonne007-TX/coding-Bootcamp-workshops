//Block 16 Workshop: Discount Chain 

/*
    You have been hired by a pharmaceutical startup as a junior developer. 
    Things are busy and they need you to start right away. 
    To encourage customer retention, they have been reworking their checkout system
    to include two different types of discounts.

    Using the following criteria, your first assignment is to create the logic for their 
    checkout system that returns the total cost of all refills including if the customer
    has a subscription and/or a coupon.

    If a customer has a subscription, the customer will receive a 25% discount after the refill
    total has been calculated.

    If the customer has a coupon, the customer will receive a $10 discount after the subscription
    discount has been calculated.

    At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."

*/



//Copy and paste the given customer objects
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
  };

  const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
  }  

  const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
  }

  //Code a function that have three arguments consisting of refills, subscription, and coupons
    //Create an if statement, If customer has a subscription calculate the total total with 25% discount
    // If the customer has a coupon, calculate the total, customer receives a $10 discount
    //return total
  function calculateTotal(refillTotal, hasSubscription, hasCoupon) {
    let total = refillTotal;
    if (hasSubscription) {
        total *= 0.75; 
    }
   if (hasCoupon) {
      total -= 10; 
    } 
    return total;
  }

  //Create a variable (for each customer), that calls the function,
  //Passing each customers pricePerRefill and refills, subscription and coupons from their object, as arguments 
  const timmysTotal = calculateTotal(timmy.pricePerRefill * timmy.refills, timmy.subscription, timmy.coupon);
  const sarahsTotal = calculateTotal(sarah.pricePerRefill * sarah.refills, sarah.subscription, sarah.coupon);
  const rockysTotal = calculateTotal(rocky.pricePerRefill * rocky.refills, rocky.subscription, rocky.coupon);
 
  //console.log timmysTotal, sarahsTotal, and rockysTotal
  console.log("Timmy's grand total is " + "$" + timmysTotal);
  console.log("Sarah's grand total is " + "$" + sarahsTotal);
  console.log("Rocky's grand total is " + "$" + rockysTotal);
