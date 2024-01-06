import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Web Developer Portfolio
        </SectionTitle>
        <SectionText>
        A Front-End Developer with experience in JavaScript, ReactJs, Typescript, Dynamics 365 Portal, Shopify theme development, HTML, CSS, SCSS, Storybook, and Liquid templating. 
        <br/>Has eight years of experience working in the IT industry. He began his career as a software support and pursued a career in web development. 
        
        <br/>He also has interests in software principles such as DRY and YAGNI, DevOps deployment methodology, Agile methodology, and web3.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;