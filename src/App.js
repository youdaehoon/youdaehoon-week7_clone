import React from "react";
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./page/Chat";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Main from "./page/Main";
import MakePost from "./page/MakePost";
import Signup from "./page/Signup";


function App() {
  return (
    <div>
      <Header />
      {/* <H2> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/makepost/:postId" element={<MakePost />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      {/* </H2> */}
    </div>
  );
}

const H2 = styled.div`
  max-width: 50%;
  position: relative;
  height: 100%;
  margin: 0 auto;

  // display:flex;
  // flex-direction: row;
  // flex-basis: 33.3%;
  // flex-wrap : wrap;

`;

export default App;
