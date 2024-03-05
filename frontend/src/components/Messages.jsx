import React from 'react'
import MessagesDetails from './MessagesDetails'
import NavbarCard from './NavbarCard'
import SideBar from './SideBar'

function Messages() {
  return (
    
    <div className='ContainerMessages'>
        <SideBar></SideBar>


        <div className="containerFriends">


            <div className="headerFriends">
                <h3>Chats</h3>
                <div className="convCont">
                    <div className="friendDiv">
                        <img src="images/profile.jpg" alt="" />
                        <h6>Imad</h6>
                    </div>
                    <div className="friendDiv">
                        <img src="images/profile.jpg" alt="" />
                        <h6>Imad</h6>
                    </div><div className="friendDiv">
                        <img src="images/profile.jpg" alt="" />
                        <h6>Imad</h6>
                    </div><div className="friendDiv">
                        <img src="images/profile.jpg" alt="" />
                        <h6>Imad</h6>
                    </div>
                </div>
                
            </div>

            
            <div className="searchBarConversations">
                <form className="form">
                    <label htmlFor="search">
                    <input
                        required
                        autoComplete="off"
                        placeholder="search your chats"
                        id="search"
                        type="text"
                    />
                    <div className="icon">
                        <svg
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="swap-on"
                        >
                        <path
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                        <svg
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="swap-off"
                        >
                        <path
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                        </svg>
                    </div>
                    <button type="reset" className="close-btn">
                        <svg viewBox="0 0 20 20" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            fillRule="evenodd"
                        ></path>
                        </svg>
                    </button>
                    </label>

                    </form>
            </div>

            <div className="UsersMessagesCont">

                <div className="userMessage">
                    <div className="pictureUserMsg">
                        <img src="images/profile.jpg" alt="" />
                    </div>
                    <div className="dataUserMsg">
                        <h4>Ouadie Ouaqar</h4>
                        <p>Salam</p>
                    </div>
                </div>

                <div className="userMessage">
                    <div className="pictureUserMsg">
                        <img src="images/profile.jpg" alt="" />
                    </div>
                    <div className="dataUserMsg">
                        <h4>Ouadie Ouaqar</h4>
                        <p>Salam</p>
                    </div>
                </div>

                <div className="userMessage">
                    <div className="pictureUserMsg">
                        <img src="images/profile.jpg" alt="" />
                    </div>
                    <div className="dataUserMsg">
                        <h4>Ouadie Ouaqar</h4>
                        <p>Salam</p>
                    </div>
                </div>
                <div className="userMessage">
                    <div className="pictureUserMsg">
                        <img src="images/profile.jpg" alt="" />
                    </div>
                    <div className="dataUserMsg">
                        <h4>Ouadie Ouaqar</h4>
                        <p>Salam</p>
                    </div>
                </div>
                <div className="userMessage">
                    <div className="pictureUserMsg">
                        <img src="images/profile.jpg" alt="" />
                    </div>
                    <div className="dataUserMsg">
                        <h4>Ouadie Ouaqar</h4>
                        <p>Salam</p>
                    </div>
                </div>
                <div className="userMessage">
                    <div className="pictureUserMsg">
                        <img src="images/profile.jpg" alt="" />
                    </div>
                    <div className="dataUserMsg">
                        <h4>Ouadie Ouaqar</h4>
                        <p>Salam</p>
                    </div>
                </div>
            </div>


        </div>


        <div className="containerConversation">
            <MessagesDetails></MessagesDetails>
            
        </div>
      
    </div>
  )
}

export default Messages
