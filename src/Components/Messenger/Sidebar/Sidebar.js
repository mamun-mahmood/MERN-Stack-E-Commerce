import React from 'react';
import './Sidebar.css'
import SideBarChats from '../SidebarChats/SideBarChats';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-chats">
                <SideBarChats/>
                <SideBarChats/>
                <SideBarChats/>
                <SideBarChats/>
                <SideBarChats/>
            </div>
        </div>
    );
};

export default Sidebar;