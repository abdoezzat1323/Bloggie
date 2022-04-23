import { NotificationManager } from "react-notifications";
import Cookies from "universal-cookie";

export function showError(error, time_ms = 3000) {
    NotificationManager.error(error, "Error", time_ms);
}

export function setTokenCookie(token) {
    const cookies = new Cookies();
    cookies.set("token", token, { path: "/" });
}

export function getTokenCookie() {
    const cookies = new Cookies();
    return cookies.get("token");
}