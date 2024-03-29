$("#current").text(moment().format("MMMM Do, h:mm a"));
var hour = "";
var amPm = moment().format("a");
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
onLoad();
var t = setInterval(function() { 
}, 1000);

//functions
function onLoad() {
  hour = moment().format("h");
  if (amPm === "pm") {
    hour = parseInt(hour) + 12;
  }
  if (hour === 24) {
    hour = 12;
  }
  for (var i = 0; i < timeArray.length; i++) {
    if (parseInt(timeArray[i]) > hour) {
      $("#text" + timeArray[i]).attr(
        "style",
        "background: rgba(53, 255, 53, .3);"
      );
    } else {
      $("#text" + timeArray[i]).attr(
        "style",
        "background: rgba(255, 53, 53, .3);"
      );
    }
    if (hour == timeArray[i]) {
      $("#text" + timeArray[i]).attr("style", "background: rgba(0, 0, 0, .1)");
    }
  }
  for (var i = 0; i < timeArray.length; i++) {
    var z = JSON.parse(localStorage.getItem(timeArray[i]));
    $("#text" + timeArray[i]).text(z);
  }
}

//event listeners
$(".lock").on("click", function() {
  var n = $(this).attr("lock");
  var x = $(this).attr("number");
  if (n === "open") {
    $(this).attr("src", "images/lock-closed.png");
    var y = document.getElementById("text" + x).value;
    localStorage.setItem(x, JSON.stringify(y));
    document.getElementById("text" + x).readOnly = true;
    $(this).attr("lock", "closed");
  } else {
    $(this).attr("src", "images/lock-open.png");
    $(this).attr("lock", "open");
    document.getElementById("text" + x).readOnly = false;
  }
});
$("#lock-all").on("click", function() {
  $(".lock").attr("src", "images/lock-closed.png");
  $(".lock").attr("lock", "closed");
  for (var i = 0; i < timeArray.length; i++) {
    document.getElementById("text" + timeArray[i]).readOnly = true;
    var y = document.getElementById("text" + timeArray[i]).value;
    localStorage.setItem(timeArray[i], JSON.stringify(y));
  }
});
$("#unlock-all").on("click", function() {
  $(".lock").attr("src", "images/lock-open.png");
  $(".lock").attr("lock", "open");
  for (var i = 0; i < timeArray.length; i++) {
    document.getElementById("text" + timeArray[i]).readOnly = false;
  }
});
$("#reset").on("click", function() {
  for (var i = 0; i < timeArray.length; i++) {
    localStorage.clear();
    document.getElementById("text" + timeArray[i]).value = "";
  }
});
