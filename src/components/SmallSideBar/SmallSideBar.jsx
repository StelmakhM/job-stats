import React from "react";
import Wrapper from "./SmallSideBar.styled";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../Logo";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import NavLinks from "../NavLInks/NavLinks";

export default function SmallSideBar() {
	const { isSidebarOpen } = useSelector((state) => state.sidebar);
	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleSidebar());
	};
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen
						? "sidebar-container show-sidebar"
						: "sidebar-container"
				}
			>
				<div className="content">
					<button
						type="button"
						className="close-btn"
						onClick={toggle}
					>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggle} />
				</div>
			</div>
		</Wrapper>
	);
}
