import * as React from 'react';
import { Header as Toolbar, Logo, ToolbarGroup } from './Header.style';
import IconButton from '../icon-button/IconButton';
import Hamburger from '../icons/Hamburger';
import Search from '../icons/Search';
import Cart from '../icons/Cart';

export default function Header() {
  return (
    <Toolbar>
      <ToolbarGroup>
        <IconButton
          onClick={() => {}}
          overrides={{ marginLeft: 0, paddingLeft: 0 }}
        >
          <Hamburger />
        </IconButton>
        <Logo src="/assets/tes-tee-logo.png" alt="Tes Tee" />
      </ToolbarGroup>
      <ToolbarGroup>
        <IconButton onClick={() => {}}>
          <Search />
        </IconButton>
        <IconButton
          onClick={() => {}}
          overrides={{ marginRight: 0, paddingRight: 0 }}
        >
          <Cart />
        </IconButton>
      </ToolbarGroup>
    </Toolbar>
  );
}
