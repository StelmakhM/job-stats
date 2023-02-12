import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FormRow, FormRowSelect } from "../../../components";
import { clearValues, handleChange } from "../../../redux/job/jobSlice";
import { createJob, editJob } from "../../../redux/job/jobThunk";
import Wrapper from "./AddJob.styled";

export default function AddJob() {
	const { user } = useSelector((state) => state.user);
	const {
		isLoading,
		position,
		company,
		jobLocation,
		jobType,
		jobTypeOptions,
		status,
		statusOptions,
		isEditing,
		editJobId,
	} = useSelector((state) => state.job);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!position || !company || !jobLocation) {
			toast.error("Please, fill out all fields");
			return;
		}
		if (isEditing) {
			dispatch(
				editJob({
					jobId: editJobId,
					job: {
						position,
						company,
						jobLocation,
						jobType,
						status,
					},
				})
			);
			return;
		}
		dispatch(
			createJob({ position, company, jobLocation, jobType, status })
		);
	};

	const handleJobInput = (e) => {
		const { name, value } = e.target;
		dispatch(handleChange({ name, value }));
	};

	useEffect(() => {
		if (!isEditing) {
			dispatch(
				handleChange({
					name: "jobLocation",
					value: user.location,
				})
			);
		}
	}, []);
	return (
		<Wrapper>
			<form className="form">
				<h3>{isEditing ? "edit job" : "add job"}</h3>
				<div className="form-center">
					{/*position */}
					<FormRow
						type="text"
						name="position"
						value={position}
						handleChange={handleJobInput}
					/>
					{/*position */}
					<FormRow
						type="text"
						name="company"
						value={company}
						handleChange={handleJobInput}
					/>
					{/*position */}
					<FormRow
						labelText="Job Location"
						type="text"
						name="jobLocation"
						value={jobLocation}
						handleChange={handleJobInput}
					/>
					{/* status */}
					<FormRowSelect
						name="status"
						value={status}
						handleChange={handleJobInput}
						list={statusOptions}
					/>
					{/* job type */}
					<FormRowSelect
						name="jobType"
						labelText="job type"
						value={jobType}
						handleChange={handleJobInput}
						list={jobTypeOptions}
					/>
					<div className="btn-container">
						<button
							type="button"
							className="btn btn-block clear-btn"
							onClick={() => dispatch(clearValues())}
						>
							clear
						</button>
						<button
							type="submit"
							className="btn btn-block submit-btn"
							onClick={handleSubmit}
							disabled={isLoading}
						>
							submit
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
}
