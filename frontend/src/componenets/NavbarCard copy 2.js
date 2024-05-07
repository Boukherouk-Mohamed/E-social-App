import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  logo from '../images/logo.png'
import './NavbarCard.css';
import { NotificationIcon } from 'react-autoql';
import { CgProfile } from "react-icons/cg";


import 'react-autoql/dist/autoql.esm.css'
function NavbarCard() {
    return (
        <Navbar expand="lg" id=" navbar ">
            <Container fluid>
                <img className="logo" width={"30px"}  src={logo} alt="Logo" />
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >


                    </Nav>
                    <div className=" icons flex align-items-center">
                        <Nav>
                    <form className="form d-flex justify-content-center">
                        <button>
                            <svg
                                width="17"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="search"
                            >
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor"
                                    strokeWidth="1.333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <input className="input"  required type="text" />
                        <button className="reset" type="reset">

                        </button>
                    </form>
                   </Nav>
                    </div>
                    <div className=" icons d-flex ms-auto">
                        <Nav>
                    <Nav.Link>
                        <NotificationIcon
                            //authentication={{
                            //  apiKey="your-api-key"
                            //domain="https://yourdomain.com"
                            //token="your-jwt-token"
                            //}}
                        />
                    </Nav.Link>
                    <Nav.Link>
                        <CgProfile className="profile-icon" />
                    </Nav.Link>
                   </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCard;
