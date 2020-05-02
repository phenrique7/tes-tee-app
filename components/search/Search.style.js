import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SearchRoot = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  padding-left: 0.75rem;
  z-index: 10;
`;

export const SearchInputLabel = styled.label`
  width: calc(100% - 4rem);
`;

export const SearchInput = styled.input`
  position: relative;
  padding: 0.75rem 0.75rem 0.75rem 3.25rem;
  background-color: ${theme.palette.primaryLightest};
  color: ${theme.palette.primaryDark};
  border-radius: 5px;
  outline: 0;
  border: transparent;
  width: 100%;
  font-size: 1rem;
  line-height: 1.187rem;

  &::placeholder {
    color: ${theme.palette.primaryDark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.palette.primaryLight};
  }
`;
