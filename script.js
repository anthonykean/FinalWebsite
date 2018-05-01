$(document).ready(function(){
    /*$("#hide").click(function(){
        $(".vote").hide();
    });
    $("#show").click(function(){
        $(".vote").show();
    });*/
    $("#hoverbox").hover(function(){
        $("#hoverbox").fadeOut(1000);
});
   $("#hoverbox").hover(function(){
     $(".appear").fadeIn(1000);
});

$("#toggle").hover(function(){
    $("#togglebox").show(1000);
    $("#togglebox").css("background-color", "white");
});
