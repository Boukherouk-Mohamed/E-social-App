import React from 'react'

function MessagesDetails() {
  return (
    <div className='MessagesDetailsDiv'>

      <div className="receiver">
        <img src="images/profile.jpg" alt="" />
        <h3>Imad El Idrissi</h3>
      </div>
      <hr />

      <div className="containerMessagesConversation">

        <div className="senderDiv">
            <img src="images/profile.jpg" alt=""  id='SenderPic'/>
            <div className="textContainerConvSender">
                <p>Kabouré ggggggggggggg gggggggggg hhhh h hhhhhhhhh hhhhhhhhh hhhhhhh gggggggggg</p>
            </div>
        </div>
        <br />

        <div className="ReceiverDiv">
            <div className="textContainerConvReceiver">
                <p>cava? ggggggggggggg gggggggggg hhhh h hhhhhhhhh hhhhhhhhh hhhhhhh </p>
            </div>
            <img src="images/profile.jpg" alt=""  id='SenderPic' />
        </div>
        <br />
        <div className="senderDiv">
            <img src="images/profile.jpg" alt=""  id='SenderPic' />
            <div className="textContainerConvSender">
                <p>Ouiiiii Cava</p>
            </div>
        </div>
        <div className="ReceiverDiv">
            <div className="textContainerConvReceiver">
                <p>Ouiiiii Cava</p>
            </div>
            <img src="images/profile.jpg" alt=""  id='SenderPic' />
        </div>
        <div className="ReceiverDiv">
            <div className="textContainerConvReceiver">
                <p>cava, et toi?</p>
            </div>
            <img src="images/profile.jpg" alt=""  id='SenderPic' />
        </div>
        <div className="senderDiv">
            <img src="images/profile.jpg" alt=""  id='SenderPic' />
            <div className="textContainerConvSender">
                <p>Bonjour Mr, cv?</p>
            </div>
        </div>
        <div className="ReceiverDiv">
            <div className="textContainerConvReceiver">
                <p>cava, et toi?</p>
            </div>
            <img src="images/profile.jpg" alt=""  id='SenderPic' />
        </div>
       

      </div>
      <hr />
      <br />
      <div className="containerInputConversation">
            <div className="Message">
                <input
                    title="Write Message"
                    tabIndex="i"
                    pattern="\d+"
                    placeholder="Message.."
                    className="MsgInput"
                    type="text"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width="30.000000pt"
                    height="30.000000pt"
                    viewBox="0 0 30.000000 30.000000"
                    preserveAspectRatio="xMidYMid meet"
                    className="SendSVG"
                >
                    <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#ffffff70" stroke="none">
                    <path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"></path>
                    </g>
                </svg>
                <span className="l"></span>
            </div>
      </div>
      


    </div>
  )
}

export default MessagesDetails
