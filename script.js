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

$("#hide").click(function(){
    $(".imageone").hide();
});
$("#show").click(function(){
    $(".imageone").show();
});
$("#hide").click(function(){
    $(".imagetwo").hide();
});
$("#show").click(function(){
    $(".imagetwo").show();
});
});
