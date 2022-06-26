import type { NextPage } from 'next';
import Head from 'next/head';
import { Home } from '/containers';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Khang Trinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </>
  );
};

export default HomePage;
