import config from "../config.json";
import axios from "axios";
import { showError, setTokenCookie } from "./helperService";
const FormData = require("form-data");
const endPoint = config.API_URL + "/upload";

export async function uploadImage(image) {
    const form = new FormData();
    form.append("file", image);

    try {
        const response = await axios.post(endPoint, form, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (err) {
        return false;
    }
}