import config from "../config.json";
import axios from "axios";
import { setVisited } from "./helperService";

const endPoint = config.API_URL + "/statistics/visitors";
const title = config.title;

export function getTitle() {
    return title;
}

export async function incVisitors() {
    try {
        setVisited();
        const response = await axios.post(endPoint);
    } catch (err) {
        return false;
    }
}