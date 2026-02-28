import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 2rem;
	flex-direction: row;
	width: 100%;

	@media ${(props) => props.theme.breakpoints.md} {
		align-items: flex-start;
		justify-content: space-between;
	}
`;

export const MenuButton = styled.button`
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.9);
	font-size: 2.4rem;
	padding: 0.25rem 0.5rem;
	display: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		display: inline-flex;
	}
`;

export const NavList = styled.div`
	width: auto;
	display: flex;
	flex-direction: row;
	gap: 0;
	margin-top: 0;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: ${({ open }) => (open ? "flex" : "none")};
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 0.5rem;
		align-items: flex;
	}
`;

// simple link style used in nav
export const NavText = styled.p`
	font-size: 2rem;
	line-height: 50px;
	color: rgba(255, 255, 255, 0.75);
	margin: 0 1rem;
	transition: 0.4s ease;

	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin: 0;
	}
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 50px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
	transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// Social Icons

export const IconGroup = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	flex-direction: row;
`;

export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 8px;
	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
