import Image from 'next/image';
import { Grid } from '../../components';
import { StyledRow, StyledCol } from './Projects.styled';
import { GameProject, WebProject } from '/@types/Project';
import { imgSrc } from '/sanity.config';

type ProjectsProps = {
  projectsData: GameProject[] | WebProject[];
}

export const Projects:React.FC<ProjectsProps> = ({projectsData}) => {
  return (
    <Grid>
      <StyledRow center='xs'>
        <StyledCol>
          <h1>Projects</h1>
          <p>Check out my best works!</p>
          <Image src={imgSrc(projectsData[0].coverImage).url()} alt="" width={500} height={500}/>
        </StyledCol>
      </StyledRow>
    </Grid>
  );
};
