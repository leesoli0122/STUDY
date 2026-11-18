$(function() {
    // menu
    $('.menu > li').on('mouseenter focusin', function() {
        $(this).find('.sub-menu').stop().slideDown(200);
    });
    $('.menu > li').on('mouseleave focuout', function() {
        $(this).find('.sub-menu').stop().slideUp(200);
    });

    // slide
    let current = 0;
    setInterval(function() {
        let slide = (current + 1) % 3;
        $('.slide li').eq(current).fadeOut(500);
        $('.slide li').eq(slide).fadeIn(500);
        current = slide;
    }, 3000);

    // pop
    let $lastFocus;
    $('.pop').on('click', function() {
        $('.pop-wrap').show();
        $('.inner').attr('tabindex', '-1').focus();
        $lastFocus = $(this);
    });
    $('.close').on('click', function() {
        $('.pop-wrap').hide();
        $('.inner').attr('tabindex', '');
        $lastFocus.focus();
    });
})