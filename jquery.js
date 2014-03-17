$(document).ready(function () {
    $(".secondLayer").slideUp(0.01);
});

$(document).ready(function () {
    $("#aboutMeTop").mouseenter(function () {
        $("#aboutMe").slideDown("fast");
    });
});

$(document).ready(function () {
    $("#aboutMeTop").mouseleave(function () {
        $("#aboutMe").stop().slideUp("fast");
    });
});


$(document).mousemove(function(e){
    var $width = ($(document).width())/255;
    var $height = ($(document).height())/255;
    var $red = parseInt(e.pageX / $width,10);
    var $green = parseInt(e.pageY / $height,10);
    var $blue = ($red+$green)/2;
    $("h1").css("background-color", "rgb("+$red+","+$green+","+$blue+")");
}); 

$(document).ready(function () {
    $("#projectsTop").mouseenter(function () {
        $("#projects").slideDown("fast");
    });
});

$(document).ready(function () {
    $("#projectsTop").mouseleave(function () {
        $("#projects").stop().slideUp("fast");
    });
});

$(document).ready(function () {
    $("#reviewsTop").mouseenter(function () {
        $("#reviews").slideDown("fast");
    });
});

$(document).ready(function () {
    $("#reviewsTop").mouseleave(function () {
        $("#reviews").stop().slideUp("fast");
    });
});