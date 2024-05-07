import React, { useState } from "react";
import { useNavigate } from "react-router";
import './StreamPage.css'

const StreamPage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  }

  return (
    <div className="stream-page">
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <label>Enter Room Code</label>
          <input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            placeholder="Enter Room Code"
          />
        </div>
        <button type="submit">Enter Room</button>
      </form>
    </div>
  );
};

export default StreamPage;
