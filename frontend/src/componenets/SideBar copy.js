// LeftMenu.js
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {AiFillMessage} from "react-icons/ai";
import {FaUserFriends} from "react-icons/fa";

import './SideBar.css';
import {CgProfile} from "react-icons/cg";
import {Link} from "react-router-dom";

function SideBar() {
    return (
            <Menu className="menu">
                <MenuItem className="menuItem" component={<Link to="/" />} icon={<AiFillMessage style={{ color: '#CF0000' }} />}><h6 className="pro-menu-item-content"> Messages </h6></MenuItem>
                <MenuItem className="menuItem" component={<Link to="/Friends" />} icon={<FaUserFriends style={{ color: '#4696F3' }}/>}> <h6 className="pro-menu-item-content"> Friends </h6> </MenuItem>
                <MenuItem className="menuItem" component={<Link to="/Profile" />} icon={<CgProfile style={{ color: '#62D760' }} />}> <h6 className="pro-menu-item-content"> Profile </h6> </MenuItem>
            </Menu>
    );
}
export default SideBar;
