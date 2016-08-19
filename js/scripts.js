var pingPong = function(number) {
  if (!number || number < 1)  {
    return false
  } else {
    var numbers = [];
    for (i = 1; i <= number; i++) {
      if (i % 15 === 0) {
        numbers.push("ping-pong");
      } else if (i % 5 ===0) {
        numbers.push("pong");
      } else if (i % 3 === 0) {
        numbers.push("ping");
      } else {
        numbers.push(i);
      }
    }
    return numbers;
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
      outputs.forEach(function(output) {
        $("ul.results").append("<li>" + output + "</li>");
      });
    }
    event.preventDefault();
  });
});
