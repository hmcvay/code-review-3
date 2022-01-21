// BUSINESS LOGIC
function beepBoop(num) {
  const outputArray = [];
  const inputArray = parseInt(num);
  if ((isNaN(inputArray))) {
    return false;
  } else if (inputArray < 0) {
    return false;
  }
  return outputArray.join("");
    console.log (outputArray);
  }