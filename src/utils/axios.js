import axios from "axios";

const BASE_URL = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

export const instance = axios.create({
	baseURL: BASE_URL,
});
