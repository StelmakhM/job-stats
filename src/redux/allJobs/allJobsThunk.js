import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/axios";

export const getAllJobs = createAsyncThunk(
	"allJobs/getAllJobs",
	async (_, thunkAPI) => {
		let url = `/jobs`;
		try {
			const response = await instance(url, {
				headers: {
					authorization: `Bearer ${
						thunkAPI.getState().user.user.token
					}`,
				},
			});
			console.log(response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue("There was an error");
		}
	}
);
