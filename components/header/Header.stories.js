import React from 'react';
import Header from './Header';
import Search from '../search/Search';

export default {
  title: 'Header',
  component: Header,
};

export const standard = () => (
  <Header onSearchClick={() => {}}>
    <Search />
  </Header>
);
