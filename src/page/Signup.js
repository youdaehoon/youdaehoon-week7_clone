import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const refUsername = React.useRef(null);
  const refPassword = React.useRef(null);
  const refPasswordCheck = React.useRef(null);
  const refNickname = React.useRef(null);
  // const refProfileImage = React.useRef(null);
  const refAddress = React.useRef(null);

  const [userImg, setUserImg] = React.useState();

  const PreviewFrofileImg = (e) => {
    console.log(e.target.files[0]);
    setUserImg(e.target.files[0]);
    };

  // const inputRef = React.useRef([]);

  // const [inputs, handleSignUpValue] = React.useState({
  //   refUsername: "",
  //   refPassword: "",
  //   refPasswordCheck: "",
  //   refNickname: "",
  //   refProfileImage: "",
  //   refAddress: ""
  //   });

  //   const { refUsername, refPassword, refPasswordCheck, refNickname, refProfileImage, refAddress } = inputs; // 구조분해할당

    // handleSignUpValue = (key) => (e) => {
    //   //여기서 유효성 검사를 한다.
    //   // 1. key가 email인 경우, => 이메일 형식을 맞춰야 하고, 중복된 이메일이 존재하면 안된다. (이미 회원가입 되어있다는 의미이므로)
    //   // 1-1. 이메일 형식이 맞지 않으면 => 올바른 이메일 형식이 아닙니다. 출력
    //   // 1-2. 이메일 형식이 맞으면
    //   //      1-2-1. 중복 검사 => 이미 있는 이메일이면 이미 존재하는 email입니다. 출력하고 올바른 이메일 입력할 때까지 break
    //   //      1-2-2.         => 없는 이메일이면 통과!
    //   if (key === 'useremail') {
    //     var emailreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    //     var username  = e.target.value;
    //     this.setState({ [key]: username });
    //     if (username.length > 0 && false === emailreg.test(username)) { //test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환한다.
    //       alert('올바른 이메일 형식이 아닙니다.');
    //     } else { //모든 이메일 형식을 잘 갖춰서 작성해 주었을 때, check UserId API를 통해 중복 검사를 한다.
    //       // axios({
    //       //   method: 'GET',
    //       //   url: 'http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/user/idCheck/{username}'
    //       // })
    //       //   .then((res) => {
    //       //     if (res.data !== null) {
    //       //       alert('이미 존재하는 email입니다.');
    //       //     } else {
    //       //       this.setState({ [key]: useremail });
    //       //     }
    //       //   })
    //       //   .catch((err) => {
    //       //     console.error(err);
    //       //   });
    //     }
    //   }
    //    //2. key가 password인 경우, => 8자 이상이어야 하고, 숫자/소문자를 모두 포함해야 한다.
    //   if (key === 'password') {
    //     var reg = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/;
    //     var password = e.target.value;
    //     if (password.length > 0 && false === reg.test(password)) {
    //       alert('영문, 숫자 조합으로 8자리 이상 입력해주세요.');
    //     } else {
    //       this.setState({ [key]: e.target.value });
    //     }
    //   }
    //   //3. key가 passwordCheck인 경우 => 앞선 this.state.password와 같아야한다.
    //   if (key === 'passwordCheck') {
    //     var passwordCheck = e.target.value;
    //     if (passwordCheck.length > 0 && this.state.password !== passwordCheck) {
    //       alert('비밀번호가 일치하지 않습니다.');
    //     } else {
    //       this.setState({ [key]: e.target.value });
    //     }
    //   }

    //   if (key === 'nickname') {
    //     this.setState({ [key]: e.target.value });
    //   }
    //   if (key === 'profileImage') {
    //     this.setState({ [key]: e.target.value });
    //   }
    //   if (key === 'address') {
    //     this.setState({ [key]: e.target.value });
    //   }
    // };

  const handleSignUpButton  = async () => {
    const data22 = {
      username: refUsername.current.value,
      password: refPassword.current.value,
      passwordCheck: refPasswordCheck.current.value,
      nickname: refNickname.current.value,
      profileImage: userImg,
      address: refAddress.current.value,
    };
    console.log("회원가입 정보", data22);
    console.log(userImg);

    const formData = new FormData();
    formData.append("username", data22.username);
    formData.append("password", data22.password);
    formData.append("passwordCheck", data22.passwordCheck);
    formData.append("nickname", data22.nickname);
    formData.append("profileImage", data22.profileImage);        
    formData.append("address", data22.address);

    await axios({
      baseURL: "http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/",
      method: 'POST',
      url: '/user/signup',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log("회원가입 완료", response.data);
      })
      .catch(error => {
        console.log("에러 발생", error);
      });

      // navigate("/login");
  };

  // 회원가입 누르면 로그인으로 navigate? 중복확인 기능. 비밀번호 영대소문자 8자리 이상. 주소는 option의 select 이용해서 입력하게끔.
  // 주소 {} 객체로 보내기. circuit:~도, si:~시, gu:~구, dong:~동/읍/면. null로 보내면 나머지로 조합.

  return (
    <>
      <div style={{ display: "flex" }}>
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
            // onChange={(e) => {
            //   handleSignUpValue('useremail');
            // }}
            type="text"
            placeholder="이메일"
            style={{ height: "20px", margin: "auto 10px" }}
          ></input>
          {/* <button onClick={idCheck}>중복확인</button> */}
          <button >중복확인</button>
        </div>
        <input
          ref={refPassword}
          // onChange={(e) => {
          //   handleSignUpValue('password');
          // }}
          type="password"
          placeholder="비밀번호"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <input
          ref={refPasswordCheck}
          // onChange={(e) => {
          //   handleSignUpValue('passwordCheck');
          // }}
          type="password"
          placeholder="비밀번호 재입력"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <div style={{ display: "flex", margin: "20px" }}>
          <input
            ref={refNickname}
            // onChange={(e) => {
            //   handleSignUpValue('nickname');
            // }}
            type="text"
            placeholder="닉네임"
            style={{ height: "20px", margin: "auto 10px" }}
          ></input>
          {/* <button onClick={nicknameCheck}>중복확인</button> */}
          <button >중복확인</button>
        </div>
        프로필 사진 업로드{" "}
        <input
          // ref={refProfileImage}
          // onChange={(e) => {
          //   handleSignUpValue('profileImage');
          // }}

          onChange={PreviewFrofileImg}
          
          type="file"
          accept="image/*"
          name="imageUpload"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <input
          ref={refAddress}
          // onChange={(e) => {
          //   handleSignUpValue(e.target.value);
          // }}
          placeholder="주소 입력"
          style={{ height: "20px", margin: "10px 30px" }}
        ></input>{" "}
        <br />
        <select name="sido1" id="sido1"></select>
        <select name="gugun1" id="gugun1"></select>
        <br />
        <button 
        // onClick={(e) => {
        //       e.preventDefault();
        //       {
        //         this.handleSignUpButton();
        //       }
        //     }}
        onClick={handleSignUpButton}
        >회원가입</button>
      </div>
    </>
  );
};

export default Signup;
