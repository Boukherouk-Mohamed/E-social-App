// LeftMenu.js
import React, {useState} from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {IoHome, IoMoon, IoNewspaperOutline, IoSunny} from "react-icons/io5";
import {AiFillMessage} from "react-icons/ai";
import {FaVideo} from "react-icons/fa";
import {FaUserGroup} from "react-icons/fa6";
import {IoMdSettings} from "react-icons/io";
import '../App.css';
import Nav from "react-bootstrap/Nav";

function SideBar(props) {

    const sidebarStyles = {
        backgroundColor: props.darkMode ? '#333' : '#fff', // Adjust background color
        color: props.darkMode ? '#fff' : '#333', // Adjust text color
        // Add any other styles you need
    };
    return (

        <Sidebar className={props.darkMode ? "dark" : ""}>
            <Menu>
                <MenuItem  icon={<IoHome style={{ color: '#FFA462' }} />}> Home </MenuItem>
                <MenuItem icon={<IoNewspaperOutline style={{ color: '#4696F3' }}/>}> News </MenuItem>
                <MenuItem icon={<FaVideo style={{ color: '#62D760' }} />}> Video </MenuItem>
                <MenuItem icon={<AiFillMessage style={{ color: '#CF0000' }} />}> Messages </MenuItem>
                <MenuItem icon={<FaUserGroup style={{ color: '#873E7B' }} />}> Groups </MenuItem>
                <MenuItem icon={<IoMdSettings style={{ color: '#5A5A5A' }} />}> Settings </MenuItem>
            </Menu>
            <hr />
            <Nav
                className={props.darkMode ? "dark": ""}
            />

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </Sidebar>
    );
}

export default SideBar;
