import config from "../config.json";
import axios from "axios";
import { showError, setTokenCookie } from "./helperService";
const FormData = require("form-data");
const endPoint = config.API_URL + "/upload";

export async function uploadImage(image) {
    const form = new FormData();
    form.append("productName", "Node.js Stickers");
    form.append(
        "productDescription",
        "Cool collection of Node.js stickers for your laptop."
    );
    form.append("file", image);

    // Send form data with axios
    try {
        const response = await axios.post(endPoint, form, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}