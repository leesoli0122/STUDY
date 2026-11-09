// 문자열로 변환된 날짜를 구하는 함수
export const getStringedDate = (targetDate) => {
    // yyyy-mm-dd
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    // 월이나 일의 숫자가 10 이하일 때 두자리 수로 만들기ex.03,04
    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
};
