import { useParams, useNavigate } from "react-router-dom";
// Header
import Header from "../components/Header";
import Button from "../components/Button";
// Editor
import Editor from "../components/Editor";
// onDelete 함수 불러오기
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

// 일기 데이터 가져오기
import useDiary from "../hooks/useDiary";
// title 변경
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
    const params = useParams();
    // 뒤로 가기
    const nav = useNavigate();
    // 페이지 타이틀 변경
    usePageTitle(`${params.id}번 일기 수정`);
    // onDelete,onUpdate 함수 불러오기
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

    // 일기 데이터 가져오기
    const curDiaryItem = useDiary(params.id);

    // 삭제하기 버튼 클릭 시 동작할 이밴트 핸들러(팝어창 띄우기)
    const onClickDelete = () => {
        if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")){
            //일기 삭제 로직
            onDelete(params.id);
            nav("/",{replace: true});
        };
    }

    //작성 완료
    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정할까요?")){
        onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content)};//순서 꼭 지키기
        nav("/", {replace:true})
    };

    return (
        <div>
            <Header title={"일기 수정하기"}
                leftChild={<Button onClick={()=>{
                    nav(-1)
                }} text={"< 뒤로 가기"}/>} rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NAGATIVE"}/>}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    );
};

export default Edit;