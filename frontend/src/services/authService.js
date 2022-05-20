import config from "../config.json";
import axios from "axios";
import {
    showError,
    setTokenCookie,
    getTokenCookie,
    setIdCookie,
    setIsAdminCookie,
    setIsPremiumCookie,
    setAvatarCookie,
    removeUserCookies,
} from "./helperService";

const endPoint = config.API_URL + "/auth/login";

export async function login(loginData) {
    try {
        removeUserCookies();
        const response = await axios.post(endPoint, loginData);

        setTokenCookie(response.data.data.token);
        setIdCookie(response.data.data.id);
        setIsAdminCookie(response.data.data.isAdmin);
        setIsPremiumCookie(response.data.data.isPremium);
        setAvatarCookie(response.data.data.avatar);
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
    removeUserCookies();
}

export function isLoggedIn() {
    return getTokenCookie();
}