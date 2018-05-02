$(document).ready(function(){
    $("#hover").hover(function(){
        $("#hover").fadeOut(2000);
});
   $("#hover").hover(function(){
     $(".appear").fadeIn(2000);
});

$("#toggle").hover(function(){
    $("#togglebox").show(2000);
    $("#togglebox").css("background-color", "green");
});

$("#show").click(function(){
    $(".imageone").hide();
});
$("#hide").click(function(){
    $(".imageone").show();
});
$("#show").click(function(){
    $(".imagetwo").hide();
});
$("#hide").click(function(){
    $(".imagetwo").show();
});
});
