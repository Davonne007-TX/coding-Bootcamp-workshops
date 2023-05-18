//Block 19: Javascript Review

/*
   My Slice:

   Write a function mySlice that accepts up to three arguments:

    originalString (string)
    startIdx (number, optional)
    endIdx (number, optional)
    
    mySlice should return a string. The returned string should be a
    copy of the original string. If the user defines a startIdx, the
    returned string should start at that index:
    
    mySlice('slice and dice', 2)    // => ice and dice
    If the user defined an endIdx, the returned string should end at
     the last index before the endIdx:

    mySlice('slice and dice', 2, 5)    // => ice
    If the user doesn't define either the startIdx or the endIdx,
    return the entire originalString:

    mySlice('slice and dice')    // => slice and dice
    You can assume that startIdx will always be less than or equal
    to endIdx.

    Do not use the built in .slice string method. Feel free to use 
    it in all future workshop problems, though!
*/

function mySlice(originalString, startIdx, endIdx) {
    if(typeof originalString !== "string") {
      return null;
    }
    
    const original = originalString.length;
    startIdx = startIdx || 0;
    endIdx = endIdx || original;
    
    if(startIdx < 0) {
      startIdx = Math.max(original + startIdx, 0)
    } 
    
    if (endIdx < 0) {
      endIdx = Math.max(original + endIdx, 0)
    }
    
    let mySlicedString = "";
    
    for(let i = startIdx; i < endIdx && i < original; i++) {
      mySlicedString += originalString[i];
    }
    
    return mySlicedString;
  }//last curly