/*
 * Back to top.
 * @author Frank O. Laus <laus@fol9000.de>
 */

/* Offset in pixels when back-to-top button/line is displayed */
var offset = 220;
/* Fade in/out speed */
var duration = 350;

/* Show back-to-top element when scrolling. */
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
    } else {
        $('.back-to-top').fadeOut(duration);
    }
});

/* Register click event handler and handle scrolling for back-to-top element. */
$(function () {
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    $('.shrnm-nav-link').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href') ).offset().top
        }, 350);
    })

});


