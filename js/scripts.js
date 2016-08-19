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
      $(".done").slideUp();
      $(".counting").slideDown();
      outputs.forEach(function(output, i) {
        $("ul.results").prepend("<li class=result>" + output + "</li>");
        // debugger;
        if(output === "ping") {
          $("li.result:nth-child(1)").delay(500 * i).animate({height:'toggle'});
        } else if (output === "pong") {
          $("li.result:nth-child(1)").delay(500 * i).animate({height:'toggle'});
        } else if (output === "ping-pong") {
          $("li.result:nth-child(1)").delay(500 * i).animate({height:'toggle'});
        } else {
          $("li.result:nth-child(1)").delay(500 * i).slideDown();
        }

      });
      $(".counting").delay(500 * outputs.length).slideUp(function() {
        $(".done").slideDown();
      });

      //  $("li").show();
      // $("li.result").each(function(i) {
        // if ($(this).text() !== "ping") {
          // $(this).delay(50 * i).slideDown();
        // }
      // });
    }
    event.preventDefault();
  });
});
