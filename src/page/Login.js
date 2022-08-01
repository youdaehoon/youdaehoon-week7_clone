import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const loginOk = async () => {
    const data11 = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    console.log("로그인 정보", data11);

    const apiLogin = axios.create({              // 전역으로 axios 객체 만들기. instance = apiImgS
      baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/",   
      headers: {
        "Content-Type": "application/json"
      }
    });
    const CreateBoardAXImg = await apiLogin   // request 부분!!
      .post("/user/login", data11)   // method, /params처럼 보낼 거 "" 안에 url 적음, 보낼 데이터
      .then(function (response) {           // response 부분!!!
        console.log("로그인 완료", response);
        // console.log(response.data.userInfo)      // tokenBox의 토큰 저장하는 것 리액트끼리 상의해야함! 로그인 성공 시 respond로 받는 토큰을 저장해야 함. sessionStorage.setItem 이용!
        sessionStorage.setItem("access_token", response.tokenBox.access_token)    // setItem: 저장하는 용도 (key, value값) -> getItem으로 꺼내올 수 있다.
        sessionStorage.setItem("refresh_token", response.tokenBox.refresh_token)
      })
      .catch(function (error) {
        console.log("에러 발생", error);
      });
  };

  // 로그인 누르면 메인페이지로 이동

  return (
    <>
      <div>배너</div>
      <div>
        <div style={{ display: "flex" }}>
          <p>ID</p>
          <input
            ref={usernameRef}
            type="text"
            style={{ height: "20px", margin: "auto 10px" }}
          ></input>
        </div>
        <div style={{ display: "flex" }}>
          <p>PW</p>
          <input
            ref={passwordRef}
            type="password"
            style={{ height: "20px", margin: "auto 10px" }}
          ></input>
        </div>
        <div>
          <button onClick={loginOk} style={{ marginRight: "10px" }}>
            로그인
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
