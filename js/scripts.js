// BUSINESS LOGIC
function beepBoop(num) {
  const outputArray = [];
  const inputArray = parseInt(num);
  if ((isNaN(inputArray))) {
    return false;
  } else if (inputArray < 0) {
    return false;
  } else if (inputArray >= 0) {
    for (i=0; i < inputArray; i++) {
      outputArray.push(i);
    }
  }
  return outputArray.join();
    console.log (typeof(outputArray));
    
  }