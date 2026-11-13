import styled from "styled-components";

import Bar from "../Bar";

function ProgressIndicator() {
  return <ProgressIndicatorWrapper>
    <Bar />
    <Bar />
    <Bar />
    <div>2/3</div>
  </ProgressIndicatorWrapper>;
}

export default ProgressIndicator;

const ProgressIndicatorWrapper = styled.div`
  display:flex;
  justify-content: center;
  position: absolute;
`;