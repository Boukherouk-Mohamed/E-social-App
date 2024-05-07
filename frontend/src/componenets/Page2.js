import '../App.css';
import NavbarCard from "./NavbarCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar";
import React from 'react';
import ChatPage from './ChatPage'

function Page2() {
    return(
        <div className=" App" >
        <header className="App-header">
            <NavbarCard/>
        </header>

        <div className="d-flex">
            <SideBar className="Sidebare" />
            <div className="containerMsgsDiv" >
                <ChatPage/>
                </div>
            </div>
        </div>
    
            
            );
    
}

export default Page2;
