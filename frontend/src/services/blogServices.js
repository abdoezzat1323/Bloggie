import config from "../config.json";

const title = config.title;

export function getTitle() {
    return title;
}