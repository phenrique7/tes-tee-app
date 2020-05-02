import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import StyleProvider from '../styles/StyleProvider';
import useMediaQuery from '../hooks/useMediaQuery';
import { theme } from '../styles/theme';

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.screens.lg};
`;

export default function Home() {
  const [search, setSearch] = React.useState('');
  const [mobileSearchActive, setMobileSearchActive] = React.useState(
    false,
  );
  const desktopScreen = useMediaQuery(`(min-width: ${theme.screens.lg})`);

  function onSearchClick() {
    setMobileSearchActive(prevState => !prevState);
  }

  function onChangeSearch(value) {
    setSearch(value);
  }

  return (
    <StyleProvider>
      <Head>
        <title>Tes Tee App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Header onSearchClick={onSearchClick}>
          <Search value={search} onChange={onChangeSearch} />
        </Header>
        {mobileSearchActive && !desktopScreen && (
          <Search value={search} onChange={onChangeSearch} focused />
        )}
      </Main>
    </StyleProvider>
  );
}
