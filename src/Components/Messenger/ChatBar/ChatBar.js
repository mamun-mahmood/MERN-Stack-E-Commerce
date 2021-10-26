import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import './ChatBar.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const ChatBar = () => {
    return (
        <div className="chat">
            <div className="chatBody">
                <p className="chatMsg">
                    <span className="chatName">Mamun</span>
                    this is a message

                    <span className="chatTimeStamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>

                </p>
                <p className="chatMsg">
                    <span className="chatName">Mamun</span>
                    this is a message from friend

                    <span className="chatTimeStamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>

                </p>
                <p className="chatMsg sentMsg">
                    <span className="chatName">Mamun</span>
                    ow hello

                    <span className="chatTimeStamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>

                </p>
                <p className="chatMsg">
                    <span className="chatName">Mamun</span>
                    this is a message

                    <span className="chatTimeStamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>

                </p>
            </div>
            <div className="chatFooter">
                <AttachFileIcon/>
                <form>
                    <input placeholder="type a message" type="text"/>
                    <button>Send</button>
                </form>
                <SendOutlinedIcon/>
            </div>
        </div>
    );
};
export default ChatBar;