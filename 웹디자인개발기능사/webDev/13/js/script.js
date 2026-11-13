$(function () {
    $('.menu > li').on('mouseenter focusin', function () {
        $(this).find('.sub-menu').stop().slideDown(500);
    });
    $('.menu > li').on('mouseleave focusout', function () {
        $(this).find('.sub-menu').stop().slideUp(500);
    });
});

$(function () {
    let current = 0;

    setInterval(function () {
        if (current < 2) {
            current++;
        } else {
            current = 0;
        }

        let slidePosition = current * (-400) + 'px';
        $('.slide').animate({ top: slidePosition }, 500);
    }, 3000);
});

$(function () {
    $('.tab-cont > div').hide();
    $('.tab-cont > div:first').show();

    $('.tab-btn button').on('click', function () {
        $('.tab-btn li').removeClass('active');
        $('tab-btn button').attr('aria-selected', 'false');
        let index = $(this).parent().index();

        $(this).parent().addClass('active');
        $(this).attr('aria-selected', 'true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(index).show();

    })
});

$(function () {
    let $lastFocus;

    $('.pop').on('click', function (e) {
        e.preventDefault();
        $('.pop-wrap').show();
        $lastFocus = $(this).focus();
        $('.inner').attr('tabindex', '-1').focus();
    });

    $('.close').on('click', function () {
        $('.pop-wrap').hide();
        $lastFocus.focus();
    })
})