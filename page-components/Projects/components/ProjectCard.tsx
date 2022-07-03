import React, { useRef } from 'react';
import { Project } from '/@types/Project';
import { CardContainer, TextDesscription, StyledVideo, StyledCoverImage, ProjectDescription } from './ProjectCard.styled';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard:React.FC<ProjectCardProps> = ({project}) => {
  const video = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    video.current!.play();
  }
  const resetVideo = () => {
    video.current!.pause();
    video.current!.currentTime = 0;
  }

  return (
    <CardContainer data-testid="projectcard-container" onMouseLeave={() => resetVideo()}>
      <StyledCoverImage priority onTransitionEnd={() => playVideo()} src={project.coverImage.url} alt="" layout="fill" objectFit="contain"/>
      <ProjectDescription>
        {project.videoPreview &&
          <StyledVideo data-testid="projectcard-video" ref={video} loop muted playsInline>
            <source src={project.videoPreview.url} type="video/mp4" />
          </StyledVideo>
        }
        <TextDesscription>
          <h2>{project.projectName}</h2>
          <p>{project.summary}</p>
        </TextDesscription>
      </ProjectDescription>
    </CardContainer>
  );
};
