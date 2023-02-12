import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const BASE_URL = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

const instance = axios.create({
	baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
	const user = getUserFromLocalStorage();
	if (user) {
		config.headers["Authorization"] = `Bearer ${user.token}`;
	}
	return config;
});

export default instance;
