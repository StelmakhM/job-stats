import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartsContainer, StatsContainer } from "../../../components";
import { showStats } from "../../../redux/allJobs/allJobsThunk";

export default function Stats() {
	const { isLoading, monthlyApplications } = useSelector(
		(state) => state.allJobs
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(showStats());
	}, []);
	return (
		<>
			<StatsContainer />
			{monthlyApplications.length > 0 && <ChartsContainer />}
		</>
	);
}
