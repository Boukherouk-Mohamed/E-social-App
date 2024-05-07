import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router";

const RoomPage = () => {
  const { roomID } = useParams();
  const myMeeting = async (element) => {
    const appID = 1643964465;
    const serverSecret = "ad7a24901e9426a5fb944612c5c9015b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Aymen"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
    });
  };
  return (
    <div className="room-page">
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
