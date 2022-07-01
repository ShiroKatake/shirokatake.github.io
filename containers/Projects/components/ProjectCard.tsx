import React from 'react';
import { Project } from '/@types/Project';
import { CardContainer, ProjectDesscription, StyledImage } from './ProjectCard.styled';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard:React.FC<ProjectCardProps> = ({project}) => {
  return (
    <CardContainer>
      <StyledImage src={project.coverImage.url} alt="" layout="fill" objectFit="contain"/>
      <ProjectDesscription>
        <h2>{project.projectName}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </ProjectDesscription>
    </CardContainer>
  );
};
