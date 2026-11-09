// 가변적인 데이터 보관
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

// Header
import Header from "../components/Header";
import Button from "../components/Button";

// body
import DiaryList from "../components/DiaryList";

// title 변경
import usePageTitle from "../hooks/usePageTitle";

// PivotDate State의 값을 기준으로 필터링ex)2월이면 2월의 일기, 3월이면 3월의 일기
const getMonthlyData = (pivotDate, data) => {
    // 이번달 시작되는 시간
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1,0,0,0).getTime();//년, 월, 일, 시, 분, 초

    // 이번달 마지막 시간
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();//일을 0으로 설정하면 이전 달의 마지막 일을 의미

    // 이번 달에 해당하는 일기 데이터 추출
    return data.filter((item)=> beginTime <= item.createdDate && item.createdDate <= endTime);
}

const Home = () => {
    // mockData 불러오기
    const data = useContext(DiaryStateContext);
    // 페이지 타이틀 변경
    usePageTitle('감정 일기장');

    // 현재 일기 조회의 기준이 되는 날짜
    const [pivotDate, setPivotDate] = useState(new Date());

    // 필터링 ex)2월이면 2월의 일기, 3월이면 3월의 일기
    const monthlyData = getMonthlyData(pivotDate, data);

    // 다음 달
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }

    // 이전 달
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
                rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
            />
            <DiaryList data={monthlyData}/>
        </div>
    );
}

export default Home;