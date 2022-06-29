import Image from 'next/image';
import { Col } from '../../components';
import { StyledGrid, StyledRow, StyledCol, ProjectContainer, ProjectRow } from './Projects.styled';
import { GameProject, WebProject } from '/@types/Project';
import { imgSrc } from '/sanity.config';

type ProjectsProps = {
  projectsData: GameProject[] | WebProject[];
}

// NOTE: Should Have 16:9 clip playing with description below

export const Projects:React.FC<ProjectsProps> = ({projectsData}) => {
  const render: any = [];
  for (let i = 0; i < projectsData.length; i+=2) {
    render.push([projectsData[i], projectsData[i+1]]);
  }
  console.log(render)
  console.log(projectsData)
  return (
    <StyledGrid>
      <StyledRow>
        <StyledCol>
          <h1>Projects</h1>
          <p>Check out my best works!</p>
        </StyledCol>
      </StyledRow>
      
      <ProjectContainer>
        {render.map((pair, index) => (
          <ProjectRow key={index}>
            <Col>
              {pair[0] && <Image src={imgSrc(pair[0].coverImage).url()} alt="" width={500} height={500}/>}
            </Col>
            <Col>
              {pair[1] && <Image src={imgSrc(pair[1].coverImage).url()} alt="" width={500} height={500}/>}
            </Col>
          </ProjectRow>
        ))}
      </ProjectContainer>
    </StyledGrid>
  );
};
