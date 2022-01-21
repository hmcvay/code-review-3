// BUSINESS LOGIC
function beepBoop(inputArray) {
  const outputArray = [];
  if ((isNaN(inputArray))) {
    return false;
  } else if (inputArray >= 0) {
    outputArray.push("0");
  } else if (inputArray > 0) {
  for (i = 0; i < inputArray; i++) {
    outputArray.push(inputArray);
    }
  }
  console.log (outputArray);
  }