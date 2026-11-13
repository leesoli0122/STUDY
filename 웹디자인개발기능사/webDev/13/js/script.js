// menu
$(function() {
    $('.menu > li').on('mouseenter focusin', function() {
        $(this).find('.sub-menu').stop().slideDown(500);
    })
    $('.menu > li').on('mouseleave focusout', function() {
        $(this).find('.sub-menu').stop().slideUp(500);
    })
});

// slide
$(function() {
    let current = 0;

    setInterval(function() {
        if(current < 2) {
            current++;
        }else {
            current = 0;
        }

        let slide = current * (-400) + 'px';

        $('.slide').animate({top:slide},500)
    }, 3000)
});

// tab
$(function() {
    $('.tab-cont > div').hide();
    $('.tab-cont > div:first').show();

    $('.tab-btn button').on('click', function() {
        let index = $(this).parent().index();
        $('.tab-btn li').removeClass('active');
        $(this).attr('aria-selected','fasle');

        $(this).parent().addClass('active');
        $(this).attr('aria-selected','true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(index).show();
    })
})