// Declaring a variable 'importantVault' to a string message
    //CONSOLE.LOG for the variable 'importantVault' to show the string message in the console
    //CONSOLE.LOG typeof to show what the type of is for the variable 'importantVault' in the console

// Declare a variable 'numOne' to 2 + 8, making the value 10
// Declare a variable 'numTwo' to 10 + 120 / 4, making the value 40
// Declare a variable 'numThree to 15 + 30 - 6, making the value 39

//ALERT a pop up alert message to add all the variables together
  //Add them together by using a string concatenation and " " to add spaces and a dash between numbers

const importantVault = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
console.log(typeof importantVault);
console.log(importantVault);

let numOne = 2 + 8;
let numTwo = 10 + 120 / 4;
let numThree = 15 + 30 - 6;

alert(numOne + " " + "-" + " " + numTwo + " " + "-" + " " + numThree);

//Adding Pictures and Functions To Change the Pictures
  //Create a FUNCTION changePic(), set a variable newPic to the id "closedVault"
  //Set the variable to the new picture using .src
  //CALL the FUNCTION

function changePic() {
  let newPic = document.getElementById("closedVault");
  newPic.src="openVault.jpg";
}

changePic();

//Adding Pictures and Functions To Change the Pictures
  //Create a FUNCTION changePicBack(), set a variable oldPic to the id "closedVault"
  //Set the variable to the old picture using .src
  //CALL the FUNCTION

function changePicBack() {
  let oldPic = document.getElementById("closedVault");
  oldPic.src="closeVault.jpg";
}

changePicBack();