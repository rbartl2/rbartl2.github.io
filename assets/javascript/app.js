$(document).ready(function(){
    $("#work-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolio-work").offset().top},
            'slow');
    });

});