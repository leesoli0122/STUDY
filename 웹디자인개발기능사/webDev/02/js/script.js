// header
$(function() {
    $('.menu').on('mouseenter focusin', function() {
        $('.sub-menu, .nav-bg').stop().slideDown(500);
    })
    $('.menu').on('mouseleave focusout', function() {
        $('.sub-menu, .nav-bg').stop().slideUp(500);
    })
});

// slide
$(function() {
    let currentIndex = 0;

    setInterval(function() {
        if(currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-1200) +'px';

        $('.slide-inner').animate({left:slidePosition},500)
    }, 3000)
});

// 팝업
$(function() {
    let $lastFocus;
    $('.notice .pop').on('click', function(e){
        e.preventDefault();
        $('.pop-wrap').show();
        $lastFocus = $(this);
        $('.pop-inner').attr('tabindex','-1').focus();
    })
    $('.clsoe').on('click', function(){
        $('.pop-wrap').hide();
        if($lastFocus) $lastFocus.focus();
    })
})