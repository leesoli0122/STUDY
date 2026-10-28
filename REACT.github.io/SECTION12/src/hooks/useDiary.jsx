import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    // 기존 데이터 불러오기
    const data = useContext(DiaryStateContext);
    // 저장
    const [curDiaryItem, setCurDiaryItem] = useState();
    // 페이지 이동
    const nav = useNavigate();

     // id가 바뀌거나 일기의 data state가 변경될 때만 실행
    useEffect(()=>{
        // params의 데이터 찾아서 꺼내오기
        const currentDiaryItem = data.find(
            (item)=> String(item.id) === String(id));
        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/", {replace:true});
        }
        setCurDiaryItem(currentDiaryItem);
    },[id]);

    return curDiaryItem;
}

export default useDiary;