import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

// 1번 방법
// function getColor(type1, type2) {
//   if (type1.type === 'PRIMARY') {
//     return PRIMARY.BUTTON.DEFAULT.COLOR;
//   } else if (type1.type === 'SECONDARY') {
//     return SECONDARY.BUTTON.DEFAULT.COLOR;
//   }
// }

// 2번 방법
const colorMap = {
  PRIMARY, // === PRIMARY : PRIMARY
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;

  color: ${(props) => {
    // 1번 방법
    // return getColor(props.type);
    // 2번 방법
  }};

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;
