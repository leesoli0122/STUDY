import axios from "axios";

function postSurvey(survey) {
  axios.post(`/surveys`, survey).then(() => alert('저장되었습니다.'));
}

export default postSurvey;