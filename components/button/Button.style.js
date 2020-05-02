import styled from 'styled-components';

function colorStyle(color, theme) {
  if (color) {
    return theme.palette[color] ? theme.palette[color] : color;
  }

  return 'currentColor';
}

function backgroundColorStyle(backgroundColor, theme) {
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
  color: ${props => colorStyle(props.color, props.theme)};
  background-color: ${props =>
    backgroundColorStyle(props.bg, props.theme)};

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 109, 255, 0.4);
  }
`;
