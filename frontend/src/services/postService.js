import config from "../config.json";
import axios from "axios";
import { showError, setTokenCookie } from "./helperService";
import { uploadImage } from "./uploadService";
import { getTokenCookie } from "./helperService"; // axios.defaults.withCredentials = true;

axios.defaults.headers.common["x-auth-token"] = getTokenCookie();

const endPoint = config.API_URL + "/post";

export async function createPost(title, body, categories, imageFile = null) {
    axios.defaults.headers.common["x-auth-token"] = getTokenCookie();
    try {
        let postData = {};
        if (imageFile) {
            let upload = await uploadImage(imageFile);

            if (upload) postData.featured = upload.data.file;
        }

        postData.title = title;
        postData.body = body;

        const response = await axios.post(endPoint, postData);
        return response;
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

export async function getPosts() {
    try {
        const response = await axios.get(endPoint);
        return response;
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

export async function getPinnedPosts() {
    try {
        const response = await axios.get(endPoint + "?pinned=1");
        return response;
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