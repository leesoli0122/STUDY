$(function () {
    // menu
    $('.menu > li').on('mouseenter focusin', function () {
        $(this).find('.sub-menu').stop().slideDown(200);
    });
    $('.menu > li').on('mouseleave focusout', function () {
        $(this).find('.sub-menu').stop().slideUp(200);
    });

    // slide
    let current = 0;
    setInterval(function () {
        let slide = (current + 1) % 3;
        $('.slide > li').eq(current).fadeOut(500);
        $('.slide > li').eq(slide).fadeIn(500);

        current = slide;
    }, 3000);

    // tab
    $('.tab-cont > div').hide();
    $('.tab-cont > div:first').show();

    $('.tab-btn button').on('click', function () {
        $('.tab-btn li').removeClass('active');
        $('.tab-btn button').attr('aria-selected', 'false');

        let current = $(this).parent().index();

        $(this).parent().addClass('active');
        $('.tab-btn button').attr('aria-selected', 'true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(current).show();
    });

    // pop
    let $lastFocus;

    $('.pop').on('click', function () {
        $('.pop-wrap').show();
        $('.inner').attr('tabindex', '-1').focus();

        $lastFocus = $(this);
    });

    $('.close').on('click', function () {
        $('.pop-wrap').hide();

        $lastFocus.focus();
    });
})