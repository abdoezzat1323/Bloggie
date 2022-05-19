import { NotificationManager } from "react-notifications";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function showError(error, time_ms = 3000) {
    NotificationManager.error(error, "Error", time_ms);
}

export function setTokenCookie(token) {
    cookies.set("token", token, { path: "/" });
}

export function setIdCookie(token) {
    cookies.set("id", token, { path: "/" });
}

export function getTokenCookie() {
    return cookies.get("token");
}

export function getIdCookie() {
    return cookies.get("id");
}

export function getIsAdminCookie() {
    return cookies.get("isAdmin");
}

export function setIsAdminCookie(isAdmin) {
    cookies.set("isAdmin", isAdmin, { path: "/" });
}

export function setVisited() {
    cookies.set("visited", 1, { path: "/" });
}
export function getVisited() {
    return cookies.get("visited");
}
export function setAvatarCookie(avatar) {
    cookies.set("avatar", avatar, { path: "/" });
}

export function getIsPremiumCookie() {
    return cookies.get("isPremium");
}

export function getAvatarCookie() {
    return cookies.get("avatar");
}

export function setIsPremiumCookie(isPremium) {
    cookies.set("isPremium", isPremium, { path: "/" });
}

export function removeTokenCookie() {
    cookies.remove("token");
}

export function removeIdCookie() {
    cookies.remove("id");
}
export function removeAvatarCookie() {
    cookies.remove("avatar");
}
export function removeIsAdminCookie() {
    cookies.remove("isAdmin");
}
export function removeIsPremiumCookie() {
    cookies.remove("isPremium");
}

export function removeUserCookies() {
    removeTokenCookie();
    removeIdCookie();
    removeIsAdminCookie();
    removeIsPremiumCookie();
    removeAvatarCookie();
}