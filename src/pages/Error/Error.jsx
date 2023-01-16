import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Error.styled";
import notFoundImg from "../../images/not-found.svg";

export default function Error() {
	return (
		<Wrapper>
			<div>
				<img src={notFoundImg} alt="not found" />
				<h3>Ohh! Page not found</h3>
				<p>We can't seem to find the page you're looking for</p>
				<Link to="/">back home</Link>
			</div>
		</Wrapper>
	);
}
