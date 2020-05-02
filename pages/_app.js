import StyleProvider from '../styles/StyleProvider';

export default function MyApp({ Component, pageProps }) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}
