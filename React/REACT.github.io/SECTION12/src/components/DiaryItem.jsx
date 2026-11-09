import {getEmotionImage} from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

// 페이지 이동
import { useNavigate } from "react-router-dom";

const DiaryItem = ({id, emotionId, createdDate, content}) => {
    const nav = useNavigate();//페이지 이동
    return (
        <div className="DiaryItem">
            {/* 이미지 */}
            <div onClick={()=>nav(`/diary/${id}`)} className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}/>
            </div>
            {/* 내용 */}
            <div onClick={()=>nav(`/diary/${id}`)} className="info_section">
                <div className="created_data">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
            {/* 버튼 */}
            <div onClick={()=>nav(`/edit/${id}`)} className="Button_section">
                <Button text={"수정하기"}/>
            </div>
        </div>
    );
};

export default DiaryItem;