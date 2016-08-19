var pingPong = function(number) {
  if (!number || number < 1)  {
    return false
  } else {
    return number;
  }
}

$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    var userInput = parseInt($("input#input-number").val());
    var outputs = pingPong(userInput);
    $("ul.results").children().remove();
    if (!outputs) {
      alert("Please enter a number!");
    } else {
      $("ul.results").append("<li>" + outputs + "</li>");
    }
    event.preventDefault();
  });
});
