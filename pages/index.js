import * as React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Filter from '../components/filter/Filter';
import useMediaQuery from '../hooks/useMediaQuery';
import Menu from '../components/menu/Menu';
import Drawer from '../components/drawer/Drawer';
import Cart from '../components/cart/Cart';
import Button from '../components/button/Button';
import Product from '../components/product/Product';
import { useBodyOverflow } from '../hooks/useBodyOverflow';
import { theme } from '../styles/theme';

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.screens.xl};
`;

const MobileSearch = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

const MainContent = styled.div`
  display: flex;
  padding: 0 1.5rem 1.5rem 1.5rem;
  flex-wrap: wrap;

  @media (min-width: ${props => props.theme.screens.lg}) {
    padding: 0;

    > div:first-child {
      padding: 0 0.75rem;
      flex-grow: 0;
      max-width: 24%;
      flex-basis: 24%;
    }

    > div:last-child {
      flex-grow: 0;
      max-width: 76%;
      flex-basis: 76%;
    }
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${props => props.theme.screens.lg}) {
    > div {
      padding: 0 0.75rem;
      flex-grow: 0;
      max-width: 33.333%;
      flex-basis: 33.333%;
    }
  }
`;

export default function Home({ shirts }) {
  const [search, setSearch] = React.useState('');
  const [mobileSearchActive, setMobileSearchActive] = React.useState(
    false,
  );
  const [showMenu, setShowMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);

  const desktopScreen = useMediaQuery(`(min-width: ${theme.screens.lg})`);
  useBodyOverflow(showCart, showMenu);

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
          <div>
            <Filter />
          </div>
          <div>
            <ProductList>
              {shirts.map(shirt => (
                <div key={shirt.id}>
                  <Product
                    name={`Tes-tee ${shirt.color} cotton shirt`}
                    image={shirt.image}
                    sizes={shirt.sizes}
                  >
                    <Button
                      bg="primaryRegular"
                      color="primaryLightest"
                      fullWidth
                    >
                      Add to cart
                    </Button>
                  </Product>
                </div>
              ))}
            </ProductList>
          </div>
        </MainContent>
        <Drawer open={showMenu} onClose={() => setShowMenu(false)}>
          <Menu onClose={() => setShowMenu(false)} />
        </Drawer>
        <Drawer
          open={showCart}
          anchor="right"
          onClose={() => setShowCart(false)}
        >
          <Cart
            items={[]}
            updateItem={() => {}}
            removeItem={() => {}}
            onClose={() => setShowCart(false)}
          />
        </Drawer>
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const shirtsDirectory = path.join(process.cwd(), '__mocks__');
  const filenames = fs.readdirSync(shirtsDirectory);

  const [shirts] = filenames.map(filename => {
    const filePath = path.join(shirtsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    return JSON.parse(fileContents);
  });

  return {
    props: {
      shirts,
    },
  };
}
