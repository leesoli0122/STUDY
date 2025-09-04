// 1단계
/* const button = document.getElementById('???');  // ??? 채우기
const message = document.getElementById('???'); // ??? 채우기

button.addEventListener('click', function() {
    // 여기에 클릭했을 때 실행될 코드
    message.textContent = '???';  // ??? 채우기
});*/

const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    message.textContent = '버튼을 클릭했습니다';
});

// 2단계
/* const input = document.getElementById('???');
const output = document.getElementById('???');

input.addEventListener('input', function(event) {
    const inputValue = event.target.value; // 입력된 값 가져오기
    
    if (inputValue === '') {
        // 비어있을 때
        output.textContent = '???';
        output.className = '???';
    } else {
        // 입력값이 있을 때  
        output.textContent = '???';
        output.className = '???';
    }
}); */
const input = document.getElementById('textInput');
const output = document.getElementById('output');

input.addEventListener('input', function (e) {
    const inputValue = e.target.value;

    if (inputValue === '') {
        output.textContent = '아직 아무것도 입력하지 않았습니다.';
        output.className = 'empty';
    } else {
        output.textContent = `입력한 내용 : ${inputValue}`;
        output.className = 'filled';
    }
})

// 3단계
/*
// 1단계
const fetchButton = document.getElementById('???');
const result = document.getElementById('???');

fetchButton.addEventListener('click', async function() {
    // 여기에 fetch 코드 작성
});

// 2단계
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user); // 먼저 콘솔에서 데이터 확인해보기
} catch (error) {
    console.error('에러 발생:', error);
}

// 3단계
// user 데이터를 이런 식으로 표시해보세요
result.innerHTML = `
    <div class="user-info">
        <div class="user-name">${user.name}</div>
        <div class="user-details">이메일: ${user.email}</div>
        <div class="user-details">전화번호: ${user.phone}</div>
    </div>
`;
*/
const fetchButton = document.getElementById('fetchButton');
const result = document.getElementById('result');

fetchButton.addEventListener('click', async function() {
    console.log('버튼이 클릭되었습니다');

    try {
        console.log('try 블록 실행');
    } catch(error) {
        console.log('에러 발생:', error);
        result.innerHTML = '<div class="error">데이터를 가져오는데 실패했습니다.</div>';
    }
});

const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

fetchButton.addEventListener('click', async function () {
    console.log('데이터 가져오기');
    try {
        // 4-1 로딩 메시지 표시
        result.innerHTML = '<div class="loading">데이터를 불러오는 중...</div>';
        // 4-2. 서버에서 데이터 가져오기
        const response = await fetch(API_URL);
        console.log('응답 받음:', response);
        
        // 4-3. JSON 형태로 변환
        const user = await response.json();
        console.log('사용자 데이터:', user);
        
        // 4-4. 화면에 표시 (일단 간단하게)
        result.innerHTML = `<p>이름: ${user.name}</p>`;
        
    } catch (error) {
        console.log('에러:', error);
        result.innerHTML = '<div class="error">데이터를 가져오는데 실패했습니다.</div>';
    }
});

fetchButton.addEventListener('click', async function() {
    try {
        result.innerHTML = '<div class="loading">데이터를 불러오는 중...</div>';
        
        const response = await fetch(API_URL);
        const user = await response.json();
        
        // 예쁘게 HTML 만들기
        result.innerHTML = `
            <div class="user-info">
                <div class="user-name">${user.name} (${user.username})</div>
                <div class="user-details">📧 ${user.email}</div>
                <div class="user-details">📱 ${user.phone}</div>
                <div class="user-details">🌐 ${user.website}</div>
                <div class="user-details">🏢 ${user.company.name}</div>
            </div>
        `;
    } catch (error) {
        result.innerHTML = '<div class="error">에러: ' + error.message + '</div>';
    }
});

// 4단계
console.log('1단계: 요소 가져오기 시작');
        
