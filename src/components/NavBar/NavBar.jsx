import React, { useState } from "react";
import Wrapper from "./NavBar.styled";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo";
import { hideSidebar, toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import { logoutUser } from "../../redux/user/userSlice";

export default function NavBar() {
	const [showLogout, setShowLogout] = useState(false);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleSidebar());
	};

	const logout = () => {
		dispatch(logoutUser());
		dispatch(hideSidebar());
	};

	return (
		<Wrapper>
			<div className="nav-center">
				<button type="button" className="toggle-btn" onClick={toggle}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h3 className="logo-text">dashboard</h3>
				</div>
				<div className="btn-container">
					<button
						type="button"
						className="btn"
						onClick={() => setShowLogout(!showLogout)}
					>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</button>
					<div
						className={
							showLogout ? "dropdown show-dropdown" : "dropdown"
						}
					>
						<button
							type="button"
							className="dropdown-btn"
							onClick={logout}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
