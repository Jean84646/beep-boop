// User Interface
$(document).ready(function(){
  $("#form-beep-boop").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#input-number").val());
    var result = converter(userInput);
    $('#user-output').text(result);
    $("#output-area").fadeIn();
  });
});
