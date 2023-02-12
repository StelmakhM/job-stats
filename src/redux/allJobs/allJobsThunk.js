import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../utils/axios";

export const getAllJobs = createAsyncThunk(
	"allJobs/getAllJobs",
	async (_, thunkAPI) => {
		let url = `/jobs`;
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
