import React from "react";
import styled from "styled-components";
import { Button } from '@material-ui/core';
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { over } from "stompjs";
import SockJS from "sockjs-client";

var stompClient = null;

const Detail = (props) => {
  const [dataTest, setdataTest] = React.useState({
    postid: "1",
    seller: {
      nickname: "토마토마",
      profile: "https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170816693/84685879-%EB%82%A8%EC%9E%90-%EC%96%BC%EA%B5%B4-%EC%BA%90%EB%A6%AD%ED%84%B0-%EC%BA%90%EB%A6%AD%ED%84%B0-%ED%94%84%EB%A1%9C%ED%95%84-%EB%A7%8C%ED%99%94-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4%EC%85%98.jpg",
      address: "대구시 달서구 도원동",
    },
    title: "팝니다 팝니다 제목이 들어가용",
    category: "카테고리.",

    price: "10000",
    content: "팝니다 팝니다 내용이 들어가용",
    status: "판매상태",

    createdAt: "시간.",
    like: "좋아요 0",
    view: "조회 0",

    image: [
      "https://t1.daumcdn.net/cfile/blog/9912333A5B46EEA921",
    ],
  });


  let { postId } = useParams(); // 이름을 맞춰주면 된다 
  const navigation = useNavigate();

  console.log(postId) // console 한번 확인해보세요!
  const ModdifyPost = () => {
    navigation(`/makepost/${postId}`)
  }

  const auth = {
    authorization: sessionStorage.getItem("access_token"),
    refresh_token: sessionStorage.getItem("refresh_token")
  }


  // React.useEffect( async() => {
  //   const apiDetail = axios.create({
  //   baseURL: "ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com",
  //   headers: {
  //     "Content-Type": `application/json`, 
  //   },
  //     });

  //     const CreateBoardAXImg = await apiDetail
  //       .get("/api/{postId}")
  //       .then(function (response) {
  //         console.log(response, "에러안남!!!!!");
  //         console.log('보내주신data는',response.data)
  //         setdataTest(response.data)
  //       })
  //       .catch(function (error) {
  //         console.log("에러났음.", error)
  //       });
  // }, []);


  // 삭제
  const ApiDetailDel = () => {
    axios.delete("/ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/post/{postId}",
      {
        headers: {
          Authorization: `Bearer ${auth.authorization}`,
          refresh_token: `Bearer ${auth.refresh_token}`,
          "Content-Type": "multipart/form-data"
        }
      })
      .then(function (response) {
        // handle success
        console.log(response, "에러 놉!");
      })
      .catch(function (error) {
        // handle error
        console.log(error, "에러 남!");
      });
    console.log("삭제됨!", ApiDetailDel)
  }


  return (
      <Wrap>
        <div style={{display: "flex", justifyContent: "right", marginRight: "10px"}}>
          <Button onClick={ApiDetailDel} style={{ color: 'gray', margin: "0px 8px 0px 0px" }} variant="outlined" color="inherit">
            삭제</Button>
          <Button onClick={ModdifyPost} style={{ color: 'gray' }} variant="outlined" color="inherit">
            수정</Button>
        </div>

        <div style={{display: "flex", alignItems: "center", justifyContent: "center"
          }}>
        <img src={dataTest.image[0]}
          style={{
            width: "400px", height: "100%", marginBottom: "40px",  marginTop: "40px",
            display: "flex", alignItems: "center", justifyContent: "center"
          }} />
          </div>

        <PostDetail>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={dataTest.seller.profile}
              style={{ width: "50px", height: "50px", borderRadius: "25px", backgroundColor: "gray" }} />
          </div>

          <div>
            <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
              {dataTest.seller.nickname}</div>
            <Address>{dataTest.seller.address}</Address>
          </div>

        <hr />

        <div>
          {/* <TradeState>
              <span>
                {dataTest.seller.status === "1" ? (
                  <Booking>예약중</Booking>
                ) : dataTest.sellerstatus === "2" ? (
                  <SoldOut>거래완료</SoldOut>
                ) : (
                  ""
                )}
              </span>
      </TradeState> */}
        </div>


        <div>
          <Title>{dataTest.title}</Title>
          <WrapTitle>
          <Price>{dataTest.price}</Price>
          <div style={{marginLeft: "255px"}}>
          <Button
        // onClick={ApiDetailDel}
        style={{ color: 'gray'}} variant="outlined" color="inherit">
            거래 채팅하기</Button>
            </div>
          </WrapTitle>
          <Content>{dataTest.content}</Content>
        </div>
        <LikeView>{dataTest.view} ∙ {dataTest.like}</LikeView>
        </PostDetail>
      </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 50%;
  position: relative;
  height: 100%;
  margin: 0 auto;

  margin-top: 40px;
  padding: 20px 20px 20px 20px;
  border: solid 1px #dadada;
  border-radius: 8px;
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 100%;
  margin-top: 10px;
`;

// const Image = styled.img`
//   width: 400px
//   height: 100%;
//   marginBottom: 40px;

//   display: flex;
//   alignItems: center;
//   justifyContent: center;
// `;

const PostDetail = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const Address = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;

const Title = styled.div`
  position: relative;
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::after{
    content: "원";
    font-size: 16px;
    margin-left: 3px;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LikeView = styled.div`
  font-size: 14px;
  color: rgb(136, 136, 136);
  margin-bottom: 20px;
`;

const TradeState = styled.div`
  margin-top: 5px;
  margin-left:10px;
  display: flex;
  align-items: center;
`;

const SoldOut = styled.div`
  padding: 6px 5px;
  width: 65px;
  height:26px;
  border-radius: 5px;
  background-color: #565656;
  color: white;
  font-size: 12px;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Booking = styled(SoldOut)`
  width: 55px;
  height: 26px;
  background-color: #34bf9e;
`;

export default Detail;