import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const refUsername = React.useRef(null);
  const refPassword = React.useRef(null);
  const refPasswordCheck = React.useRef(null);
  const refNickname = React.useRef(null);
  const refAddress = React.useRef(null);

  const onLoadImg = (e) => {
    e.preventDefault();

    if (e.target.files) {
      const profileImage = e.target.files[0];
      console.log(profileImage);
    }
  };

  const sign = async () => {
    const data22 = {
      username: refUsername.current.value,
      password: refPassword.current.value,
      passwordCheck: refPasswordCheck.current.value,
      nickname: refNickname.current.value,
      address: refAddress.current.value
    };
    console.log("회원가입 정보", data22);

    const formData = new FormData();    
    // formData.append("username", username);
    // formData.append("password", password);
    // formData.append("passwordCheck", passwordCheck);
    // formData.append("nickname", nickname);    
    // formData.append("profileImage", profileImage);
    // formData.append("address", address);

    await axios({
      // baseURL: "http://13.125.106.21:8080",   // URL 변경해야함!
      url: '/user/signup',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log("정상 작동", response.data);
      })
      .catch(error => {
        console.log("에러 발생", error);
      });
  };

  // 회원가입 누르면 로그인으로 navigate? 중복확인 기능. 비밀번호 영대소문자 8자리 이상. 주소는 option의 select 이용해서 입력하게끔.
  // 주소 {} 객체로 보내기. circuit:~~도, si:~~시, gu:~~구, dong:~~동/읍/면. null로 보내면 나머지로 조합.

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>로고</div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </div>
      <div>배너</div>
      <div>
        <div style={{ display: "flex", margin: "20px" }}>
          <input
            ref={refUsername}
            type="text"
            placeholder="이메일"
            style={{ height: "20px", margin: "auto 10px" }}
          ></input>
          <button>중복확인</button>
        </div>
        <input
          ref={refPassword}
          type="password"
          placeholder="비밀번호"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <input
          ref={refPasswordCheck}
          type="password"
          placeholder="비밀번호 재입력"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <div style={{ display: "flex", margin: "20px" }}>
          <input
            ref={refNickname}
            type="text"
            placeholder="닉네임"
            style={{ height: "20px", margin: "auto 10px" }}
          ></input>
          <button>중복확인</button>
        </div>
        프로필 사진 업로드{" "}
        <input
          onChange={onLoadImg}
          type="file"
          accept="image/*"
          name="imageUpload"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <input
          ref={refAddress}
          placeholder="주소 입력"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <button onClick={sign}>회원가입</button>
      </div>
    </>
  );
};

export default Signup;
