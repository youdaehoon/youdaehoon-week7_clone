import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import axios from "axios";

var stompClient = null;

const ChatRoom = () => {
  const [isMakeChatId, setisMakeChatId] = React.useState(false);
  const RefChat = React.useRef();
  const [changeUser, setchangeUser] = React.useState(true);
  const [dataFromSoket, setdataFromSoket] = React.useState([]);
  const [message, setmessage] = React.useState(true);

   console.log("11")
  // react와 연결한다.
  const connect = async () => {
    let data = JSON.stringify({ tradeId: "32" });

    const auth = {
      authorization: sessionStorage.getItem("access_token"),
      refresh_token: sessionStorage.getItem("refresh_token"),
    };
    console.log(`Bearer ${auth.authorization}`);
    console.log(auth);
    const apiImg = axios.create({
      baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/",
      headers: {
        Authorization: `Bearer ${auth.authorization}`,
        refresh_token: `Bearer ${auth.refresh_token}`,
        "Content-Type": "application/json",
      },
    });

    const CreateBoardAXImg = await apiImg
      .post("/chat", data)
      .then(function (response) {
        console.log(response, "에러안남!!!!!");
        setisMakeChatId(true);
      })
      .catch(function (error) {
        console.log("에러났음.", error);
      });
  };

  const soketConnect = () => {
    let Sock = new SockJS("http://54.180.105.24:8080/tomatoChat/");
    stompClient = over(Sock); //스톰프에담는다.
    let authorization = sessionStorage.getItem("access_token");
    stompClient.connect(
      { Authorization: `Bearer ${authorization}` },
      onConnected
    );
    // stompClient.disconnect();
  };

  const onConnected = () => {
    stompClient.subscribe("/queue/2", onMessageReceived);
    var chatMessage = {
      chatRoomId: "2",
      message: message,
    };
    let authorization = sessionStorage.getItem("access_token");
    stompClient.send(
      "/sendChat",
      { Authorization: authorization },
      JSON.stringify(chatMessage)
    );
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    
    setdataFromSoket(dataFromSoket.push(payloadData));
    console.log("이거봐보자!",dataFromSoket,payloadData)
  };
  const sendMessage = () => {
   
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setmessage(e.target.value);
        }}
      ></input>
      <hr />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* {dataFromSoket.length == 0 ? (
          <></>
        ) : (
          dataFromSoket.map((v, i) => {
            return (
              <div>
                text:{v}
              </div>
            );
          })
        )} */}
      </div>

      <hr />
      <button
        onClick={() => {
          setchangeUser(changeUser * false);
        }}
      ></button>
      <button onClick={connect}>연결</button>
      <button onClick={soketConnect}>소켓연결</button>
      <button onClick={sendMessage}>메시지 보내기</button>
    </div>
  );
};

export default ChatRoom;
