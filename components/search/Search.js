import * as React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../icons/Search';
import {
  SearchIconWrapper,
  SearchInput,
  SearchInputLabel,
  SearchRoot,
} from './Search.style';

export default function Search({ focused }) {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <SearchRoot>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInputLabel>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="Looking for something?"
        />
      </SearchInputLabel>
    </SearchRoot>
  );
}

Search.defaultProps = {
  focused: false,
};

Search.propTypes = {
  focused: PropTypes.bool,
};
