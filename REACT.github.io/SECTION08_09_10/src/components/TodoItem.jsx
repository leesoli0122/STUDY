import './TodoItem.css'
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate , onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            {/* onClick가 아니라 onChange요소를 사용한 이유:버튼이 아니라 input이기 때문 */}
            <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

// memo와 같은 component를 고차 컴포넌트(HOC)라고 부름
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
//     // T -> Props 바꾸지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O
//     // id, isDone, content, date 만 리렌더링 되면 됨
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date만 !== nextProps.date) return false;

//     return true;
// });
export default memo(TodoItem);