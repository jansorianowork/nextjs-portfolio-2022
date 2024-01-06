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
        A Front-End Developer with experience in JavaScript, ReactJs, Typescript, Dynamics 365 Portal, Shopify theme development, HTML, CSS, SCSS, Storybook, and Liquid templating. Has eight years of experience working in the IT industry. He began his career as a software support in an accounting firm, focusing mainly on the system UI. He also has interests in software principles such as DRY and YAGNI, DevOps deployment methodology, Agile methodology, and web3.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;