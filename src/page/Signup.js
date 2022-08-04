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

  const [userImg, setUserImg] = React.useState();

  const PreviewFrofileImg = (e) => {
    setUserImg(e.target.files[0]);
  };

  const siList = ["시/도 선택","서울특별시","인천광역시","대전광역시","광주광역시","대구광역시","울산광역시","부산광역시","경기도","강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주도"];

  const [siSelected, setSi] = React.useState("시/도 선택");
  const siHandle = (e) => {
    setSi(e.target.value);
  };

  const guList = {
    '서울특별시' : ["군/구 선택", "강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"],
    '인천광역시' : ["군/구 선택", "계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"],
    '대전광역시' : ["군/구 선택","대덕구","동구","서구","유성구","중구"],
    '광주광역시' : ["군/구 선택","광산구","남구","동구","북구","서구"],
    '대구광역시' : ["군/구 선택","남구","달서구","동구","북구","서구","수성구","중구","달성군"],
    '울산광역시' : ["군/구 선택","남구","동구","북구","중구","울주군"],
    '부산광역시' : ["군/구 선택","강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"],
    '경기도' : ["군/구 선택","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"],
    '강원도' : ["군/구 선택","강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"],
    '충청북도' : ["군/구 선택","제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"],
    '충청남도' : ["군/구 선택","계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"],
    '전라북도' : ["군/구 선택","군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"],
    '전라남도' : ["군/구 선택","광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"],
    '경상북도' : ["군/구 선택","경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"],
    '경상남도' : ["군/구 선택","거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"],
    '제주도' : ["군/구 선택","서귀포시","제주시","남제주군","북제주군"]
  }

  const [guSelected, setGu] = React.useState("");
  const guHandle = (e) => {
    setGu(e.target.value);
  };

  // //이메일 유효성 검사 함수
  // const isEmail = function(asValue) {
  //   var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  //   return regExp.test(asValue) ? true : false; // 형식에 맞는 경우 true 리턴
  // }

  // //비밀번호 유효성 검사 함수
  // const isPassword = function (asValue) {
  //   var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/; //  8자 이상 영문, 숫자 조합
  //   return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  // }


  const idCheck = async () => {
    try {
      const res = await axios.get(`http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/user/idCheck/${refUsername.current.value}`)      
      window.alert("사용가능한 아이디입니다.");
    }
    catch (e) {
      window.alert("중복된 아이디가 존재합니다. 중복확인 버튼!!!!");
    }
  };

  const nicknameCheck = async () => {
    try {
      const res = await axios.get(`http://ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/user/idCheck/${refNickname.current.value}`)      
      console.log(res);
      window.alert("사용가능한 닉네임입니다.");
    }
    catch (e) {
      window.alert("중복된 닉네임이 존재합니다. 중복확인 버튼!!!!");
    }
  };

  const handleSignUpButton = async () => {
    console.log(siSelected, guSelected, userImg)

    if (refNickname.current.value === "" || userImg === "" || siSelected === "" || guSelected === "") {
      window.alert("필수 입력값을 입력해주세요.")
      return ;
    }    

    const data22 = {
      username: refUsername.current.value,
      password: refPassword.current.value,
      passwordCheck: refPasswordCheck.current.value,
      nickname: refNickname.current.value,
      profileImage: userImg,
      address: {
        si: siSelected,
        gu: guSelected
      }
    };
    console.log("회원가입 정보", data22);
    console.log(userImg);
    
    // if(data22.username.indexOf('@')==-1){ 
    //   alert("이메일을 올바르게 입력해주세요.")
    // };

    // if(data22.password !== data22.passwordCheck){
    //   return alert('비밀번호가 일치하지 않습니다.')
    // };

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
        alert("회원가입 되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        console.log("에러 발생", error.response.data.message);
        window.alert(error.response.data.message);
      });    
  };

  return (
    <>
      <Area>
        <Container>
          <Box>
            <input
              ref={refUsername}
              type="text"
              placeholder="이메일"
              style={{
                width: "200px",
                height: "35px",
                margin: "auto 10px",
                fontSize: "14px",
                border: "1px solid #abb8c3",
                borderRadius: "3px",
              }}
            />
            <Button variant="contained" color="primary" onClick={() => {idCheck()}} >      
                  {/* onChange쓰기, ref 붙이기 */}
              중복확인
            </Button>
          </Box>
          <input
            ref={refPassword}
            type="password"
            placeholder="비밀번호"
            style={{
              width: "250px",
              height: "35px",
              margin: "10px 30px",
              fontSize: "14px",
              border: "1px solid #abb8c3",
              borderRadius: "3px",
            }}
          />
          <br />
          <input
            ref={refPasswordCheck}
            type="password"
            placeholder="비밀번호 재입력"
            style={{
              width: "250px",
              height: "35px",
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
              type="text"
              placeholder="닉네임"
              style={{
                width: "200px",
                height: "35px",
                margin: "auto 10px",
                fontSize: "14px",
                border: "1px solid #abb8c3",
                borderRadius: "3px",
              }}
            />
            <Button variant="contained" color="primary" onClick={() => {nicknameCheck()}}>            
              중복확인
            </Button>
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                marginLeft: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              프로필 사진
            </p>
            <input
              onChange={PreviewFrofileImg}
              type="file"
              accept="image/*"
              name="imageUpload"
              style={{
                width: "23vw",
                height: "20px",
                margin: "15px",
                padding: "10px",
              }}
            />
          </Box>
          <Box>
            <p style={{
                fontSize: "14px",
                marginLeft: "10px",
                textAlign: "center",
              }}>주소 입력</p>
            <div style={{ margin: "auto 0" }}>
            <select onChange={siHandle} value={siSelected} style={{ height: "35px", marginLeft: "15px", border: "1px solid #abb8c3", borderRadius: "3px" }}>
              {siList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
      
            {siSelected !== "시/도 선택" && <select onChange={guHandle} value={guSelected} style={{ height: "35px", marginLeft: "15px", border: "1px solid #abb8c3", borderRadius: "3px" }}>
              {guList[siSelected].map((i) => (
                <option value={i} key={i}>
                 {i}
                </option>
              ))}
            </select>}
            </div>
          </Box>
          <Button
            onClick={handleSignUpButton}
            style={{
              fontSize: "15px",
              padding: "8px",
              backgroundColor: "#009688",
              color: "white",
              marginTop: "15px",
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
  margin: 15px;
`;

export default Signup;
