import React, { useEffect } from 'react';
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavbarCard from './componenets/NavbarCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './componenets/SideBar';
import Main from './componenets/Main';
import Messages from './componenets/Messages';
import Login from './componenets/Login';
import Signin from './componenets/Signin';
import MessagesDetails from './componenets/MessagesDetails';
import withAuth from './componenets/WithAuth';
import ChatPage from './componenets/ChatPage';
import RoomPage from './componenets/RoomPage';
import StreamPage from './componenets/StreamPage';
import Page2 from './componenets/Page2';

function App() {


  useEffect(() => {
    
  }, []);

  return (

    <div>

        <div className="">
           {/* <Messages></Messages> */}
          {/* <Login></Login> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={withAuth(Messages)} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/chat" element={<Page2 />} />
              <Route path="/room" element={<StreamPage />} />
              <Route path="/room/:roomID" element={<RoomPage />} />
              <Route path="*" element={withAuth(Messages)} />
              {localStorage.getItem('token') && <Route path="*" element={<Navigate to="/" />} />}
            </Routes>
          </BrowserRouter>
        </div>
       

    </div>

  );
}

export default App;
