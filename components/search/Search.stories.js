import React from 'react';
import Search from './Search';

export default {
  title: 'Search',
  component: Search,
  decorators: [
    storyFn => <div style={{ padding: '24px' }}>{storyFn()}</div>,
  ],
};

export const standard = () => <Search />;
export const focused = () => <Search focused />;
