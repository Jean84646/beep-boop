// User Interface
$(document).ready(function(){
  $("#form-beep-boop").submit(function(event){
    event.preventDefault();
    var userInput = $("input#input-number").val();
    var result = convert(userInput);
    $("#output-area").fadeIn();
    $("#user-output").text(result);
  });
});




// Business Logic
var convert = function(number){
  var numArrays = number.toString().split("");

  for (var i = 0; i <= numArrays.length; i++) {
    if (numArrays[i] === "0") {
      return makeString(numArrays[i]);
    } else if (numArrays[i] === "1") {
      return output = "Boop";
    } else if (number%3 === 0) {
      return output = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else {
      return number;
    };

  var makeString = function(numArrays){
  var string = "";
  for (i = 0; i < numArrays.length; i += 1){
    string = string.concat(numArrays[i]);
  };
  return string;
  };

  };
};
