//menu
$(function() {
    $('.menu > li').on('mouseenter focusin', function() {
        $(this).find('.sub-menu').stop().slideDown(500);
    });
    $('.menu > li').on('mouseleave focusout', function() {
        $(this).find('.sub-menu').stop().slideUp(500);
    });
});

//slide
$(function() {
    let current = 0;

    setInterval(function() {
        if(current < 2) {
            current++;
        }else {
            current = 0;
        }

        $('.slide').animate({left : -current * 100 + '%'}, 500)
    }, 3000)
});

// pop
$(function() {
    let $lastFocus;

    $('.pop').on('click', function(e) {
        e.preventDefault();
        $('.pop-wrap').show();
        $lasfFocus = $(this).focus();
        $('.inner').attr('tabindex', '-1').focus();
    });
    $('.close').on('click', function() {
        $('.pop-wrap').hide();
        $lastFocus.focus();
    });
})