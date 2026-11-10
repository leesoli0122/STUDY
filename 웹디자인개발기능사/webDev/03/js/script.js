// header
$(function() {
    $('.main > li').on('mouseenter focusin', function(){
        $(this).siblings().find('.sub-menu').stop().slideUp();
        $(this).find('.sub-menu').stop().slideDown();
    })
    $('.main > li').on('mouseleave focusout', function(){
        $(this).find('.sub-menu').stop().slideUp();
    })
});

// slide
$(function() {
    let currentIndex = 0;

    setInterval(function() {
        let slidePosition = (currentIndex + 1) % 3

        $('.slide-inner li').eq(currentIndex).fadeOut(500);
        $('.slide-inner li').eq(slidePosition).fadeIn(500);

        currentIndex = slidePosition;
    }, 3000)
});

// tab
$(function(){
    $('.tab-btn button').on('click', function(){
        let tabindex = $(this).parent().index();
        
        $('.tab-btn li').removeClass('active');
        $(this).attr('aria-selected','fasle');
        
        $(this).parent().addClass('active');
        $(this).attr('aria-selected','true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(tabindex).show();
    })
});

// popup
$(function() {
    let $lastFocus;
    $('.notice .pop').on('click', function(e){
        e.preventDefault();
        $lastFocus = $(this);

        $('.pop-wrap').show();
        $('.pop-inner').attr('tabindex','-1').focus();
    });

    $('.close').on('click', function(){
        $('.pop-wrap').hide();
        $lastFocus.focus();
    })
})