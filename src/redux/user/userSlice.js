import { createSlice } from "@reduxjs/toolkit";
import { toFormData } from "axios";
import { toast } from "react-toastify";
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { loginUser, registerUser, updateUser } from "./userThunk";

const initialState = {
	isLoading: false,
	user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logoutUser: (state, { payload }) => {
			state.user = null;
			removeUserFromLocalStorage();
			if (payload) {
				toast.success(payload);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, { payload }) => {
				const { user } = payload;
				state.isLoading = false;
				state.user = user;
				addUserToLocalStorage(user);
				toast.success(`Hello There, ${user.name}`);
			})
			.addCase(registerUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				const { user } = payload;
				state.isLoading = false;
				state.user = user;
				addUserToLocalStorage(user);
				toast.success(`Welcome Back, ${user.name}`);
			})
			.addCase(loginUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			.addCase(updateUser.pending, (state, { payload }) => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
				addUserToLocalStorage(payload.user);
				toast.success("User Updated!");
			})
			.addCase(updateUser.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
