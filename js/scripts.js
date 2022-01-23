// BUSINESS LOGIC

function beepBoop(userInput) {
  const outputArray = [];
  let num = parseInt(userInput);
  if ((isNaN(num))) {
    return false;
  } else if (num < 0) {
    return false;
  }
  
  for (i=0; i <= num; i++) {
    if (i.toString().includes('3')) {
      outputArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')) {
      outputArray.push("boop");
    } else if (i.toString().includes('1')) {
      outputArray.push("beep");
    } else {
      outputArray.push(i);
    }
  }
  return outputArray.join();
}


// UI LOGIC

$(document).ready(function() {
  $("button#submit").click(function(){
    inputtedNumber = beepBoop($("#number").val());

    if (inputtedNumber === false) {
      $("#input-paragraph").append("<li>" + "Please enter a number 0 or greater." + "</li>");
      $("#input").empty();  
    } else {
      $("#input-paragraph").hide();
      $("#output").show();
      
    }

    $("#output").append("<li>" + inputtedNumber + "</li>");
  })
  $("button#again").click(function() {
    $("#result2").empty();
    $("#output").hide();
    $("#input-paragraph").show();  
  })
})
