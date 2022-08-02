import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// {
//   postId: “post 아이디”
//   seller: {
//       nickname: “닉네임”,
//       profile: “프로필 사진 주소”,
//       address: “주소”
//   } 
//   title: "제목입니다",
//   category: “카테고리”,
//   price: 가격,
//   content: “본문”,
//   
//   createdAt: “시간”,
//   like: 좋아요 수,
//   view: 조회 수,
//   image: [
//       이미지 경로1,
//       이미지 경로2,
//       이미지 경로3,
//       ….
//   ]
// }

const Detail = (props) => {
  const [dataTest, setdataTest]=React.useState({
    postid:"1",
    seller:{
      nickname:"닉네임",
      profile:"https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170816693/84685879-%EB%82%A8%EC%9E%90-%EC%96%BC%EA%B5%B4-%EC%BA%90%EB%A6%AD%ED%84%B0-%EC%BA%90%EB%A6%AD%ED%84%B0-%ED%94%84%EB%A1%9C%ED%95%84-%EB%A7%8C%ED%99%94-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4%EC%85%98.jpg",
      address:"주소",
    },
    title:"제목입니다",
    category:"카테고리.",
    
    price:"가격",
    content:"제목이 들어갑니다.",
    status: "판매 상태",
    
    createdAt:"시간.",
    like:"좋아요",
    view:"조회",
    image:[
      "https://t1.daumcdn.net/cfile/blog/9912333A5B46EEA921",
    ],
  });


  let {postId}=useParams(); //이름을 맞춰주면 된다 
  const navigation=useNavigate();
  

 
  console.log(postId)// console 한번 확인해보세요!
  const ModdifyPost=()=>{
    navigation(`/makepost/${postId}`)
  }
  // React.useEffect( async() => {
    // const apiDetail = axios.create({
    // baseURL: "ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com",
    //     headers: {
    //       "Content-Type": `application/json`, 
    //     },
    //   });
  
  //     const CreateBoardAXImg = await apiDetail
  //       .get("/api/posts/1")
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
      // axios.delete("/ec2-54-180-105-24.ap-northeast-2.compute.amazonaws.com/post/{postId}",
      // {headers: {
      //   Authorization: `Bearer ${auth.authorization}`,
      //   refresh_token: `Bearer ${auth.refresh_token}`,
      //   "Content-Type": "multipart/form-data"
      // }})
      // .then(function (response) {
      //   // handle success
      //   console.log(response, "에러 놉!");
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error, "에러 남!");
      // });
      console.log("삭제됨!", ApiDetailDel)
    }
    
  
  return (
    <div>
       image: <img src={dataTest.image[0]} style={{width:"50px"}}/>
      <p />
      <div>
        프로필사진 :<img src={dataTest.seller.profile }style={{width:"50px"}} />
        <div>
          <div>nickname:{dataTest.seller.nickname}</div>
          <div>address:{dataTest.seller.address}</div>
        </div>
      </div>
      <div>
        <div>title:{dataTest.title}</div>
        <div>price:{dataTest.price}</div>
        <div>content:{dataTest.content}</div>
      </div>
 
     <div>

     <TradeState>
              <span>
                {dataTest.status === "1" ? (
                  <Booking>예약중</Booking>
                ) : dataTest.status === "2" ? (
                  <SoldOut>거래완료</SoldOut>
                ) : (
                  ""
                )}
              </span>
      </TradeState>
     </div>

      <div>like:{dataTest.view} view:{dataTest.like}</div>

      <button onClick={ApiDetailDel}>X</button>
      <button onClick={ModdifyPost}>수정하기</button>
    </div>
  );
};

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

