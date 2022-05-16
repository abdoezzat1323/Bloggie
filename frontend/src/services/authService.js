import config from "../config.json";
import axios from "axios";
import {
    showError,
    setTokenCookie,
    getTokenCookie,
    removeTokenCookie,
    setIdCookie,
    getIdCookie,
    removeIdCookie,
    getIsAdminCookie,
    setIsAdminCookie,
} from "./helperService";

const endPoint = config.API_URL + "/auth/login";

export async function login(loginData) {
    try {
        const response = await axios.post(endPoint, loginData);
        setTokenCookie(response.data.data.token);
        setIdCookie(response.data.id);
        setIsAdminCookie(response.data.isAdmin);
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

export function logout() {
    removeTokenCookie();
    removeIdCookie();
}

export function isLoggedIn() {
    return getTokenCookie();
}