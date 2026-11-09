// Header
import Header from "../components/Header";
import Button from "../components/Button";

// Editor
import Editor from "../components/Editor";

// 뒤로가기
import { useNavigate } from "react-router-dom";

// 저장하기
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

// title 변경
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    //새로운 일기 생성
    const {onCreate} = useContext(DiaryDispatchContext);
    // 뒤로 가기
    const nav = useNavigate();

    // 페이지 타이틀 변경
    usePageTitle('새 일기 쓰기');

    // Ediotr 컴포넌트에서 작성 완료 버튼이 눌리면 inputState 값이 들어오게
    const onSubmit = (input) => {
        // App.jsx에 있는 onCreate 함수 실행시키기
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav("/", {replace: true});//뒤로 가기를 방지하면서 페이지를 이동 시키는 옵션
    };

    return (
        <div>
            <Header title={"새 일기 쓰기"}
                leftChild={<Button onClick={()=>{
                    nav(-1)
                }} text={"< 뒤로 가기"}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    );
}

export default New;