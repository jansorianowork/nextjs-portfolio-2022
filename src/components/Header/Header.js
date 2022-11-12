import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineCloudDownload, AiFillLinkedin } from 'react-icons/ai';
import { DiTerminal } from 'react-icons/di';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiTerminal size="3rem" /> <span>Jan Soriano</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/jansorianowork">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jansoriano-233984192/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://jansorianowork.github.io/basic-digital-resume/assets/resume.pdf">
          <AiOutlineCloudDownload size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
