//Code Pen Examples for Block 18

// Testing Day 02 - Workshop

/*--------------------/*

/*
    Bacteria Time:

    Define a function, bacteriaTime, that accepts two arguments:

    1. currentNum (number) - number of starting bacteria
    2. targetNum (number) - desired number of bacteria

    Assuming that the number of bacteria doubles every 20 minutes,
    bacteriaTime should return the number of minutes required
    for the number of bacteria to grow from currentNum to a
    number equal to or larger than targetNum.

    You can assume that currentNum will be a positive integer.
    If targetNum is smaller than currentNum, return the string,
    'targetNum must be larger than currentNum'.   

*/

function bacteriaTime (currentNum, targetNum) {
    if (targetNum <= currentNum) {
      return "targetNum must be larger than currentNum";
    }
    
    const double = 20;
    let numBacteria = currentNum;
    let time = 0;
    
    while (numBacteria < targetNum) {
      numBacteria *= 2;
      time += double;
    }
    
    return time;  
  }

//


/*
    Most Vowels:

      Define a function, mostVowels, that accepts one argument,
      a string of words.

      mostVowels should return the word that has the most vowels.

      mostVowels('I am a keeper with some real rhythms'); // => keeper
      If none of the words have any vowels, return an empty string.

      mostVowels('try my gym'); // => ''

  */

  
      


  
/*  

    Frequency Analysis 

    Define a function frequencyAnalysis that accepts a string of
    lower-case letters as an argument.

    frequencyAnalysis should return an object containing the 
    amount of times each letter appeared in the string.

*/


function frequencyAnalysis(string) {
  const result = {};
  
  for(let i = 0; i < string.length; i++) {
    const character = string[i];
    if(result[character]) {
      result[character]++;
    } else {
      result[character] = 1;
    }
  }
  return result;
}


/*
  Attendance Check:

  Define a function, attendanceCheck, that accepts a string argument
  corresponding to a day of the week.

  Using the globally-defined classRoom array, attendanceCheck should
  return a new array with only the names of the students present on
  the inputted day of the week.

  */


 