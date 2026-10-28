// ========================================
// 1️⃣ 전역 변수 선언 (스크립트의 맨 처음!)
// ========================================
// 기본 상태 = 사용자가 처음 페이지에 접속했을 때의 상태
let darkMode = false; //처음에는 라이트 모드
let mobileMenuOpen = false; // 처음에는 메뉴가 닫혀있음

// ========================================
// 2️⃣ DOM 로드 이벤트 리스너
// ========================================
// DOM이 완전히 로드된 후 실행할 코드
document.addEventListener('DOMContentLoaded', function () {
    
});

// ========================================
// 3️⃣ 초기화 함수
// ========================================
// ========================================
// 4️⃣ 설정 함수들
// ========================================
// 2단계 스크롤 시 네비게이션 색상 변경
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})
// 3단계 부드러운 스크롤 이동
document.querySelectorAll('nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 기본 점프 이동 막기
        const targetIO = this.getAttribute('href');
        const targetElement = document.querySelector(targetIO);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // 네비게이션 높이 고려
                behavior: 'smooth'
            });
        }
    })
})

// ========================================
// 5️⃣ 이벤트 핸들러 함수들
// ========================================
// ========================================
// 6️⃣ UI 업데이트 함수들
// ========================================
// ========================================
// 7️⃣ 유틸리티 함수들
// ========================================
// ========================================
// 8️⃣ API 관련 함수들
// ========================================
// ========================================
// 9️⃣ 페이지 로드 완료 이벤트
// ========================================