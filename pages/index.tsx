import type { NextPage } from 'next';
import Head from 'next/head';
import { client } from 'sanity.config';
import { Projects } from '/containers';

type HomePageProps = {
  projectsData: any;
}

const projectsQuery = `*[_type == "gameProject" && includeInPortfolio == true] | order(releaseDate desc)`;

const HomePage: NextPage<HomePageProps> = ({ projectsData }) => {
  return (
    <>
      <Head>
        <title>Khang Trinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects projectsData={projectsData}/>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const projectsData = await client.fetch(projectsQuery);
  return { props: { projectsData } };
}
