import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow, Logo } from "../../components";
import { loginUser, registerUser } from "../../redux/user/userThunk";
import Wrapper from "./Register.styled";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

export default function Register() {
	const [values, setValues] = useState(initialState);
	const dispatch = useDispatch();
	const { isLoading, user } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			toast.warning("Please fill out all the fields");
			return;
		}
		if (isMember) {
			dispatch(loginUser({ email, password }));
			return;
		}
		dispatch(registerUser({ name, email, password }));
	};

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/");
			}, 2000);
		}
	}, [user]);

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
				<h3>{values.isMember ? "Login" : "Register"}</h3>
				{!values.isMember && (
					<FormRow
						type="text"
						name="name"
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				<FormRow
					type="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				<FormRow
					type="password"
					name="password"
					value={values.password}
					handleChange={handleChange}
				/>
				<button
					type="submit"
					className="btn btn-block"
					disabled={isLoading}
				>
					{isLoading ? "Loading..." : "Submit"}
				</button>
				<button
					type="button"
					className="btn btn-block btn-hipster"
					disabled={isLoading}
					onClick={() =>
						dispatch(
							loginUser({
								email: "testUser@test.com",
								password: "secret",
							})
						)
					}
				>
					{isLoading ? "Loading..." : "Demo"}
				</button>

				<p>
					{values.isMember
						? "Not a member yet ?"
						: "Already a member ?"}
					<button
						type="button"
						onClick={toggleMember}
						className="member-btn"
					>
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	);
}
