import type { NextPage } from 'next';
import Head from 'next/head';
import { client } from 'sanity.config';
import { Projects } from '/containers';

type HomePageProps = {
  homeData: any;
}

const homeQuery = `*[_type == 'gameProject']`;

const HomePage: NextPage<HomePageProps> = ({ homeData }) => {
  return (
    <>
      <Head>
        <title>Khang Trinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(homeData)}
      <Projects/>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const homeData = await client.fetch(homeQuery);
  return { props: { homeData } };
}
