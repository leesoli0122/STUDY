import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/done" element={<CompletionPage />}></Route>
        <Route path="/survey/:surveyID" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

/*
"/survey"추가로 필요한 것 : 설문ID

ex) http://www.surveypie.com/survey?id=abc123 <- 전통적인 방식
ex) http://www.surveypie.com/survey/abc123 <- 이렇게 쓰면 abc123이 아이디인지 페이지인지 구별 불가능. 이렇게 사용하려면 path에 적어줘야 함 path="/survey/:abc123"
*/

export default App;
