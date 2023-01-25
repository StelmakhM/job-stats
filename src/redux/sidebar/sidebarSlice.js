import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSidebarOpen: false,
};

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		hideSidebar: (state) => {
			state.isSidebarOpen = false;
		},
	},
});

export const { toggleSidebar, hideSidebar } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
