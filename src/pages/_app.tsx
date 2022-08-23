import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Context from '../AppContext';
import { useState } from 'react';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>
      <SnackbarProvider>
        <Component {...pageProps} />;
      </SnackbarProvider>
    </Context.Provider>
  );
}

export default MyApp;
