import React from "react";
import { FaComments } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiAdminLine, RiFilePaperLine } from "react-icons/ri";
import {
    getIsAdminCookie,
    getIsPremiumCookie,
} from "../../services/helperService";

let data = [{
        title: "  Posts",
        admin: 0,
        premium: 0,
        path: "/View_post",
        icon: ( <
            RiFilePaperLine size = { 30 }
            style = {
                { margin: 12, display: "flex", justifyContent: "space-between" } }
            />
        ),
        cName: "nav-text",
    },

    {
        title: "  Comments",
        admin: 1,
        premium: 0,
        path: "/Comments",
        icon: ( <
            FaComments size = { 30 }
            style = {
                { margin: 12, display: "flex", justifyContent: "space-between" } }
            />
        ),
        cName: "nav-text",
    },
];
if (getIsAdminCookie() || getIsPremiumCookie()) {
    console.log(getIsAdminCookie() || getIsPremiumCookie(), "fff");

    data.push({
        title: "  Write Post",
        admin: 1,
        premium: 1,
        path: "/write",
        icon: ( <
            IoIosAddCircleOutline size = { 30 }
            style = {
                { margin: 12, display: "flex", justifyContent: "space-between" } }
            />
        ),

        cName: "nav-text",
    });
}
if (getIsAdminCookie()) {
    data.push({
        title: "  Admin",
        admin: 1,
        premium: 0,
        path: "/Admin",
        icon: ( <
            RiAdminLine size = { 30 }
            style = {
                { margin: 12, display: "flex", justifyContent: "space-between" } }
            />
        ),
        cName: "nav-text",
    });
}

export const SidebarData = data;