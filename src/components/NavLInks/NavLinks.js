import { NavLink } from "react-router-dom";
import { links } from "../../utils/links";

import React from "react";

export default function ({ toggleSidebar }) {
	return (
		<div className="nav-links">
			{links.map((link) => {
				const { id, path, text, icon } = link;
				return (
					<NavLink
						to={path}
						key={id}
						className={({ isActive }) => {
							return isActive ? "nav-link active" : "nav-link";
						}}
						onClick={toggleSidebar}
					>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
}
