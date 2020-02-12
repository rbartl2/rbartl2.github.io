$(document).ready(function(){
    $("#work-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolio-work").offset().top},
            'slow');
    });

    function showResume(){
        $("#resumeModal").modal("show");
    }

    $("#resume-link").on("click", showResume);

    function showContact(){
        $("#modalContactForm").modal("show");
    }

    $("#contact-link").on("click", showContact);

});