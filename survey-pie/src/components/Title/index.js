import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 24px;
  line-heght: 28px;
  color: #121111;

  span {
    margin-right: 12px;
  }
`;

export default Title;

// <TItle>이름입니다.</Title>
