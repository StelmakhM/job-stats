import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Error.styled";
import notFoundImg from "../../images/not-found.svg";

export default function Error() {
	return (
		<Wrapper>
			<div>
				<img src={notFoundImg} alt="not found" />
				<h3>text</h3>
				<p>text</p>
				<Link to="/">back home</Link>
			</div>
		</Wrapper>
	);
}
