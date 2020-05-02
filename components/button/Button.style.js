import styled from 'styled-components';
import { theme } from '../../styles/theme';

function colorStyle(color) {
  if (color) {
    return theme.palette[color] ? theme.palette[color] : color;
  }
  return 'currentColor';
}

function backgroundColorStyle(backgroundColor) {
  if (backgroundColor) {
    return theme.palette[backgroundColor]
      ? theme.palette[backgroundColor]
      : backgroundColor;
  }
  return theme.palette.primaryLightest;
}

export const Button = styled.button`
  padding: 10px 22px;
  border: transparent;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.187rem;
  color: ${props => colorStyle(props.color)};
  background-color: ${props => backgroundColorStyle(props.bg)};

  &:focus {
    box-shadow: 0 0 0 0.2em rgba(0, 109, 255, 0.4);
  }
`;
