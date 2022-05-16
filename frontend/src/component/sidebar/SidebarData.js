import React from "react";
import { FaComments } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiAdminLine, RiFilePaperLine } from "react-icons/ri";
import { getIsAdminCookie } from "../../services/helperService";

let data = [{
        title: "  Posts",
        path: "/",
        icon: ( <
            RiFilePaperLine size = { 30 }
            style = {
                { margin: 12, display: "flex", justifyContent: "space-between" } }
            />
        ),
        cName: "nav-text",
    },
    {
        title: "  Write Post",
        path: "/write",
        icon: ( <
            IoIosAddCircleOutline size = { 30 }
            style = {
                { margin: 12, display: "flex", justifyContent: "space-between" } }
            />
        ),

        cName: "nav-text",
    },
    {
        title: "  Comments",
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

if (getIsAdminCookie()) {
    data.push({
        title: "  Admin",
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