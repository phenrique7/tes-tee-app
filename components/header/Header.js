import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../icon-button/IconButton';
import HamburgerIcon from '../icons/Hamburger';
import SearchIcon from '../icons/Search';
import CartIcon from '../icons/Cart';
import {
  Logo,
  MyCart,
  CartText,
  ToolbarGroup,
  DesktopSearch,
  MobileSearchIcon,
  HeaderRoot as Toolbar,
} from './Header.style';

export default function Header(props) {
  const { children, onMenuClick, onSearchClick, onCartClick } = props;

  return (
    <Toolbar>
      <ToolbarGroup>
        <IconButton
          onClick={onMenuClick}
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
        <MyCart role="button" onClick={onCartClick}>
          <CartIcon />
          <CartText>My Cart</CartText>
        </MyCart>
      </ToolbarGroup>
    </Toolbar>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
};
