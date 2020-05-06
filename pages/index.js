import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Filter from '../components/filter/Filter';
import useMediaQuery from '../hooks/useMediaQuery';
import Menu from '../components/menu/Menu';
import Drawer from '../components/drawer/Drawer';
import { theme } from '../styles/theme';

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.screens.lg};
`;

const MobileSearch = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

const MainContent = styled.div`
  display: flex;
  padding: 0 1.5rem 1.5rem 1.5rem;

  @media (min-width: ${props => props.theme.screens.lg}) {
    padding: 0;
  }
`;

export default function Home() {
  const [search, setSearch] = React.useState('');
  const [mobileSearchActive, setMobileSearchActive] = React.useState(
    false,
  );
  const [showMenu, setShowMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const desktopScreen = useMediaQuery(`(min-width: ${theme.screens.lg})`);

  function onSearchClick() {
    setMobileSearchActive(prevState => !prevState);
  }

  function onChangeSearch(value) {
    setSearch(value);
  }

  return (
    <>
      <Head>
        <title>Tes Tee App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Header
          onMenuClick={() => setShowMenu(true)}
          onSearchClick={onSearchClick}
          onCartClick={() => setShowCart(true)}
        >
          <Search value={search} onChange={onChangeSearch} />
        </Header>
        {mobileSearchActive && !desktopScreen && (
          <MobileSearch>
            <Search value={search} onChange={onChangeSearch} focused />
          </MobileSearch>
        )}
        <MainContent>
          <Filter />
        </MainContent>
        <Drawer open={showMenu} onClose={() => setShowMenu(false)}>
          <Menu onClose={() => setShowMenu(false)} />
        </Drawer>
      </Main>
    </>
  );
}
