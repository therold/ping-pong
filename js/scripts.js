// Business logic
var pingPong = function(number) {
  if (!number || number < 1 || typeof number !== "number")  {
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


// Front end logic
$(document).ready(function() {
  var toggleScreen = function() {
    $(".counting").slideToggle();
    $(".done").slideToggle();
    $("button#stop").toggle();
    $("button#top").toggle();
    if ($("button#submit").prop("disabled")) {
      $("button#submit").prop("disabled", false);
    } else {
      $("button#submit").prop("disabled", true);
    }
    if ($("input#input-number").prop("disabled")) {
      $("input#input-number").prop("disabled", false);
    } else {
      $("input#input-number").prop("disabled", true);
    }
  };

  $("button#top").on("click", function(){
    $("body").animate({ scrollTop: 0 }, 200);
  });

  $("button#stop").on("click", function(){
    $(".counting, .done, p.result").clearQueue().stop();
    $(".done").text("Counting canceled! Shall we play again?");
    toggleScreen();
  });

  $("form#input-form").submit(function(event) {
    var userInput = parseInt($("input#input-number").val());
    var outputs = pingPong(userInput);
    if (!outputs) {
      alert("Please enter a number!");
    } else {
      var delay = 400;
      $("div.results").children().remove();
      $("body").animate({ scrollTop: $(".results").offset().top }, 200);
      toggleScreen();
      outputs.forEach(function(output, i) {
        if (output === "ping" || output === "pong") {
          $("div.results").prepend(
            "<p class='result'>" +
              "<span class='" + output + "'>" + output + "</span>" +
            "</p>");
          $("p.result:nth-child(1)")
            .delay(delay * i).animate({height:'toggle'})
            .children().delay(delay * i).animate({left:'0px', right: '0px'});
        } else if (output === "ping-pong") {
          $("div.results").prepend(
            "<p class=result>" +
              "<span class='ping'>ping</span> - <span class='pong'>pong</span>" +
            "</p>");
          $("p.result:nth-child(1)")
            .delay(delay * i).animate({height:'toggle'})
            .children().each(function() {
              $(this).delay(delay * i).animate({left:'0px', right: '0px'});
            });
        } else {
          $("div.results").prepend("<p class=result>" + output + "</p>");
          $("p.result:nth-child(1)").delay(delay * i).slideDown();
        }
      });
      $("body").delay(delay * outputs.length).show(function() {
        $(".done").text("All done! Shall we play again?");
        toggleScreen();
      });
    }
    event.preventDefault();
  });
});
