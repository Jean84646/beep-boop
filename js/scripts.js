// User Interface
$(document).ready(function(){
  $("#form-beep-boop").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#input-number").val());
    var result = convert(userInput);
    $("#output-area").fadeIn();
    $("#user-output").text(result);
  });
});




// Business Logic
var convert = function(number){
  var numArrays = [];

  if (number === 0) {
    return numArrays.push("Beep");
debugger;
  } else if (number === 1) {
    return  numArrays.push("Boop");
  } else if (number%3 === 0) {
    return  "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    numArrays.push(number);
  }
  return numArrays.toString();

};


  // var numArrays = number.toString().split("");
  //
  // for (var i = 0; i <= numArrays.length; i++) {
  //   if (numArrays[i] === "0") {
  //     numArrays[i] = "Beep";
  //     return makeString(numArrays[i]);
  //   } else if (numArrays[i] === "1") {
  //     numArrays[i] = "Boop";
  //     return output = "Boop";
  //   } else if (number%3 === "0") {
  //     return output = "I'm sorry, Dave. I'm afraid I can't do that.";
  //   } else {
  //     return number;
  //   };
  //
  // var makeString = function(numArrays){
  // var string = "";
  // for (i = 0; i < numArrays.length; i += 1){
  //   string = string.concat(numArrays[i]);
  // };
  // return string;
  // };
