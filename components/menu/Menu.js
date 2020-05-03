import * as React from 'react';
import {
  Logo,
  MenuIconClose,
  MenuLogo,
  MenuNavItem,
  MenuNavItemText,
  MenuRoot,
  MenuSocialNetworks,
  Slogan,
} from './Menu.style';
import IconButton from '../icon-button/IconButton';
import CloseIcon from '../icons/Close';
import InstagramIcon from '../icons/Instagram';
import FacebookIcon from '../icons/Facebook';
import TwitterIcon from '../icons/Twitter';

export default function Menu() {
  return (
    <MenuRoot>
      <MenuLogo>
        <MenuIconClose>
          <IconButton onClick={() => {}}>
            <CloseIcon />
          </IconButton>
        </MenuIconClose>
        <Logo src="/assets/tes-tee-logo.png" alt="Tes Tee" />
        <Slogan>
          Developer apparel <sup>TM</sup>
        </Slogan>
      </MenuLogo>
      <nav>
        <ul>
          <MenuNavItem>
            <MenuNavItemText color="primaryDark">About us</MenuNavItemText>
          </MenuNavItem>
          <MenuNavItem bg="primaryLighter">
            <MenuNavItemText color="primaryDark">Products</MenuNavItemText>
          </MenuNavItem>
          <MenuNavItem bg="primaryLight">
            <MenuNavItemText color="primaryDark">
              Be our artist
            </MenuNavItemText>
          </MenuNavItem>
          <MenuNavItem bg="primaryRegular">
            <MenuNavItemText color="primaryLightest">FAQ</MenuNavItemText>
          </MenuNavItem>
          <MenuNavItem bg="primaryDark">
            <MenuNavItemText color="primaryLightest">
              Contact us
            </MenuNavItemText>
          </MenuNavItem>
        </ul>
      </nav>
      <MenuSocialNetworks>
        <IconButton overrides={{ padding: 0 }}>
          <InstagramIcon />
        </IconButton>
        <IconButton overrides={{ padding: 0 }}>
          <FacebookIcon />
        </IconButton>
        <IconButton overrides={{ padding: 0 }}>
          <TwitterIcon />
        </IconButton>
      </MenuSocialNetworks>
    </MenuRoot>
  );
}
