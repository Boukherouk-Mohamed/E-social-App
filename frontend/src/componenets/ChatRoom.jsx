import React, { useEffect, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import '@livekit/components-styles';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  ControlBar,
  useRoom
} from '@livekit/components-react';
import './ChatPage.css';
import useSWR from 'swr';

var stompClient = null;
//const fetcher = url => axios.get(url).then(res => res.data);


const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  //const {data:token,isLoading}=useSWR(`http://localhost:3001/generateToken?roomName=${encodeURIComponent(roomName)}&participantIdentity=${encodeURIComponent(participantIdentity)}`, fetcher)
  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  });
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }

  const fetchToken = async (roomName, participantIdentity) => {
    try {
      const response = await fetch(`http://localhost:8080/getToken?roomName=${roomName}&participantIdentity=${participantIdentity}`);
      const data = await response.json();
      return data.token;
    } catch (error) {
      console.error("Error fetching token:", error);
      return null;
    }
  };
  
  

  const onConnected = () => {
    setUserData({ ...userData, "connected": true });
    stompClient.subscribe('/chatroom/public', onMessageReceived);
    stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage);
    userJoin();
  }

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  }

  const onPrivateMessage = (payload) => {
    const payloadData = JSON.parse(payload.body);
    setPrivateChats((prevChats) => {
      const updatedChats = new Map(prevChats);
      const messages = updatedChats.get(payloadData.senderName) || [];
      updatedChats.set(payloadData.senderName, [...messages, payloadData]);
      return updatedChats;
    });
  };

  const onError = (err) => {
    console.log(err);
  }

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "message": value });
  }

  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE"
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
    }
  }

  const sendPrivateValue = () => {
    if (stompClient && userData.username && stompClient.connected) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE"
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
    }
  }

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "username": value });
  }

  const registerUser = () => {
    connect();
  }

  // Modify the toggleStreaming function to fetch the token
  const toggleStreaming = async () => {
    if (!isStreaming) {
      const roomName = "public-chat-room"; // Example room name
      const participantIdentity = userData.username; // Use username as participant identity
      const token = await fetchToken(roomName, participantIdentity);
      if (token) {
        setIsStreaming(true);
        // Set the token in state, pass it to LiveKitRoom as a prop
        setUserData({ ...userData, liveKitToken: token });
      } else {
        // Handle error: token fetch failed
        console.error("Failed to fetch LiveKit token");
      }
    } else {
      setIsStreaming(false);
      // Optionally, handle cleanup if needed
    }
  };

  return (
    <div className="container">
      {userData.connected ? (
        <div className="chat-box">
          <div className="member-list">
            <ul>
              <li onClick={() => { setTab("CHATROOM") }} className={`member ${tab === "CHATROOM" && "active"}`}>Chatroom</li>
              {[...privateChats.keys()].map((name, index) => (
                <li onClick={() => { setTab(name) }} className={`member ${tab === name && "active"}`} key={index}>{name}</li>
              ))}
            </ul>
          </div>
          {tab === "CHATROOM" && (
            <div>
              <div className="chat-content">
                <ul className="chat-messages">
                  {publicChats.map((chat, index) => (
                    <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                      {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                      <div className="message-data">{chat.message}</div>
                      {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                    </li>
                  ))}
                </ul>

                <div className="send-message">
                  <input type="text" className="input-message" placeholder="Enter the message" value={userData.message} onChange={handleMessage} />
                  <button type="button" className="send-button" onClick={sendValue}>Send</button>
                </div>
              </div>
              <button onClick={toggleStreaming} className="stream-button">{isStreaming ? 'Stop Streaming' : 'Start Streaming'}</button>
              {isStreaming && (
                <LiveKitRoom
                  serverUrl={serverUrl}
                  token={userData.liveKitToken}
                  roomName="public-chat-room"
                  audio={true}
                  video={true}
                  className="livekit-room"
                >
                  <RoomAudioRenderer />
                  <ControlBar />
                </LiveKitRoom>
              )}
            </div>
          )}
          {tab !== "CHATROOM" && (
            <div className="chat-content">
              <ul className="chat-messages">
                {[...privateChats.get(tab)].map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                  </li>
                ))}
              </ul>

              <div className="send-message">
                <input type="text" className="input-message" placeholder="Enter the message" value={userData.message} onChange={handleMessage} />
                <button type="button" className="send-button" onClick={sendPrivateValue}>Send</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="register">
          <input
            id="user-name"
            placeholder="Enter your name"
            name="userName"
            value={userData.username}
            onChange={handleUsername}
            margin="normal"
          />
          <button type="button" onClick={registerUser}>
            Connect
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;

