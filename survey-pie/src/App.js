import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/done" element={<CompletionPage />}></Route>
          <Route path="/survey/:surveyID" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />}></Route>
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;
const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

/*
"/survey"추가로 필요한 것 : 설문ID

ex) http://www.surveypie.com/survey?id=abc123 <- 전통적인 방식
ex) http://www.surveypie.com/survey/abc123 <- 이렇게 쓰면 abc123이 아이디인지 페이지인지 구별 불가능. 이렇게 사용하려면 path에 적어줘야 함 path="/survey/:abc123"
*/

export default App;
