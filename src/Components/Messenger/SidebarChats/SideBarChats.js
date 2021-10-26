import { Avatar } from '@mui/material';
import React from 'react';
import './SideBarChats.css'
const SideBarChats = () => {
    return (
        <div className="sidebar-chat">
            <Avatar/>
            <div className="sidebar-chatInfo">
                <h2>room name</h2>
                <p>last message</p>
            </div>            
        </div>
    );
};

export default SideBarChats;