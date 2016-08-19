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
  $("button#top").on("click", function(){
    $("body").animate({ scrollTop: 0 }, 200);
  });

  $("form#input-form").submit(function(event) {
    var userInput = parseInt($("input#input-number").val());
    var outputs = pingPong(userInput);
    var delay = 400;
    $("div.results").children().remove();
    if (!outputs) {
      alert("Please enter a number!");
    } else {
      // $(".results").get(0).scrollIntoView();
      $("body").animate({ scrollTop: $(".results").offset().top }, 200);
      $(".done").slideUp();
      $(".counting").slideDown();
      outputs.forEach(function(output, i) {
        if (output === "ping" || output === "pong") {
          $("div.results").prepend("<p class='result'><span class='" + output + "'>" + output + "</span></p>");
          $("p.result:nth-child(1)").delay(delay * i).animate({height:'toggle'});
          $("p.result:nth-child(1)").children().delay(delay * i).animate({left:'0px', right: '0px'});
        } else if (output === "ping-pong") {
          $("div.results").prepend("<p class=result><span class='ping'>ping</span> - <span class='pong'>pong</span></p>");
          $("p.result:nth-child(1)").delay(delay * i).animate({height:'toggle'});
          $("p.result:nth-child(1)").children().each(function() {
            $(this).delay(delay * i).animate({left:'0px', right: '0px'});
          });
        } else {
          $("div.results").prepend("<p class=result>" + output + "</p>");
          $("p.result:nth-child(1)").delay(delay * i).slideDown();
        }
      });
      $(".counting").delay(delay * outputs.length).slideUp(function() {
        $(".done").slideDown();
      });
    }
    event.preventDefault();
  });
});
