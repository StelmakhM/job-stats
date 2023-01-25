import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import NavLinks from "../NavLInks/NavLinks";
import Wrapper from "./BigSideBar.styled";

export default function BigSideBar() {
	const { isSidebarOpen } = useSelector((state) => state.sidebar);
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? "sidebar-container "
						: "sidebar-container show-sidebar"
				}
			>
				<div className="content">
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	);
}
