import { useState } from "react";
import Link from "next/link";
import {
	AiFillGithub,
	AiOutlineCloudDownload,
	AiFillLinkedin,
} from "react-icons/ai";
import { IoFish } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { HiEllipsisHorizontal } from "react-icons/hi2";

import {
	Container,
	SocialIcons,
	NavText,
	MenuButton,
	NavList,
	IconGroup,
} from "./HeaderStyles";

const Header = () => {
	const [open, setOpen] = useState(false);

	const closeMenu = () => setOpen(false);

	return (
		<Container aria-label="Main navigation">
			<Link href="/" passHref>
				<NavText
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
					}}
				>
					<IoFish size="3rem" />
				</NavText>
			</Link>

			<NavList open={open}>
				<Link href="#projects" passHref>
					<NavText onClick={closeMenu}>Experience</NavText>
				</Link>
				<Link href="#tech" passHref>
					<NavText onClick={closeMenu}>Technologies</NavText>
				</Link>
				<Link href="#about" passHref>
					<NavText onClick={closeMenu}>Progression</NavText>
				</Link>
				<IconGroup>
					<SocialIcons href="https://github.com/jansorianowork">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/jansoriano-233984192/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="file/JVSorianoCV2024.pdf">
						<AiOutlineCloudDownload size="3rem" />
					</SocialIcons>
				</IconGroup>
			</NavList>

			<MenuButton onClick={() => setOpen(!open)} aria-label="Toggle menu">
				{open ? (
					<MdClose size="2.5rem" />
				) : (
					<HiEllipsisHorizontal size="2.5rem" />
				)}
			</MenuButton>
		</Container>
	);
};

export default Header;
