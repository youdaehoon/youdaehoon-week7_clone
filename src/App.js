import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./page/Chat";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Main from "./page/Main";
import MakePost from "./page/MakePost";
import Mypage from "./page/Mypage";
import Signup from "./page/Signup";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
