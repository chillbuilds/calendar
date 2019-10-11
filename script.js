$("#current").text("high");
var timeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
onLoad ();

 function onLoad() { for(var i = 0; i < timeArray.length; i++){
    var z = JSON.parse(localStorage.getItem(timeArray[i]));
    console.log(z);
    $("#text" + timeArray[i]).text(z);
 };}

 

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
