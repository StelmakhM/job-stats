import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./JobsContainer.styled";
import Loading from "../Loading/Loading";
import Job from "../Job/Job";
import { useEffect } from "react";
import { getAllJobs } from "../../redux/allJobs/allJobsThunk";
import PageBtnContainer from "../PageBtnContainer/PageBtnContainer";
export default function JobsContainer() {
	const {
		jobs,
		isLoading,
		page,
		totalJobs,
		numOfPages,
		search,
		searchStatus,
		searchType,
		sort,
	} = useSelector((state) => state.allJobs);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllJobs());
	}, [page, search, searchStatus, searchType, sort]);

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
			<h5>
				{totalJobs} job{jobs.length > 1 && "s"} found
			</h5>
			<div className="jobs">
				{jobs.map((job) => {
					return <Job key={job._id} {...job} />;
				})}
			</div>
			{numOfPages > 1 && <PageBtnContainer />}
		</Wrapper>
	);
}
