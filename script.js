$("#current").text("high");



function onLoad(){

};



$(".lock").on("click", function(){
    var n = $(this).attr("lock");
    var x = $(this).attr("number");
    if(n === "open"){
    $(this).attr("src", 'images/lock-closed.png');
    document.getElementById('text' + x).readOnly = true; //setting readonly status
    var y = document.getElementById('text' + x).value;
    console.log("y = " + y);
    console.log("n = " + n);
    alert(JSON.stringify(y.value));
    localStorage.setItem(x, JSON.stringify(y));
    $(this).attr("lock", "closed");}
    else{
        $(this).attr("src", 'images/lock-open.png');
        $(this).attr("lock", "open");
        document.getElementById('text' + x).readOnly = false;
    }
});