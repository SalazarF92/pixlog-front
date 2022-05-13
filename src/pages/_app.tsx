import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import DefaultLayout from '../components/Layouts/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pixlog SendFile</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;

