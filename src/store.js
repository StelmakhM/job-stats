import { configureStore } from "@reduxjs/toolkit";
import { jobReducer } from "./redux/job/jobSlice";
import { sidebarReducer } from "./redux/sidebar/sidebarSlice";
import { userReducer } from "./redux/user/userSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		sidebar: sidebarReducer,
		job: jobReducer,
	},
});
