import config from "../config.json";
import axios from "axios";
import { showError, setTokenCookie } from "./helperService";

const endPoint = config.API_URL + "/auth/login";

export async function login(loginData) {
    try {
        const response = await axios.post(endPoint, loginData);
        console.log(response.data);
        setTokenCookie(response.data.token);
        return true;
    } catch (err) {
        if (err.response) {
            showError(err.response.data.data);
            return false;
        } else {
            showError("Server is down!");
            return false;
        }
    }
}

export async function logout() {
    setTokenCookie(null);
}