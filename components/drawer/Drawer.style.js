import styled, { css, keyframes } from 'styled-components';

const drawerOpened = css`
  display: block;
  transform: translateX(0);
  box-shadow: 0px 4px 80px #9dbcfb;
`;

export const DrawerRoot = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 200;
  transition: transform 0.4s ease-out;
  transform: ${props =>
    props.anchor === 'left' ? 'translateX(-100%)' : 'translateX(100%)'};
  background: ${props => props.theme.palette.primaryLightest};

  ${props => (props.anchor === 'left' ? 'left: 0;' : 'right: 0;')};
  ${props => props.open && drawerOpened};

  @media (min-width: ${props => props.theme.screens.lg}) {
    max-width: 360px;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
 }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const DrawerBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette.primaryLightest};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  animation: 0.4s ${props => (props.open ? fadeIn : fadeOut)} ease-out;
  transition: visibility 0.4s ease-out;
`;
