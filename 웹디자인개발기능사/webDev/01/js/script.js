$(function () {
  $(".menu").on("mouseenter focusin", function () {
    $(".sub-menu").stop().slideDown(500);
  });

  $(".menu").on("mouseleave focusout", function () {
    $(".sub-menu").stop().slideUp(500);
  });
});

// 슬라이드
$(function () {
  let current = 0;

  setInterval(function () {
    if (current < 2) {
      current++;
    } else {
      current = 0;
    }

    let slidePositon = current * (-300) + "px";

    $(".slide-box").animate({ top: slidePositon }, 500);
  }, 3000);
});

// 탭
$(function() {
    // 초기 첫 번째 콘텐츠를 제외하고 숨김 처리 (CSS와 연동)
    $('.tab-cont > div').hide();
    $('.tab-cont > div:first').show();

    $('.tab-btn button').on('click', function(e) {
        e.preventDefault();
        let $li = $(this).parent();
        let tabIndex = $li.index();

        $('.tab-btn li').removeClass('active');
        $(this).attr('aria-selected', 'false');

        $li.addClass('active');
        $(this).attr('aria-selected', 'true');

        $('.tab-cont > div').hide();
        $('.tab-cont > div').eq(tabIndex).show();
    });
})

// 팝업
$(function () {
  let $lastFocus; // ← 두 함수가 같이 쓸 수 있는 위치에 선언

  $('.pop').on('click', function (e) {
    e.preventDefault();
    $lastFocus = $(this); // ← let 빼고 값만 저장
    $('.pop-wrap').show();
    $('.pop-inner').attr('tabindex', '-1').focus();
  });

  $('.btn-close').on('click', function () {
    $('.pop-wrap').hide();
    if ($lastFocus) $lastFocus.focus();
  });
});