$(function() {
    $('.menu > li').on('mouseenter focusin', function() {
        $(this).find('.sub-menu').stop().slideDown(500);
    })
    $('.menu > li').on('mouseleave focusout', function() {
        $(this).find('.sub-menu').stop().slideUp(500);
    })
});

$(function() {
    let current = 0;

    setInterval(function(){
        let slide = (current + 1) % 3;

        $('.slide-item').eq(current).fadeOut(500);
        $('.slide-item').eq(slide).fadeIn(500);

        current = slide;
    }, 3000)
});

$(function() {
    let $lastFocus;
    $('.pop').on('click', function(){
        $('.pop-wrap').show();
        $lastFocus = $(this)
        $('.pop-inner').attr('tabindex','-1').focus();
    })
    $('.close').on('click', function(){
        $('.pop-wrap').hide();
        if($lastFocus) $lastFocus.focus();
    })
})