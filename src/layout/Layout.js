import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import { Section } from "../styles/GlobalComponents";

export const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Jan Vincent Soriano | Software Developer</title>
				<meta
					property="og:Jan Vincent Soriano"
					content="Jan Vincent Soriano Dev Portfolio"
					key="title"
				/>
			</Head>
			<Container>
				<Section>
					<Header />
				</Section>
				<main>{children}</main>
				<Footer />
			</Container>
		</div>
	);
};
