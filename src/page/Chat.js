import React, { useEffect, useState } from 'react'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";



var stompClient =null;

const ChatRoom = () => {
  const[isMakeChatId,setisMakeChatId]=React.useState(false);
  const RefChat=React.useRef();
  const [changeUser,setchangeUser]=React.useState(true)
   


    // react와 연결한다.
    const connect =async()=>{
      console.log({tradeId:'31'})
      let data2={tradeId:'31'};
let data=JSON.stringify({tradeId:'31'});

const auth={
  authorization:sessionStorage.getItem("access_token"),
  refresh_token:sessionStorage.getItem("refresh_token")
 }
 console.log(`Bearer ${auth.authorization}`)
console.log(auth)
      const apiImg = axios.create({
        baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/",   
        headers: {
          Authorization: `Bearer ${auth.authorization}`,
          refresh_token: `Bearer ${auth.refresh_token}`,
          "Content-Type": "application/json"
        }
      });
  
      const CreateBoardAXImg = await apiImg 
        .post("/chat", data)
        .then(function (response) {
          console.log(response, "에러안남!!!!!");
          setisMakeChatId(true)
        })
        .catch(function (error) {
          console.log("에러났음.", error);
        });



      } 
    
    //react와 연결에 성공하여 실해된다.
    const onConnected = () => {
        var chatMessage={
          chatRoomId:'1',
          message:"갑니까?",
        }
        let authorization=sessionStorage.getItem("access_token")
        // setUserData({...userData,"connected": true}); //연결상태를 true로 바꾼다.
            stompClient.subscribe('/queue/1',onMessageReceived); //지워도됨
            stompClient.send('/sendChat',{ Authorization: authorization},JSON.stringify(chatMessage))
      

      
    } 
    //리액트에 sendername과 status를 보내준다.

  const soketConnect=()=>{
           let Sock = new SockJS("http://54.180.105.24:8080/tomatoChat/")
          stompClient = over(Sock); //스톰프에담는다.
          let authorization=sessionStorage.getItem("access_token")
          console.log(`Bearer ${authorization}`)
          stompClient.connect({ Authorization: `Bearer ${authorization}`},onConnected);//연결한다 성공하면 onconneted를 실행한다.
          // stompClient.disconnect()
  }
  const soketDisconnect=()=>{
  
   
  }
  const onMessageReceived=(payload)=>{
    console.log("여기안오는걱?")
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);
  }
    return (
    <div>
     <button onClick={()=>{setchangeUser(changeUser*false)}}></button>
     <button onClick={connect}>연결</button>
     <button onClick={soketConnect}>소켓연결</button>
     <button onClick={soketDisconnect}>소켓연결끊어~</button>
    </div>
    )
}

export default ChatRoom;