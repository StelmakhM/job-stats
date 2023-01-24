import { createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { instance } from "../../utils/axios";

export const registerUser = createAsyncThunk(
	"user/registerUser",
	async (user, thunkAPI) => {
		try {
			const { data } = await instance.post("auth/register", user);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (user, thunkAPI) => {
		try {
			const { data } = await instance.post("/auth/login", user);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response);
		}
	}
);
