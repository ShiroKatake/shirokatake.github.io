import type { NextPage } from 'next';
import Head from 'next/head';
import { client } from 'sanity.config';
import { Projects } from '/containers';

type HomePageProps = {
  projectsData: any;
}

const projectTypeQuery = `*[_type == "portfolioSettings"].projectDisplay`
const projectsQuery = (projectType: string) => `
  *[_type == "${projectType}" && includeInPortfolio == true]{
    projectName,
    releaseDate,
    repoUrl,
    storeUrl,
    coverImage {
      "url": asset->url,
      "altText": asset->altText
    },
    supportImages[] {
      "url": asset->url,
      "altText": asset->altText
    },
    "videoPreview": videoPreview[0] {
      aspectratio,
      caption,
      altText,
      "url": mp4.asset->url,
      "imageFallbackUrl": fallback {
        "url": asset->url,
        "altText": asset->altText
      },
    }
  } | order(releaseDate desc)
`;
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
  const projectType = await client.fetch(projectTypeQuery);
  const projectsData = await client.fetch(projectsQuery(projectType));
  return { props: { projectsData } };
}
