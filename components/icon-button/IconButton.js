import * as React from 'react';
import PropTypes from 'prop-types';
import { IconButtonRoot } from './IconButton.style';

export default function IconButton(props) {
  const { children, onClick, disabled, label, overrides } = props;

  return (
    <IconButtonRoot
      type="button"
      tabIndex={disabled ? -1 : 0}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={overrides}
    >
      {children}
    </IconButtonRoot>
  );
}

IconButton.defaultProps = {
  disabled: false,
  label: '',
  onClick: () => {},
  overrides: {},
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  overrides: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
