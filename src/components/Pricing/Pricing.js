import React from 'react';
import { BsFillCartCheckFill,BsCollectionFill,BsFileBinaryFill } from "react-icons/bs";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './PricingStyles';

const Pricing = () =>  (
  <Section id="pricing">
    <SectionTitle>Pricing</SectionTitle>
    <SectionText>
      Building Applications for Freelancing.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <BsFileBinaryFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Single Page App</ListTitle>
          <ListParagraph>
            Includes: <br />
            5 Sections <br/>
            ₱ 40k +
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsCollectionFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Multi Page Website</ListTitle>
          <ListParagraph>
            Includes: <br />
            6 Pages <br/>
            ₱ 70k +
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsFillCartCheckFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shopify Webstore</ListTitle>
          <ListParagraph>
          Includes: <br />
            Plugins <br/>
            Integrations <br/>
            ₱ 100k +
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Pricing;
