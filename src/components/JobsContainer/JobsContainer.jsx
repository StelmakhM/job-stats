import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./JobsContainer.styled";
import Loading from "../Loading/Loading";
import Job from "../Job/Job";
import { useEffect } from "react";
import { getAllJobs } from "../../redux/allJobs/allJobsThunk";
export default function JobsContainer() {
	const { jobs, isLoading } = useSelector((state) => state.allJobs);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllJobs());
	}, []);

	if (isLoading) {
		return <Loading center />;
	}

	if (jobs.length === 0) {
		return (
			<Wrapper>
				<h2>No jobs to display</h2>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h5>jobs info</h5>
			<div className="jobs">
				{jobs.map((job) => {
					console.log(job);
					return <Job key={job._id} {...job} />;
				})}
			</div>
		</Wrapper>
	);
}
