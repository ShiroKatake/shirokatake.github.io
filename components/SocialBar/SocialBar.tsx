import React from 'react';
import { FaGithub, FaItchIo, FaLinkedin, FaTwitter } from "react-icons/fa";
import { StyledLine, StyledSocialBar } from './SocialBar.styled';
import { SocialItem } from './subcomponents/SocialItem';

export const SocialBar: React.FC = () => {
  return (
    <StyledSocialBar>
      <SocialItem href="https://github.com/ShiroKatake" icon={<FaGithub/>}>See my other projects on GitHub</SocialItem>
      <SocialItem href="https://shirokatake.itch.io/" icon={<FaItchIo/>}>Check out my games on Itch.io</SocialItem>
      <SocialItem href="https://www.linkedin.com/in/khang-gia-trinh/" icon={<FaLinkedin/>}>{`Let\'s connect on LinkedIn`}</SocialItem>
      <SocialItem href="https://twitter.com/ShiroKatake" icon={<FaTwitter/>}>Follow me on Twitter</SocialItem>
      <StyledLine></StyledLine>
    </StyledSocialBar>
  );
};
