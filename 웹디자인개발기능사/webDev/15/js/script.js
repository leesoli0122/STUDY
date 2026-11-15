//menu
$(function () {
    $('.menu > li').on('mouseenter focusin', function () {
        $('.sub-menu, .menu-bg').stop().fadeIn(500);
    })
    $('.menu > li').on('mouseleave focusout', function () {
        $('.sub-menu, .menu-bg').stop().fadeOut(500);
    })
})

//slide
$(function () {
    let current = 0;
    setInterval(function () {
        let slidePosition = (current + 1) % 3;
        $('.slide > li').eq(current).fadeOut(800);
        $('.slide > li').eq(slidePosition).fadeIn(800);

        current = slidePosition;
    }, 3000)
})

// tab
$(function () {
    $('.tab-btn button').on('click', function () {
        let index = $(this).parent().index();
        $('.tab-btn li').removeClass('active');
        $(this).attr('aria-selected', 'false');

        $(this).parent().addClass('active');
        $(this).attr('aria-seleted', 'true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(index).show();
    })
})
// pop
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
    })
})