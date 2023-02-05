import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { createJob } from "./jobThunk";

const initialState = {
	isLoading: false,
	position: "",
	company: "",
	jobLocation: "",
	jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
	jobType: "full-time",
	statusOptions: ["interview", "declined", "pending"],
	status: "pending",
	isEditing: false,
	editJobId: "",
};

const jobSlice = createSlice({
	name: "job",
	initialState,
	reducers: {
		handleChange: (state, { payload: { name, value } }) => {
			state[name] = value;
		},
		clearValues: () => {
			return {
				...initialState,
				jobLocation: getUserFromLocalStorage()?.location || "",
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createJob.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createJob.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("Job created");
			})
			.addCase(createJob.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			});
	},
});

export const { handleChange, clearValues } = jobSlice.actions;
export const jobReducer = jobSlice.reducer;
