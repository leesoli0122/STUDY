$(function () {
    $('.menu > li').on('mouseenter focusin', function () {
        $('.sub-menu, .menu-bg').stop().fadeIn(500);
    })
    $('.menu > li').on('mouseleave focusout', function () {
        $('.sub-menu, .menu-bg').stop().fadeOut(500);
    })
});

$(function () {
    let current = 0;

    setInterval(function () {
        let slidePosition = (current + 1) % 3;

        $('.slide > li').eq(current).fadeOut(800);
        $('.slide > li').eq(slidePosition).fadeIn(800);

        current = slidePosition;
    }, 3000);
});

$(function () {
    let $lastFocus;
    $('.pop').on('click', function () {
        $('.pop-wrap').show();
        $lastFocus = $(this).focus();
        $('.inner').attr('tabindex', '-1').focus();
    });
    $('.close').on('click', function () {
        $('.pop-wrap').hide();
        $lastFocus.focus();
    });
})