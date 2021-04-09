$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
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

$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#socicon").toggleClass("open-socicon");
})  

const toggleButton = document.getElementByClassName('toggle-button')[0]
const navigation = document.getElementByClassName('navigation')[0]

toggleButton.addEventListener('click', () => {
    navigation.classList.toggle('active')
})