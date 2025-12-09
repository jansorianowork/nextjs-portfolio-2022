import {
	AiFillGithub,
	AiOutlineCloudDownload,
	AiFillLinkedin,
} from "react-icons/ai";
import { DiTerminal } from "react-icons/di";

import {
	Container,
	Div1,
	Div2,
	Div3,
	Link1,
	SocialIcons,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link1
				href="/"
				style={{
					display: "flex",
					alignItems: "center",
					color: "white",
				}}
			>
				<DiTerminal size="3rem" /> <span>Jan Soriano</span>
			</Link1>
		</Div1>
		<Div2>
			<li>
				<Link1 href="#projects">Experience</Link1>
			</li>
			<li>
				<Link1 href="#tech">Technologies</Link1>
			</li>
			<li>
				<Link1 href="#about">Progression</Link1>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/jansorianowork">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/jansoriano-233984192/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
			<SocialIcons href="file/JVSorianoCV2024.pdf">
				<AiOutlineCloudDownload size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
