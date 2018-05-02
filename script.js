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
