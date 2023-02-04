import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../../components/FormRow";
import { updateUser } from "../../../redux/user/userThunk";
import Wrapper from "./Profile.styled";

export default function Profile() {
	const { isLoading, user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		name: user?.name || "",
		email: user?.email || "",
		lastName: user?.lastName || "",
		location: user?.location || "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, lastName, location } = userData;
		if ((!name, !email, !lastName, !location)) {
			toast.error("Please, fill out all fields");
			return;
		}
		dispatch(updateUser(userData));
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [name]: value });
	};

	const { name, email, lastName, location } = userData;
	return (
		<Wrapper>
			<form className="form" onSubmit={handleSubmit}>
				<h3>profile</h3>
				<div className="form-center">
					<FormRow
						type="text"
						value={name}
						name="name"
						handleChange={handleChange}
					/>
					<FormRow
						type="text"
						value={lastName}
						name="lastName"
						handleChange={handleChange}
						labelText="last name"
					/>
					<FormRow
						type="email"
						value={email}
						name="email"
						handleChange={handleChange}
					/>
					<FormRow
						type="text"
						value={location}
						name="location"
						handleChange={handleChange}
					/>
					<button
						type="submit"
						className="btn btn-block"
						disabled={isLoading}
					>
						{isLoading ? "Please, wait" : "Save changes"}
					</button>
				</div>
			</form>
		</Wrapper>
	);
}
