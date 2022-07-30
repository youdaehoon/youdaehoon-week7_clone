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

    // const apiImg = axios.create({              // 전역으로 axios 객체 만듦. instance = apiImgS
    //   baseURL: "http://13.125.106.21:8080",   // URL 변경해야함!
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // });
    // const CreateBoardAXImg = await apiImg   // request 부분!!
    //   .post("/user/login", data11)   // method 그대로, /params처럼 보낼 거 "" 안에 적음, 그다음꺼는 보낼 데이터
    //   .then(function (response) {           // response 부분!!!
    //     console.log(response, "에러안남!!!!!");
    //     // console.log(response.data.userInfo)      // tokenBox의 토큰 저장하는 것 리액트끼리 상의해야함! 로그인 성공 시 respond로 받는 토큰을 저장해야 함. sessionStorage.setItem 이용!
    //     sessionStorage.setItem("access_token", response.tokenBox.access_token)    // setItem: 저장하는 용도 (key, value값) -> getItem으로 꺼내올 수 있다.
    //     sessionStorage.setItem("refresh_token", response.tokenBox.refresh_token)
    //   })
    //   .catch(function (error) {
    //     console.log("에러났음.", error);
    //   });
  };

  // 로그인 누르면 메인페이지로 이동

  return (
    <>
      <div>로고</div>
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
