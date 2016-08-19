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
    $("div.results").children().remove();
    if (!outputs) {
      alert("Please enter a number!");
    } else {
      $(".done").slideUp();
      $(".counting").slideDown();
      outputs.forEach(function(output, i) {
        $("div.results").prepend("<p class=result>" + output + "</p>");
        // debugger;
        if(output === "ping") {
          $("p.result:nth-child(1)").delay(400 * i).animate({height:'toggle'});
        } else if (output === "pong") {
          $("p.result:nth-child(1)").delay(400 * i).animate({height:'toggle'});
        } else if (output === "ping-pong") {
          $("p.result:nth-child(1)").delay(400 * i).animate({height:'toggle'});
        } else {
          $("p.result:nth-child(1)").delay(400 * i).slideDown();
        }

      });
      $(".counting").delay(400 * outputs.length).slideUp(function() {
        $(".done").slideDown();
      });
    }
    event.preventDefault();
  });
});
