import { useEffect } from "react";

const usePageTitle = (title) => {
    // 페이지 타이틀 설정하기
    useEffect(()=>{
        const $title = document.getElementsByTagName("title")[0];//don요소를 저장할 때 $를 붙인다.
        $title.innerText = title;
    },[title]);
};

export default usePageTitle;