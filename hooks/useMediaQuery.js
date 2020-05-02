import * as React from 'react';

export default function useMediaQuery(query) {
  const [match, setMatch] = React.useState(() => {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia === 'undefined'
    ) {
      return false;
    }

    return Boolean(window.matchMedia(query).matches);
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatch(Boolean(mediaQuery.matches));

    mediaQuery.addListener(handler);

    return () => {
      mediaQuery.removeListener(handler);
    };
  }, [query]);

  return match;
}
