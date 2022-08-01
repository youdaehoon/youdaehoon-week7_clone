import React,{useState,useEffect} from "react";



const Chat=()=>{

  return(
    <div>
    chat
    </div>
  )
}

export default Chat




// var stompClient =null;

// const Chat = () => {
//     const [privateChats, setPrivateChats] = useState(new Map());
//       //map=> key valu값 가짐 ,삽입순서를 기억함, set,get,delete method를 가짐
//       // privateChats   
//     const [publicChats, setPublicChats] = useState([]); 
//     const [tab,setTab] =useState("CHATROOM");
//     const [userData, setUserData] = useState({
//         username: '',
//         receivername: '',
//         connected: false,
//         message: ''
//       });
//       //채팅하는 사람의 data

//     useEffect(() => {
//       console.log(userData);
//     }, [userData]);
//     //userdata가 변하면 렌더링함

//     const connect =()=>{
//         let Sock = new SockJS('http://localhost:8080/ws');
//         //baseurl+url
//         stompClient = over(Sock);
//         stompClient.connect({},onConnected, onError);
//     }

//     const onConnected = () => {
//         setUserData({...userData,"connected": true}); //연결시켜서 채팅page가 보인다.
//         stompClient.subscribe('/chatroom/public', onMessageReceived); 
//         stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
//         userJoin();
//     }

//     const userJoin=()=>{
//           var chatMessage = {
//             senderName: userData.username,
//             status:"JOIN"
//           };
//           stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
//     }

//     const onMessageReceived = (payload)=>{
//       // 서버에서 payload를 jason형식으로 보내줌=>문자열의 형식 header,body등등을 이용해서
//         var payloadData = JSON.parse(payload.body);
//         // json.parse: 문자열로 도착하는 data '{body: "메롱"}' 을 문자열을 제거하고 object로 사용하게 해줌 
//         //body에 sendername이 있나봄..
//         switch(payloadData.status){
//             case "JOIN":
//                 if(!privateChats.get(payloadData.senderName)
//                 //이전에 보낸 메시지가 없으면
//                 ){
//                     privateChats.set(payloadData.senderName,[]);
//                     //새로 메시지를 보낼 공간을 만들고
//                     setPrivateChats(new Map(privateChats));
//                 }
//                 break;
//             case "MESSAGE":
//                 publicChats.push(payloadData);
//                 setPublicChats([...publicChats]);
//                 break;
//         }
//     }
    
//     const onPrivateMessage = (payload)=>{
//         console.log(payload);
//         var payloadData = JSON.parse(payload.body);
//         if(privateChats.get(payloadData.senderName)){
//             privateChats.get(payloadData.senderName).push(payloadData);
//             setPrivateChats(new Map(privateChats));
//         }else{
//             let list =[];
//             list.push(payloadData);
//             privateChats.set(payloadData.senderName,list);
//             setPrivateChats(new Map(privateChats));
//         }
//     }

//     const onError = (err) => {
//         console.log(err);
        
//     }

//     const handleMessage =(event)=>{
//         const {value}=event.target;
//         setUserData({...userData,"message": value});
//     }
//     const sendValue=()=>{
//             if (stompClient) {
//               var chatMessage = {
//                 senderName: userData.username,
//                 message: userData.message,
//                 status:"MESSAGE"
//               };
//               console.log(chatMessage);
//               stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
//               setUserData({...userData,"message": ""});
//             }
//     }

//     const sendPrivateValue=()=>{
//         if (stompClient) {
//           var chatMessage = {
//             senderName: userData.username,
//             receiverName:tab,
//             message: userData.message,
//             status:"MESSAGE"
//           };
          
//           if(userData.username !== tab){
//             privateChats.get(tab).push(chatMessage);
//             setPrivateChats(new Map(privateChats));
//           }
//           stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
//           setUserData({...userData,"message": ""});
//         }
//     }

//     const handleUsername=(event)=>{
//         const {value}=event.target;
//         setUserData({...userData,"username": value});
//     }
//     //username을 바꿈

//     const registerUser=()=>{
//         connect();
//     }
//     //
//     return (
//     <div className="container">
//         {userData.connected?
//         <div className="chat-box">
//             <div className="member-list">
//                 <ul>
//                     <li onClick={()=>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}>Chatroom</li>
//                     {[...privateChats.keys()].map((name,index)=>(
//                         <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{name}</li>
//                     ))}
//                 </ul>
//             </div>
//             {tab==="CHATROOM" && <div className="chat-content">
//                 <ul className="chat-messages">
//                     {publicChats.map((chat,index)=>(
//                         <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
//                             {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//                             <div className="message-data">{chat.message}</div>
//                             {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//                         </li>
//                     ))}
//                 </ul>

//                 <div className="send-message">
//                     <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
//                     <button type="button" className="send-button" onClick={sendValue}>send</button>
//                 </div>
//             </div>}
//             {tab!=="CHATROOM" && <div className="chat-content">
//                 <ul className="chat-messages">
//                     {[...privateChats.get(tab)].map((chat,index)=>(
//                         <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
//                             {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
//                             <div className="message-data">{chat.message}</div>
//                             {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
//                         </li>
//                     ))}
//                 </ul>

//                 <div className="send-message">
//                     <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} /> 
//                     <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
//                 </div>
//             </div>}
//         </div>
//         :
//         <div className="register">
//             <input
//                 id="user-name"
//                 placeholder="Enter your name"
//                 name="userName"
//                 value={userData.username}
//                 onChange={handleUsername}
//                 margin="normal"
//               />
//               <button type="button" onClick={registerUser}>
//                     connect
//               </button> 
//         </div>}
//     </div>
//     )
// }

// export default Chat;
