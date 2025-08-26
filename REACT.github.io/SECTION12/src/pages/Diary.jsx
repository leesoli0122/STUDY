import { useParams, useNavigate } from "react-router-dom";
// Header
import Header from "../components/Header";
import Button from "../components/Button";
// Viewer
import Viewer from "../components/Viewer";
// 일기 데이터 내용 불러오기
import useDiary from "../hooks/useDiary";
// 문자열로 변환된 날짜를 구하는 함수
import {getStringedDate} from "../util/get-stringed-date";
// title 변경
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    // 페이지 타이틀 변경
    usePageTitle(`${params.id}번 일기`);

    // 해당 id를 갖는 일기 데이터 내용 불러오기
    const curDiaryItem =useDiary(params.id);
    // curDiaryItem가 반환하는 값이 undefined일 경우를 대비
    if(!curDiaryItem){
        return <div>데이터 로딩중...!</div>
    }
    //undefined가 아닐 경우
    const { createdDate, emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header title={`${title} 기록`} leftChild={<Button onClick={()=>nav(-1)} text={"< 뒤로 가기"}/>} rightChild={<Button onClick={()=>nav(`/edit/${params.id}`)} text={"수정하기"}/>}/>
            <Viewer emotionId={emotionId} content={content}/>
        </div>
    );
}

export default Diary;