const loadUsersBtn = document.getElementById('loadUsersBtn');
const userList = document.getElementById('userList');

// 요소가 제대로 가져와졌는지 확인
console.log('버튼 요소:', loadUsersBtn);
console.log('목록 요소:', userList);

if (!loadUsersBtn || !userList) {
    console.error('요소를 찾을 수 없습니다!');
} else {
    console.log('✅ 1단계 완료: 모든 요소를 성공적으로 가져왔습니다');
}

// 🎯 2단계: 클릭 이벤트와 fetch API 설정
console.log('2단계: 이벤트 리스너 설정 시작');

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

loadUsersBtn.addEventListener('click', async function() {
    console.log('🚀 버튼 클릭됨! 데이터 가져오기 시작');
    
    try {
        // 버튼 비활성화 (중복 클릭 방지)
        loadUsersBtn.disabled = true;
        loadUsersBtn.textContent = '불러오는 중...';
        
        // 로딩 메시지 표시
        userList.innerHTML = '<div class="loading">사용자 목록을 불러오는 중...</div>';
        
        console.log('📡 API 호출 중:', USERS_API);
        
        // 서버에서 데이터 가져오기
        const response = await fetch(USERS_API);
        console.log('📨 응답 받음:', response);
        
        // 응답이 성공적인지 확인
        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태: ${response.status}`);
        }
        
        // JSON 데이터로 변환
        const users = await response.json();
        console.log('👥 가져온 사용자 데이터:', users);
        console.log('📊 사용자 수:', users.length);
        
        // 🎯 3단계: 배열을 HTML로 변환
        console.log('3단계: HTML 변환 시작');
        
        // 방법 1: forEach 사용
        let html = '';
        console.log('🔄 각 사용자별로 카드 생성 시작');
        
        users.forEach(function(user, index) {
            console.log(`${index + 1}번째 사용자 처리 중: ${user.name}`);
            
            // 각 사용자마다 카드 HTML 생성
            html += `
                <div class="user-card">
                    <div class="user-name">${user.name}</div>
                    <div class="user-email">📧 ${user.email}</div>
                    <div class="user-company">🏢 ${user.company.name}</div>
                    <div class="user-phone">📱 ${user.phone}</div>
                </div>
            `;
        });
        
        console.log('✅ HTML 생성 완료, 길이:', html.length);
        
        // 사용자 수 정보 추가
        const countInfo = `<div class="count">총 ${users.length}명의 사용자를 찾았습니다</div>`;
        
        // 화면에 표시
        userList.innerHTML = countInfo + html;
        
        console.log('🎉 3단계 완료: 화면에 표시 완료');
        
    } catch (error) {
        console.error('❌ 에러 발생:', error);
        
        // 에러 메시지 표시
        userList.innerHTML = `
            <div class="error">
                <strong>오류 발생!</strong><br>
                ${error.message}
            </div>
        `;
        
    } finally {
        // 버튼 다시 활성화
        loadUsersBtn.disabled = false;
        loadUsersBtn.textContent = '모든 사용자 불러오기';
        
        console.log('🔄 버튼 상태 복구 완료');
    }
});

console.log('✅ 2단계 완료: 이벤트 리스너 등록 완료');

// 🎯 추가 기능: 페이지 로드 완료 확인
console.log('📱 페이지 로드 완료, 버튼 클릭 대기 중...');
console.log('💡 개발자 도구 Network 탭에서 API 호출을 확인할 수 있습니다');

// 🎯 디버깅용 헬퍼 함수들
window.debugInfo = function() {
    console.log('=== 디버그 정보 ===');
    console.log('버튼 요소:', loadUsersBtn);
    console.log('목록 요소:', userList);
    console.log('API URL:', USERS_API);
};

console.log('💬 콘솔에서 debugInfo() 함수를 호출하면 디버그 정보를 볼 수 있습니다');