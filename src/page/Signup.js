import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Signup = () => {
  const navigate = useNavigate();

  const refUsername = React.useRef(null);
  const refPassword = React.useRef(null);
  const refPasswordCheck = React.useRef(null);
  const refNickname = React.useRef(null);
  const refAddress = React.useRef(null);

  const [userImg, setUserImg] = React.useState();

  const PreviewFrofileImg = (e) => {
    console.log(e.target.files[0]);
    setUserImg(e.target.files[0]);
  };

  const selectList = ["시/도 선택","서울특별시","인천광역시","대전광역시","광주광역시","대구광역시","울산광역시","부산광역시","경기도","강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주도"];
  const [Selected, setSelected] = React.useState("시/도 선택");

  const handleSelect = (e) => {
    setSelected(e.target.value);
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

  const handleSignUpButton = async () => {
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
      method: "POST",
      url: "/user/signup",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log("회원가입 완료", response.data);
      })
      .catch((error) => {
        console.log("에러 발생", error);
      });

    navigate("/login");
  };

  // 중복확인 기능. 비밀번호 영대소문자 8자리 이상. 주소는 option의 select 이용해서 입력하게끔.
  // 주소 {} 객체로 보내기. circuit:~도, si:~시, gu:~구, dong:~동/읍/면. null로 보내면 나머지로 조합.

  return (
    <>
      <Area>
        <Container>
          <Box>
            <input
              ref={refUsername}
              // onChange={(e) => {
              //   handleSignUpValue('useremail');
              // }}
              type="text"
              placeholder="이메일"
              style={{
                width: "200px",
                height: "30px",
                margin: "auto 10px",
                fontSize: "14px",
                border: "1px solid #abb8c3",
                borderRadius: "3px",
              }}
            />
            {/* <button onClick={idCheck}>중복확인</button> */}
            <Button variant="contained" color="primary">
              중복확인
            </Button>
          </Box>
          <input
            ref={refPassword}
            // onChange={(e) => {
            //   handleSignUpValue('password');
            // }}
            type="password"
            placeholder="비밀번호"
            style={{
              width: "250px",
              height: "30px",
              margin: "10px 30px",
              fontSize: "14px",
              border: "1px solid #abb8c3",
              borderRadius: "3px",
            }}
          />
          <br />
          <input
            ref={refPasswordCheck}
            // onChange={(e) => {
            //   handleSignUpValue('passwordCheck');
            // }}
            type="password"
            placeholder="비밀번호 재입력"
            style={{
              width: "250px",
              height: "30px",
              margin: "0px 30px",
              fontSize: "14px",
              border: "1px solid #abb8c3",
              borderRadius: "3px",
            }}
          />
          <br />
          <Box>
            <input
              ref={refNickname}
              // onChange={(e) => {
              //   handleSignUpValue('nickname');
              // }}
              type="text"
              placeholder="닉네임"
              style={{
                width: "200px",
                height: "30px",
                margin: "auto 10px",
                fontSize: "14px",
                border: "1px solid #abb8c3",
                borderRadius: "3px",
              }}
            />
            {/* <button onClick={nicknameCheck}>중복확인</button> */}
            <Button variant="contained" color="primary">
              중복확인
            </Button>
          </Box>
          <Box>
            <p style={{ fontSize: "14px", marginLeft: "10px", padding: "10px", textAlign: "center" }}>프로필 사진</p>
            <input
              // onChange={(e) => {
              //   handleSignUpValue('profileImage');
              // }}

              onChange={PreviewFrofileImg}
              type="file"
              accept="image/*"
              name="imageUpload"
              style={{ width: "10vw", height: "20px", margin: "15px", padding: "10px" }}
            />
          </Box>
          <Box>
            <select
              className="sido"
              id="sido"
              onChange={handleSelect}
              value={Selected}
              style={{ margin: "10px", width: "90px", height: "30px", fontSize: "14px", border: "1px solid #abb8c3", borderRadius: "3px" }}
            >
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <select name="gugun" id="gugun"
            style={{ margin: "10px", width: "90px", height: "30px", fontSize: "14px", border: "1px solid #abb8c3", borderRadius: "3px" }}
            ></select>
            <input
              ref={refAddress}
              // onChange={(e) => {
              //   handleSignUpValue(e.target.value);
              // }}
              placeholder="동/읍/면 입력"
              style={{ margin: "10px", width: "90px", height: "30px", fontSize: "14px", border: "1px solid #abb8c3", borderRadius: "3px" }}
            />
          </Box>
          <Button
            // onClick={(e) => {
            //       e.preventDefault();
            //       {
            //         this.handleSignUpButton();
            //       }
            //     }}
            onClick={handleSignUpButton}
            style={{
              fontSize: "15px",
              padding: "8px",
              backgroundColor: "#009688",
              color: "white",
              marginTop: "20px",
            }}
          >
            회원가입
          </Button>
        </Container>
      </Area>
    </>
  );
};

const Area = styled.div`
  width: 500px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 6px;
  width: 450px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  margin: 20px;
`;

export default Signup;
