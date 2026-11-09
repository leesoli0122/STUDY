import { useReducer } from "react";

//reducer: 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action){
    switch(action.type){
        case 'INCREASE': return state + action.data;
        case 'DECREASE': return state - action.data;
        default: return state;
    }
}

const Exam = () => {
    // dispatch: 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    // 버튼 클릭하면 숫자 +
    const onClickPlus = () => {
        //인수: 상대가 어떻게 변화되길 원하는지
        // -> 액션 객체
        dispatch({
            type : 'INCREASE', //값을 증가시켜줘
            data : 1, // 1만큼 증가시켜줘
        })
    }

    // 버튼 클릭하면 숫자 -
    const onClickMinus = () => {
        //인수: 상대가 어떻게 변화되길 원하는지
        // -> 액션 객체
        dispatch({
            type : 'DECREASE', //값을 감소시켜줘
            data : 1, // 1만큼 감소시켜줘
        })
    }

    return (<div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>);
};

export default Exam;