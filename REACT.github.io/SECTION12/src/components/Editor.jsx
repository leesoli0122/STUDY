// css
import "./Editor.css";
// 컴포넌트
import EmotionItem from "./EmotionItem";
import Button from "./Button";
// 가변적인 데이터 보관
import { useState, useEffect } from "react";
// 뒤로가기
import { useNavigate } from "react-router-dom";
// emotionList
import { emotionList } from "../util/constants";
// 문자열로 변환된 날짜를 구하는 함수
import {getStringedDate} from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
    // 하나의 state에 여러개의 입력 관리 -> 객체로
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });
    // 뒤로 가기
    const nav = useNavigate();

    // initData가 변경될 때마다 콜백함수 호출
    useEffect(()=>{
        if(initData){
            setInput({
                ...initData,
                createdDate : new Date(Number(initData.createdDate)),
            })
        }
    }, [initData])
    // 날짜 변경 가능
    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
        value = new Date(value);
        }
        // 새로운 객체를 전달하면서 input state 값 변경
        setInput({
        ...input,//기존의 값은 유지시켜주면서
        [name]: value,
        });
    };
    // 작성 완료
    const onSubmitButtonClick = () => {
        onSubmit(input);
    };

    return (
        <div className="Editor">
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input
            name="createdDate"
            onChange={onChangeInput}
            value={getStringedDate(input.createdDate)}
            type="date"
            />
        </section>
        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className="emotion_list_wrapper">
            {emotionList.map((item) => (
                <EmotionItem
                onClick={() =>
                    onChangeInput({
                    target: {
                        name: "emotionId",
                        value: item.emotionId,
                    },
                    })
                }
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === input.emotionId}
                />
            ))}
            </div>
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea
            name="content"
            value={input.content}
            onChange={onChangeInput}
            placeholder="오늘은 어땠나요?"
            />
        </section>
        <section className="button_section">
            <Button onClick={() => nav(-1)} text={"취소하기"} />
            <Button
            onClick={onSubmitButtonClick}
            text={"작성완료"}
            type={"POSITIVE"}
            />
        </section>
        </div>
    );
};

export default Editor;