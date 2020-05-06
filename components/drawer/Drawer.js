import * as React from 'react';
import PropTypes from 'prop-types';
import { DrawerBackdrop, DrawerRoot } from './Drawer.style';

export default function Drawer(props) {
  const { children, open, anchor, onClose } = props;

  return (
    <>
      {open && <DrawerBackdrop onClick={onClose} />}
      <DrawerRoot open={open} anchor={anchor}>
        {children}
      </DrawerRoot>
    </>
  );
}

Drawer.defaultProps = {
  anchor: 'left',
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
