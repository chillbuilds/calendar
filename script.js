$("#current").text("high");
var timeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
onLoad();


//functions
function onLoad(){
    for(var i = 0; i < timeArray.length; i++){
    var z = JSON.parse(localStorage.getItem(timeArray[i]));
    $("#text" + timeArray[i]).text(z);
 };}
function lock(){
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
}

//event listeners
$(".lock").on("click", lock);

$("#lock-all").on("click", function(){
    $(".lock").attr("src", "images/lock-closed.png");
    for(var i = 0; i < timeArray.length; i++){
    document.getElementById("text" + timeArray[i]).readOnly = true;}
    // $(this).attr("lock", "closed");
});

$("#unlock-all").on("click", function(){
    $(".lock").attr("src", "images/lock-open.png");
    for(var i = 0; i < timeArray.length; i++){
        document.getElementById("text" + timeArray[i]).readOnly = false;}
});

$("#reset").on("click", function(){
    $("#text" + timeArray[i]).text("");
    for(var i = 0; i < timeArray.length; i++){
        localStorage.clear();
}})