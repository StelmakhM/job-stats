import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";

export const createJob = createAsyncThunk(
	"job/createJob",
	async (job, thunkAPI) => {
		try {
			const response = instance.post("/jobs", job, {
				headers: {
					authorization: `Bearer ${
						thunkAPI.getState().user.user.token
					}`,
				},
			});
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
