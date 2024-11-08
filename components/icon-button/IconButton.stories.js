import React from 'react';
import IconButton from './IconButton';
import Hamburger from '../hamburger-icon/HamburgerIcon.vue';

export default {
  title: 'IconButton',
  component: IconButton,
};

export const standard = () => (
  <IconButton onClick={() => {}} label="Menu">
    <Hamburger />
  </IconButton>
);

export const disabled = () => (
  <IconButton label="Menu" disabled>
    <Hamburger />
  </IconButton>
);
