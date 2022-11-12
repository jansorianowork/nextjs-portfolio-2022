import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Web Developer Profile
        </SectionTitle>
        <SectionText>
        Results oriented Front-End Developer, experienced in Shopify theme development, Storybook, ReactJs, Typescript, and Sass. Interested in web 3.0 and web security.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;