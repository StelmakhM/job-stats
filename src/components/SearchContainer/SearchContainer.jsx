import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, handleChange } from "../../redux/allJobs/allJobsSlice";
import FormRow from "../FormRow";
import FormRowSelect from "../FormRowSelect";
import Wrapper from "./SearchContainer.styled";

export default function SearchContainer() {
	const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
		useSelector((state) => state.allJobs);
	const { jobTypeOptions, statusOptions } = useSelector((state) => state.job);
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		// is loading check
		const { name, value } = e.target;
		dispatch(handleChange({ name, value }));
	};
	const handleSubmit = (e) => {
		e.preventDefatult();
		dispatch(clearFilters());
	};

	return (
		<Wrapper>
			<form className="form">
				<h4>search form</h4>
				<div className="form-center">
					<FormRow
						type="text"
						name="search"
						value={search}
						handleChange={handleSearch}
					/>
					<FormRowSelect
						labelText="status"
						name="searchStatus"
						value={searchStatus}
						handleChange={handleSearch}
						list={["all", ...statusOptions]}
					/>
					<FormRowSelect
						labelText="type"
						name="searchType"
						value={searchType}
						handleChange={handleSearch}
						list={["all", ...jobTypeOptions]}
					/>
					<FormRowSelect
						name="sort"
						value={sort}
						handleChange={handleSearch}
						list={sortOptions}
					/>
					<button
						className="btn btn-block btn-danger"
						disabled={isLoading}
						onClick={handleSubmit}
					>
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	);
}
