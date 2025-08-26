import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    //사용자가 입력한 내용을 content 상태에 반영
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    // enter키 눌렀을 때 새로운 todo 추가
    const onKeydown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    const onSubmit = () => {
        if(content === ""){
            inputRef.current.focus();//<input> 요소에 포커스를 줌
            return;
        }
        onCreate(content);//입력값이 있으면 호출해 Todo를 추가
        setContent(""); //입력창을 비움
    }
    return (
        <div className="Editor">
            <input ref={inputRef} value={content} onKeyDown={onKeydown} onChange={onChangeContent} placeholder="새로운 Todo..." />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;