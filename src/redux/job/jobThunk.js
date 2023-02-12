import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";
import { showLoading, hideLoading } from "../allJobs/allJobsSlice";
import { getAllJobs } from "../allJobs/allJobsThunk";

export const createJob = createAsyncThunk(
	"job/createJob",
	async (job, thunkAPI) => {
		try {
			const response = instance.post("/jobs", job);
			thunkAPI.dispatch(clearValues());
			return response.data;
		} catch (error) {
			if (error.response.status === 401) {
				thunkAPI.dispatch(logoutUser());
				return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
			}
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

export const deleteJob = createAsyncThunk(
	"job/deleteJob",
	async (jobId, thunkAPI) => {
		thunkAPI.dispatch(showLoading());
		try {
			const response = await instance.delete(`/jobs/${jobId}`);
			thunkAPI.dispatch(getAllJobs());
			return response.data;
		} catch (error) {
			thunkAPI.dispatch(hideLoading());
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

export const editJob = createAsyncThunk(
	"job/editJob",
	async ({ jobId, job }, thunkAPI) => {
		try {
			const response = await instance.patch(`/jobs/${jobId}`, job);
			thunkAPI.dispatch(clearValues());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);
