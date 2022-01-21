// BUSINESS LOGIC
function beepBoop(userInput) {
  const outputArray = [];
  let num = parseInt(userInput);
  if ((isNaN(num))) {
    return "Please input a valid number";
  } else if (num < 0) {
    return "Please input a valid number";
  }
  
  for (i=0; i <= num; i++) {
    if (i.toString().includes('3')) {
      outputArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')) {
      outputArray.push("boop");
    } else {
      outputArray.push(i);
    }
  }
  return outputArray.join();
    console.log (typeof(outputArray));
}
