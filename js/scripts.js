// BUSINESS LOGIC
function beepBoop(num) {
  const outputArray = [];
  const inputArray = parseInt(num);
  if ((isNaN(inputArray))) {
    return "Please input a valid number";
  } else if (inputArray < 0) {
    return "Please input a valid number";
  }
  
  for (i=0; i <= inputArray; i++) {
    if (i.toString().indexOf(3)) {
      outputArray.push("Won't you be my neighbor?")
    } else {
      outputArray.push(i);
    }
  }
  return outputArray.join();
    console.log (typeof(outputArray));
}
