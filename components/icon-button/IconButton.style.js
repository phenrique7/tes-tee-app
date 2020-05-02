import styled from 'styled-components';

export const IconButtonRoot = styled.button`
  display: flex;
  margin: 0 0.25rem;
  border: none;
  background-color: transparent;
  color: ${props =>
    props.disabled ? props.theme.palette.disabled : 'currentColor'};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
