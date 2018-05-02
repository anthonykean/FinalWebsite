$(document).ready(function(){
    $("#hover").hover(function(){
        $("#hover").fadeOut(1000);
});
   $("#hover").hover(function(){
     $(".appear").fadeIn(1000);
});

$("#toggle").hover(function(){
    $("#togglebox").show(1000);
    $("#togglebox").css("background-color", "white");
});
