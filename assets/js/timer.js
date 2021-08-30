/*=====================
  timer js
 ==========================*/

"use strict";

function makeMeTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}

$(document).on("ready", function () {
  
    // get future date
    let toDate = document
      .getElementById("countdownTime")
      .getAttribute("data-to-date");

    //    Set the date we're counting down to
    var countDownDate = new Date(toDate).getTime();

    //    Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("countdownTime").innerHTML =
        "<span>" +
        makeMeTwoDigits(days) +
        " Days</span>, " +
        "<span>" +
        makeMeTwoDigits(hours) +
        "<span class='pl-1'>:</span> </span>" +
        "<span>" +
        makeMeTwoDigits(minutes) +
        "<span class='pl-1'>:</span> </span>" +
        "<span>" +
        makeMeTwoDigits(seconds) +
        "</span> ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownTime").innerHTML = "EXPIRED";
      }
    }, 1000);
  
});
