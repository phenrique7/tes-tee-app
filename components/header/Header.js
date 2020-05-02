import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../icon-button/IconButton';
import HamburgerIcon from '../icons/Hamburger';
import SearchIcon from '../icons/Search';
import CartIcon from '../icons/Cart';
import {
  CartText,
  DesktopSearch,
  Header as Toolbar,
  Logo,
  MobileSearchIcon,
  ToolbarGroup,
} from './Header.style';

export default function Header(props) {
  const { children, onSearchClick } = props;

  return (
    <Toolbar>
      <ToolbarGroup>
        <IconButton
          onClick={() => {}}
          overrides={{ marginLeft: 0, paddingLeft: 0 }}
        >
          <HamburgerIcon />
        </IconButton>
        <Logo src="/assets/tes-tee-logo.png" alt="Tes Tee" />
      </ToolbarGroup>
      <DesktopSearch>{children}</DesktopSearch>
      <ToolbarGroup>
        <MobileSearchIcon>
          <IconButton onClick={onSearchClick}>
            <SearchIcon />
          </IconButton>
        </MobileSearchIcon>
        <IconButton
          onClick={() => {}}
          overrides={{ marginRight: 0, paddingRight: 0 }}
        >
          <CartIcon />
        </IconButton>
        <CartText>My Cart</CartText>
      </ToolbarGroup>
    </Toolbar>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  onSearchClick: PropTypes.func.isRequired,
};
