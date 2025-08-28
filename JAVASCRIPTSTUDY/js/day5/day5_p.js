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
const loadUsersBtn = document.getElementById('loadUsersBtn');
const userList = document.getElementById('userList');

loadUsersBtn.addEventListener('click', function () {
    console.log('버튼 클릭');

    try {
        userList.innerHTML = '<div class="loading">사용자 목록을 불러오는 중...</div>';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json(); // 이번엔 배열이 나와요!
        
        console.log('사용자들:', users); // 콘솔에서 배열 확인해보세요
        console.log('사용자 수:', users.length); // 몇 명인지 확인
    } catch (error) {
        result.innerHTML = '<div class="error">에러: ' + error.message + '</div>';
    }
})