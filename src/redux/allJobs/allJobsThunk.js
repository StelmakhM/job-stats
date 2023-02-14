import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../utils/axios";

export const getAllJobs = createAsyncThunk(
	"allJobs/getAllJobs",
	async (_, thunkAPI) => {
		const { page, search, searchStatus, searchType, sort } =
			thunkAPI.getState().allJobs;
		let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
		if (search) {
			url += `&search=${search}`;
		}
		try {
			const response = await instance(url);
			console.log(response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue("There was an error");
		}
	}
);

export const showStats = createAsyncThunk(
	"allJobs/showStats",
	async (_, thunkAPI) => {
		try {
			const response = await instance("/jobs/stats");
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);
