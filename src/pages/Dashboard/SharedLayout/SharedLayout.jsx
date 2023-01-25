import React from "react";
import { Outlet } from "react-router-dom";
import { BigSideBar, NavBar, SmallSideBar } from "../../../components";
import Wrapper from "./SharedLayout.styled";

export default function SharedLayout() {
	return (
		<Wrapper>
			<main className="dashboard">
				<SmallSideBar />
				<BigSideBar />
				<div>
					<NavBar />
					<div className="dashboard-page">
						<Outlet />
					</div>
				</div>
			</main>
		</Wrapper>
	);
}
