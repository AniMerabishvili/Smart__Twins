$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 800) {
            $(".nav-div").addClass("active-header");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".nav-div").removeClass("active-header");
        }
    });
});
document.getElementById('buttonSend').addEventListener('click', function() {
    alert('You pressed enter');
});