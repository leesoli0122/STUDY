// nav
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
        if(current < 2){
            current++;
        } else {
            current = 0;
        }

        let slide = current * (-800) + 'px';
        $('.slide').animate({left:slide},500)
    }, 3000)
});

// pop
$(function() {
    let $lastFocus;

    $('.pop').on('click', function() {
        $('.pop-wrap').show();
        $lastFocus = $(this);
        $('.inner').attr('tabindex', '-1').focus();
    });

    $('.close').on('click', function() {
        $('.pop-wrap').hide();
        $lastFocus.focus();
    })
})