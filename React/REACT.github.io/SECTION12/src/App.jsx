import './App.css';
import { useReducer, useRef, createContext, useEffect, act, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

function reducer(state, action){
  let nextState;
  switch(action.type){
    // 초기
    case 'INIT': return action.data;
    //새로운 일기 추가
    case 'CREATE': {
      nextState = [action.data, ...state];
      break;
    }//...state로 원본 데이터 다 복사
    //기존 일기 수정
    case 'UPDATE': {
      nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
      break;
    }
    //기존 일기 삭제
    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }

    default: return state;
  }

  // 저장
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

//일기 데이터를 공급할 context
export const DiaryStateContext = createContext();
//data state의 값을 변경시키는 일기를 수정하는 함수들을 공급할 context
export const DiaryDispatchContext = createContext();

function App() {
  // loading
  const [isLoading, setIsLoading] = useState(true);
  //임시
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // 로컬 스토리지를 통해서 데이터를 불러와서 이 데이터 stage의 초기 값으로 설정
  useEffect(()=>{
    const storedDate = localStorage.getItem("diary");
    if(!storedDate){ //undefined나 null값이면 리턴시킨다
      setIsLoading(false);
      return;
    }
    const persedDate = JSON.parse(storedDate);
    if(!Array.isArray(persedDate)){ //배열인지 아닌지
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    persedDate.forEach((item)=>{
      if(Number(item.id) > maxId){
        maxId = Number(item.id);
      }
    })

    idRef.current = maxId + 1;

    dispatch({
      type:"INIT",//초기화
      data: persedDate,
    });
    setIsLoading(false);
  },[]);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    //새로운 일기를 추가하는 기능
    dispatch(
      {
        type:"CREATE",
        data : {
          id: idRef.current++,
          createdDate,
          emotionId,
          content,
        },
      }
    )//->action 객체
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type:"UPDATE",
        data: {
          id, createdDate, emotionId, content
        },
      }
    );
  }

  // 기존 일기 삭제
  const onDelete = (id) => { //삭제하는 건 id만 있어도 됨
    dispatch(
      {
        type: "DELETE",
        id,
      }
    );
  }

  // loading
  if(isLoading){
    return <div>데이터 로딩중입니다...</div>;
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;