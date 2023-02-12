import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showStats } from "../../../redux/allJobs/allJobsThunk";

export default function Stats() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(showStats());
	}, []);
	return <div>Stats</div>;
}
