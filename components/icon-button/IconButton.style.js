import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const IconButtonRoot = styled.button`
  display: block;
  margin: 0 0.25rem;
  border: none;
  background-color: transparent;
  color: ${props =>
    props.disabled ? theme.palette.disabled : 'currentColor'};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
