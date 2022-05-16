import React from 'react';
import {FaComments} from 'react-icons/fa';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {RiAdminLine,RiFilePaperLine} from "react-icons/ri";




export const SidebarData = [
  {
    title: '  Posts' ,
    path: '/',
    icon: <RiFilePaperLine size={30} style={{ display: "flex", justifyContent: "space-between" }} />,
    cName: 'nav-text'
  },
  {
    title: '  Write Post',
    path: '/write',
    icon: <IoIosAddCircleOutline size={30}/>,
    cName: 'nav-text'
  },
  {
    title: '  Comments',
    path: '/Comments',
    icon: <FaComments size={30}/>,
    cName: 'nav-text'
  },
 
  {
    title: '  Admin',
    path: '/Admin',
    icon: <RiAdminLine size={30}/>,
    cName: 'nav-text'
  },


];
