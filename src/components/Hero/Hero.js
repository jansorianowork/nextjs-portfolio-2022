import React from "react";
import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Web Developer Portfolio
				</SectionTitle>
				<SectionText>
					Front-End Developer with 5+ years of experience building
					reusable React and Next.js components for enterprise
					applications. Skilled in modular architecture, TypeScript,
					performance optimization, and REST API integration.
					Contributed to frontend modernization through Node.js
					upgrades and dependency updates while maintaining UI
					stability. Familiar with Azure DevOps CI/CD pipelines for
					build and release validation.
					<br />
					Insterested in software principles such as DRY and YAGNI,
					DevOps deployment methodology, Agile methodology, and web3.
				</SectionText>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
