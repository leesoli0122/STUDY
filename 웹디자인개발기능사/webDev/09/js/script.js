// header
$(function () {
    $('.menu > li').on('mouseenter focusin', function () {
        $(this).find('.sub-menu').stop().slideDown(500);
    })
    
    $('.menu > li').on('mouseleave focusout', function () {
        $(this).find('.sub-menu').stop().slideUp(500);
    })
});

// slide
$(function () {
    let current = 0;

    setInterval(function () {
        let slidePositon = (current + 1) % 3;

        $('.slide > li').eq(current).fadeOut(500);
        $('.slide > li').eq(slidePositon).fadeIn(500);

        current = slidePositon;
    }, 3000)
});
// tab
$(function () {
    $('.tab-btn > li button').on('click', function () {
        let index = $(this).parent().index();
        
        $('.tab-btn li').removeClass('active');
        $('.tab-btn > li button').attr('aria-selected', 'false');

        $(this).parent().addClass('active');
        $('.tab-btn > li button').attr('aria-selected', 'true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(index).show();
    })
})