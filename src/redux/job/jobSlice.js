import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { createJob, deleteJob, editJob } from "./jobThunk";

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
		setEditJob: (state, { payload }) => {
			return { ...state, isEditing: true, ...payload };
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
			})
			.addCase(deleteJob.rejected, (state, { payload }) => {
				toast.error(payload);
			})
			.addCase(deleteJob.fulfilled, (state, { payload }) => {
				toast.success(payload.msg);
			})
			.addCase(editJob.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editJob.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.success("Job modified...");
			})
			.addCase(editJob.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			});
	},
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export const jobReducer = jobSlice.reducer;
