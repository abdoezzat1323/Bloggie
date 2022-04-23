import React from 'react';
import {FaComments} from 'react-icons/fa';
import {AiFillLayout,} from 'react-icons/ai';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {RiAdminLine,RiSettings4Line,RiFilePaperLine} from "react-icons/ri";




export const SidebarData = [
  {
    title: 'Posts',
    path: '/',
    icon: <RiFilePaperLine />,
    cName: 'nav-text'
  },
  {
    title: 'Write Post',
    path: '/write_post',
    icon: <IoIosAddCircleOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Comments',
    path: '/Comments',
    icon: <FaComments />,
    cName: 'nav-text'
  },
  {
    title: 'Layout',
    path: '/Layout',
    icon: <AiFillLayout />,
    cName: 'nav-text'
  },
  {
    title: 'Admin',
    path: '/Admin',
    icon: <RiAdminLine/>,
    cName: 'nav-text'
  },

  {
    title: 'Settings',
    path: '/Settings',
    icon: <RiSettings4Line />,
    cName: 'nav-text'
  }
];
