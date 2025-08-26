import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";

//페이지 이동
import { useNavigate } from "react-router-dom";
// 가변적인 데이터 보관
import { useState } from "react";

const DiaryList = ({data}) => {
    //페이지 이동
    const nav = useNavigate();

    //정렬
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => { //select의 이벤트 핸들러로 사용해서 (e)로 넣어 줌
        setSortType(e.target.value);
    }

    // sortType의 state 값이 바뀔 때마다 props로 제공받고 있는 data(일기 데이터)를 정렬하는 기증
    const getSortedDate = () => {
        return data.toSorted((a,b)=>{
            if(sortType === 'oldest'){
                return Number(a.createdDate) - Number(b.createdDate);
            }else{
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });//toSorted() 배열 메서드. 원본 배열은 그대로 두고 정렬된 수정된 배열을 반환. 데이터 객체값을 비교할 때에는 직접 비교함수를 콜백함수로 넣어줘야 한다.
    }

    const sortedDate = getSortedDate();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button onClick={()=>nav(`/New`)} type={"POSITIVE"} text={"새 일기 쓰기"} />
            </div>
            <div className="list_wrapper">
                {/* 감정 일기 리스트 여러개 뿌리기 */}
                {sortedDate.map((item)=><DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
};

export default DiaryList;