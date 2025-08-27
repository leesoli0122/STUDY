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
    // 여기에 fetch 코드 작성
});
async function fetchWithLoading(url, resultElement) {
    try {
        // 로딩 표시
        resultElement.innerHTML = '<div class="loading">불러오는 중...</div>';
        
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        // 성공 시 데이터 표시
        resultElement.innerHTML = `<div class="success">데이터 로드 완료!</div>`;
        return data;
    } catch (error) {
        // 에러 표시
        resultElement.innerHTML = `<div class="error">오류: ${error.message}</div>`;
    }
}