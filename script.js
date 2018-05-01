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

$("#toggletwo").hover(function(){
    $("#toggleboxtwo").show(1000);
    $("#toggleboxtwo").css("background-color", "brown");
});

$("#toggle").hover(function(){
    $("#togglebox").show(1000);
    $("#togglebox").css("background-color", "purple");
});
