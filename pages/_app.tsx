import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* I added this to display at the browser tab */}
      <Head>
        <title>Bruski Films DB</title>
        {/* You don't need the link tag <link rel="shortcut icon" href="/favicon.ico" />, just put your
        tab logo in the public folder named 'favicon.ico' like any png or jpegs and it should work, cheers! */}
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
