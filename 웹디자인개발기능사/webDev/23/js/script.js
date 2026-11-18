$(function () {
    // menu
    $('.menu').on('mouseenter focusin', function () {
        $('.sub-menu, .menu-bg').stop().slideDown(200);
    });
    $('.menu').on('mouseleave focusout', function () {
        $('.sub-menu, .menu-bg').stop().slideUp(200);
    });

    // slide
    let current = 0;
    setInterval(function () {
        if (current < 2) {
            current++;
        } else {
            current = 0;
        }

        let slidePosition = current * (-100) + '%';

        $('.slide').animate({ left: slidePosition }, 500)
    }, 3000);

    // tab
    $('.tab-btn button').on('click', function () {
        let index = $(this).parent().index();
        
        $('.tab-btn li').removeClass('active');
        $(this).attr('aria-selected', 'false');

        $(this).parent().addClass('active');
        $(this).attr('aria-selected', 'true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(index).show();
    });

    // pop
    let $lastFocus;
    $('.pop').on('click', function () {
        $('.pop-wrap').show();
        $lastFocus = $(this);
        $('.inner').attr('tabindex', '-1').focus();
    });
    $('.close').on('click', function () {
        $('.pop-wrap').hide();
        $lastFocus.focus();
    });
})