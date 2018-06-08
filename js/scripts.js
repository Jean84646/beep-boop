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
  var string = "";

  if ((parseInt(number)) % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  };

  var numArrays = number.split("");
  var makeArrays = [];

  for (var i = 0; i < numArrays.length; i++) {
    if (numArrays[i] === "0") {
      numArrays[i] = "Beep";
      makeArrays.push(numArrays[i]);
    } else if (numArrays[i] === "1") {
      numArrays[i] = "Boop";
      makeArrays.push(numArrays[i]);
    } else {
      makeArrays.push(numArrays[i]);
    };

  };

  for (i = 0; i < makeArrays.length; i++){
    string = string.concat(makeArrays[i]);
  };

  return string;
};
