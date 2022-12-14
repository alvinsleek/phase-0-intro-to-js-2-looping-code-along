// Code your solutions in this file
function countDown(start) {
    // Make sure the input is a positive integer
    if (start <= 0 || start % 1 !== 0) {
      return;
    }
  
    console.log(start);
  
    // If the starting number is not already 0, call countDown again with the starting number decremented by 1
    if (start > 0) {
      countDown(start - 1);
    }
  }
  
  

  
  
