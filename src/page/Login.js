import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

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

    const apiLogin = axios.create({              // 전역으로 axios 객체 만들기 <- instance
      baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com",   
      headers: {
        "Content-Type": "application/json"
      }
    });
    const loginApi = await apiLogin   // request 부분!!
      .post("/login", data11)                 // method, /params처럼 보낼 거 "" 안에 url 적음, 보낼 데이터
      .then(function (response) {             // response 부분!!!
        console.log("로그인 완료", response);
        // console.log(response.data.userInfo)      // tokenBox의 토큰 저장하는 것 <- 로그인 성공 시 respond로 받는 토큰을 저장해야 함. sessionStorage.setItem 이용!
        sessionStorage.setItem("access_token", response.data.tokenBox.accessToken)    // setItem: (key, value값)을 sessionStorage에 저장한다! -> getItem으로 꺼내올 수 있다.
        sessionStorage.setItem("refresh_token", response.data.tokenBox.refreshToken)
      })
      .catch(function (error) {
        console.log("에러 발생", error);
      });

      navigate("/");
  };

  return (
    <>
    <Area>
      <Container>
        <Box>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>ID</p>
          <In
            ref={usernameRef}
            type="text"
          />
        </Box>
        <Box>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>PW</p>
          <In
            ref={passwordRef}
            type="password"
          />
        </Box>
        <Box>
          <Button onClick={loginOk} style={{ marginTop: "25px", marginRight: "15px", fontSize: "15px", padding: "8px", backgroundColor: "#009688", color: "white" }}>
            로그인
          </Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            style={{ marginTop: "25px", fontSize: "15px", padding: "8px", backgroundColor: "#009688", color: "white" }}
          >
            회원가입
          </Button>
        </Box>
      </Container>
    </Area>
    </>
  );
};

const Area = styled.div`
  width: 500px;
  height: 450px;  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 6px;
  width: 450px;
  height: 390px;    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

const Box = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const In = styled.input`
  border: 1px solid #abb8c3;
  border-radius: 6px;
  width: 280px;
  height: 35px;
  margin: auto 20px;
  font-size: 17px;
  &:focus {
    outline: 1.5px solid #004dcf;
  }
`;

export default Login;
