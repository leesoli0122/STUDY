// header
$(function() {
    $('.menu > li').on('mouseenter focusin', function() {
        $('.sub-menu, .nav-bg').stop().slideDown(500);
    })
    $('.menu > li').on('mouseleave focusout', function() {
        $('.sub-menu, .nav-bg').stop().slideUp(500);
    })
});

// 슬라이드 fadeinout
$(function() {
    let currentIndex = 0;

    setInterval(function() {
        let slidePositon = (currentIndex + 1) % 3

        $('.slide-item').eq(currentIndex).fadeOut();
        $('.slide-item').eq(slidePositon).fadeIn();

        currentIndex = slidePositon;
    }, 3000)
});

// popup
$(function() {
    let $lastFocus;

    $('.pop').on('click', function(e) {
        e.preventDefault();
        $lastFocus = $(this);
        $('.pop-wrap').show();
        $('.pop-inner').attr('tabindex', '-1').focus();
    });

    $('.close').on('click', function() {
        $('.pop-wrap').hide();
        $lastFocus.focus();
    })
})