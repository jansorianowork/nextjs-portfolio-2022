import React from 'react';
import {  AiFillGithub, AiOutlineCloudDownload, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">+63 906 318 8396</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jansoriano.work@gmail.com">
            jansoriano.work@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"Clean code always looks like it was written by someone who cares." - Robert C. Martin</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/jansorianowork">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jansoriano-233984192/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="file/JVSorianoCV2024.pdf">
          <AiOutlineCloudDownload size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
