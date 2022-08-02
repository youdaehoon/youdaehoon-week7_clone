import React from 'react'
import styled from 'styled-components';
import axios from "axios";
import { Button } from '@material-ui/core';
import { 
  useNavigate,
  // useParams
 } from 'react-router-dom'
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth ={
    Authorization:sessionStorage.getItem("accessToken"),
    refresh_token:sessionStorage.getItem("refreshToken")
    }

  // React.useEffect(() => {
  //   axios.get("ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/",
  //   { headers: {
  //     Authorization: `Bearer ${auth.authorization}`,
  //     refresh_token: `Bearer ${auth.refresh_token}`,
  //     "Content-Type": "multipart/form-data"
  //   }})
  //   .then(response => {
  //       const { accessToken } = response.data;
  //       console.log(response.data)
  //       		    
  //     }).catch(error => {
  //       console.log(error);
  //       window.alert("정보 불러오기 실패!");
  //     });
  // })
  const onClickSignUp = () => {
    sessionStorage.getItem("accessToken")
    navigate('/signup')
    }

  const onClickLogin = () => {
    sessionStorage.getItem("accessToken")
    navigate("/login");
  }

  const onClickLogOut = () => {
    sessionStorage.clear("accessToken")
    window.alert("로그아웃!")
    navigate("/");
  }

  const isLogin = () => {
    sessionStorage.getItem("accessToken")
    console.log("로그인 햇어?", isLogin)
  }

  return (
    <div className="App">
      <Nav>
        <Logo onClick={() => {
          navigate("/")
        }} style={{ color: 'firebrick', fontSize: '24px', cursor: "pointer" }}>FleaMarket</Logo>

        <Text>토마</Text> 
        {/* {nickname.params} */}

        {/* 로그인 전 상태 */}
        
          { isLogin ? (
            <BtngruopBf>
          <Button onClick={onClickLogin} style={{ color: 'gray', margin: "0px 8px 0px 0px" }} variant="outlined" color="inherit">
            Login</Button>
          <Button onClick={onClickSignUp} style={{ color: 'gray' }} variant="outlined" color="inherit">
            회원가입</Button> 
            </BtngruopBf>) : (
            <BtngruopBf>
          <Button onClick={() => {
            navigate('/Makepost/0')
          }}
          style={{ color: 'gray', margin: "0px 8px 0px 0px" }} variant="outlined" color="inherit">
            작성하기 / Logout</Button>
          <Button onClick={onClickLogOut} style={{ color: 'gray' }} variant="outlined" color="inherit">
            LogOut</Button>
            </BtngruopBf>)}
        
      </Nav>
    </div>
  );
};



const Nav = styled.div`
        background: white;
        width: 100%;
        display: Flex;
        color: black;
        font-size: 20px;
        font-weight: bold;
        justify-content: left;
        // padding-top: 40px;

`;

const Logo = styled.div`
        margin-left : 10px;
        width: 130px;
        padding: 20px;
        // background-color: red;
`

const Text = styled.div`
        display: inline-block;
        position: absolute;
        top: 25px;
        margin-right : 40px;
        text-align: right;
        right: 200px;
        width: 300px;
        color: gray;
        // background-color: orange;
        font-size: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &::after{
          content: "님, 환영합니다! :)";
          font-size: 16px;
          margin-left: 5px;
        }
`;

const BtngruopBf = styled.div`
        display: inline-block;
        position: absolute;
        margin-right : 10px;
        top: 20px;
        right: 16px;
        width: 200px;
        color: gray;
        // background-color: green;
`;

const BtngruopAf = styled.div`
        display: inline-block;
        position: absolute;
        margin-right: 10px;
        // margin-top: 40px;
        top: 20px;
        right: 16px;
        width: 200px;
        color: gray;
        // background-color: green;
`;

export default Header