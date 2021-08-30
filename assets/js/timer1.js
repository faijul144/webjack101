var countDiv = document.getElementById("timer"),
  endDay = new Date(countDiv.getAttribute("end-day")),
  secpass,
  countDown = setInterval(function () {
    "use strict";

    secpass();
  }, 1000);

function secpass() {
  "use strict";

  var now = new Date();

  var days = endDay - now;

  var hours = Math.floor(days / 1000 / (60 * 60));
  var minutes = Math.floor((days % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((days % (1000 * 60)) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  countDiv.innerHTML = hours + ":" + minutes + ":" + seconds;

  if (seconds > 0) {
    seconds = seconds - 1;
  } else {
    clearInterval(countDown);

    countDiv.innerHTML = "countdown done";
  }
}
