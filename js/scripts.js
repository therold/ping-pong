var pingPong = function(number) {
  return number;
}


$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    var userInput = $("input#input-number").val();
    var outputs = pingPong(userInput);
    $("ul.results").children().remove();
    $("ul.results").append("<li>" + outputs + "</li>")
    event.preventDefault();
  });
});
