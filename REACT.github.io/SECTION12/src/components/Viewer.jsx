// css
import "./Viewer.css";
// 이미지
import { getEmotionImage } from "../util/get-emotion-image";
// emotionList
import { emotionList } from "../util/constants";

const Viewer = ({emotionId, content}) => {
    // emotionList에서 item의 emotionId와 현재 아이디와 일치하는 아이디를 찾기
    const emotionItem = emotionList.find((item)=> String(item.emotionId) === String(emotionId));
    return (
        <div className="Viewer">
            <section className="img_section">
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                    <img src={getEmotionImage(emotionId)} />
                    <div>
                        {emotionItem.emotionName}
                    </div>
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    )
}

export default Viewer;