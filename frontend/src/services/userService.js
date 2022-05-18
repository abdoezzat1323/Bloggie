import config from "../config.json";
import axios from "axios";
import {
    showError,
    setTokenCookie,
    setIdCookie,
    getIdCookie,
    setIsPremiumCookie,
    setAvatarCookie,
    setIsAdminCookie,
} from "./helperService";

const endPoint = config.API_URL + "/user/";

export async function signup(userData) {
    try {
        const response = await axios.post(endPoint, userData);

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

export async function isAdmin() {
    try {
        const response = await axios.get(endPoint);
        console.log(response);
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