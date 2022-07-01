import Image from 'next/image';
import { Col } from '../../components';
import { ProjectCard } from './components/ProjectCard';
import { StyledGrid, StyledRow, StyledCol, ProjectContainer, ProjectRow, ProjectCol } from './Projects.styled';
import { GameProject, Project, WebProject } from '/@types/Project';
import { imgSrc } from '/sanity.config';

type ProjectsProps = {
  projectsData: GameProject[] | WebProject[];
}

// NOTE: Should Have 16:9 clip playing with description below

export const Projects:React.FC<ProjectsProps> = ({projectsData}) => {
  const projectsInPairs: Project[][] = [];
  for (let i = 0; i < projectsData.length; i+=2) {
    projectsInPairs.push([projectsData[i], projectsData[i+1]]);
  }
  // console.log(render)
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
        {projectsInPairs.map((pair, index) => (
          <ProjectRow center="xs" key={index}>
            {pair.map((project, projectIndex) => (
              <ProjectCol key={projectIndex}>
                {project && <ProjectCard project={project}/>}
              </ProjectCol>
            ))}
          </ProjectRow>
        ))}
      </ProjectContainer>
    </StyledGrid>
  );
};
