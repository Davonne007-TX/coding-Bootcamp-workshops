//Block 19: Javascript Review

/*

    My Slice: 

    Define a function, myIndexOf, that accepts three arguments:

    source (string)
    searchValue (string)
    startIdx (number, s)

    If the source contains the searchValue, return the index at which the
    searchValue starts. If the searchValue appears more than once in the
    source, return the index from the first occurrence of the searchValue. 
    If the searchValue doesn't exist in the source, return -1.

    If a startIdx is passed into the function, ignore any instances of the
    searchValue that occur before startIdx. If no startIdx is provided,
    start searching from the beginning of the source.

    Hint: Javascript's .slice string method may be useful here.

    Do not use the built-in .indexOf string method in your answer.
    Feel free to use it in all future workshop problems though!

*/

function myIndexOf(source, searchValue, startIdx) {
    startIdx = startIdx || 0;
    
    for(let i = startIdx; i < source.length; i++) {
      if(source.slice(i, i + searchValue.length) === searchValue) {
        return i;
      }
    }
    
    return -1;
  }// last curly