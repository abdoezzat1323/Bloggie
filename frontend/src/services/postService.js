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
            console.log(imageFile);
            let upload = await uploadImage(imageFile);

            if (upload) postData.featured = upload.data.file;
        }

        postData.title = title;
        postData.body = body;

        const response = await axios.post(endPoint, postData);
        console.log(response);
        return response;
    } catch (err) {
        if (err.response) {
            console.log(err);
            showError(err.response.data.data);
            return false;
        } else {
            showError("Server is down!");
            return false;
        }
    }
}